import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

const safetyFacts = [
  {
    title: "Тройная система очистки воды",
    desc: "Механическая очистка песчаным фильтром, УФ-лампы для обеззараживания от бактерий и вирусов, дезинфекция гипохлоритом натрия. Всё соответствует требованиям санитарных правил.",
    icon: (
      <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Питьевое качество",
    desc: "Вода в бассейне регулярно проходит проверку центром гигиены и эпидемиологии. Мы поддерживаем нейтральный pH 7,3, что предотвращает раздражение кожи и глаз.",
    icon: (
      <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Идеальные 32–33 °C",
    desc: "Строго поддерживаем температуру воды и воздуха. Тепло и комфортно, как в маминых объятиях.",
    icon: (
      <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function Safety() {
  return (
    <Container className="py-16 lg:py-24 relative">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] border border-white/90 shadow-soft max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-20 h-20 sm:w-24 sm:h-24 mb-8 bg-gradient-to-br from-sky-100 to-rose-50 rounded-3xl flex items-center justify-center shadow-inner border border-white"
        >
          <svg className="w-11 h-11 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C1A2E] mb-4 text-center tracking-tight">
          Чистота, которой доверяют
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 font-medium mb-12 text-center max-w-2xl">
          Бескомпромиссный подход к качеству воды и здоровью вашего ребёнка.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {safetyFacts.map((fact) => (
            <div
              key={fact.title}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-[#F6FBFF] border border-sky-100/80 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-5 p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {fact.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#0C1A2E] mb-3">{fact.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
