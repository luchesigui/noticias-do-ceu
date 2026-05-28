import { GiftCardService } from '../../../services/gift-card-service.js';

export const prerender = false;

// Get card info (Validate)
export async function GET({ params }) {
  try {
    const { code } = params;

    // Validate code format
    if (!code || !/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
      return new Response(JSON.stringify({ error: 'Invalid code format. Expected XXXX-XXXX-XXXX' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const card = await GiftCardService.getGiftCardByCode(code);

    if (!card) {
      return new Response(JSON.stringify({ error: 'Gift card not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check expiration
    if (card.expires_at) {
      const expiresTime = new Date(card.expires_at).getTime();
      if (Date.now() > expiresTime) {
        return new Response(JSON.stringify({ error: 'Gift card has expired', expires_at: card.expires_at }), {
          status: 410,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response(JSON.stringify(card), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
