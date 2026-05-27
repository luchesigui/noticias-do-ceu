import crypto from 'crypto';
import db from '../db/database.js';

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let s = 0; s < 3; s++) {
    let segment = '';
    for (let i = 0; i < 4; i++) {
      const idx = crypto.randomInt(0, chars.length);
      segment += chars[idx];
    }
    code += (s > 0 ? '-' : '') + segment;
  }
  return code;
}

export class GiftCardService {
  static createGiftCard(data) {
    const { sender_name, recipient_email, recipient_name, pet_name, plan, message, design } = data;

    let code;
    let attempts = 0;
    let success = false;

    // Retry up to 100 times to find a unique code
    while (!success && attempts < 100) {
      code = generateCode();
      attempts++;

      // Check if it already exists
      const stmt = db.prepare('SELECT 1 FROM gift_cards WHERE code = ?');
      const exists = stmt.get(code);

      if (!exists) {
        success = true;
      }
    }

    if (!success) {
      throw new Error('Failed to generate a unique gift card code after 100 attempts.');
    }

    const created_at = new Date().toISOString();
    let expires_at = null;
    if (plan === 'annual') {
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      expires_at = expiryDate.toISOString();
    }

    const insertStmt = db.prepare(`
      INSERT INTO gift_cards (code, sender_name, recipient_email, recipient_name, pet_name, plan, message, design, created_at, expires_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertStmt.run(
      code,
      sender_name,
      recipient_email,
      recipient_name,
      pet_name || null,
      plan,
      message || null,
      design,
      created_at,
      expires_at
    );

    return {
      code,
      sender_name,
      recipient_email,
      recipient_name,
      pet_name: pet_name || null,
      plan,
      message: message || null,
      design,
      created_at,
      expires_at
    };
  }

  static getGiftCardByCode(code) {
    const stmt = db.prepare('SELECT * FROM gift_cards WHERE code = ?');
    const row = stmt.get(code);
    if (!row) return null;
    return row;
  }

  static redeemGiftCard(code, userId) {
    // We use a transaction for redemption
    const redeemTransaction = db.transaction(() => {
      const card = db.prepare('SELECT * FROM gift_cards WHERE code = ?').get(code);
      if (!card) {
        return { error: 'not_found' };
      }

      // Check expiration
      if (card.expires_at) {
        const expiresTime = new Date(card.expires_at).getTime();
        const now = Date.now();
        if (now > expiresTime) {
          return { error: 'expired' };
        }
      }

      // Check redemption status
      if (card.redeemed_by) {
        if (card.redeemed_by === userId) {
          // Idempotency: same user gets success with same timestamp
          return { success: true, redeemed_at: card.redeemed_at, alreadyRedeemed: true };
        } else {
          return { error: 'already_redeemed' };
        }
      }

      const redeemed_at = new Date().toISOString();
      const updateStmt = db.prepare(`
        UPDATE gift_cards
        SET redeemed_by = ?, redeemed_at = ?
        WHERE code = ?
      `);
      updateStmt.run(userId, redeemed_at, code);

      return { success: true, redeemed_at, alreadyRedeemed: false };
    });

    return redeemTransaction();
  }

  static listGiftCards(page = 1, limit = 10) {
    const offset = (page - 1) * limit;

    const countStmt = db.prepare('SELECT COUNT(*) as count FROM gift_cards');
    const total = countStmt.get().count;

    const listStmt = db.prepare(`
      SELECT * FROM gift_cards
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `);
    const cards = listStmt.all(limit, offset);

    return {
      cards,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    };
  }
}
