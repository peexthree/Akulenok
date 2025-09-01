import React from "react";

export default function ContactButtons({ wide=false }) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-3 font-medium transition focus:outline-none";
  const full = wide ? " w-full " : " ";
  return (
    <div className={"grid gap-3 " + (wide ? "grid-cols-1" : "grid-cols-3")}>
      <a href="https://t.me/+79273039977" target="_blank" rel="noopener" className={base + full + " bg-blue-500 text-white"}>
        Telegram
      </a>
      <a href="https://wa.me/+79273039977" target="_blank" rel="noopener" className={base + full + " bg-green-500 text-white"}>
        WhatsApp
      </a>
      <a href="tel:+79273039977" className={base + full + " bg-gray-800 text-white"}>
        Позвонить
      </a>
    </div>
  );
}
