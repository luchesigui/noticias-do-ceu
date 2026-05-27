import { GiftCardService } from '../../../services/gift-card-service.js';

export const prerender = false;

// Create gift card
export async function POST({ request }) {
  try {
    const body = await request.json();
    const { sender_name, recipient_email, recipient_name, pet_name, plan, message, design } = body;

    // Validation
    if (!sender_name || typeof sender_name !== 'string' || sender_name.trim() === '') {
      return new Response(JSON.stringify({ error: 'sender_name is required and must be a non-empty string' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!recipient_email || typeof recipient_email !== 'string' || !/^\S+@\S+\.\S+$/.test(recipient_email)) {
      return new Response(JSON.stringify({ error: 'recipient_email is required and must be a valid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!recipient_name || typeof recipient_name !== 'string' || recipient_name.trim() === '') {
      return new Response(JSON.stringify({ error: 'recipient_name is required and must be a non-empty string' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (pet_name !== undefined && pet_name !== null && (typeof pet_name !== 'string' || pet_name.trim() === '')) {
      return new Response(JSON.stringify({ error: 'pet_name must be a non-empty string' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (plan !== 'annual' && plan !== 'lifetime') {
      return new Response(JSON.stringify({ error: 'plan must be either "annual" or "lifetime"' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (message !== undefined && message !== null && typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'message must be a string' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const validDesigns = ['nuvens', 'patinhas', 'estrelas', 'pomba'];
    if (!validDesigns.includes(design)) {
      return new Response(JSON.stringify({ error: 'design must be one of: nuvens, patinhas, estrelas, pomba' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const card = GiftCardService.createGiftCard(body);
    return new Response(JSON.stringify(card), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// List gift cards (Admin)
export async function GET({ url }) {
  try {
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);

    if (isNaN(page) || page <= 0) {
      return new Response(JSON.stringify({ error: 'page must be a positive integer' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (isNaN(limit) || limit <= 0) {
      return new Response(JSON.stringify({ error: 'limit must be a positive integer' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = GiftCardService.listGiftCards(page, limit);
    return new Response(JSON.stringify(data), {
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
