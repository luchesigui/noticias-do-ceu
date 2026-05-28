import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema.js';

// Fallbacks for environment variables in Astro (both dev and Vercel production)
const url = 
  (typeof process !== 'undefined' ? process.env.TURSO_DATABASE_URL : null) || 
  import.meta.env.TURSO_DATABASE_URL || 
  'file:local.db';

const authToken = 
  (typeof process !== 'undefined' ? process.env.TURSO_AUTH_TOKEN : null) || 
  import.meta.env.TURSO_AUTH_TOKEN || 
  undefined;

export const client = createClient({
  url,
  authToken,
});

export const db = drizzle(client, { schema });
