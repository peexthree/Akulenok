import React from "react";
import clsx from "clsx";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactButtons({ wide = false, vertical = false }) {
  const fullClass = wide ? "w-full" : "";
  const whatsappClasses = clsx(fullClass, "text-white hover:brightness-90 bg-[#25D366]");

  return (
     <div className={fullClass}>
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