import { LetterService } from '../../../services/letter-service.js';
import { PetService } from '../../../services/pet-service.js';

export const prerender = false;

export async function POST({ request, locals }) {
  const user = locals.user;

  // Authorization check
  if (!user || user.status !== 'active') {
    return new Response(JSON.stringify({ error: 'Não autorizado ou assinatura inativa.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const data = await request.json();
    const { petName, tutorName, body, isPrivate = true } = data;

    if (!petName || !petName.trim()) {
      return new Response(JSON.stringify({ error: 'O nome do pet é obrigatório.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!body || !body.trim()) {
      return new Response(JSON.stringify({ error: 'O conteúdo da carta é obrigatório.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Tutor name é opcional, usa o nome do user como fallback
    const resolvedTutorName = (tutorName && tutorName.trim()) || user.name;

    // Busca o pet do usuário para associar à carta
    const pet = await PetService.getPetByUserId(user.id);
    if (!pet) {
      return new Response(JSON.stringify({ error: 'Nenhum pet cadastrado. Cadastre um pet primeiro.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Limita a 1000 caracteres
    const trimmedBody = body.trim().slice(0, 1000);

    const saved = await LetterService.createLetter(user.id, {
      petId: pet.id,
      petName: petName.trim(),
      tutorName: resolvedTutorName,
      body: trimmedBody,
      isPrivate,
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Carta enviada com sucesso!',
      letter: saved
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erro ao salvar carta:', error);
    return new Response(JSON.stringify({ error: error.message || 'Erro interno ao salvar a carta.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
