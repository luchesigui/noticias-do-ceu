import { AuthService } from '../../../services/auth-service.js';

export const prerender = false;

export async function POST({ locals }) {
  const user = locals.user;

  if (!user) {
    return new Response(JSON.stringify({ error: 'Não autorizado. Faça login primeiro.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    await AuthService.activateUserPlan(user.id);

    return new Response(JSON.stringify({ success: true, message: 'Plano ativado com sucesso!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
