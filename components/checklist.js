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
    // bg-white остается здесь, Container его подхватит
    <Container className="py-24 relative overflow-hidden bg-white">
      
      {/* ГИГАНТСКИЙ МАСКОТ - ФОРСИРОВАННЫЙ СЛОЙ */}
      {/* Ставим z-[1], чтобы он ТОЧНО был выше белого фона Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }} // 0.5 может быть слишком ярко, 0.3 — золотая середина
        transition={{ duration: 1.2 }}
        className="absolute left-1/2 -translate-x-1/2 top-40 w-[900px] h-[900px] z-[1] pointer-events-none select-none"
      >
        <Image
          src="/img/think.png"
          alt="Background Thinking Shark"
          fill
          unoptimized 
          className="object-contain blur-[10px]" // Уменьшил блюр для четкости
          sizes="900px"
        />
      </motion.div>

      {/* ОСНОВНОЙ КОНТЕНТ - СЛОЙ ВЫШЕ */}
      {/* Ставим z-[2], чтобы текст был ПОВЕРХ маскота */}
      <div className="flex flex-col items-center pt-12 relative z-[2]">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight"
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
              className="bg-white/95 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-soft border border-slate-100 flex flex-col items-center text-center gap-6 group"
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
