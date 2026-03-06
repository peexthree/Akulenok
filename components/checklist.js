"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";

const items = [
  { src: "/img/3d-icons/BriefcaseIcon.svg", text: "Смена одежды для ребёнка" },
  { src: "/img/3d-icons/pod.svg", text: "Подгузник для бассейна" },
  { src: "/img/3d-icons/pol.svg", text: "Полотенце или пелёнка" },
  { src: "/img/3d-icons/pol (1).svg", text: "Шапочка и резиновая обувь" },
  { src: "/img/3d-icons/utk.svg", text: "Любимая игрушка для воды" },
];

export default function Checklist() {
  return (
    <Container className="py-24 relative overflow-hidden bg-white">
      
      {/* ГИГАНТСКИЙ МАСКОТ - ТЕПЕРЬ РЕАЛЬНО В ЦЕНТРЕ ФОНА */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }} // 0.2 — идеальный баланс между "видно" и "не мешает тексту"
        transition={{ duration: 1 }}
        // Магия центрирования: top-1/2 + -translate-y-1/2
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] z-0 pointer-events-none select-none"
      >
        <Image
          src="/img/think.png"
          alt="Background Thinking Shark"
          fill
          unoptimized 
          className="object-contain blur-[1px]" // Уменьшил блюр, чтобы было видно "лицо"
          sizes="1000px"
        />
      </motion.div>

      {/* ОСНОВНОЙ КОНТЕНТ - СЛОЙ ВЫШЕ (z-10) */}
      <div className="flex flex-col items-center pt-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight drop-shadow-sm"
          >
            Что взять на занятие?
          </motion.h2>
          <p className="text-xl text-slate-600 font-medium">
            Акулёнок подсказывает: подготовьте эти вещи заранее, чтобы первый заплыв прошёл идеально.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              // bg-white/90 делает карточки "стеклянными", маскот будет под ними просвечивать
              className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-soft border border-slate-100 flex flex-col items-center text-center gap-6 group"
            >
              <div className="w-20 h-20 relative transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={item.text}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-slate-700 leading-tight">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
    </Container>
  );
}
