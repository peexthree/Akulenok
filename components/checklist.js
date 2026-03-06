"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";

const items = [
  { 
    src: "/img/3d-icons/BriefcaseIcon.svg", 
    text: "Смена одежды для ребёнка" 
  },
  { 
    src: "/img/3d-icons/pod.svg", 
    text: "Подгузник для бассейна" 
  },
  { 
    src: "/img/3d-icons/pol.svg", 
    text: "Полотенце или пелёнка" 
  },
  { 
    src: "/img/3d-icons/pol (1).svg", 
    text: "Шапочка и резиновая обувь" 
  },
  { 
    src: "/img/3d-icons/utk.svg", 
    text: "Любимая игрушка для воды" 
  },
];

export default function Checklist() {
  return (
    <Container className="py-24 relative overflow-hidden">
      <div className="flex flex-col items-center">
        
        {/* Анимация маскота: легкое покачивание */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ rotate: [0, -3, 3, 0], y: [0, -5, 0] }}
          transition={{ 
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 }
          }}
          className="mb-12 relative"
        >
          <Image
            src="/img/think.png"
            alt="Думающий акулёнок"
            width={180}
            height={180}
            className="w-36 h-auto md:w-44 drop-shadow-2xl"
            priority
          />
        </motion.div>

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

        {/* Сетка карточек с твоими SVG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-soft border border-slate-100 flex flex-col items-center text-center gap-6 group"
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
      
      {/* Декоративное пятно для акцента на контенте */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-sky-50 rounded-full blur-[140px] opacity-40 -z-10" />
    </Container>
  );
}
