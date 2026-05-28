import { StorageService } from '../../../services/storage-service.js';

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
    const { url } = await request.json();

    if (!url) {
      return new Response(JSON.stringify({ error: 'URL do arquivo não informada.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Call storage service to delete the file immediately
    await StorageService.deleteFile(url);

    return new Response(JSON.stringify({
      success: true,
      message: 'Arquivo deletado com sucesso do armazenamento.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erro na rota /api/pet/delete-photo:', error);
    return new Response(JSON.stringify({ error: `Falha ao deletar imagem: ${error.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
