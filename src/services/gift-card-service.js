import crypto from 'crypto';

// In-memory store for gift cards (transient in serverless environments)
const giftCards = [
  {
    code: "TEST-CARD-VITA",
    sender_name: "Remetente de Teste",
    recipient_email: "amigo@example.com",
    recipient_name: "Amigo de Teste",
    pet_name: "Rex",
    plan: "lifetime",
    message: "Uma mensagem carinhosa para testar o resgate.",
    design: "nuvens",
    created_at: new Date().toISOString(),
    expires_at: null,
    redeemed_at: null,
    redeemed_by: null
  }
];

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

    // Find unique code
    while (!success && attempts < 100) {
      code = generateCode();
      attempts++;

      const exists = giftCards.some(c => c.code === code);
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

    giftCards.push(card);

    return card;
  }

  static getGiftCardByCode(code) {
    const card = giftCards.find(c => c.code === code);
    if (!card) return null;
    return card;
  }

  static redeemGiftCard(code, userId) {
    const card = giftCards.find(c => c.code === code);
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
        // Idempotency: same user gets success
        return { success: true, redeemed_at: card.redeemed_at, alreadyRedeemed: true };
      } else {
        return { error: 'already_redeemed' };
      }
    }

    const redeemed_at = new Date().toISOString();
    card.redeemed_by = userId;
    card.redeemed_at = redeemed_at;

    return { success: true, redeemed_at, alreadyRedeemed: false };
  }

  static listGiftCards(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const total = giftCards.length;

    // Sort by created_at DESC
    const sorted = [...giftCards].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const pageCards = sorted.slice(offset, offset + limit);

    return {
      cards: pageCards,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    };
  }
}
