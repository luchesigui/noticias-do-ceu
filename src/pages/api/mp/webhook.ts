import { users as usersApi, orders as ordersApi } from '../../../lib/data.js';
import { AuthService } from '../../../services/auth-service.js';
import { MPService } from '../../../services/mercado-pago-service.js';
import crypto from 'crypto';

export const prerender = false;

export async function POST({ request }) {
  const signatureHeader = request.headers.get('x-signature');
  if (!signatureHeader) {
    // Ignorar requests sem signature header (health checks)
    return new Response('Ignored (No signature)', { status: 200 });
  }

  // Get raw body as text for signature verification
  const requestBodyRaw = await request.text();

  // Parse elements from the x-signature header
  // Structure: ts=1234567890,hash=abc123... or ts=1234567890,v1=abc123...
  let ts = '';
  let receivedHash = '';
  const parts = signatureHeader.split(',');
  for (const part of parts) {
    const [key, value] = part.split('=');
    if (key === 'ts') ts = value;
    if (key === 'hash' || key === 'v1') receivedHash = value;
  }

  if (!ts || !receivedHash) {
    return new Response('Invalid signature header format', { status: 400 });
  }

  // Retrieve the webhook secret from env
  const secret = (typeof process !== 'undefined' ? process.env.MP_WEBHOOK_SECRET : null) || 
                 (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.MP_WEBHOOK_SECRET : null);

  if (secret && secret !== 'seu_webhook_secret') {
    // Compute HMAC SHA256 of: ts + '.' + request_body_raw
    const computedHash = crypto
      .createHmac('sha256', secret)
      .update(`${ts}.${requestBodyRaw}`)
      .digest('hex');

    // Timing-safe comparison of the signatures
    const computedBuffer = Buffer.from(computedHash, 'hex');
    const receivedBuffer = Buffer.from(receivedHash, 'hex');

    if (computedBuffer.length !== receivedBuffer.length || !crypto.timingSafeEqual(computedBuffer, receivedBuffer)) {
      console.warn('Webhook signature verification failed.');
      return new Response('Signature mismatch', { status: 400 });
    }
  } else {
    console.warn('WARNING: MP_WEBHOOK_SECRET is not configured. Webhook signature verification skipped in dev.');
  }

  // Process the request asynchronously or within try/catch to return 200 quickly
  try {
    const body = JSON.parse(requestBodyRaw);
    
    // Mercado Pago webhook sends data.id for payment events
    const eventType = body.type || body.topic;
    const action = body.action || '';
    const paymentId = body.data?.id || (eventType === 'payment' ? body.id : null);

    if (paymentId && (eventType === 'payment' || action.startsWith('payment.'))) {
      // Fetch details from MP API to confirm the actual status and get external reference (userId)
      const paymentDetails = await MPService.getPaymentStatus(paymentId);
      
      const userId = paymentDetails.external_reference;
      const status = paymentDetails.status; // approved, pending, rejected, in_process
      const amountInCentavos = Math.round((paymentDetails.transaction_amount || 0) * 100);
      const paymentMethod = paymentDetails.payment_method_id || 'unknown';

      if (userId) {
        // Find existing payment in the database
        const { data: existingOrder } = await ordersApi.findByPaymentId(paymentId);

        const paymentData = {
          userId,
          mpPaymentId: paymentId,
          amount: amountInCentavos,
          status: status === 'in_process' ? 'pending' : status,
          paymentMethod,
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

        // If the payment has been approved, activate user's plan and set subscription details
        if (status === 'approved') {
          await AuthService.activateUserPlan(userId);

          // Get user to see their plan type
          const { data: user } = await usersApi.findById(userId);
          if (user && user.plan === 'annual') {
            await usersApi.update(userId, {
              subscriptionStatus: 'active',
              subscriptionId: paymentId, // Store payment ID as reference for cancellation
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error processing Mercado Pago webhook payload:', error);
    // Return 200 to acknowledge the message and prevent Mercado Pago from repeatedly retrying
  }

  return new Response('OK', { status: 200 });
}
