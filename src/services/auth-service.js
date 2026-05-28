import crypto from 'crypto';
import { db } from '../db/index.js';
import { users, sessions } from '../db/schema.js';
import { eq } from 'drizzle-orm';

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
    const existing = await db.select().from(users).where(eq(users.email, email.toLowerCase().trim())).limit(1);
    if (existing.length > 0) {
      throw new Error('Este e-mail já está cadastrado.');
    }

    const userId = crypto.randomUUID();
    const pHash = await hashPassword(password);
    const createdAt = new Date().toISOString();

    await db.insert(users).values({
      id: userId,
      name,
      email: email.toLowerCase().trim(),
      passwordHash: pHash,
      plan,
      status,
      createdAt,
    });

    // Return the new user
    const [newUser] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    return newUser;
  }

  /**
   * Logs in a user, returning a session token
   */
  static async login(email, password) {
    const matchedUsers = await db.select().from(users).where(eq(users.email, email.toLowerCase().trim())).limit(1);
    if (matchedUsers.length === 0) {
      throw new Error('E-mail ou senha incorretos.');
    }

    const user = matchedUsers[0];
    const isCorrect = await verifyPassword(password, user.passwordHash);
    if (!isCorrect) {
      throw new Error('E-mail ou senha incorretos.');
    }

    // Create session
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + SESSION_DURATION;

    await db.insert(sessions).values({
      id: sessionToken,
      userId: user.id,
      expiresAt,
    });

    return { sessionToken, user };
  }

  /**
   * Validates a session token
   */
  static async validateSession(sessionToken) {
    if (!sessionToken) return null;

    const matchedSessions = await db.select().from(sessions).where(eq(sessions.id, sessionToken)).limit(1);
    if (matchedSessions.length === 0) return null;

    const session = matchedSessions[0];
    if (Date.now() > session.expiresAt) {
      // Session expired, delete it
      await db.delete(sessions).where(eq(sessions.id, sessionToken));
      return null;
    }

    // Fetch user
    const matchedUsers = await db.select().from(users).where(eq(users.id, session.userId)).limit(1);
    if (matchedUsers.length === 0) return null;

    return {
      session,
      user: matchedUsers[0],
    };
  }

  /**
   * Logs out a user, deleting their session
   */
  static async logout(sessionToken) {
    if (!sessionToken) return;
    await db.delete(sessions).where(eq(sessions.id, sessionToken));
  }

  /**
   * Activates a user's subscription (used in checkout)
   */
  static async activateUserPlan(userId) {
    await db.update(users)
      .set({ status: 'active' })
      .where(eq(users.id, userId));
  }
}
