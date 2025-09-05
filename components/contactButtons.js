import React from "react";
import clsx from "clsx";
import Button from "./Button";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function ContactButtons({ wide = false, vertical = false }) {
  const fullClass = wide ? "w-full" : "";
  const baseClasses = clsx(fullClass, "text-white hover:brightness-90");
  const telegramClasses = clsx(baseClasses, "bg-aqua-accent hover:bg-aqua-dark");
  const whatsappClasses = clsx(baseClasses, "bg-[#25D366]");

  return (
    <div
      className={clsx(
         "grid gap-3",
        vertical ? "grid-cols-1" : wide ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2"
      )}
    >
    <Button
        href="https://t.me/+79273039977"
        target="_blank"
        rel="noopener noreferrer"
           className={telegramClasses}
      >
         <span className="flex items-center gap-2">
          <FaTelegramPlane size={20} />
          Telegram
        </span>
      </Button>
      <Button
        href="https://wa.me/+79273039977"
        target="_blank"
        rel="noopener noreferrer"
            className={whatsappClasses}
      >
        <span className="flex items-center gap-2">
          <FaWhatsapp size={20} />
          WhatsApp
        </span>
      </Button>
    </div>
  );
}