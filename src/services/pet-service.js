import { supabase, supabaseAdmin } from '../lib/supabase.js';
import crypto from 'crypto';

export class PetService {
  /**
   * Generate a URL-friendly unique slug from pet name
   */
  static generateSlug(name) {
    const base = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const hash = crypto.randomBytes(4).toString('hex');
    return `${base}-${hash}`;
  }

  /**
   * Fetches the pet owned by a specific user.
   */
  static async getPetByUserId(userId) {
    const { data, error } = await supabaseAdmin
      .from('pets')
      .select('*')
      .eq('user_id', userId)
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw new Error(error.message);
    }

    if (!data) return null;

    return {
      ...data,
      nicknames: data.nicknames || [],
      personalities: data.personalities || [],
      photos: data.photos || [],
    };
  }

  /**
   * Fetches a pet by its slug (public, no user filter).
   */
  static async getPetBySlug(slug) {
    const { data, error } = await supabaseAdmin
      .from('pets')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw new Error(error.message);
    }

    return {
      ...data,
      nicknames: data.nicknames || [],
      personalities: data.personalities || [],
      photos: data.photos || [],
    };
  }

  /**
   * Gets pet with day counter using the DB function.
   */
  static async getPetWithDay(slug) {
    const { data, error } = await supabaseAdmin
      .rpc('get_pet_with_day', { pet_slug: slug });

    if (error) {
      throw new Error(error.message);
    }

    if (!data || data.length === 0) return null;

    const pet = data[0];
    return {
      ...pet,
      nicknames: pet.nicknames || [],
      personalities: pet.personalities || [],
      photos: pet.photos || [],
    };
  }

  /**
   * Lists all pets for a user.
   */
  static async listPetsByUser(userId) {
    const { data, error } = await supabaseAdmin
      .from('pets')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      throw new Error(error.message);
    }

    return (data || []).map(pet => ({
      ...pet,
      nicknames: pet.nicknames || [],
      personalities: pet.personalities || [],
      photos: pet.photos || [],
    }));
  }

  /**
   * Creates a new pet record in Supabase.
   * Stores seed hash for PRNG procedural grammar.
   */
  static async createPet(userId, data) {
    const petId = crypto.randomUUID();
    const slug = this.generateSlug(data.name);
    const seed = crypto.randomBytes(32).toString('hex');

    const { name, breed, gender, nicknames, favoritePlace, favoriteObject, personalities, photos } = data;

    const { error } = await supabaseAdmin
      .from('pets')
      .insert({
        id: petId,
        user_id: userId,
        name,
        breed,
        gender,
        nicknames: JSON.stringify(nicknames || []),
        favorite_place: favoritePlace || '',
        favorite_object: favoriteObject || '',
        personalities: JSON.stringify(personalities || []),
        photos: JSON.stringify(photos || []),
        slug,
        seed,
      });

    if (error) {
      throw new Error(error.message);
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

    const { error } = await supabaseAdmin
      .from('pets')
      .update({
        name,
        breed,
        gender,
        nicknames: JSON.stringify(nicknames || []),
        favorite_place: favoritePlace || '',
        favorite_object: favoriteObject || '',
        personalities: JSON.stringify(personalities || []),
        photos: JSON.stringify(photos || []),
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId);

    if (error) {
      throw new Error(error.message);
    }

    return this.getPetByUserId(userId);
  }
}
