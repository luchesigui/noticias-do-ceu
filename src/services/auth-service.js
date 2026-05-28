import crypto from 'crypto';
import { users as usersApi, sessions as sessionsApi } from '../lib/data.js';

const SESSION_DURATION = 1000 * 60 * 60 * 24 * 30; // 30 days

/**
 * Hash a password using scrypt
 * @param {string} password 
 * @returns {Promise<string>}
 */
export function hashPassword(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivedKey.toString('hex')}`);
    });
  });
}

/**
 * Verify a password against a hash
 * @param {string} password 
 * @param {string} hash 
 * @returns {Promise<boolean>}
 */
export function verifyPassword(password, hash) {
  return new Promise((resolve, reject) => {
    if (!hash || !hash.includes(':')) {
      resolve(false);
      return;
    }
    const [salt, key] = hash.split(':');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key === derivedKey.toString('hex'));
    });
  });
}

export class AuthService {
  /**
   * Registers a new user
   */
  static async register(name, email, password, plan, status = 'pending_payment') {
    const { data: existing, error: existingError } = await usersApi.findByEmail(email);
    if (existingError) {
      throw existingError;
    }
    if (existing) {
      throw new Error('Este e-mail já está cadastrado.');
    }

    const userId = crypto.randomUUID();
    const pHash = await hashPassword(password);
    const createdAt = new Date().toISOString();

    const { error: createError } = await usersApi.create({
      id: userId,
      name,
      email: email.toLowerCase().trim(),
      passwordHash: pHash,
      plan,
      status,
      createdAt,
    });

    if (createError) {
      throw createError;
    }

    // Return the new user
    const { data: newUser, error: fetchError } = await usersApi.findById(userId);
    if (fetchError) {
      throw fetchError;
    }
    return newUser;
  }

  /**
   * Logs in a user, returning a session token
   */
  static async login(email, password) {
    const { data: user, error: findError } = await usersApi.findByEmail(email);
    if (findError) {
      throw findError;
    }
    if (!user) {
      throw new Error('E-mail ou senha incorretos.');
    }

    const isCorrect = await verifyPassword(password, user.passwordHash);
    if (!isCorrect) {
      throw new Error('E-mail ou senha incorretos.');
    }

    // Create session
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + SESSION_DURATION;

    const { error: sessionError } = await sessionsApi.create({
      id: sessionToken,
      userId: user.id,
      expiresAt,
    });

    if (sessionError) {
      throw sessionError;
    }

    return { sessionToken, user };
  }

  /**
   * Validates a session token
   */
  static async validateSession(sessionToken) {
    if (!sessionToken) return null;

    const { data: session, error: sessionError } = await sessionsApi.findById(sessionToken);
    if (sessionError || !session) return null;

    if (Date.now() > session.expiresAt) {
      // Session expired, delete it
      await sessionsApi.delete(sessionToken);
      return null;
    }

    // Fetch user
    const { data: user, error: userError } = await usersApi.findById(session.userId);
    if (userError || !user) return null;

    return {
      session,
      user,
    };
  }

  /**
   * Logs out a user, deleting their session
   */
  static async logout(sessionToken) {
    if (!sessionToken) return;
    await sessionsApi.delete(sessionToken);
  }

  /**
   * Activates a user's subscription (used in checkout)
   */
  static async activateUserPlan(userId) {
    const { error } = await usersApi.update(userId, { status: 'active' });
    if (error) {
      throw error;
    }
  }
}
