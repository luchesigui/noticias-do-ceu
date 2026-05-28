import { AuthService } from '../../../services/auth-service.js';

export const prerender = false;

export async function POST(context) {
  const sessionToken = context.cookies.get('session_token')?.value;

  if (sessionToken) {
    await AuthService.logout(sessionToken);
  }

  context.cookies.delete('session_token', { path: '/' });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
