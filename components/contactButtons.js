import React from "react";
import clsx from "clsx";

export default function ContactButtons({ wide = false }) {
  const baseClass = "inline-flex items-center justify-center rounded-md px-4 py-3 font-medium transition focus:outline-none";
  const fullClass = wide ? " w-full " : "";
  const commonClasses = clsx(baseClass, fullClass);

  return (
    <div className={clsx("grid gap-3", { "grid-cols-1": wide, "grid-cols-3": !wide })}>
      <a href="https://t.me/+79273039977" target="_blank" rel="noopener noreferrer" className={clsx(commonClasses, "bg-blue-500 text-white")}>
        Telegram
      </a>
      <a href="https://wa.me/+79273039977" target="_blank" rel="noopener noreferrer" className={clsx(commonClasses, "bg-green-500 text-white")}>
        WhatsApp
      </a>
      <a href="tel:+79273039977" className={clsx(commonClasses, "bg-gray-800 text-white")}>
        Позвонить
      </a>
    </div>
  );
}