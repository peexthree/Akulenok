"use client";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useShark } from "./SharkProvider";

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
  const { setFormOpen } = useShark();

  return (
    <Container className="py-24 relative z-10 scroll-mt-24" id="schedule">
      
      {/* Заголовок */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 drop-shadow-sm"
        >
          Выберите свое время
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 font-medium leading-relaxed tracking-wide"
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
              {/* <button
                type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFormOpen(true); }}
                className={`w-full block text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  item.highlight
                    ? "bg-white text-sky-600 hover:bg-sky-50 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-sky-50 text-sky-600 hover:bg-sky-100"
                }`}
              >
                Записаться
              </button> */}
              <a
                href="tel:+79273039977"
                className={`w-full block text-center py-4 rounded-2xl font-bold text-lg tracking-wide leading-snug transition-all duration-300 flex items-center justify-center gap-2 ${
                  item.highlight
                    ? "bg-white/90 backdrop-blur-md text-sky-600 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] hover:bg-white hover:-translate-y-0.5"
                    : "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md hover:shadow-lg hover:shadow-sky-200/50 hover:-translate-y-0.5"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default React.memo(Schedule);
