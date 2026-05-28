import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema.js';

const url =
  (typeof process !== 'undefined' ? process.env.TURSO_DATABASE_URL : null) ||
  (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.TURSO_DATABASE_URL : null) ||
  'file:local.db';

const authToken =
  (typeof process !== 'undefined' ? process.env.TURSO_AUTH_TOKEN : null) ||
  (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.TURSO_AUTH_TOKEN : null) ||
  undefined;

export const client = createClient({ url, authToken });

export const db = drizzle(client, { schema });
