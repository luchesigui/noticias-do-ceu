import { MPService } from '../../../services/mercado-pago-service.js';

export const prerender = false;

export async function POST({ locals, url }) {
  const user = locals.user;

  if (!user) {
    return new Response(JSON.stringify({ error: 'Não autorizado. Faça login primeiro.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (user.status === 'active') {
    return new Response(JSON.stringify({ error: 'Seu plano já está ativo.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Determine the base URL (origin) dynamically from the request URL
    const origin = url.origin;
    const preference = await MPService.createPreference(user.id, user.plan, origin);

    return new Response(JSON.stringify({ init_point: preference.init_point }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in create-preference endpoint:', error);
    return new Response(JSON.stringify({ error: error.message || 'Erro interno ao processar preferência.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
