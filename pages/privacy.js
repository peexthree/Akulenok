// pages/privacy.js

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800 dark:text-gray-100 leading-relaxed">
      <h1 className="text-2xl font-bold mb-4">Политика конфиденциальности</h1>

      <p>
        Настоящая Политика конфиденциальности определяет порядок обработки и
        защиты персональных данных пользователей сайта «Акулёнок»
        (akulenok.vercel.app).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Какие данные мы собираем</h2>
      <p>Имя и телефон, указанные при заполнении формы записи или при обращении через мессенджеры/телефон.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Цель обработки</h2>
      <p>Данные используются исключительно для связи с вами, подтверждения записи, информирования о расписании и услугах центра «Акулёнок».</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Хранение данных</h2>
      <p>
        Данные передаются через Telegram Bot API и/или почтовые сервисы и
        хранятся только в целях обратной связи. Доступ к ним имеют только
        администраторы центра.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Передача третьим лицам</h2>
      <p>
        Передача персональных данных третьим лицам не осуществляется, за
        исключением случаев, предусмотренных законодательством РФ.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Срок хранения</h2>
      <p>
        Персональные данные хранятся до достижения целей обработки либо по вашему запросу на удаление.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Права пользователей</h2>
      <p>
        Вы имеете право запросить уточнение, удаление или блокировку ваших
        персональных данных, обратившись по телефону{" "}
        <a href="tel:+79273039977" className="underline text-blue-600">
          +7&nbsp;927&nbsp;303-99-77
        </a>{" "}
        или в Telegram{" "}
        <a
          href="https://t.me/akulenok_tmz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          @akulenok_tmz
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Согласие</h2>
      <p>
        Отправляя данные через форму записи, вы подтверждаете согласие с
        настоящей Политикой конфиденциальности.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
      </p>
    </main>
  );
}
