import { d as defineMiddleware, s as sequence } from './prerender_Cpn8qJMn.mjs';
import 'piccolore';
import 'clsx';
import { createServerClient } from '@supabase/ssr';

const SUPABASE_URL = "https://placeholder.supabase.co";
const SUPABASE_ANON_KEY = "placeholder-anon-key";
function createSupabaseServerClient(context) {
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
      }
    }
  });
}

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const publicPaths = ["/login", "/cadastro", "/redeem", "/blog", "/waiting-list", "/"];
  publicPaths.some((p) => pathname === p || pathname === p + "/") || pathname.startsWith("/blog/") || pathname.startsWith("/api/") || pathname === "/";
  context.locals.user = null;
  context.locals.session = null;
  try {
    const supabase = createSupabaseServerClient(context);
    const { data: { session }, error } = await supabase.auth.getSession();
    if (!error && session?.user) {
      const { data: profile } = await supabase.from("profiles").select("id, name, email, plan, status, created_at").eq("id", session.user.id).single();
      if (profile) {
        context.locals.user = {
          id: profile.id,
          name: profile.name,
          email: profile.email || session.user.email,
          plan: profile.plan,
          status: profile.status,
          createdAt: profile.created_at
        };
        context.locals.session = session;
      }
    }
  } catch (err) {
    console.error("[middleware] Erro ao validar sessão Supabase:", err);
  }
  if (pathname.startsWith("/dashboard")) {
    if (!context.locals.user) {
      return context.redirect("/login");
    }
    if (context.locals.user.status === "pending_payment") {
      return context.redirect("/checkout");
    }
  }
  if (pathname === "/checkout" || pathname === "/checkout/") {
    if (!context.locals.user) {
      return context.redirect("/login");
    }
    if (context.locals.user.status === "active") {
      return context.redirect("/dashboard");
    }
  }
  if (pathname === "/login" || pathname === "/login/" || pathname === "/cadastro" || pathname === "/cadastro/") {
    if (context.locals.user) {
      if (context.locals.user.status === "pending_payment") {
        return context.redirect("/checkout");
      }
      return context.redirect("/dashboard");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
