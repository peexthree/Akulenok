export default async function handler(req, res) {
  // Разрешаем только POST от Telegram
  if (req.method !== "POST") return res.status(200).end("ok");

  // Опциональная проверка секретного токена вебхука Telegram
  const webhookSecret = process.env.TG_WEBHOOK_SECRET;
  if (webhookSecret && req.headers["x-telegram-bot-api-secret-token"] !== webhookSecret) {
    return res.status(403).json({ error: "Invalid secret token" });
  }

  const token = process.env.TG_BOT_TOKEN || process.env.TELEGRAM_TOKEN;
  const body = req.body;

  if (!token) {
    console.error("TG_BOT_TOKEN is missing");
    return res.status(500).end("no token");
  }

  const chatId = body?.message?.chat?.id;
  const text = (body?.message?.text || "").trim();

  const reply = async (msg) => {
    try {
      const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: msg, parse_mode: "HTML" }),
      });
      const data = await r.json();
      console.log("Telegram response:", data);
    } catch (err) {
      console.error("Telegram error:", err);
    }
  };

  if (!chatId) return res.status(200).end("no chat");

  let msg;

  if (text === "/start") {
    msg =
      "🦈 Привет! Я бот центра «Акулёнок».\n\n" +
      "Плавание с 3 месяцев в г. Туймазы.\n" +
      "Команды:\n" +
      "• /trial - пробное занятие\n" +
      "• /prices - цены\n" +
      "• /schedule - расписание и адрес\n" +
      "• /contacts - как связаться";
  } else if (text === "/trial") {
    msg =
      "Запись на пробное: https://akulenok-tmz.ru\nИли напишите администратору: @akulenok_tmz";
  } else if (text === "/prices") {
    msg =
      "Цены: пробное - 500 ₽, абонементы 4/8 занятий - смотрите на сайте: https://akulenok-tmz.ru";
  } else if (text === "/schedule") {
    msg =
      "Расписание и адрес: ул. Столярова, 1, г. Туймазы.\nСайт: https://akulenok-tmz.ru";
  } else if (text === "/contacts") {
    msg =
      "Контакты: +7 927 303-99-77, WhatsApp/Telegram: @akulenok_tmz\nСайт: https://akulenok-tmz.ru";
  } else if (text === "/privacy") {
    msg = "Политика конфиденциальности: https://akulenok-tmz.ru/privacy";
  } else {
    msg = "Команды: /trial /prices /schedule /contacts /privacy";
  }

  // Обязательно дожидаемся отправки сообщения перед завершением Serverless-функции
  await reply(msg);
  return res.status(200).end("ok");
}
