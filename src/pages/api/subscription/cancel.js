import { users as usersApi } from '../../../lib/data.js';
import { MPService as MPServiceType } from '../../../services/mercado-pago-service.js';

export const prerender = false;

export async function POST({ locals }) {
  const user = locals.user;

  if (!user) {
    return new Response(JSON.stringify({ error: 'Não autorizado. Faça login primeiro.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (user.plan === 'lifetime') {
    return new Response(JSON.stringify({ error: 'Planos vitalícios não possuem assinatura recorrente.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { data: dbUser, error: userError } = await usersApi.findById(user.id);
    if (userError || !dbUser) {
      return new Response(JSON.stringify({ error: 'Usuário não encontrado.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (dbUser.subscriptionId) {
      try {
        await MPServiceType.cancelSubscription(dbUser.subscriptionId);
      } catch (mpError) {
        console.error('Error cancelling subscription at Mercado Pago:', mpError);
        
        // If testing locally with placeholder tokens, allow local cancellation to proceed
        const token = MPServiceType.getAccessToken();
        const isPlaceholderToken = !token || token === 'seu_access_token';
        
        if (!isPlaceholderToken) {
          throw new Error(`Erro ao cancelar assinatura no Mercado Pago: ${mpError.message}`);
        }
      }
    }

    // Update local database status to cancelled
    await usersApi.update(user.id, { subscriptionStatus: 'cancelled' });

    return new Response(JSON.stringify({ success: true, message: 'Assinatura cancelada com sucesso.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscription cancellation error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Erro ao processar o cancelamento.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
