"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion"; // Добавляем динамику
import { FaTelegramPlane, FaWhatsapp, FaVk } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

export default function ContactButtons({ wide = false, vertical = false }) {
  const containerClasses = clsx(
    "grid gap-4",
    vertical ? "grid-cols-1" : wide ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-3"
  );

  const buttonBase = "relative flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 overflow-hidden group shadow-lg";

  return (
    <div className={containerClasses}>
      
      {/* Кнопка Telegram */}
      <motion.a
        href="https://t.me/akulenok_tmz"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          buttonBase,
          "bg-gradient-to-br from-sky-400 to-blue-600 border border-white/20",
          wide && "w-full"
        )}
      >
        <FaTelegramPlane size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        <span className="relative z-10 uppercase tracking-wider text-sm">Telegram</span>
        {/* Эффект блика */}
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
      </motion.a>

      {/* Кнопка WhatsApp */}
      <motion.a
        href="https://wa.me/79273039977" // Чистый номер без +
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          buttonBase,
          "bg-gradient-to-br from-green-400 to-emerald-600 border border-white/20",
          wide && "w-full"
        )}
      >
        <FaWhatsapp size={22} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <span className="relative z-10 uppercase tracking-wider text-sm">WhatsApp</span>
        {/* Эффект блика */}
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
      </motion.a>
      

      {/* Кнопка Viber */}
      <motion.a
        href="https://max.ru/u/f9LHodD0cOLix6wKTmAPpks04OM0FPm0sPc02InwwDsdZrqzGNbjCZHOKjY"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          buttonBase,
          "bg-gradient-to-br from-purple-400 to-fuchsia-600 border border-white/20",
          wide && "w-full"
        )}
      >
        <FaCommentDots size={22} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <span className="relative z-10 uppercase tracking-wider text-sm">MAX</span>
        {/* Эффект блика */}
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
      </motion.a>
    </div>
  );
}
