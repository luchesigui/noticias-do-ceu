import { letters as lettersApi } from '../lib/data.js';
import crypto from 'crypto';

export class LetterService {
  /**
   * Cria uma nova carta no banco de dados.
   */
  static async createLetter(userId, { petId, petName, tutorName, body, isPrivate = true }) {
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const { data, error } = await lettersApi.create({
      id,
      userId,
      petId,
      petName,
      tutorName,
      body,
      privacy: isPrivate ? 'private' : 'public',
      isPrivate: isPrivate,
      createdAt,
    });

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Busca todas as cartas de um usuário, ordenadas pela mais recente.
   */
  static async getLettersByUser(userId) {
    const { data, error } = await lettersApi.findByUser(userId);
    if (error) {
      throw error;
    }
    return data;
  }

  /**
   * Busca cartas públicas de um pet específico.
   */
  static async getPublicLettersByPet(petId) {
    const { data: petLetters, error } = await lettersApi.findByPet(petId);
    if (error) {
      throw error;
    }
    return (petLetters || [])
      .filter(letter => letter.privacy === 'public' || letter.isPrivate === false)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  /**
   * Busca uma carta pelo ID.
   */
  static async getLetterById(id) {
    const { data, error } = await lettersApi.findById(id);
    if (error) {
      throw error;
    }
    return data;
  }
}
