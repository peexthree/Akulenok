import React from "react";
import clsx from "clsx";
import Button from "./Button";

export default function ContactButtons({ wide = false }) {
   const fullClass = wide ? "w-full" : "";
  const commonClasses = clsx(fullClass, "bg-aqua-accent text-white hover:bg-aqua-dark");

  return (
    <div
      className={clsx(
        "grid gap-x-3 gap-y-3",
        wide ? "grid-cols-1 md:grid-cols-3" : "grid-cols-3"
      )}
    >
  <Button
        href="https://t.me/+79273039977"
        target="_blank"
        rel="noopener noreferrer"
         className={commonClasses}
      >
        Telegram
      </Button>
      <Button
        href="https://wa.me/+79273039977"
        target="_blank"
        rel="noopener noreferrer"
       className={commonClasses}
      >
        WhatsApp
      </Button>
      <Button href="tel:+79273039977" className={commonClasses}>
        Позвонить
      </Button>
    </div>
  );
}