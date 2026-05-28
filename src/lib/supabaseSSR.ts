/**
 * Supabase SSR Client for Astro
 *
 * - createClient: browser-side client (mutable cookies via document.cookie)
 * - createServerClient: server-side client in Astro endpoints/pages (uses Astro.cookies)
 *
 * @see https://supabase.com/docs/guides/auth/server-side/astro
 */

import { createServerClient, createBrowserClient, parseCookieHeader } from '@supabase/ssr';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Cria o cliente Supabase para uso no BROWSER (client-side).
 * Usa cookies do via localStorage/document.
 * Ideal para interações do usuário no lado do cliente.
 */
export function createSupabaseBrowserClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      'Missing Supabase env vars: PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY are required. ' +
      'Check your .env file or Vercel environment variables.'
    );
  }

  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/**
 * Cria o cliente Supabase para uso no SERVER (SSR / API routes).
 * Encapsula Astro.cookies automaticamente para manter a sessão.
 *
 * @param {import('astro').APIContext} context - Astro context com cookies
 * @returns {import('@supabase/supabase-js').SupabaseClient}
 */
export function createSupabaseServerClient(context) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      'Missing Supabase env vars: PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY are required. ' +
      'Check your .env file or Vercel environment variables.'
    );
  }

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return context.cookies.get(name)?.value;
      },
      set(name, value, options) {
        context.cookies.set(name, value, options);
      },
      remove(name, options) {
        context.cookies.set(name, { ...options, maxAge: 0 });
      },
    },
  });
}

/**
 * Obtém o usuário atual a partir do contexto Astro (server-side).
 * Retorna null se não autenticado.
 */
export async function getCurrentUser(context) {
  const supabase = createSupabaseServerClient(context);
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  // Fetch profile from public.profiles
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, name, email, plan, status, created_at')
    .eq('id', user.id)
    .single();

  return profile;
}
