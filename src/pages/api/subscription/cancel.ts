import type { APIRoute } from 'astro';
import { MPService } from '../../../services/mercado-pago-service.js';
import { users as usersApi, subscriptions as subscriptionsApi } from '../../../lib/data.js';

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
    const { data: subs, error: subsError } = await subscriptionsApi.findByUser(user.id);
    if (subsError) {
      console.error('[Cancel Subscription] DB error:', subsError);
      return new Response(JSON.stringify({
        error: 'db_error',
        message: 'Erro ao buscar assinatura.',
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const activeSub = (subs || []).find((s: any) => s.status === 'active');

    if (!activeSub) {
      return new Response(JSON.stringify({
        error: 'no_subscription',
        message: 'Nenhuma assinatura ativa encontrada.',
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const now = new Date().toISOString();

    // Cancel in Mercado Pago if we have the preapproval ID
    if (activeSub.preapprovalId) {
      try {
        await MPService.cancelSubscription(activeSub.preapprovalId);
        console.log(`[Cancel Subscription] MP preapproval ${activeSub.preapprovalId} cancelled`);
      } catch (mpError: any) {
        // Log but continue — we still need to cancel locally for BR law compliance
        console.error('[Cancel Subscription] MP cancel error (proceeding with local cancel):', mpError.message);
      }
    }

    // Update subscription locally
    await subscriptionsApi.update(activeSub.id, {
      status: 'cancelled',
      updatedAt: now,
    });

    // Update user status — set to 'cancelled' but they keep access until period ends
    await usersApi.update(user.id, {
      status: 'cancelled',
      updatedAt: now,
    });

    console.log(`[Cancel Subscription] User ${user.id} cancelled subscription ${activeSub.id}`);

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
