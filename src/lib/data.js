import { db } from '../db/index.js';
import {
  users as usersTable,
  sessions as sessionsTable,
  pets as petsTable,
  giftCards as giftCardsTable,
  orders as ordersTable,
  subscriptions as subscriptionsTable,
  letters as lettersTable,
} from '../db/schema.js';
import { eq, sql } from 'drizzle-orm';

// ─── Users ────────────────────────────────────────────────────────────────────

export const users = {
  async create(data) {
    try {
      const rows = await db.insert(usersTable).values({
        id: data.id,
        name: data.name,
        email: data.email.toLowerCase().trim(),
        passwordHash: data.passwordHash,
        plan: data.plan,
        status: data.status ?? 'pending_payment',
        pendingRenewal: data.pendingRenewal ?? false,
        createdAt: data.createdAt,
      }).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findByEmail(email) {
    try {
      const rows = await db.select().from(usersTable)
        .where(eq(usersTable.email, email.toLowerCase().trim()))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findById(id) {
    try {
      const rows = await db.select().from(usersTable)
        .where(eq(usersTable.id, id))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async update(id, updateData) {
    try {
      const set = {};
      if (updateData.name !== undefined) set.name = updateData.name;
      if (updateData.email !== undefined) set.email = updateData.email;
      if (updateData.passwordHash !== undefined) set.passwordHash = updateData.passwordHash;
      if (updateData.plan !== undefined) set.plan = updateData.plan;
      if (updateData.status !== undefined) set.status = updateData.status;
      if (updateData.pendingRenewal !== undefined) set.pendingRenewal = updateData.pendingRenewal;
      const rows = await db.update(usersTable).set(set)
        .where(eq(usersTable.id, id))
        .returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};

// ─── Sessions ─────────────────────────────────────────────────────────────────

export const sessions = {
  async create(data) {
    try {
      const rows = await db.insert(sessionsTable).values({
        id: data.id,
        userId: data.userId,
        expiresAt: data.expiresAt,
      }).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findById(id) {
    try {
      const rows = await db.select().from(sessionsTable)
        .where(eq(sessionsTable.id, id))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async delete(id) {
    try {
      const rows = await db.delete(sessionsTable)
        .where(eq(sessionsTable.id, id))
        .returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};

// ─── Pets ─────────────────────────────────────────────────────────────────────

export const pets = {
  async create(data) {
    try {
      const rows = await db.insert(petsTable).values({
        id: data.id,
        userId: data.userId,
        name: data.name,
        breed: data.breed,
        gender: data.gender,
        nicknames: data.nicknames,
        favoritePlace: data.favoritePlace,
        favoriteObject: data.favoriteObject,
        personalities: data.personalities,
        photos: data.photos,
        createdAt: data.createdAt,
        ...(data.slug !== undefined ? { slug: data.slug } : {}),
      }).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findByOwner(userId) {
    try {
      const rows = await db.select().from(petsTable)
        .where(eq(petsTable.userId, userId))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findBySlug(slug) {
    try {
      const rows = await db.select().from(petsTable)
        .where(eq(petsTable.slug, slug))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async update(userId, updateData) {
    try {
      const set = {};
      const fields = ['name', 'breed', 'gender', 'nicknames', 'favoritePlace', 'favoriteObject', 'personalities', 'photos', 'slug'];
      for (const f of fields) {
        if (updateData[f] !== undefined) set[f] = updateData[f];
      }
      const rows = await db.update(petsTable).set(set)
        .where(eq(petsTable.userId, userId))
        .returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async listByUser(userId) {
    try {
      const rows = await db.select().from(petsTable)
        .where(eq(petsTable.userId, userId));
      return { data: rows, error: null };
    } catch (error) {
      return { data: [], error };
    }
  },

  async getWithDay(slug) {
    try {
      const rows = await db.select().from(petsTable)
        .where(eq(petsTable.slug, slug))
        .limit(1);
      if (!rows[0]) return { data: null, error: null };
      const pet = rows[0];
      const createdDate = new Date(pet.createdAt);
      const diffTime = Math.abs(Date.now() - createdDate.getTime());
      pet.daysSinceCreation = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return { data: pet, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};

// ─── Gift Cards ───────────────────────────────────────────────────────────────

export const giftCards = {
  async create(data) {
    try {
      const rows = await db.insert(giftCardsTable).values({
        code: data.code,
        senderName: data.senderName ?? data.sender_name,
        senderEmail: data.senderEmail ?? data.sender_email,
        recipientName: data.recipientName ?? data.recipient_name,
        recipientEmail: data.recipientEmail ?? data.recipient_email,
        petName: data.petName ?? data.pet_name,
        plan: data.plan,
        message: data.message,
        status: data.status ?? 'pending_payment',
        createdAt: data.createdAt ?? data.created_at,
        expiresAt: data.expiresAt ?? data.expires_at,
        redeemedAt: data.redeemedAt ?? data.redeemed_at,
        redeemedBy: data.redeemedBy ?? data.redeemed_by,
        buyerId: data.buyerId ?? data.buyer_id,
      }).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findByCode(code) {
    try {
      const rows = await db.select().from(giftCardsTable)
        .where(eq(giftCardsTable.code, code.toUpperCase()))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async redeem(code, userId) {
    try {
      const rows = await db.update(giftCardsTable).set({
        redeemedAt: new Date().toISOString(),
        redeemedBy: userId,
        status: 'redeemed',
      }).where(eq(giftCardsTable.code, code)).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async list({ page = 1, limit = 10 } = {}) {
    try {
      const offset = (page - 1) * limit;
      const [countResult, rows] = await Promise.all([
        db.select({ count: sql`count(*)` }).from(giftCardsTable),
        db.select().from(giftCardsTable)
          .orderBy(sql`created_at desc`)
          .limit(limit)
          .offset(offset),
      ]);
      const total = Number(countResult[0]?.count ?? 0);
      return {
        data: {
          cards: rows,
          pagination: { total, page, limit, pages: Math.ceil(total / limit) },
        },
        error: null,
      };
    } catch (error) {
      return { data: { cards: [], pagination: { total: 0, page, limit, pages: 0 } }, error };
    }
  },
};

// ─── Orders ───────────────────────────────────────────────────────────────────

export const orders = {
  async create(data) {
    try {
      const rows = await db.insert(ordersTable).values({
        id: data.id,
        userId: data.userId ?? data.user_id,
        mpPaymentId: data.mpPaymentId ?? data.mp_payment_id,
        amount: data.amount,
        status: data.status ?? 'pending',
        paymentMethod: data.paymentMethod ?? data.payment_method,
        createdAt: data.createdAt ?? data.created_at,
        updatedAt: data.updatedAt ?? data.updated_at,
      }).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findById(id) {
    try {
      const rows = await db.select().from(ordersTable)
        .where(eq(ordersTable.id, id))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findByUser(userId) {
    try {
      const rows = await db.select().from(ordersTable)
        .where(eq(ordersTable.userId, userId));
      return { data: rows, error: null };
    } catch (error) {
      return { data: [], error };
    }
  },

  async update(id, updateData) {
    try {
      const set = {};
      if (updateData.status !== undefined) set.status = updateData.status;
      if (updateData.mpPaymentId !== undefined) set.mpPaymentId = updateData.mpPaymentId;
      if (updateData.amount !== undefined) set.amount = updateData.amount;
      if (updateData.paymentMethod !== undefined) set.paymentMethod = updateData.paymentMethod;
      set.updatedAt = new Date().toISOString();
      const rows = await db.update(ordersTable).set(set)
        .where(eq(ordersTable.id, id))
        .returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findByPaymentId(mpPaymentId) {
    try {
      const rows = await db.select().from(ordersTable)
        .where(eq(ordersTable.mpPaymentId, mpPaymentId))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};

// ─── Subscriptions ────────────────────────────────────────────────────────────

export const subscriptions = {
  async create(data) {
    try {
      const rows = await db.insert(subscriptionsTable).values({
        id: data.id,
        userId: data.userId ?? data.user_id,
        preapprovalId: data.preapprovalId ?? data.preapproval_id,
        status: data.status ?? 'active',
        plan: data.plan,
        createdAt: data.createdAt ?? data.created_at,
        updatedAt: data.updatedAt ?? data.updated_at,
      }).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findByUser(userId) {
    try {
      const rows = await db.select().from(subscriptionsTable)
        .where(eq(subscriptionsTable.userId, userId));
      return { data: rows, error: null };
    } catch (error) {
      return { data: [], error };
    }
  },

  async update(id, updateData) {
    try {
      const set = {};
      if (updateData.status !== undefined) set.status = updateData.status;
      if (updateData.plan !== undefined) set.plan = updateData.plan;
      set.updatedAt = new Date().toISOString();
      const rows = await db.update(subscriptionsTable).set(set)
        .where(eq(subscriptionsTable.id, id))
        .returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};

// ─── Letters ──────────────────────────────────────────────────────────────────

export const letters = {
  async create(data) {
    try {
      const rows = await db.insert(lettersTable).values({
        id: data.id,
        userId: data.userId ?? data.user_id,
        petId: data.petId ?? data.pet_id,
        petName: data.petName ?? data.pet_name,
        tutorName: data.tutorName ?? data.tutor_name,
        body: data.body,
        privacy: data.privacy ?? 'private',
        isPrivate: data.isPrivate ?? data.is_private ?? true,
        createdAt: data.createdAt ?? data.created_at,
        updatedAt: data.updatedAt ?? data.updated_at,
      }).returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async findByPet(petId) {
    try {
      const rows = await db.select().from(lettersTable)
        .where(eq(lettersTable.petId, petId));
      return { data: rows, error: null };
    } catch (error) {
      return { data: [], error };
    }
  },

  async findByUser(userId) {
    try {
      const rows = await db.select().from(lettersTable)
        .where(eq(lettersTable.userId, userId))
        .orderBy(sql`created_at desc`);
      return { data: rows, error: null };
    } catch (error) {
      return { data: [], error };
    }
  },

  async findById(id) {
    try {
      const rows = await db.select().from(lettersTable)
        .where(eq(lettersTable.id, id))
        .limit(1);
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async update(id, updateData) {
    try {
      const set = {};
      if (updateData.body !== undefined) set.body = updateData.body;
      if (updateData.privacy !== undefined) set.privacy = updateData.privacy;
      if (updateData.isPrivate !== undefined) set.isPrivate = updateData.isPrivate;
      if (updateData.petName !== undefined) set.petName = updateData.petName;
      if (updateData.tutorName !== undefined) set.tutorName = updateData.tutorName;
      set.updatedAt = new Date().toISOString();
      const rows = await db.update(lettersTable).set(set)
        .where(eq(lettersTable.id, id))
        .returning();
      return { data: rows[0] ?? null, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};
