process.env.NODE_ENV = 'test';
import test from 'node:test';
import assert from 'node:assert';
import app from '../src/app.js';
import db from '../src/db/database.js';
import { v4 as uuidv4 } from 'uuid';

let server;
let baseUrl;

test.before(async () => {
  server = app.listen(0);
  const port = server.address().port;
  baseUrl = `http://localhost:${port}`;
});

test.after(() => {
  server.close();
  db.close();
});

test('POST /api/gift-cards - creates annual gift card successfully', async () => {
  const response = await fetch(`${baseUrl}/api/gift-cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender_name: 'Guilherme',
      recipient_email: 'test@example.com',
      recipient_name: 'Ana',
      pet_name: 'Rex',
      plan: 'annual',
      message: 'Com muito amor',
      design: 'nuvens'
    })
  });

  assert.strictEqual(response.status, 201);
  const data = await response.json();
  assert.match(data.code, /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);
  assert.strictEqual(data.sender_name, 'Guilherme');
  assert.strictEqual(data.recipient_name, 'Ana');
  assert.strictEqual(data.pet_name, 'Rex');
  assert.strictEqual(data.plan, 'annual');
  assert.strictEqual(data.message, 'Com muito amor');
  assert.strictEqual(data.design, 'nuvens');
  assert.ok(data.created_at);
  assert.ok(data.expires_at);
  // annual plan expires in 1 year
  const diff = new Date(data.expires_at).getTime() - new Date(data.created_at).getTime();
  assert.ok(diff > 364 * 24 * 60 * 60 * 1000 && diff < 366 * 24 * 60 * 60 * 1000);
});

test('POST /api/gift-cards - creates lifetime gift card with null expiry', async () => {
  const response = await fetch(`${baseUrl}/api/gift-cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender_name: 'Guilherme',
      recipient_email: 'test2@example.com',
      recipient_name: 'Bia',
      plan: 'lifetime',
      design: 'patinhas'
    })
  });

  assert.strictEqual(response.status, 201);
  const data = await response.json();
  assert.strictEqual(data.plan, 'lifetime');
  assert.strictEqual(data.expires_at, null);
});

test('POST /api/gift-cards - fails on invalid plan or design', async () => {
  const response = await fetch(`${baseUrl}/api/gift-cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender_name: 'Guilherme',
      recipient_email: 'test@example.com',
      recipient_name: 'Ana',
      plan: 'monthly', // invalid
      design: 'nuvens'
    })
  });
  assert.strictEqual(response.status, 400);

  const response2 = await fetch(`${baseUrl}/api/gift-cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender_name: 'Guilherme',
      recipient_email: 'test@example.com',
      recipient_name: 'Ana',
      plan: 'annual',
      design: 'unknown' // invalid
    })
  });
  assert.strictEqual(response2.status, 400);
});

test('GET /api/gift-cards/:code - gets gift card details', async () => {
  // Create first
  const createRes = await fetch(`${baseUrl}/api/gift-cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender_name: 'Guilherme',
      recipient_email: 'get@example.com',
      recipient_name: 'Carlos',
      plan: 'lifetime',
      design: 'estrelas'
    })
  });
  const card = await createRes.json();

  const response = await fetch(`${baseUrl}/api/gift-cards/${card.code}`);
  assert.strictEqual(response.status, 200);
  const fetched = await response.json();
  assert.strictEqual(fetched.code, card.code);
  assert.strictEqual(fetched.recipient_name, 'Carlos');
});

test('GET /api/gift-cards/:code - 404 for non-existent', async () => {
  const response = await fetch(`${baseUrl}/api/gift-cards/ABCD-EFGH-IJKL`);
  assert.strictEqual(response.status, 404);
});

test('GET /api/gift-cards/:code - 410 for expired', async () => {
  // Directly insert an expired card into the in-memory SQLite DB
  const code = 'EXPI-REDC-ARDS';
  db.prepare(`
    INSERT INTO gift_cards (code, sender_name, recipient_email, recipient_name, plan, design, created_at, expires_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    code,
    'Sender',
    'expired@example.com',
    'Recipient',
    'annual',
    'pomba',
    '2024-01-01T00:00:00.000Z',
    '2025-01-01T00:00:00.000Z'
  );

  const response = await fetch(`${baseUrl}/api/gift-cards/${code}`);
  assert.strictEqual(response.status, 410);
});

test('POST /api/gift-cards/:code/redeem - redeem successfully, check idempotency and conflict', async () => {
  const createRes = await fetch(`${baseUrl}/api/gift-cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender_name: 'Guilherme',
      recipient_email: 'redeem@example.com',
      recipient_name: 'Beto',
      plan: 'lifetime',
      design: 'pomba'
    })
  });
  const card = await createRes.json();

  const userId1 = uuidv4();
  const userId2 = uuidv4();

  // 1. First redemption (success)
  const redeemRes1 = await fetch(`${baseUrl}/api/gift-cards/${card.code}/redeem`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId1 })
  });
  assert.strictEqual(redeemRes1.status, 200);
  const data1 = await redeemRes1.json();
  assert.ok(data1.redeemed_at);

  // 2. Second redemption by SAME user (idempotent 200, same timestamp)
  const redeemRes2 = await fetch(`${baseUrl}/api/gift-cards/${card.code}/redeem`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId1 })
  });
  assert.strictEqual(redeemRes2.status, 200);
  const data2 = await redeemRes2.json();
  assert.strictEqual(data2.redeemed_at, data1.redeemed_at);

  // 3. Redemption by DIFFERENT user (conflict 409)
  const redeemRes3 = await fetch(`${baseUrl}/api/gift-cards/${card.code}/redeem`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId2 })
  });
  assert.strictEqual(redeemRes3.status, 409);
});

test('GET /api/gift-cards - lists gift cards with pagination', async () => {
  const listRes = await fetch(`${baseUrl}/api/gift-cards?page=1&limit=2`);
  assert.strictEqual(listRes.status, 200);
  const data = await listRes.json();
  assert.ok(Array.isArray(data.cards));
  assert.ok(data.pagination);
  assert.strictEqual(data.pagination.limit, 2);
  assert.strictEqual(data.pagination.page, 1);
});
