/**
 * Middleware — Supabase Session Validation + Route Protection
 *
 * Valida a sessão Supabase via cookies e protege rotas /dashboard.
 * Usa createServerClient do @supabase/ssr para manter sessão SSR.
 */
import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabaseSSR.ts';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Supabase public routes that don't need auth check
  const publicPaths = ['/login', '/cadastro', '/redeem', '/blog', '/waiting-list', '/'];
  const isPublicPath = publicPaths.some(p => pathname === p || pathname === p + '/') ||
                       pathname.startsWith('/blog/') ||
                       pathname.startsWith('/api/') ||
                       pathname === '/';

  // Initialize user state
  context.locals.user = null;
  context.locals.session = null;

  // Validate Supabase session
  try {
    const supabase = createSupabaseServerClient(context);
    const { data: { session }, error } = await supabase.auth.getSession();

    if (!error && session?.user) {
      // Fetch profile from public.profiles
      const { data: profile } = await supabase
        .from('profiles')
        .select('id, name, email, plan, status, created_at')
        .eq('id', session.user.id)
        .single();

      if (profile) {
        context.locals.user = {
          id: profile.id,
          name: profile.name,
          email: profile.email || session.user.email,
          plan: profile.plan,
          status: profile.status,
          createdAt: profile.created_at,
        };
        context.locals.session = session;
      }
    }
  } catch (err) {
    console.error('[middleware] Erro ao validar sessão Supabase:', err);
  }

  // Protect /dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!context.locals.user) {
      return context.redirect('/login');
    }

    // If the user hasn't paid, force redirect to /checkout
    if (context.locals.user.status === 'pending_payment') {
      return context.redirect('/checkout');
    }
  }

  // Protect /checkout route
  if (pathname === '/checkout' || pathname === '/checkout/') {
    if (!context.locals.user) {
      return context.redirect('/login');
    }
    // If already active, redirect to dashboard
    if (context.locals.user.status === 'active') {
      return context.redirect('/dashboard');
    }
  }

  // Redirect authenticated users trying to access login/register
  if (pathname === '/login' || pathname === '/login/' || pathname === '/cadastro' || pathname === '/cadastro/') {
    if (context.locals.user) {
      if (context.locals.user.status === 'pending_payment') {
        return context.redirect('/checkout');
      }
      return context.redirect('/dashboard');
    }
  }

  return next();
});
