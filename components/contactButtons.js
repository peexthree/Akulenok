import React from "react";
import clsx from "clsx";

export default function ContactButtons({ wide = false }) {
  const baseClass = "inline-flex items-center justify-center rounded-md px-4 py-3 font-medium transition focus:outline-none";
  const fullClass = wide ? " w-full " : "";
  const commonClasses = clsx(baseClass, fullClass);

  return (
   <div
      className={clsx(
        "grid gap-x-3 gap-y-3",
        wide ? "grid-cols-1 md:grid-cols-3" : "grid-cols-3"
      )}
    >
       <a
        href="https://t.me/+79273039977"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(commonClasses, "bg-aqua-accent text-white hover:bg-aqua-dark focus:ring-2 focus:ring-aqua-accent")}
      >
        Telegram
      </a>
       <a
        href="https://wa.me/+79273039977"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(commonClasses, "bg-aqua-accent text-white hover:bg-aqua-dark focus:ring-2 focus:ring-aqua-accent")}
      >
        WhatsApp
      </a>
       <a
        href="tel:+79273039977"
        className={clsx(commonClasses, "bg-aqua-accent text-white hover:bg-aqua-dark focus:ring-2 focus:ring-aqua-accent")}
      >
        Позвонить
      </a>
    </div>
  );
}