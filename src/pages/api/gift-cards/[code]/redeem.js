import { GiftCardService } from '../../../../services/gift-card-service.js';

export const prerender = false;

// Redeem gift card
export async function POST({ params, request }) {
  try {
    const { code } = params;
    const body = await request.json();
    const { user_id } = body;

    // Validate code format
    if (!code || !/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
      return new Response(JSON.stringify({ error: 'Invalid code format. Expected XXXX-XXXX-XXXX' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate user_id (UUID format)
    if (!user_id || typeof user_id !== 'string' || !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(user_id)) {
      return new Response(JSON.stringify({ error: 'user_id is required and must be a valid UUID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = GiftCardService.redeemGiftCard(code, user_id);

    if (result.error === 'not_found') {
      return new Response(JSON.stringify({ error: 'Gift card not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (result.error === 'expired') {
      return new Response(JSON.stringify({ error: 'Gift card has expired' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (result.error === 'already_redeemed') {
      return new Response(JSON.stringify({ error: 'Gift card has already been redeemed by a different user' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      code,
      redeemed_at: result.redeemed_at
    }), {
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
