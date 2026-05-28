import { PetService } from '../../../services/pet-service.js';
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
    
    const name = formData.get('name')?.toString().trim();
    const breed = formData.get('breed')?.toString().trim();
    const gender = formData.get('gender')?.toString().trim();
    const favoritePlace = formData.get('favoritePlace')?.toString().trim();
    const favoriteObject = formData.get('favoriteObject')?.toString().trim();

    // Validations
    if (!name) {
      return new Response(JSON.stringify({ error: 'O nome do pet é obrigatório.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!breed) {
      return new Response(JSON.stringify({ error: 'A raça do pet é obrigatória.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!gender || (gender !== 'Macho' && gender !== 'Fêmea')) {
      return new Response(JSON.stringify({ error: 'Gênero inválido.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Parse dynamic arrays (nicknames & personalities)
    let nicknames = [];
    try {
      const nicknamesRaw = formData.get('nicknames');
      nicknames = nicknamesRaw ? JSON.parse(nicknamesRaw.toString()) : [];
    } catch (e) {
      nicknames = formData.get('nicknames')?.toString().split(',').map(n => n.trim()).filter(Boolean) || [];
    }

    let personalities = [];
    try {
      const personalitiesRaw = formData.get('personalities');
      personalities = personalitiesRaw ? JSON.parse(personalitiesRaw.toString()) : [];
    } catch (e) {
      personalities = formData.get('personalities')?.toString().split(',').map(p => p.trim()).filter(Boolean) || [];
    }

    // Parse existing photos (when updating, what photos to retain)
    let existingPhotos = [];
    try {
      const existingPhotosRaw = formData.get('existingPhotos');
      existingPhotos = existingPhotosRaw ? JSON.parse(existingPhotosRaw.toString()) : [];
    } catch (e) {
      // If error or not provided, default to empty
    }

    // Fetch current pet database entry if it exists
    const currentPet = await PetService.getPetByUserId(user.id);
    
    // Clean up photos that were deleted by the user during edit
    if (currentPet && currentPet.photos) {
      for (const oldPhoto of currentPet.photos) {
        if (!existingPhotos.includes(oldPhoto)) {
          // Photo was removed in UI, delete it from storage
          await StorageService.deleteFile(oldPhoto);
        }
      }
    }

    // Handle new uploads
    const newPhotos = [];
    const files = formData.getAll('photos');
    
    for (const file of files) {
      if (file && file.size > 0 && file.name) {
        try {
          const url = await StorageService.uploadFile(file);
          newPhotos.push(url);
        } catch (uploadError) {
          console.error('Erro ao fazer upload de arquivo:', uploadError);
          // If any upload fails, we delete the ones we uploaded in this transaction so far
          for (const uploadedUrl of newPhotos) {
            await StorageService.deleteFile(uploadedUrl);
          }
          return new Response(JSON.stringify({ error: `Falha no upload da foto: ${uploadError.message}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
    }

    const finalPhotos = [...existingPhotos, ...newPhotos];

    if (finalPhotos.length > 5) {
      // Clean up newly uploaded files if they exceed limit
      for (const newlyUploaded of newPhotos) {
        await StorageService.deleteFile(newlyUploaded);
      }
      return new Response(JSON.stringify({ error: 'Você só pode cadastrar até 5 fotos.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const petData = {
      name,
      breed,
      gender,
      nicknames,
      favoritePlace: favoritePlace || '',
      favoriteObject: favoriteObject || '',
      personalities,
      photos: finalPhotos
    };

    let savedPet;
    if (currentPet) {
      savedPet = await PetService.updatePet(user.id, petData);
    } else {
      savedPet = await PetService.createPet(user.id, petData);
    }

    return new Response(JSON.stringify({
      success: true,
      message: currentPet ? 'Pet atualizado com sucesso!' : 'Pet cadastrado com sucesso!',
      pet: savedPet
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
