import test from 'node:test';
import assert from 'node:assert';
import handler from './lead.js';

test('Lead API handler', async (t) => {
  const originalEnv = { ...process.env };

  t.beforeEach(() => {
    process.env.TG_BOT_TOKEN = 'test_token';
    process.env.TG_CHAT_ID = 'test_chat';
    global.fetch = async () => ({
      ok: true,
      json: async () => ({ ok: true }),
      text: async () => 'ok'
    });
  });

  t.afterEach(() => {
    // Correctly restore environment variables
    for (const key in process.env) {
      if (!(key in originalEnv)) {
        delete process.env[key];
      }
    }
    Object.assign(process.env, originalEnv);
  });

  await t.test('returns 405 if method is not POST', async () => {
    const req = { method: 'GET' };
    let status, json;
    const res = {
      status: (s) => { status = s; return res; },
      json: (j) => { json = j; return res; }
    };

    await handler(req, res);
    assert.strictEqual(status, 405);
    assert.strictEqual(json.error, 'Method not allowed');
  });

  await t.test('returns 400 if parentName or phone is missing', async () => {
    const req = { method: 'POST', body: { phone: '123' } };
    let status, json;
    const res = {
      status: (s) => { status = s; return res; },
      json: (j) => { json = j; return res; }
    };

    await handler(req, res);
    assert.strictEqual(status, 400);
    assert.match(json.error, /Missing or invalid required fields/);
  });

  await t.test('returns 400 if input is too long', async () => {
    const req = { method: 'POST', body: { parentName: 'a'.repeat(101), phone: '123' } };
    let status, json;
    const res = {
      status: (s) => { status = s; return res; },
      json: (j) => { json = j; return res; }
    };

    await handler(req, res);
    assert.strictEqual(status, 400);
    assert.strictEqual(json.error, 'Input too long');
  });

  await t.test('returns 500 if environment variables are missing', async () => {
    delete process.env.TG_BOT_TOKEN;
    const req = { method: 'POST', body: { parentName: 'John', phone: '123' } };
    let status, json;
    const res = {
      status: (s) => { status = s; return res; },
      json: (j) => { json = j; return res; }
    };

    await handler(req, res);
    assert.strictEqual(status, 500);
    assert.match(json.error, /Missing TG_BOT_TOKEN/);
  });

  await t.test('returns 502 if Telegram API returns not ok', async () => {
    global.fetch = async () => ({
      ok: false,
      text: async () => 'Telegram error message'
    });

    const req = { method: 'POST', body: { parentName: 'John', phone: '123' } };
    let status, json;
    const res = {
      status: (s) => { status = s; return res; },
      json: (j) => { json = j; return res; }
    };

    await handler(req, res);
    assert.strictEqual(status, 502);
    assert.strictEqual(json.error, 'Telegram API error');
    assert.strictEqual(json.details, 'Telegram error message');
  });

  await t.test('returns 500 if an error is thrown (catch block)', async () => {
    global.fetch = async () => { throw new Error('Network failure'); };

    const req = { method: 'POST', body: { parentName: 'John', phone: '123' } };
    let status, json;
    const res = {
      status: (s) => { status = s; return res; },
      json: (j) => { json = j; return res; }
    };

    await handler(req, res);
    assert.strictEqual(status, 500);
    assert.strictEqual(json.error, 'Network failure');
  });

  await t.test('returns 200 on success', async () => {
    const req = { method: 'POST', body: { parentName: 'John', phone: '123' } };
    let status, json;
    const res = {
      status: (s) => { status = s; return res; },
      json: (j) => { json = j; return res; }
    };

    await handler(req, res);
    assert.strictEqual(status, 200);
    assert.strictEqual(json.ok, true);
  });
});
