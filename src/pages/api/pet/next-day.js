import { users } from '../../../lib/data.js';

export const prerender = false;

// TODO TESTE: endpoint temporário usado pelo botão "Próxima edição (teste)".
// Avança o dia da jornada do usuário em +1 (sem limite diário). Remover depois.
export async function POST({ locals }) {
  const user = locals.user;
  if (!user) {
    return new Response(JSON.stringify({ error: 'Não autorizado.' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { data, error } = await users.advanceJourneyDay(user.id, { cap: false });
    if (error) throw error;
    return new Response(JSON.stringify({ success: true, journeyDay: data.journeyDay }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}
