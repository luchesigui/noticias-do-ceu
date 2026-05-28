import { pets as petsApi } from '../lib/data.js';
import crypto from 'crypto';

export class PetService {
  /**
   * Fetches the pet owned by a specific user.
   * Since each user can only have one pet in this version, we fetch the first one.
   * @param {string} userId
   */
  static async getPetByUserId(userId) {
    const { data: pet, error } = await petsApi.findByOwner(userId);
    if (error) {
      throw error;
    }
    return pet;
  }

  /**
   * Creates a new pet record.
   */
  static async createPet(userId, data) {
    const petId = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const { name, breed, gender, nicknames, favoritePlace, favoriteObject, personalities, photos } = data;

    // Generate a URL-friendly unique slug for the pet
    const baseSlug = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    const slug = `${baseSlug}-${crypto.randomBytes(3).toString('hex')}`;

    const { error } = await petsApi.create({
      id: petId,
      userId,
      name,
      breed,
      gender,
      nicknames: nicknames || [],
      favoritePlace,
      favoriteObject,
      personalities: personalities || [],
      photos: photos || [],
      createdAt,
      slug,
    });

    if (error) {
      throw error;
    }

    return this.getPetByUserId(userId);
  }

  /**
   * Updates an existing pet record for a user.
   */
  static async updatePet(userId, data) {
    const existing = await this.getPetByUserId(userId);
    if (!existing) {
      throw new Error('Pet não encontrado.');
    }

    const { name, breed, gender, nicknames, favoritePlace, favoriteObject, personalities, photos } = data;

    const { error } = await petsApi.update(userId, {
      name,
      breed,
      gender,
      nicknames: nicknames || [],
      favoritePlace,
      favoriteObject,
      personalities: personalities || [],
      photos: photos || [],
    });

    if (error) {
      throw error;
    }

    return this.getPetByUserId(userId);
  }
}
