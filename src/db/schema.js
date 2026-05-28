import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
const sqlite_table = sqliteTable; // alias for consistency

// ── Users table ──────────────────────────────────────────────
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  plan: text('plan').notNull(),                              // 'annual' | 'lifetime'
  status: text('status').notNull().default('pending_payment'), // 'pending_payment' | 'active'
  createdAt: text('created_at').notNull(),
});

// ── Sessions (cookie-based auth) ─────────────────────────────
export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at').notNull(),               // unix ms
});

// ── Pets ─────────────────────────────────────────────────────
export const pets = sqliteTable('pets', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  breed: text('breed').notNull(),
  gender: text('gender').notNull(),                         // 'Macho' | 'Fêmea'
  nicknames: text('nicknames').notNull(),                   // json array
  favoritePlace: text('favorite_place').notNull(),
  favoriteObject: text('favorite_object').notNull(),
  personalities: text('personalities').notNull(),          // json array
  photos: text('photos').notNull(),                         // json array (max 5)
  createdAt: text('created_at').notNull(),
});

// ── Orders ───────────────────────────────────────────────────
export const orders = sqliteTable('orders', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  plan: text('plan').notNull(),                             // 'annual' | 'lifetime'
  amount: real('amount').notNull(),                         // BRL
  currency: text('currency').notNull().default('BRL'),
  status: text('status').notNull().default('pending'),       // 'pending'|'paid'|'refunded'|'failed'
  paymentMethod: text('payment_method'),                    // 'pix'|'credit_card'|'gift_card'
  externalId: text('external_id'),                          // gateway reference
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// ── Subscriptions ────────────────────────────────────────────
export const subscriptions = sqliteTable('subscriptions', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  plan: text('plan').notNull(),                             // 'annual' | 'lifetime'
  orderId: text('order_id').references(() => orders.id, { onDelete: 'set null' }),
  status: text('status').notNull().default('inactive'),      // 'active'|'inactive'|'cancelled'|'expired'
  startedAt: text('started_at').notNull(),
  expiresAt: text('expires_at'),                            // null = lifetime
  cancelledAt: text('cancelled_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// ── Payments ─────────────────────────────────────────────────
export const payments = sqliteTable('payments', {
  id: text('id').primaryKey(),
  orderId: text('order_id')
    .notNull()
    .references(() => orders.id, { onDelete: 'cascade' }),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  amount: real('amount').notNull(),
  currency: text('currency').notNull().default('BRL'),
  method: text('method').notNull(),                          // 'pix'|'credit_card'|'gift_card'
  status: text('status').notNull().default('pending'),       // 'pending'|'approved'|'refunded'|'failed'
  externalId: text('external_id'),
  metadata: text('metadata'),                               // json – gateway data
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// ── Letters ──────────────────────────────────────────────────
export const letters = sqliteTable('letters', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  petId: text('pet_id')
    .notNull()
    .references(() => pets.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  body: text('body').notNull(),
  isPaid: integer('is_paid', { mode: 'boolean' }).notNull().default(false),
  orderId: text('order_id').references(() => orders.id, { onDelete: 'set null' }),
  status: text('status').notNull().default('draft'),        // 'draft'|'sent'|'delivered'|'replied'
  sentAt: text('sent_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// ── Gift Cards ───────────────────────────────────────────────
export const giftCards = sqliteTable('gift_cards', {
  id: text('id').primaryKey(),
  code: text('code').notNull().unique(),                    // 'SKY-XXXX-XXXX'
  plan: text('plan').notNull(),                             // 'annual' | 'lifetime'
  createdBy: text('created_by').references(() => users.id, { onDelete: 'set null' }),
  redeemedBy: text('redeemed_by').references(() => users.id, { onDelete: 'set null' }),
  status: text('status').notNull().default('active'),        // 'active'|'redeemed'|'expired'|'cancelled'
  expiresAt: text('expires_at'),
  redeemedAt: text('redeemed_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// ── Letter Replies ───────────────────────────────────────────
export const letterReplies = sqliteTable('letter_replies', {
  id: text('id').primaryKey(),
  letterId: text('letter_id')
    .notNull()
    .references(() => letters.id, { onDelete: 'cascade' }),
  body: text('body').notNull(),
  type: text('type').notNull().default('procedural'),       // 'procedural'|'manual'|'ai_generated'
  seed: text('seed'),                                       // procedural generation seed
  createdAt: text('created_at').notNull(),
});
