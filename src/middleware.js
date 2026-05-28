import { defineMiddleware } from "astro:middleware";
import { AuthService } from "./services/auth-service.js";

export const onRequest = defineMiddleware(async (context, next) => {
  const sessionToken = context.cookies.get("session_token")?.value;
  
  let sessionData = null;
  if (sessionToken) {
    try {
      sessionData = await AuthService.validateSession(sessionToken);
    } catch (err) {
      console.error("Erro ao validar sessão no middleware:", err);
    }
  }
  
  if (sessionData) {
    context.locals.user = sessionData.user;
    context.locals.session = sessionData.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  const { pathname } = context.url;
  
  // Protect /dashboard routes
  if (pathname.startsWith("/dashboard")) {
    if (!context.locals.user) {
      return context.redirect("/login");
    }
    
    // If the user hasn't paid, force redirect to /checkout
    if (context.locals.user.status === "pending_payment") {
      return context.redirect("/checkout");
    }
  }

  // Protect /checkout route
  if (pathname === "/checkout" || pathname === "/checkout/") {
    if (!context.locals.user) {
      return context.redirect("/login");
    }
    // If already active, redirect to dashboard
    if (context.locals.user.status === "active") {
      return context.redirect("/dashboard");
    }
  }

  // Redirect authenticated users trying to access login/register
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
