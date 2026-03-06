"use client";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import Link from "next/link"; // Используем Link вместо кастомного Button для надежности

const scheduleData = [
  {
    id: 1,
    title: "Утро",
    time: "10:00–12:00",
    description: "Начните день с пользой.",
    features: [
      "Мини‑группы 3–18 мес",
      "Индивидуальные занятия",
    ],
  },
  {
    id: 2,
    title: "Счастливый час",
    time: "12:00–16:00",
    description: "Идеально для первого знакомства.",
    features: [
      "Пробное занятие 850 ₽",
      "Знакомство с тренером",
    ],
    highlight: true,
  },
  {
    id: 3,
    title: "Вечер",
    time: "16:00–21:00",
    description: "Занятия после садика и работы.",
    features: [
      "Группы 3-6 лет",
      "ЛФК и оздоровление",
    ],
  },
];

function Schedule() {
  return (
    <Container className="py-24 relative z-10">
      
      {/* Заголовок */}
      <div id="schedule" className="text-center max-w-2xl mx-auto mb-16 scroll-mt-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          Выберите свое время
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 font-medium"
        >
          Ежедневно открыты до 21:00. Подберём комфортный формат для вас и малыша.
        </motion.p>
      </div>

      {/* Сетка расписания */}
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-center">
        {scheduleData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative flex flex-col h-full p-8 rounded-[2.5rem] transition-all duration-300 ${
              item.highlight 
                ? "bg-gradient-to-b from-sky-400 to-blue-500 text-white shadow-xl shadow-sky-200 scale-105 z-10 border-4 border-white" 
                : "bg-white/80 backdrop-blur-md text-slate-800 shadow-soft border border-slate-100 hover:shadow-md hover:-translate-y-1"
            }`}
          >
            {/* Плашка "Хит" для выделенной карточки */}
            {item.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                Выбор мам
              </div>
            )}

            <div className="flex-grow">
              <div className={`text-sm uppercase font-bold tracking-wider mb-2 ${item.highlight ? "text-sky-100" : "text-sky-500"}`}>
                {item.title}
              </div>
              <div className="text-3xl font-black mb-2 tracking-tight">
                {item.time}
              </div>
              <div className={`text-lg font-medium mb-6 ${item.highlight ? "text-sky-50" : "text-slate-600"}`}>
                {item.description}
              </div>

              <ul className="space-y-3">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${item.highlight ? "bg-white/20 text-white" : "bg-sky-100 text-sky-500"}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`font-medium ${item.highlight ? "text-white" : "text-slate-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-opacity-20 border-current">
              <Link 
                href="#lead-form"
                className={`w-full block text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  item.highlight
                    ? "bg-white text-sky-600 hover:bg-sky-50 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-sky-50 text-sky-600 hover:bg-sky-100"
                }`}
              >
                Записаться
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default React.memo(Schedule);
