import { WaitingListService } from '../../services/waiting-list-service.js';

export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { email, plan } = body;

    // Validation
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'E-mail inválido ou vazio.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (plan !== 'annual' && plan !== 'lifetime') {
      return new Response(JSON.stringify({ error: 'Plano inválido. Escolha "annual" ou "lifetime".' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Call service to send email notification
    const result = await WaitingListService.addLead(email, plan);

    return new Response(JSON.stringify({ success: true, message: 'Inscrição registrada com sucesso!', result }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
