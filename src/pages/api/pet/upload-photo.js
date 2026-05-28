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
    const formData = await request.formData();
    const file = formData.get('photo');

    if (!file || !(file instanceof File) || file.size === 0) {
      return new Response(JSON.stringify({ error: 'Nenhum arquivo enviado.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate size (1MB = 1,048,576 bytes)
    if (file.size > 1024 * 1024) {
      return new Response(JSON.stringify({ error: `A imagem "${file.name}" excede o limite máximo de 1MB.` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate mime-type
    if (!file.type.startsWith('image/')) {
      return new Response(JSON.stringify({ error: `O arquivo "${file.name}" não é uma imagem válida.` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Upload via active storage service (R2 or Local)
    const url = await StorageService.uploadFile(file);

    return new Response(JSON.stringify({
      success: true,
      url: url
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erro na rota /api/pet/upload-photo:', error);
    return new Response(JSON.stringify({ error: `Falha ao fazer upload da imagem: ${error.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
