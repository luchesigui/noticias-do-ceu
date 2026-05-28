import { AuthService } from '../../../services/auth-service.js';

export const prerender = false;

export async function POST({ request, cookies }) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'E-mail e senha são obrigatórios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { sessionToken, user } = await AuthService.login(email, password);

    // Set session cookie
    cookies.set('session_token', sessionToken, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax'
    });

    return new Response(JSON.stringify({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, plan: user.plan, status: user.status }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
