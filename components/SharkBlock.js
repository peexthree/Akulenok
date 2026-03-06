"use client";
import React from "react";
import Image from "next/image";
import ContactButtons from "./contactButtons"; 
import { motion } from "framer-motion";

// Принимаем eggId от SharkProvider
function SharkBlock({ eggId, onClose }) {
  
  // 1. Конфигурация контента
  const eggs = {
    egg1: { type: "video", src: "/egg1.webm", vertical: true },
    egg2: { type: "video", src: "/egg2.webm", vertical: true },
    egg3: { type: "image", src: "/egg3.jpeg", vertical: false },
  };

  const currentEgg = eggs[eggId];

  // 2. Рендерим видео-пасхалку (egg1, egg2)
  if (currentEgg?.type === "video") {
    return (
      <div className="relative w-[300px] sm:w-[350px] aspect-[9/16] bg-black rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.4)] border-4 border-white/20">
        <video 
          src={currentEgg.src} 
          autoPlay 
          controls 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Eidos Fragment // {eggId}</p>
        </div>
      </div>
    );
  }

  // 3. Рендерим фото-пасхалку (egg3)
  if (currentEgg?.type === "image") {
    return (
      <div className="relative w-full max-w-2xl aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10">
        <Image 
          src={currentEgg.src} 
          alt="Secret Archive" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-8">
          <p className="text-white/60 text-xs font-black uppercase tracking-widest">Secret Fragment Found</p>
        </div>
      </div>
    );
  }

  // 4. ДЕФОЛТ: Твоя визитка разработчика (если eggId не совпал с пасхалками)
  return (
    <div className="relative group max-w-[320px] sm:max-w-sm mx-auto">
      <div className="absolute inset-0 bg-sky-400/20 rounded-[2.5rem] blur-2xl group-hover:bg-sky-400/30 transition-colors duration-500 -z-10" />
      <div className="bg-white/90 backdrop-blur-xl border border-white text-center p-8 rounded-[3rem] shadow-2xl flex flex-col items-center">
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-40 h-40 mb-6 drop-shadow-xl"
        >
          <Image
            src="/img/shark-code.gif"
            alt="Разработчик Игорь"
            fill
            unoptimized 
            className="object-contain"
          />
        </motion.div>
        <h3 className="mb-2 text-2xl font-black text-slate-800 tracking-tight">Есть вопросы?</h3>
        <p className="text-slate-500 font-medium mb-8 leading-tight">Напиши мне, и мы обсудим <br/> ваш проект.</p>
        <div className="w-full">
          <ContactButtons vertical={true} wide={true} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(SharkBlock);
