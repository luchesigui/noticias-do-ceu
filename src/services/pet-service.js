import crypto from 'crypto';
import { db } from '../db/index.js';
import { pets as petsTable } from '../db/schema.js';
import { eq } from 'drizzle-orm';

function parsePet(row) {
  if (!row) return null;
  return {
    ...row,
    nicknames: typeof row.nicknames === 'string' ? JSON.parse(row.nicknames) : (row.nicknames || []),
    personalities: typeof row.personalities === 'string' ? JSON.parse(row.personalities) : (row.personalities || []),
    photos: typeof row.photos === 'string' ? JSON.parse(row.photos) : (row.photos || []),
  };
}

export class PetService {
  static generateSlug(name) {
    const base = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const hash = crypto.randomBytes(4).toString('hex');
    return `${base}-${hash}`;
  }

  static async getPetByUserId(userId) {
    const rows = await db.select().from(petsTable)
      .where(eq(petsTable.userId, userId))
      .limit(1);
    return parsePet(rows[0] ?? null);
  }

  static async getPetBySlug(slug) {
    const rows = await db.select().from(petsTable)
      .where(eq(petsTable.slug, slug))
      .limit(1);
    return parsePet(rows[0] ?? null);
  }

  static async getPetWithDay(slug) {
    const rows = await db.select().from(petsTable)
      .where(eq(petsTable.slug, slug))
      .limit(1);
    const pet = parsePet(rows[0] ?? null);
    if (!pet) return null;
    const diffTime = Math.abs(Date.now() - new Date(pet.createdAt).getTime());
    pet.daysSinceCreation = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return pet;
  }

  static async listPetsByUser(userId) {
    const rows = await db.select().from(petsTable)
      .where(eq(petsTable.userId, userId));
    return rows.map(parsePet);
  }

  static async createPet(userId, data) {
    const petId = crypto.randomUUID();
    const slug = this.generateSlug(data.name);
    const seed = crypto.randomBytes(32).toString('hex');
    const { name, breed, gender, nicknames, favoritePlace, favoriteObject, personalities, photos } = data;

    await db.insert(petsTable).values({
      id: petId,
      userId,
      name,
      breed,
      gender,
      nicknames: JSON.stringify(nicknames || []),
      favoritePlace: favoritePlace || '',
      favoriteObject: favoriteObject || '',
      personalities: JSON.stringify(personalities || []),
      photos: JSON.stringify(photos || []),
      slug,
      seed,
      createdAt: new Date().toISOString(),
    });

    return this.getPetByUserId(userId);
  }

  static async updatePet(userId, data) {
    const existing = await this.getPetByUserId(userId);
    if (!existing) throw new Error('Pet não encontrado.');

    const { name, breed, gender, nicknames, favoritePlace, favoriteObject, personalities, photos } = data;

    await db.update(petsTable).set({
      name,
      breed,
      gender,
      nicknames: JSON.stringify(nicknames || []),
      favoritePlace: favoritePlace || '',
      favoriteObject: favoriteObject || '',
      personalities: JSON.stringify(personalities || []),
      photos: JSON.stringify(photos || []),
    }).where(eq(petsTable.userId, userId));

    return this.getPetByUserId(userId);
  }
}
