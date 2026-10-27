const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 минут
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export default async function handler(req, res) {
  if (req?.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const clientIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const body = req.body || {};

    // 🛡️ Honeypot check (скрытое поле от спам-ботов)
    if (body.website || body.honeypot || body.fax) {
      return res.status(200).json({ ok: true });
    }

    // Input Sanitization
    const sanitize = (val, maxLen) => {
      if (typeof val !== 'string') return '';
      return val.trim().substring(0, maxLen);
    };

    const parentName = sanitize(body.parentName, 100);
    const phone = sanitize(body.phone, 30);
    const childAge = sanitize(body.childAge, 100);
    const timePref = sanitize(body.timePref, 100);

    // Валидация обязательных полей
    if (!parentName || !phone) {
      return res.status(400).json({ error: 'Missing or invalid required fields (parentName, phone)' });
    }

    // Проверка формата телефона
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return res.status(400).json({ error: 'Invalid phone format' });
    }

    const tgToken = process.env.TG_BOT_TOKEN;
    const chatId = process.env.TG_CHAT_ID;

    if (!tgToken || !chatId) {
      console.error('Missing TG_BOT_TOKEN or TG_CHAT_ID envs');
      return res.status(500).json({ error: 'Internal server error' });
    }

    const text =
`🦈 Новая заявка с лендинга
https://www.akulenok-tmz.ru/

Имя: ${parentName}
Телефон: ${phone}
Возраст ребёнка: ${childAge || '-'}
Цель: ${timePref || '-'}`;

    const tgUrl = `https://api.telegram.org/bot${tgToken}/sendMessage`;
    const tgResp = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!tgResp.ok) {
      const details = await tgResp.text();
      console.error('Telegram API error:', details);
      return res.status(502).json({ error: 'Service temporarily unavailable' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Lead submission error:', e?.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
