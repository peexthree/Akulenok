"use client";
import React from "react";
import Image from "next/image";
import ContactButtons from "./contactButtons"; 
import { motion } from "framer-motion";

function SharkBlock({ eggId }) {
  const currentEgg = eggId;

  // 1. ЛОГИКА ДЛЯ ВИДЕО (egg1 и egg2)
  // Без контроллеров, зациклено, эффект "живого окна"
  if (currentEgg === "egg1" || currentEgg === "egg2") {
    const src = currentEgg === "egg1" ? "/egg1.webm" : "/egg2.webm";
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-[280px] sm:w-[320px] aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(14,165,233,0.3)] border-2 border-white/10"
      >
        <video 
          src={src} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
        {/* Индикатор записи/цикла в стиле S25 Ultra */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Live</span>
        </div>
      </motion.div>
    );
  }

  // 2. ЛОГИКА ДЛЯ ГИГАНТСКОГО МАСКОТА (egg3 - Твое Фото + Глитч + Контакты)
  if (currentEgg === "egg3") {
    return (
      <div className="flex flex-col items-center gap-6 max-w-[340px] sm:max-w-md w-full">
        {/* ФОТО С ГЛИТЧЕМ */}
        <motion.div 
          className="relative w-full aspect-video rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl"
          animate={{ 
            x: [0, -2, 2, -1, 0],
            filter: ["hue-rotate(0deg)", "hue-rotate(10deg)", "brightness(1.2)", "hue-rotate(0deg)"]
          }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
        >
          <Image 
            src="/egg3.jpeg" 
            alt="Igor Peexthree" 
            fill 
            className="object-cover" 
          />
          {/* Слой цифрового шума */}
          <div className="absolute inset-0 bg-sky-500/5 mix-blend-overlay pointer-events-none" />
        </motion.div>

        {/* КАРТОЧКА СВЯЗИ */}
        <div className="bg-white/95 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl text-center w-full border border-white relative overflow-hidden">
          {/* ГИФКА ПЕЧАТАЮЩЕГО МАСКОТА */}
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="relative w-24 h-24 mx-auto mb-4"
          >
            <Image 
              src="/img/shark-code.gif" 
              alt="Typing..." 
              fill 
              unoptimized 
              className="object-contain drop-shadow-lg" 
            />
          </motion.div>
          
          <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tighter uppercase">Архитектор Системы</h3>
          <p className="text-slate-500 text-sm mb-6 font-medium leading-tight">
            Игорь - Python-разработчик. <br/> Готов обсудить ваш проект.
          </p>
          
          {/* КНОПКИ СВЯЗИ */}
          <div className="w-full">
            <ContactButtons vertical={false} wide={true} />
          </div>

          {/* Декор-элемент Эйдоса */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-20" />
        </div>
      </div>
    );
  }

  return null;
}

export default React.memo(SharkBlock);
