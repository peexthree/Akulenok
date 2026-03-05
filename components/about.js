"use client";
import React from "react";
import Container from "./container";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const About = () => {
  const stats = [
    { k: "3м+", v: "возраст начала" },
    { k: "4.7★", v: "рейтинг по отзывам" },
    { k: "30 мин", v: "длительность занятия" },
  ];

  const reasons = [
    "Наши инструкторы имеют педагогическое, медицинское или спортивное образование и постоянно повышают квалификацию.",
    "Мы используем современные технологии очистки воды: многоступенчатую фильтрацию, вода соответствует санитарным нормам (нет озонирования).",
    "У нас безопасно и комфортно: для каждого малыша отдельный инвентарь и чистые пеленальные столы и зона отдыха.",
    "Персональный подход: составляем индивидуальную программу тренировок с учётом возраста и физических данных ребёнка."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Container>
      <div id="about" className="grid gap-16 lg:gap-12 lg:grid-cols-2 items-center relative z-10 py-10 lg:py-20">
        
        {/* ================= ЛЕВАЯ КОЛОНКА ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative p-2"
        >
          {/* ФИКС МАСКОТА 1: Гигантская фоновая текстура (320x320) */}
          <div className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-64 h-64 sm:w-80 sm:h-80 opacity-15 rotate-12 pointer-events-none -z-10">
             <Image src="/img/play.png" alt="" fill className="object-contain" sizes="(max-width: 768px) 256px, 320px" />
          </div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">
            О центре «Акулёнок»
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed z-10 relative">
            Специализированный детский аквацентр в Туймазах: грудничковое плавание и ЛФК.
            Создаём безопасную среду для здоровья и развития малышей — тёплая стерильная вода,
            небольшой формат групп, внимательные инструкторы.
          </motion.p>
          
          <motion.div variants={containerVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 z-10 relative">
            {stats.map((s) => (
              <motion.div 
                key={s.k} 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-md border border-white/50 p-5 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-black text-sky-500 mb-1">{s.k}</div>
                <div className="text-sm font-medium text-slate-500">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

{/* ================= ПРАВАЯ КОЛОНКА ================= */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group h-full"
        >
          {/* ФИКС: Добавили pb-24 и sm:pb-32 для создания "слепой зоны" внизу */}
          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 sm:p-10 pb-24 sm:pb-32 shadow-soft relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">
              Почему нам доверяют
            </h3>
            
            {/* ФИКС: Добавили pr-4 sm:pr-10, чтобы текст не прилипал к правому краю, где висит Акулёнок */}
            <ul className="space-y-5 relative z-10 pr-4 sm:pr-10">
              {reasons.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-6 h-6 text-sky-400" />
                  </div>
                  <span className="text-slate-600 leading-relaxed font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Маскот остается на месте, но теперь под ним пустое пространство */}
          <div className="absolute -bottom-8 -right-6 sm:-bottom-12 sm:-right-10 w-48 h-48 sm:w-56 sm:h-56 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 z-20 drop-shadow-xl">
             <Image src="/img/love.png" alt="Акулёнок" fill className="object-contain" sizes="(max-width: 768px) 192px, 224px" />
          </div>
        </motion.div>

      </div>
    </Container>
  );
}

export default React.memo(About);
