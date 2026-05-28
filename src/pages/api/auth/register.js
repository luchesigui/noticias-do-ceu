import { AuthService } from '../../../services/auth-service.js';
import { GiftCardService } from '../../../services/gift-card-service.js';

export const prerender = false;

export async function POST({ request, cookies }) {
  try {
    const body = await request.json();
    const { name, email, password, plan, code } = body;

    // Field validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(JSON.stringify({ error: 'Nome deve ter pelo menos 2 caracteres.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'E-mail inválido ou vazio.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
      return new Response(JSON.stringify({ error: 'A senha deve ter pelo menos 6 caracteres.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let finalPlan = plan;
    let initialStatus = 'pending_payment';

    // If a gift code is provided, validate it first
    if (code) {
      const cleanCode = code.trim().toUpperCase();
      const card = GiftCardService.getGiftCardByCode(cleanCode);

      if (!card) {
        return new Response(JSON.stringify({ error: 'Código de presente não encontrado.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      if (card.redeemed_by) {
        return new Response(JSON.stringify({ error: 'Este código de presente já foi utilizado.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Check expiration
      if (card.expires_at) {
        const expiresTime = new Date(card.expires_at).getTime();
        if (Date.now() > expiresTime) {
          return new Response(JSON.stringify({ error: 'Este código de presente expirou.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }

      finalPlan = card.plan;
      initialStatus = 'active'; // Gift card activates the plan instantly
    } else {
      // Normal signup must have a plan selected
      if (finalPlan !== 'annual' && finalPlan !== 'lifetime') {
        return new Response(JSON.stringify({ error: 'Selecione um plano válido (anual ou vitalício).' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Register user
    const newUser = await AuthService.register(name, email, password, finalPlan, initialStatus);

    // If using gift card, redeem it now under this new user's ID
    if (code) {
      const cleanCode = code.trim().toUpperCase();
      GiftCardService.redeemGiftCard(cleanCode, newUser.id);
    }

    // Create session and log user in
    const { sessionToken } = await AuthService.login(email, password);

    // Set secure cookie
    cookies.set('session_token', sessionToken, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax'
    });

    return new Response(JSON.stringify({ 
      success: true, 
      user: { id: newUser.id, name: newUser.name, email: newUser.email, plan: newUser.plan, status: newUser.status } 
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
