import { Router } from 'express';
import { GiftCardService } from '../services/gift-card-service.js';
import {
  validateGiftCardCreation,
  validateRedeem,
  validateCodeParam
} from '../middleware/validation.js';

const router = Router();

// 1. Create gift card
router.post('/gift-cards', validateGiftCardCreation, (req, res) => {
  try {
    const card = GiftCardService.createGiftCard(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Validate code, returns card info
router.get('/gift-cards/:code', validateCodeParam, (req, res) => {
  try {
    const { code } = req.params;
    const card = GiftCardService.getGiftCardByCode(code);

    if (!card) {
      return res.status(404).json({ error: 'Gift card not found' });
    }

    // Check expiration
    if (card.expires_at) {
      const expiresTime = new Date(card.expires_at).getTime();
      if (Date.now() > expiresTime) {
        return res.status(410).json({ error: 'Gift card has expired', expires_at: card.expires_at });
      }
    }

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Redeem gift card
router.post('/gift-cards/:code/redeem', validateRedeem, (req, res) => {
  try {
    const { code } = req.params;
    const { user_id } = req.body;

    const result = GiftCardService.redeemGiftCard(code, user_id);

    if (result.error === 'not_found') {
      return res.status(404).json({ error: 'Gift card not found' });
    }

    if (result.error === 'expired') {
      return res.status(410).json({ error: 'Gift card has expired' });
    }

    if (result.error === 'already_redeemed') {
      return res.status(409).json({ error: 'Gift card has already been redeemed by a different user' });
    }

    res.status(200).json({
      code,
      redeemed_at: result.redeemed_at
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Admin list with pagination
router.get('/gift-cards', (req, res) => {
  try {
    const page = parseInt(req.query.page || '1', 10);
    const limit = parseInt(req.query.limit || '10', 10);

    if (isNaN(page) || page <= 0) {
      return res.status(400).json({ error: 'page must be a positive integer' });
    }
    if (isNaN(limit) || limit <= 0) {
      return res.status(400).json({ error: 'limit must be a positive integer' });
    }

    const data = GiftCardService.listGiftCards(page, limit);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
