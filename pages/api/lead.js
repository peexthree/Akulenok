export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { parentName, phone, childAge, timePref, utm } = req.body || {};

    const tgToken =
      process.env.TG_BOT_TOKEN ||
      '7577773883:AAH5D8nYO_bqrvqefXqYYG0HUeRO5T_dTyo';
    const chatId = process.env.TG_CHAT_ID || '5178416366';

    if (!tgToken || !chatId) {
      return res.status(500).json({ error: 'Missing TG_BOT_TOKEN or TG_CHAT_ID envs' });
    }

    const text =
`🦈 Новая заявка с лендинга
Имя: ${parentName || '-'}
Телефон: ${phone || '-'}
Возраст ребёнка: ${childAge || '-'}
Удобное время: ${timePref || '-'}`;

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