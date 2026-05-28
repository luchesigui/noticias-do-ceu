import { PetService } from '../../../services/pet-service.js';
import { StorageService } from '../../../services/storage-service.js';
import * as yup from 'yup';

export const prerender = false;

// Yup Validation Schema
const petSchema = yup.object({
  name: yup.string().required('O nome do pet é obrigatório.').trim(),
  breed: yup.string().required('A raça do pet é obrigatória.').trim(),
  gender: yup.string().required('Gênero é obrigatório.').oneOf(['Macho', 'Fêmea'], 'Gênero inválido.'),
  favoritePlace: yup.string().trim().default(''),
  favoriteObject: yup.string().trim().default(''),
  nicknames: yup.array().of(yup.string().trim()).default([]),
  personalities: yup.array().of(yup.string().trim()).default([]),
  photos: yup.array().of(yup.string().trim()).max(5, 'O memorial suporta no máximo 5 fotos.').default([])
});

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

    // Parse array inputs
    let nicknames = [];
    try {
      const val = formData.get('nicknames');
      nicknames = val ? JSON.parse(val.toString()) : [];
    } catch (e) {
      nicknames = formData.get('nicknames')?.toString().split(',').map(n => n.trim()).filter(Boolean) || [];
    }

    let personalities = [];
    try {
      const val = formData.get('personalities');
      personalities = val ? JSON.parse(val.toString()) : [];
    } catch (e) {
      personalities = formData.get('personalities')?.toString().split(',').map(p => p.trim()).filter(Boolean) || [];
    }

    let photos = [];
    try {
      const val = formData.get('photos');
      photos = val ? JSON.parse(val.toString()) : [];
    } catch (e) {
      // Default to empty array
    }

    // Validate using Yup schema
    const validated = await petSchema.validate({
      name,
      breed,
      gender,
      favoritePlace,
      favoriteObject,
      nicknames,
      personalities,
      photos
    }, { abortEarly: true });

    // Fetch current pet database entry if it exists
    const currentPet = await PetService.getPetByUserId(user.id);

    const petData = {
      name: validated.name,
      breed: validated.breed,
      gender: validated.gender,
      nicknames: validated.nicknames,
      favoritePlace: validated.favoritePlace,
      favoriteObject: validated.favoriteObject,
      personalities: validated.personalities,
      photos: validated.photos
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
