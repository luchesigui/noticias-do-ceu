import { createSupabaseServerClient } from '../../../lib/supabaseSSR';

export const prerender = false;

export async function POST(context) {
  const supabase = createSupabaseServerClient(context);

  try {
    const body = await context.request.json();
    const { name, email, password } = body;

    if (!name?.trim() || !email?.trim() || !password) {
      return new Response(JSON.stringify({ error: 'Nome, e-mail e senha são obrigatórios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (password.length < 6) {
      return new Response(JSON.stringify({ error: 'A senha deve ter pelo menos 6 caracteres.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { name: name.trim() },
        emailRedirectTo: new URL('/api/auth/callback', context.url.origin).href,
      },
    });

    if (error) {
      console.error('SignUp error:', error);
      if (error.message.includes('already registered') || error.message.includes('already been registered')) {
        return new Response(JSON.stringify({ error: 'Este e-mail já está cadastrado.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify({ error: 'Erro ao criar conta. Tente novamente.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Conta criada! Verifique seu e-mail para ativar sua conta.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Register error:', error);
    return new Response(JSON.stringify({ error: 'Erro inesperado. Tente novamente.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
