import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Image from "next/image";

const faqs = [
  {
    q: "А малыш не простудится?",
    a: "Нет. Температура воды в бассейне поддерживается на уровне 32–33 °C, а воздуха — 30–32 °C. После занятия можно погреться и спокойно высохнуть в тёплой раздевалке.",
  },
  {
    q: "Как вы чистите воду? Есть ли хлорка?",
    a: "Да, согласно требованиям санитарных норм мы используем гипохлорит натрия высокой очистки, который добавляется в минимальном количестве и не вызывает раздражения. Вода проходит 3 ступени очистки: песчаный фильтр, ультрафиолетовые лампы и дезинфекцию. Фильтрация работает круглосуточно (24/7) с ежедневным частичным обновлением воды.",
  },
  {
    q: "Нужна ли справка для первого занятия?",
    a: "Да, нужна справка об отсутствии противопоказаний с отрицательным анализом на энтеробиоз или яйца глист — и всё.",
  },
  {
    q: "С какого возраста можно начинать?",
    a: "Мы принимаем малышей с 3 месяцев, когда зажила пупочная ранка. Раннее начало помогает сохранить плавательные рефлексы и мягко снимает гипертонус.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Container className="py-24 max-w-4xl mx-auto relative scroll-mt-24" id="faq">
      <div
        aria-hidden="true"
        className="absolute top-6 right-0 w-32 h-32 opacity-15 hidden md:block pointer-events-none select-none z-0"
      >
        <Image
          src="/img/sad.webp"
          alt=""
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4">
          Частые вопросы
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-tight mb-4 text-balance">
          Вопросы, которые волнуют мам
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Мы знаем, о чём вы переживаете, и готовы развеять ваши сомнения.
        </p>
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          const panelId = `faq-panel-${idx}`;

          return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white/95 border-rose-200 shadow-xl"
                  : "bg-white/80 backdrop-blur-xl border-white/90 hover:bg-white hover:shadow-md hover:border-sky-200"
              }`}
            >
              <h3 className="m-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-6 sm:px-8 sm:py-7 flex justify-between items-center rounded-3xl"
                >
                  <span
                    className={`text-lg sm:text-xl font-bold transition-colors duration-300 pr-4 ${
                      isOpen ? "text-rose-600" : "text-[#0C1A2E]"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-500/25"
                        : "bg-sky-50 text-sky-600"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7 sm:px-8 sm:pb-8 pt-0">
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
