import { PetService } from '../../../services/pet-service.js';

export const prerender = false;

/**
 * GET — Fetch a single pet by slug with day counter
 * URL: /api/pets/[slug]
 */
export async function GET({ params }) {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug do pet é obrigatório.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const pet = await PetService.getPetWithDay(slug);

    if (!pet) {
      return new Response(JSON.stringify({ error: 'Pet não encontrado.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      pet,
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
