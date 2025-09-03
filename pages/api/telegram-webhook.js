export default async function handler(req, res) {
  // Разрешаем только POST от Telegram
  if (req.method !== "POST") return res.status(200).end("ok");

  const token = process.env.TELEGRAM_TOKEN;
  const body = req.body;

  const chatId = body?.message?.chat?.id;
  const text = (body?.message?.text || "").trim();

  const reply = async (msg) => {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: msg, parse_mode: "HTML" }),
    });
  };

  if (!chatId) return res.status(200).end("no chat");

  if (text === "/start") {
    await reply(
      "🦈 Привет! Я бот центра «Акулёнок».\n\n" +
      "Плавание с 3 месяцев в Казани.\n" +
      "Команды:\n" +
      "• /trial — пробное занятие\n" +
      "• /prices — цены\n" +
      "• /schedule — расписание и адрес\n" +
      "• /contacts — как связаться"
    );
  } else if (text === "/trial") {
    await reply("Запись на пробное: akulenok.vercel.app  \nИли напишите администратору: @akulenok_tmz");
  } else if (text === "/prices") {
    await reply("Цены: пробное — 500 ₽, абонементы 4/8 занятий — смотрите на сайте: akulenok.vercel.app");
  } else if (text === "/schedule") {
    await reply("Расписание и адрес есть на сайте: akulenok.vercel.app  \nЕсли нужен ближайший слот — пишите администратору.");
  } else if (text === "/contacts") {
    await reply("Контакты: +7 927 303-99-77, WhatsApp/Telegram: @akulenok_tmz  \nСайт: akulenok.vercel.app");
  } else if (text === "/privacy") {
    await reply("Политика конфиденциальности: akulenok.vercel.app/privacy");
  } else {
    await reply("Команды: /trial /prices /schedule /contacts /privacy");
  }

  res.status(200).end("ok");
}
