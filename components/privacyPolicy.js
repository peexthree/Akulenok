import { useState } from "react";

export default function PrivacyPolicy() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2 text-xs text-aqua-dark/80 dark:text-aqua-background/80">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="underline"
      >
        Политика конфиденциальности
      </button>
      {open && (
        <div className="mt-2 space-y-2">
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки
            и защиты персональных данных пользователей сайта «Акулёнок»
            (akulenok.vercel.app).
          </p>
          <p>
            <strong>1. Какие данные мы собираем:</strong> имя и телефон,
            указанные при заполнении формы записи на пробное занятие или при
            обращении через мессенджеры/телефон.
          </p>
          <p>
            <strong>2. Цель обработки:</strong> исключительно для связи с вами,
            подтверждения записи, информирования о расписании и услугах центра
            «Акулёнок».
          </p>
          <p>
            <strong>3. Хранение данных:</strong> данные передаются через
            Telegram Bot API и/или почтовые сервисы и хранятся только в целях
            обратной связи. Доступ к ним имеют только администраторы центра.
          </p>
          <p>
            <strong>4. Передача третьим лицам:</strong> не осуществляется, за
            исключением случаев, предусмотренных законодательством РФ.
          </p>
          <p>
            <strong>5. Срок хранения:</strong> до достижения целей обработки
            либо по вашему запросу на удаление.
          </p>
          <p>
            <strong>6. Ваши права:</strong> вы можете запросить уточнение,
            удаление или блокировку ваших данных, обратившись по телефону{" "}
            <a href="tel:+79273039977" className="underline">
              +7&nbsp;927&nbsp;303-99-77
            </a>{" "}
            или в Telegram{" "}
            <a
              href="https://t.me/akulenok_tmz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @akulenok_tmz
            </a>
            .
          </p>
          <p>
            <strong>7. Согласие:</strong> отправляя данные через форму записи,
            вы подтверждаете согласие с настоящей Политикой конфиденциальности.
          </p>
        </div>
      )}
    </div>
  );
}
