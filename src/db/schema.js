import { pgTable, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';

// Users table
export const users = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  plan: text('plan').notNull(), // 'annual' | 'lifetime'
  status: text('status').notNull().default('pending_payment'), // 'pending_payment' | 'active'
  pendingRenewal: boolean('pending_renewal').notNull().default(false),
  createdAt: text('created_at').notNull(),
});

// Sessions table for custom cookie-based auth
export const sessions = pgTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at').notNull(), // Unix timestamp in ms
});

// Pets table
export const pets = pgTable('pets', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  breed: text('breed').notNull(),
  gender: text('gender').notNull(), // 'Macho' | 'Fêmea'
  nicknames: text('nicknames').notNull(), // JSON string
  favoritePlace: text('favorite_place').notNull(),
  favoriteObject: text('favorite_object').notNull(),
  personalities: text('personalities').notNull(), // JSON string
  photos: text('photos').notNull(), // JSON string
  slug: text('slug').unique(),
  seed: text('seed'),
  createdAt: text('created_at').notNull(),
});

// Gift cards table
export const giftCards = pgTable('gift_cards', {
  code: text('code').primaryKey(),
  senderName: text('sender_name').notNull(),
  senderEmail: text('sender_email').notNull(),
  recipientName: text('recipient_name').notNull(),
  recipientEmail: text('recipient_email'),
  petName: text('pet_name'),
  plan: text('plan').notNull(), // 'annual' | 'lifetime'
  message: text('message'),
  status: text('status').notNull().default('pending_payment'),
  createdAt: text('created_at').notNull(),
  expiresAt: text('expires_at'),
  redeemedAt: text('redeemed_at'),
  redeemedBy: text('redeemed_by').references(() => users.id, { onDelete: 'set null' }),
  buyerId: text('buyer_id').references(() => users.id, { onDelete: 'set null' }),
});

// Orders table
export const orders = pgTable('orders', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  mpPaymentId: text('mp_payment_id'),
  amount: integer('amount'),
  status: text('status').notNull().default('pending'),
  paymentMethod: text('payment_method'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at'),
});

// Subscriptions table
export const subscriptions = pgTable('subscriptions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  preapprovalId: text('preapproval_id'),
  status: text('status').notNull().default('active'),
  plan: text('plan').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at'),
});

// Letters table
export const letters = pgTable('letters', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  petId: text('pet_id').references(() => pets.id, { onDelete: 'set null' }),
  petName: text('pet_name'),
  tutorName: text('tutor_name'),
  body: text('body').notNull(),
  privacy: text('privacy').default('private'),
  isPrivate: boolean('is_private').notNull().default(true),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at'),
});
