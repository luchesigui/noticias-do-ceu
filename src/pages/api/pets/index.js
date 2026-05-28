import { PetService } from '../../../services/pet-service.js';

export const prerender = false;

/**
 * POST — Create a new pet for the authenticated user (onboarding)
 */
export async function POST({ request, locals }) {
  const user = locals.user;

  if (!user) {
    return new Response(JSON.stringify({ error: 'Não autorizado. Faça login primeiro.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (user.status !== 'active') {
    return new Response(JSON.stringify({ error: 'Assinatura inativa. Conclua o pagamento primeiro.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();

    const petData = {
      name: body.name?.trim(),
      breed: body.breed?.trim(),
      gender: body.gender,
      nicknames: Array.isArray(body.nicknames) ? body.nicknames : [],
      favoritePlace: body.favoritePlace?.trim() || '',
      favoriteObject: body.favoriteObject?.trim() || '',
      personalities: Array.isArray(body.personalities) ? body.personalities : [],
      photos: Array.isArray(body.photos) ? body.photos : [],
    };

    // Validate required fields
    if (!petData.name || !petData.breed || !petData.gender) {
      return new Response(JSON.stringify({ error: 'Nome, raça e gênero são obrigatórios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if user already has a pet
    const existing = await PetService.getPetByUserId(user.id);
    if (existing) {
      return new Response(JSON.stringify({ error: 'Você já cadastrou um pet. Use PUT para atualizar.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const savedPet = await PetService.createPet(user.id, petData);

    return new Response(JSON.stringify({
      success: true,
      message: 'Pet cadastrado com sucesso!',
      pet: savedPet,
    }), {
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

/**
 * GET — List pets for the authenticated user
 */
export async function GET({ locals }) {
  const user = locals.user;

  if (!user) {
    return new Response(JSON.stringify({ error: 'Não autorizado. Faça login primeiro.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const pets = await PetService.listPetsByUser(user.id);

    return new Response(JSON.stringify({
      success: true,
      pets,
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
