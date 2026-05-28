import { AuthService } from '../../../services/auth-service.js';

export const prerender = false;

export async function POST({ cookies }) {
  const sessionToken = cookies.get('session_token')?.value;

  if (sessionToken) {
    try {
      await AuthService.logout(sessionToken);
    } catch (err) {
      console.error('Erro ao deletar sessão do banco:', err);
    }
  }

  // Clear cookie
  cookies.delete('session_token', { path: '/' });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
