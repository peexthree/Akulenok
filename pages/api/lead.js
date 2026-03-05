export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};

    // 🛡️ Input Validation & Sanitization
    const sanitize = (val, maxLen) => {
      if (typeof val !== 'string') return '';
      return val.trim().substring(0, maxLen);
    };

    const parentName = sanitize(body.parentName, 100);
    const phone = sanitize(body.phone, 30);
    const childAge = sanitize(body.childAge, 100);
    const timePref = sanitize(body.timePref, 100);
    const utm = sanitize(body.utm, 1000);

    // Basic validation: name and phone are required
    if (!parentName || !phone) {
      return res.status(400).json({ error: 'Missing or invalid required fields (parentName, phone)' });
    }

    // Check if original values were too long (optional, but good for reporting 400)
    if (
      (body.parentName && String(body.parentName).length > 100) ||
      (body.phone && String(body.phone).length > 30) ||
      (body.childAge && String(body.childAge).length > 100) ||
      (body.timePref && String(body.timePref).length > 100) ||
      (body.utm && String(body.utm).length > 1000)
    ) {
      return res.status(400).json({ error: 'Input too long' });
    }

    const tgToken = process.env.TG_BOT_TOKEN;
    const chatId = process.env.TG_CHAT_ID;

    if (!tgToken || !chatId) {
      return res.status(500).json({ error: 'Missing TG_BOT_TOKEN or TG_CHAT_ID envs' });
    }

    const text =
`🦈 Новая заявка с лендинга
https://www.akulenok-tmz.ru/

Имя: ${parentName || '-'}
Телефон: ${phone || '-'}
Возраст ребёнка: ${childAge || '-'}
Удобное время для связи: ${timePref || '-'}`;

    const tgUrl = `https://api.telegram.org/bot${tgToken}/sendMessage`;
    const tgResp = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!tgResp.ok) {
      const details = await tgResp.text();
      return res.status(502).json({ error: 'Telegram API error', details });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: e?.message || 'unknown' });
  }
}
