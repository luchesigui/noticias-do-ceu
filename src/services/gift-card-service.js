import crypto from 'crypto';
import { giftCards as giftCardsApi } from '../lib/data.js';

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
  static async createGiftCard(data) {
    const { sender_name, recipient_email, recipient_name, pet_name, plan, message, design } = data;

    let code;
    let attempts = 0;
    let success = false;

    // Find unique code
    while (!success && attempts < 100) {
      code = generateCode();
      attempts++;

      const { data: exists, error } = await giftCardsApi.findByCode(code);
      if (!exists && !error) {
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

    const card = {
      code,
      sender_name,
      recipient_email,
      recipient_name,
      pet_name: pet_name || null,
      plan,
      message: message || null,
      design,
      created_at,
      expires_at,
      redeemed_at: null,
      redeemed_by: null
    };

    const { data: createdCard, error } = await giftCardsApi.create(card);
    if (error) {
      throw error;
    }

    return createdCard;
  }

  static async getGiftCardByCode(code) {
    const { data: card, error } = await giftCardsApi.findByCode(code);
    if (error) {
      throw error;
    }
    return card;
  }

  static async redeemGiftCard(code, userId) {
    const { data: card, error: findError } = await giftCardsApi.findByCode(code);
    if (findError || !card) {
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
        // Idempotency: same user gets success
        return { success: true, redeemed_at: card.redeemed_at, alreadyRedeemed: true };
      } else {
        return { error: 'already_redeemed' };
      }
    }

    const { data: redeemedCard, error: redeemError } = await giftCardsApi.redeem(code, userId);
    if (redeemError || !redeemedCard) {
      return { error: 'redeem_failed' };
    }

    return { success: true, redeemed_at: redeemedCard.redeemed_at, alreadyRedeemed: false };
  }

  static async listGiftCards(page = 1, limit = 10) {
    const { data, error } = await giftCardsApi.list({ page, limit });
    if (error) {
      throw error;
    }
    return data;
  }
}
