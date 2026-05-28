import crypto from 'crypto';
import { users as usersApi, orders as ordersApi } from '../../../lib/data.js';
import { AuthService } from '../../../services/auth-service.js';
import { MPService } from '../../../services/mercado-pago-service.js';

export const prerender = false;

export async function GET({ locals, url, redirect }) {
  const user = locals.user;

  if (!user) {
    return redirect('/login');
  }

  const searchParams = url.searchParams;
  const paymentId = searchParams.get('payment_id') || searchParams.get('collection_id');
  const mpStatus = searchParams.get('status'); // approved, pending, rejected, etc.

  if (!paymentId) {
    // No payment ID means the user probably cancelled or returned without paying
    return redirect('/checkout?status=cancelled');
  }

  try {
    // 1. Fetch payment status details directly from Mercado Pago API to prevent fraud
    const paymentDetails = await MPService.getPaymentStatus(paymentId);
    const verifiedStatus = paymentDetails.status; // approved, pending, rejected, in_process
    const amountInCentavos = Math.round((paymentDetails.transaction_amount || 0) * 100);
    const paymentMethod = paymentDetails.payment_method_id || 'unknown';

    // 2. Insert or update the payment record in the database
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

    // 3. Handle payment status
    if (verifiedStatus === 'approved') {
      // Activate the user's plan
      await AuthService.activateUserPlan(user.id);

      // For annual plan, set subscription status and ID
      if (user.plan === 'annual') {
        await usersApi.update(user.id, {
          subscriptionStatus: 'active',
          subscriptionId: paymentId, // Save paymentId/preferenceId as subscription identifier
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
    // In case of error querying Mercado Pago (e.g. invalid credentials or sandbox testing),
    // let's redirect to checkout with error query param to display a friendly message.
    return redirect(`/checkout?status=error&message=${encodeURIComponent(error.message)}`);
  }
}
