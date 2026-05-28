import { createSupabaseServerClient } from '../../../lib/supabaseSSR';

export const prerender = false;

export async function POST(context) {
  const supabase = createSupabaseServerClient(context);

  try {
    const body = await context.request.json();
    const email = body.email?.trim();

    if (!email) {
      return new Response(JSON.stringify({ error: 'E-mail é obrigatório.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const redirectTo = new URL('/api/auth/callback', context.url.origin).href;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      console.error('Login OTP error:', error);
      return new Response(JSON.stringify({ error: 'Erro ao enviar link. Tente novamente.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Link mágico enviado para seu e-mail.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ error: 'Erro inesperado. Tente novamente.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
