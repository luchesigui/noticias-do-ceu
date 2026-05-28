import type { APIRoute } from 'astro';
import { cancelPreapproval, suspendPreapproval } from '../../../services/mercadopago';
import { db } from '../../../db/index.js';
import { subscriptions, users } from '../../../db/schema.js';
import { eq, and } from 'drizzle-orm';

export const prerender = false;

/**
 * Cancel user subscription.
 *
 * Body: { reason?: string }
 *
 * BR Law compliance: Users MUST be able to cancel at any time.
 * This cancels both in MP and locally, and records the cancellation.
 */
export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const user = (locals as any).user;

    if (!user) {
      return new Response(JSON.stringify({
        error: 'unauthorized',
        message: 'Você precisa estar logado.',
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let body: any = {};
    try {
      body = await request.json();
    } catch {
      // empty body is fine
    }

    const { reason = 'user_request' } = body;

    // Find active subscription for user
    const subs = await db.select().from(subscriptions).where(
      and(
        eq(subscriptions.userId, user.id),
        eq(subscriptions.status, 'active')
      )
    ).limit(1);

    if (subs.length === 0) {
      return new Response(JSON.stringify({
        error: 'no_subscription',
        message: 'Nenhuma assinatura ativa encontrada.',
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sub = subs[0];
    const now = new Date().toISOString();

    // Cancel in Mercado Pago if we have the subscription ID
    if (sub.orderId) {
      try {
        // Get the order to find the MP subscription ID
        // For now we cancel the preapproval if stored in user.mpSubscriptionId
        if (user.mpSubscriptionId) {
          await cancelPreapproval(user.mpSubscriptionId);
          console.log(`[Cancel Subscription] MP preapproval ${user.mpSubscriptionId} cancelled`);
        }
      } catch (mpError: any) {
        // Log but continue — we still need to cancel locally for BR law compliance
        console.error('[Cancel Subscription] MP cancel error (proceeding with local cancel):', mpError.message);
      }
    }

    // Update subscription locally
    await db.update(subscriptions)
      .set({
        status: 'cancelled',
        cancelledAt: now,
        cancellationReason: reason,
        updatedAt: now,
      })
      .where(eq(subscriptions.id, sub.id));

    // Update user status
    await db.update(users)
      .set({
        status: 'cancelled',
        cancelledAt: now,
        updatedAt: now,
      })
      .where(eq(users.id, user.id));

    console.log(`[Cancel Subscription] User ${user.id} cancelled subscription ${sub.id}`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Assinatura cancelada com sucesso.',
      cancelledAt: now,
      note: 'O acesso ao memorial será mantido até o final do período já pago.',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('[Cancel Subscription] Internal error:', error);
    return new Response(JSON.stringify({
      error: 'internal_error',
      message: error.message || 'Erro interno ao cancelar assinatura.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
