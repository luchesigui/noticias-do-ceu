import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.js';

let _db = null;

export function getDb() {
  if (_db) return _db;

  const connectionString =
    process.env.DATABASE_URL ||
    (typeof import.meta !== 'undefined' && import.meta.env?.DATABASE_URL);

  if (!connectionString) {
    throw new Error('DATABASE_URL env var is required');
  }

  _db = drizzle(neon(connectionString), { schema });
  return _db;
}

// Convenience proxy — preserves existing `db.select()` usage
export const db = new Proxy({}, {
  get(_, prop) {
    return getDb()[prop];
  },
});
