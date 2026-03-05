import React from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, BeakerIcon, AcademicCapIcon, HeartIcon } from "@heroicons/react/24/outline";

const trustItems = [
  { text: "Вода лучшего качества", icon: BeakerIcon },
  { text: "Тренеры с мед. образованием", icon: AcademicCapIcon },
  { text: "Без хлора", icon: ShieldCheckIcon },
  { text: "Одобрено педиатрами", icon: HeartIcon },
];

export default function TrustBar() {
  return (
    <div className="relative -mt-10 sm:-mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-white/80 backdrop-blur-lg py-6 px-4 rounded-3xl sm:rounded-[2.5rem] shadow-soft border border-white"
      >
        {/* Десктоп: Статичная сетка */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-6 px-4">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center">
              <div className="p-2 bg-sky-100 rounded-full text-sky-500 shrink-0 shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-700 text-sm lg:text-base">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Мобилка: Бесшовный бесконечный скролл (Marquee) через Framer Motion */}
        <div className="flex sm:hidden overflow-hidden w-full relative mask-image-fade">
          <motion.div
            className="flex items-center gap-8 w-max pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15, // Скорость прокрутки
            }}
          >
            {/* Склеиваем массив с самим собой для лупа */}
            {[...trustItems, ...trustItems].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 whitespace-nowrap"
                // Прячем дубликаты от скринридеров
                aria-hidden={idx >= trustItems.length ? "true" : "false"}
              >
                <div className="p-2 bg-sky-100 rounded-full text-sky-500 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-700 text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
