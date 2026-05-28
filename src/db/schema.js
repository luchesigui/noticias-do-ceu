import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Users table
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  plan: text('plan').notNull(), // 'annual' | 'lifetime'
  status: text('status').notNull().default('pending_payment'), // 'pending_payment' | 'active'
  pendingRenewal: integer('pending_renewal', { mode: 'boolean' }).notNull().default(false),
  createdAt: text('created_at').notNull(),
});

// Sessions table for custom cookie-based auth
export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(), // random session token string
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at').notNull(), // Unix timestamp in milliseconds
});

// Pets table
export const pets = sqliteTable('pets', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  breed: text('breed').notNull(),
  gender: text('gender').notNull(), // 'Macho' | 'Fêmea'
  nicknames: text('nicknames').notNull(), // JSON string representing string[]
  favoritePlace: text('favorite_place').notNull(),
  favoriteObject: text('favorite_object').notNull(),
  personalities: text('personalities').notNull(), // JSON string representing string[]
  photos: text('photos').notNull(), // JSON string representing string[] (up to 5 photo paths/URLs)
  createdAt: text('created_at').notNull(),
});

// Gift cards table
export const giftCards = sqliteTable('gift_cards', {
  code: text('code').primaryKey(),
  senderName: text('sender_name').notNull(),
  senderEmail: text('sender_email').notNull(),
  recipientName: text('recipient_name').notNull(),
  recipientEmail: text('recipient_email'),
  petName: text('pet_name'),
  plan: text('plan').notNull(), // 'annual' | 'lifetime'
  message: text('message'),
  design: text('design').notNull(), // 'nuvens' | 'patinhas' | 'estrelas' | 'pomba'
  status: text('status').notNull().default('pending_payment'), // 'pending_payment' | 'active' | 'redeemed'
  createdAt: text('created_at').notNull(),
  expiresAt: text('expires_at'),
  redeemedAt: text('redeemed_at'),
  redeemedBy: text('redeemed_by').references(() => users.id, { onDelete: 'set null' }),
  buyerId: text('buyer_id').references(() => users.id, { onDelete: 'set null' }),
});

