import { db } from '../db/index.js';
import { pets } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';

export class PetService {
  /**
   * Fetches the pet owned by a specific user.
   * Since each user can only have one pet in this version, we fetch the first one.
   * @param {string} userId
   */
  static async getPetByUserId(userId) {
    const matched = await db.select().from(pets).where(eq(pets.userId, userId)).limit(1);
    if (matched.length === 0) return null;

    const pet = matched[0];
    
    // Parse JSON columns back to standard JS arrays
    return {
      ...pet,
      nicknames: JSON.parse(pet.nicknames || '[]'),
      personalities: JSON.parse(pet.personalities || '[]'),
      photos: JSON.parse(pet.photos || '[]'),
    };
  }

  /**
   * Creates a new pet record.
   */
  static async createPet(userId, data) {
    const petId = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const { name, breed, gender, nicknames, favoritePlace, favoriteObject, personalities, photos } = data;

    await db.insert(pets).values({
      id: petId,
      userId,
      name,
      breed,
      gender,
      nicknames: JSON.stringify(nicknames || []),
      favoritePlace,
      favoriteObject,
      personalities: JSON.stringify(personalities || []),
      photos: JSON.stringify(photos || []),
      createdAt,
    });

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

    await db.update(pets)
      .set({
        name,
        breed,
        gender,
        nicknames: JSON.stringify(nicknames || []),
        favoritePlace,
        favoriteObject,
        personalities: JSON.stringify(personalities || []),
        photos: JSON.stringify(photos || []),
      })
      .where(eq(pets.userId, userId));

    return this.getPetByUserId(userId);
  }
}
