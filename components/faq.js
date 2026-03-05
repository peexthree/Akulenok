import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";
import Image from "next/image";

const faqs = [
  {
    q: "А малыш не простудится?",
    a: "Нет. Температура воды в бассейне поддерживается на уровне 33-34°C, а воздуха — 35°C. После занятия можно погреться в сауне и спокойно высохнуть в теплой раздевалке."
  },
  {
    q: "Как вы чистите воду? Есть ли хлорка?",
    a: "Мы не используем жидкий хлор. Вода проходит 3 ступени очистки: песчаные фильтры, ультрафиолетовые лампы и серебро. Вода питьевого качества и не сушит кожу малыша."
  },
  {
    q: "Нужна ли справка для первого занятия?",
    a: "Да, для безопасности всех деток мы просим справку от педиатра об отсутствии противопоказаний к бассейну, а для мамы (если это совместное плавание) — справку от гинеколога и дерматолога."
  },
  {
    q: "С какого возраста можно начинать?",
    a: "Мы принимаем малышей с 1 месяца, когда зажила пупочная ранка. Раннее начало помогает сохранить плавательные рефлексы и снимает гипертонус."
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Container  className="py-24 max-w-4xl mx-auto relative ">
      <div className="absolute top-10 right-0 w-32 h-32 opacity-20 hidden md:block">
         <Image src="/img/sad.png" alt="" width={128} height={128} />
      </div>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4 text-balance">
          Вопросы, которые волнуют мам
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Мы знаем, о чем вы переживаете, и готовы развеять ваши сомнения.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
              openIdx === idx
                ? "bg-white border-sky-200 shadow-soft"
                : "bg-white/50 border-white/60 hover:bg-white hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full text-left px-6 py-6 sm:px-8 sm:py-8 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-[2rem]"
            >
              <h3 className={`text-xl sm:text-2xl font-bold transition-colors ${openIdx === idx ? "text-sky-600" : "text-slate-800"}`}>
                {faq.q}
              </h3>
              <div className={`shrink-0 ml-4 p-2 rounded-full transition-transform duration-300 ${openIdx === idx ? "rotate-45 bg-sky-100 text-sky-500" : "bg-slate-100 text-slate-400"}`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>

            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 text-lg text-slate-600 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
