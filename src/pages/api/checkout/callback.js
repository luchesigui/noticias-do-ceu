import crypto from 'crypto';
import { users as usersApi, orders as ordersApi } from '../../../lib/data.js';
import { MPService } from '../../../services/mercado-pago-service.js';

export const prerender = false;

export async function GET({ locals, url, redirect }) {
  const authUser = locals.user;

  if (!authUser) {
    return redirect('/login');
  }

  // Fetch full user data from Supabase users table
  const { data: user } = await usersApi.findById(authUser.id);
  if (!user) {
    return redirect('/login');
  }

  const searchParams = url.searchParams;
  const paymentId = searchParams.get('payment_id') || searchParams.get('collection_id');

  if (!paymentId) {
    return redirect('/checkout?status=cancelled');
  }

  try {
    const paymentDetails = await MPService.getPaymentStatus(paymentId);
    const verifiedStatus = paymentDetails.status;
    const amountInCentavos = Math.round((paymentDetails.transaction_amount || 0) * 100);
    const paymentMethod = paymentDetails.payment_method_id || 'unknown';

    const { data: existingOrder } = await ordersApi.findByPaymentId(paymentId);
    const paymentData = {
      userId: user.id,
      mpPaymentId: paymentId,
      amount: amountInCentavos,
      status: verifiedStatus === 'in_process' ? 'pending' : verifiedStatus,
      paymentMethod: paymentMethod,
      updatedAt: new Date().toISOString(),
    };

    if (existingOrder) {
      await ordersApi.update(existingOrder.id, paymentData);
    } else {
      await ordersApi.create({
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        ...paymentData
      });
    }

    if (verifiedStatus === 'approved') {
      // Activate the user's plan via direct Supabase update
      await usersApi.update(user.id, { status: 'active' });

      if (user.plan === 'annual') {
        await usersApi.update(user.id, {
          subscriptionStatus: 'active',
          subscriptionId: paymentId,
        });
      }

      return redirect('/dashboard');
    } else if (verifiedStatus === 'pending' || verifiedStatus === 'in_process') {
      return redirect('/checkout?status=pending');
    } else {
      return redirect(`/checkout?status=rejected&reason=${verifiedStatus}`);
    }
  } catch (error) {
    console.error('Error processing checkout callback:', error);
    return redirect(`/checkout?status=error&message=${encodeURIComponent(error.message)}`);
  }
}
