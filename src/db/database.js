import Database from 'better-sqlite3';
import path from 'path';

const dbPath = process.env.NODE_ENV === 'test' ? ':memory:' : path.join(process.cwd(), 'gift-cards.db');
const db = new Database(dbPath);

// Initialize table
db.exec(`
  CREATE TABLE IF NOT EXISTS gift_cards (
    code TEXT PRIMARY KEY,
    sender_name TEXT NOT NULL,
    recipient_email TEXT NOT NULL,
    recipient_name TEXT NOT NULL,
    pet_name TEXT,
    plan TEXT NOT NULL CHECK(plan IN ('annual', 'lifetime')),
    message TEXT,
    design TEXT NOT NULL CHECK(design IN ('nuvens', 'patinhas', 'estrelas', 'pomba')),
    created_at TEXT NOT NULL,
    expires_at TEXT,
    redeemed_at TEXT,
    redeemed_by TEXT
  );
`);

export default db;
