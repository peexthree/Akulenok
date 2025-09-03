import React from "react";

import Container from "./container";
import clsx from "clsx";
import { FaMapMarkerAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
export default function Location() {
  const address = "ул. Столярова, 1, Туймазы";
  const phone = "+7 927 303-99-77";
  const mapLink = "https://yandex.ru/maps/org/akulenok/125018811972/?ll=53.728390%2C54.600103&z=16";
   const commonButtonClasses =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 font-medium transition focus:outline-none w-full text-white";

  return (
    <Container>
       <div
        id="contacts"
     className="grid gap-8 lg:grid-cols-2 items-center bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="flex flex-col justify-center h-full space-y-5">
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <div><span className="font-medium">Адрес:</span> {address}</div>
         <div>
              <span className="font-medium">Телефон:</span>{" "}
              <a href="tel:+79273039977" className="underline">
                {phone}
              </a>
            </div>
            <div>
              <span className="font-medium">Режим:</span> Сегодня открыто до 21:00
            </div>
            <div><span className="font-medium">Рейтинг:</span> ★ 4.7 (59 отзывов)</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-gray-900")}
            >
              <FaMapMarkerAlt size={20} />
              <span>Яндекс.Карты</span>
            </a>
            <a
              href="https://t.me/+79273039977"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-blue-500")}
            >
              <FaTelegramPlane size={20} />
              <span>Telegram</span>
            </a>
             <a
              href="https://wa.me/+79273039977"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-green-500")}
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        
          <div className="rounded-2xl overflow-hidden border h-[400px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3bc8364469f998d48316e3069ad02bfec23d4cf2a256c4d1fece1f5daac7dfca&source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}