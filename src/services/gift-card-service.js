import crypto from 'crypto';
import { db } from '../db/index.js';
import { giftCards, users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

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

function mapToExternal(dbCard) {
  if (!dbCard) return null;
  return {
    code: dbCard.code,
    sender_name: dbCard.senderName,
    sender_email: dbCard.senderEmail,
    recipient_name: dbCard.recipientName,
    recipient_email: dbCard.recipientEmail,
    pet_name: dbCard.petName,
    plan: dbCard.plan,
    message: dbCard.message,
    design: dbCard.design,
    status: dbCard.status,
    created_at: dbCard.createdAt,
    expires_at: dbCard.expiresAt,
    redeemed_at: dbCard.redeemedAt,
    redeemed_by: dbCard.redeemedBy
  };
}

export class GiftCardService {
  static async createGiftCard(data) {
    const { sender_name, sender_email, recipient_email, recipient_name, pet_name, plan, message, design, status = 'pending_payment', buyer_id = null } = data;

    let code;
    let attempts = 0;
    let success = false;

    while (!success && attempts < 100) {
      code = generateCode();
      attempts++;

      const existing = await db.select().from(giftCards).where(eq(giftCards.code, code)).limit(1);
      if (existing.length === 0) {
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

    await db.insert(giftCards).values({
      code,
      senderName: sender_name,
      senderEmail: sender_email || 'no-email@noticias-do-ceu.com',
      recipientName: recipient_name,
      recipientEmail: recipient_email || null,
      petName: pet_name || null,
      plan,
      message: message || null,
      design,
      status,
      createdAt: created_at,
      expiresAt: expires_at,
      buyerId: buyer_id || null,
    });

    const [newCard] = await db.select().from(giftCards).where(eq(giftCards.code, code)).limit(1);
    return mapToExternal(newCard);
  }

  static async confirmPayment(code) {
    const cleanCode = code.trim().toUpperCase();
    const existing = await db.select().from(giftCards).where(eq(giftCards.code, cleanCode)).limit(1);
    if (existing.length === 0) {
      throw new Error('Gift card not found');
    }

    await db.update(giftCards)
      .set({ status: 'active' })
      .where(eq(giftCards.code, cleanCode));

    const [updatedCard] = await db.select().from(giftCards).where(eq(giftCards.code, cleanCode)).limit(1);
    return mapToExternal(updatedCard);
  }

  static async getGiftCardByCode(code) {
    if (!code) return null;
    const cleanCode = code.trim().toUpperCase();
    const results = await db.select().from(giftCards).where(eq(giftCards.code, cleanCode)).limit(1);
    if (results.length === 0) return null;
    return mapToExternal(results[0]);
  }

  static async redeemGiftCard(code, userId) {
    const cleanCode = code.trim().toUpperCase();
    const matched = await db.select().from(giftCards).where(eq(giftCards.code, cleanCode)).limit(1);
    if (matched.length === 0) {
      return { error: 'not_found' };
    }

    const card = matched[0];

    if (card.status !== 'active' && card.status !== 'redeemed') {
      return { error: 'pending_payment' };
    }

    if (card.expiresAt) {
      const expiresTime = new Date(card.expiresAt).getTime();
      const now = Date.now();
      if (now > expiresTime) {
        return { error: 'expired' };
      }
    }

    if (card.redeemedBy) {
      if (card.redeemedBy === userId) {
        return { success: true, redeemed_at: card.redeemedAt, alreadyRedeemed: true };
      } else {
        return { error: 'already_redeemed' };
      }
    }

    const redeemed_at = new Date().toISOString();

    await db.update(giftCards)
      .set({
        status: 'redeemed',
        redeemedBy: userId,
        redeemedAt: redeemed_at
      })
      .where(eq(giftCards.code, cleanCode));

    await db.update(users)
      .set({
        plan: card.plan,
        status: 'active',
        pendingRenewal: card.plan === 'annual',
      })
      .where(eq(users.id, userId));

    return { success: true, redeemed_at, alreadyRedeemed: false };
  }

  static async listGiftCards(page = 1, limit = 10) {
    const offset = (page - 1) * limit;

    const allCards = await db.select().from(giftCards);
    const total = allCards.length;

    const results = await db.select()
      .from(giftCards)
      .limit(limit)
      .offset(offset);

    const sorted = results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return {
      cards: sorted.map(mapToExternal),
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    };
  }
}
