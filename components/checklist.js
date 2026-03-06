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
      
      {/* ГИГАНТСКИЙ МАСКОТ - Слой Z-[1] */}
      {/* Теперь он ГАРАНТИРОВАННО выше белого фона контейнера */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4 }} // 0.4-0.5 для уверенной видимости
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 -top-10 w-[1200px] h-[1200px] z-[1] pointer-events-none select-none"
      >
        <Image
          src="/img/think.png"
          alt="Background Thinking Shark"
          fill
          unoptimized 
          className="object-contain blur-[15px] grayscale-[0.2]" // Немного приглушаем цвета, чтобы не спорил с иконками
          sizes="1200px"
        />
      </motion.div>

      {/* ОСНОВНОЙ КОНТЕНТ - Слой Z-[2] */}
      <div className="flex flex-col items-center pt-12 relative z-[2]">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight drop-shadow-sm"
          >
            Что взять на занятие?
          </motion.h2>
          <p className="text-xl text-slate-700 font-semibold bg-white/30 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
            Акулёнок подсказывает: подготовьте всё заранее
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center gap-6 group transition-all duration-300"
            >
              <div className="w-24 h-24 relative transition-transform duration-500 group-hover:rotate-6">
                <Image
                  src={item.src}
                  alt={item.text}
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="font-bold text-slate-800 leading-tight">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
