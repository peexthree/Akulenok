"use client";
import React from "react";
import Image from "next/image";
import ContactButtons from "./contactButtons"; // Убедись, что название файла совпадает (регистр!)
import { motion } from "framer-motion";

function SharkBlock() {
  return (
    <div className="relative group max-w-[320px] sm:max-w-sm mx-auto">
      {/* Мягкое свечение сзади */}
      <div className="absolute inset-0 bg-sky-400/20 rounded-[2.5rem] blur-2xl group-hover:bg-sky-400/30 transition-colors duration-500 -z-10" />

      {/* Основная карточка в стиле Glassmorphism */}
      <div className="bg-white/90 backdrop-blur-xl border border-white text-center p-8 rounded-[3rem] shadow-2xl flex flex-col items-center">
        
        {/* Анимированная акула */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-40 h-40 mb-6 drop-shadow-xl"
        >
          <Image
            src="/img/shark-code.gif"
            alt="Разработчик Игорь"
            fill
            unoptimized // Важно для работы GIF в Next.js
            className="object-contain"
          />
        </motion.div>

        <h3 className="mb-2 text-2xl font-black text-slate-800 tracking-tight">
          Есть вопросы?
        </h3>
        <p className="text-slate-500 font-medium mb-8 leading-tight">
          Напиши мне, и мы обсудим <br/> ваш проект.
        </p>
        
        {/* Кнопки связи (Твои Telegram/WhatsApp) */}
        <div className="w-full">
          <ContactButtons vertical={true} wide={true} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(SharkBlock);
