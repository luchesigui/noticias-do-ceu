import { defineMiddleware } from 'astro:middleware';
import { AuthService } from './services/auth-service.js';

const PUBLIC_PATHS = ['/login', '/cadastro', '/redeem', '/blog', '/waiting-list', '/'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  context.locals.user = null;
  context.locals.session = null;

  const isPublic =
    PUBLIC_PATHS.some(p => pathname === p || pathname === p + '/') ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/api/') ||
    pathname === '/';

  const sessionToken = context.cookies.get('session_token')?.value;

  if (sessionToken) {
    try {
      const result = await AuthService.validateSession(sessionToken);
      if (result) {
        context.locals.user = result.user;
        context.locals.session = result.session;
      }
    } catch (err) {
      console.error('[middleware] Erro ao validar sessão:', err);
    }
  }

  if (pathname.startsWith('/dashboard')) {
    if (!context.locals.user) return context.redirect('/login');
    if (context.locals.user.status === 'pending_payment') return context.redirect('/checkout');
  }

  if (pathname === '/checkout' || pathname === '/checkout/') {
    if (!context.locals.user) return context.redirect('/login');
    if (context.locals.user.status === 'active') return context.redirect('/dashboard');
  }

  if (pathname === '/login' || pathname === '/login/' || pathname === '/cadastro' || pathname === '/cadastro/') {
    if (context.locals.user) {
      if (context.locals.user.status === 'pending_payment') return context.redirect('/checkout');
      return context.redirect('/dashboard');
    }
  }

  return next();
});
