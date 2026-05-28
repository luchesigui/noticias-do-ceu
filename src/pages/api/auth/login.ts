import { AuthService } from '../../../services/auth-service.js';

export const prerender = false;

export async function POST(context) {
  try {
    const body = await context.request.json();
    const email = body.email?.trim();
    const password = body.password;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'E-mail e senha são obrigatórios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { sessionToken, user } = await AuthService.login(email, password);

    context.cookies.set('session_token', sessionToken, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax',
    });

    return new Response(JSON.stringify({ success: true, user: { id: user.id, name: user.name, email: user.email, plan: user.plan, status: user.status } }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro inesperado. Tente novamente.';
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
