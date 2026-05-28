import { AuthService } from '../../../services/auth-service.js';
import { GiftCardService } from '../../../services/gift-card-service.js';
import * as yup from 'yup';

export const prerender = false;

// Yup Validation Schema
const registerSchema = yup.object({
  name: yup.string().required('Nome deve ter pelo menos 2 caracteres.').min(2, 'Nome deve ter pelo menos 2 caracteres.').trim(),
  email: yup.string().required('E-mail inválido ou vazio.').email('E-mail inválido ou vazio.').trim(),
  password: yup.string().required('A senha deve ter pelo menos 6 caracteres.').min(6, 'A senha deve ter pelo menos 6 caracteres.'),
  code: yup.string().trim().nullable(),
  plan: yup.string().trim().when('code', {
    is: (val) => !val || val === '',
    then: (schema) => schema.required('Selecione um plano válido (anual ou vitalício).').oneOf(['annual', 'lifetime'], 'Selecione um plano válido (anual ou vitalício).'),
    otherwise: (schema) => schema.notRequired()
  })
});

export async function POST({ request, cookies }) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = await registerSchema.validate(body, { abortEarly: true });
    const { name, email, password, plan, code } = validatedData;

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
