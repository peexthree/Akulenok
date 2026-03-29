"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";
import Image from "next/image";

const faqs = [
  {
    q: "А малыш не простудится?",
    a: "Нет. Температура воды в бассейне поддерживается на уровне 32-33°C, а воздуха — 35°C. После занятия можно погреться  и спокойно высохнуть в теплой раздевалке."
  },
  {
    q: "Как вы чистите воду? Есть ли хлорка?",
    a: "Мы не используем жидкий хлор. Вода проходит 3 ступени очистки: песчаные фильтры, ультрафиолетовые лампы и серебро. Вода высокого качества и не сушит кожу малыша."
  },
  {
    q: "Нужна ли справка для первого занятия?",
    a: "Да, для безопасности всех деток мы просим справку от педиатра об отсутствии противопоказаний к бассейну, а для мамы (если это совместное плавание) — справку от гинеколога и дерматолога."
  },
  {
    q: "С какого возраста можно начинать?",
    a: "Мы принимаем малышей с 3 месяцев, когда зажила пупочная ранка. Раннее начало помогает сохранить плавательные рефлексы и снимает гипертонус."
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Container className="py-24 max-w-4xl mx-auto relative scroll-mt-24" id="faq">
      
      {/* ТВОЙ МАСКОТ: Грустный акулёнок-эмпат в правом углу */}
      <div className="absolute top-10 right-0 w-32 h-32 opacity-1 hidden md:block pointer-events-none select-none z-0">
         <Image 
           src="/img/sad.png" 
           alt="Эмпатичный акулёнок" 
           width={512} 
           height={512} 
           className="object-contain"
         />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 text-balance">
          Вопросы, которые волнуют мам
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Мы знаем, о чем вы переживаете, и готовы развеять ваши сомнения.
        </p>
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white border-sky-300 shadow-xl scale-[1.02]"
                  : "bg-white/60 backdrop-blur-md border-slate-100 hover:bg-white hover:shadow-md hover:border-sky-100"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-6 py-6 sm:px-8 sm:py-8 flex justify-between items-center focus:outline-none"
              >
                <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 pr-4 ${isOpen ? "text-sky-600" : "text-slate-800"}`}>
                  {faq.q}
                </h3>
                
                <motion.div 
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${isOpen ? "bg-sky-500 text-white shadow-md shadow-sky-200" : "bg-slate-100 text-slate-500"}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0">
                      <div className="w-12 h-1 bg-sky-100 rounded-full mb-4" />
                      <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
