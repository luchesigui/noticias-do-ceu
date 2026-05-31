import { PetService } from '../../../services/pet-service.js';

export const prerender = false;

// Alterna a visibilidade do jornal do pet do usuário ('public' | 'private').
export async function POST({ request, locals }) {
  const user = locals.user;
  if (!user || user.status !== 'active') {
    return new Response(JSON.stringify({ error: 'Não autorizado.' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const visibility = body.visibility === 'private' ? 'private' : 'public';

    const pet = await PetService.getPetByUserId(user.id);
    if (!pet) {
      return new Response(JSON.stringify({ error: 'Nenhum pet cadastrado.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const updated = await PetService.setJournalVisibility(user.id, visibility);
    return new Response(JSON.stringify({ success: true, journalVisibility: updated.journalVisibility }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}
