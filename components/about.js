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

  // Анимационные варианты для каскадного появления
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Container>
      <div id="about" className="grid gap-12 lg:grid-cols-2 items-center relative z-10">
        
        {/* Левая колонка: Текст и статистика */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">
            О центре «Акулёнок»
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed">
            Специализированный детский аквацентр в Туймазах: грудничковое плавание и ЛФК.
            Создаём безопасную среду для здоровья и развития малышей — тёплая стерильная вода,
            небольшой формат групп, внимательные инструкторы.
          </motion.p>
          
          <motion.div variants={containerVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
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

          <div className="absolute -bottom-12 -left-12 w-32 h-32 opacity-10 rotate-12 pointer-events-none -z-10">
             <Image src="/img/play.png" alt="" width={128} height={128} />
          </div>
        </motion.div>

        {/* Правая колонка: Почему нам доверяют */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 sm:p-10 shadow-soft relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">
            Почему нам доверяют
          </h3>
          
          <ul className="space-y-5 relative z-10">
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

          <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-[0.07] translate-x-1/4 translate-y-1/4 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6">
             <Image src="/img/akulenok-mascot.png" alt="" width={160} height={160} />
          </div>
        </motion.div>

      </div>
    </Container>
  );
}

export default React.memo(About);
