export default async function handler(req, res) {
  if (req?.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
    if (webhookSecret) {
      const incomingSecret = req.headers['x-telegram-bot-api-secret-token'];
      if (incomingSecret !== webhookSecret) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    const token = process.env.TELEGRAM_TOKEN || process.env.TG_BOT_TOKEN;
    if (!token) {
      console.error('TELEGRAM_TOKEN / TG_BOT_TOKEN is missing');
      return res.status(500).json({ error: 'Internal server error' });
    }

    const body = req.body || {};
    const chatId = body?.message?.chat?.id;
    const text = (body?.message?.text || '').trim();

    if (!chatId) {
      return res.status(200).json({ ok: true });
    }

    let msg;
    if (text === '/start') {
      msg =
        '🦈 Привет! Я бот центра «Акулёнок».\n\n' +
        'Занятия плаванием для детей от 3 месяцев в г. Туймазы.\n\n' +
        'Команды:\n' +
        '• /trial - пробное занятие\n' +
        '• /prices - цены\n' +
        '• /schedule - расписание и адрес\n' +
        '• /contacts - как связаться\n' +
        '• /privacy - политика конфиденциальности';
    } else if (text === '/trial') {
      msg = 'Запись на пробное: https://www.akulenok-tmz.ru/\nИли администратору: @akulenok_tmz';
    } else if (text === '/prices') {
      msg = 'Цены и абонементы смотрите на сайте: https://www.akulenok-tmz.ru/#pricing';
    } else if (text === '/schedule') {
      msg = 'Расписание и адрес: https://www.akulenok-tmz.ru/#contacts\nКонтакты: +7 (927) 303-99-77';
    } else if (text === '/contacts') {
      msg = 'Контакты: +7 (927) 303-99-77, Telegram/WhatsApp: @akulenok_tmz\nСайт: https://www.akulenok-tmz.ru/';
    } else if (text === '/privacy') {
      msg = 'Политика конфиденциальности: https://www.akulenok-tmz.ru/privacy';
    } else {
      msg = 'Команды: /trial /prices /schedule /contacts /privacy';
    }

    const tgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: msg, parse_mode: 'HTML' }),
    });

    if (!tgResp.ok) {
      const details = await tgResp.text();
      console.error('Telegram webhook response error:', details);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Telegram webhook error:', err?.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
