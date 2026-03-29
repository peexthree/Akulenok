"use client";
import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle"; // Подключаем наш новый глобальный заголовок
import { motion } from "framer-motion";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
  };

  // Компонент карточки теперь принимает иконку
  const Item = ({ title, desc, icon }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-soft flex flex-col h-full justify-start transition-all duration-300 hover:shadow-xl group"
    >
      <div className="w-16 h-16 mb-6 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-600 font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );

  return (
    <Container className="py-24 relative z-10">
      
      {/* Декоративный фон для объема */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-tr from-sky-100/40 to-blue-50/40 rounded-full blur-[120px] -z-10" />

      {/* Используем наш новый смарт-компонент */}
      <SectionTitle
        pretitle="Что мы предлагаем"
        title="Многопрофильный центр для здоровья всей семьи"
      >
        От первых гребков до восстановления после родов — мы создали идеальные условия для бережного развития.
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-6 md:grid-cols-2 lg:gap-8 mt-12"
      >
        <Item
          title="Адаптивное плавание"
          desc="Никакого жесткого принуждения. Только мягкое знакомство с водой в индивидуальном темпе, формирование крепкого мышечного корсета и правильного дыхания."
          icon={
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A4 4 0 002 9.859V15a2 2 0 002 2h14a2 2 0 002-2v-3.836a4 4 0 00-5.248-3.996z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
        <Item
          title="Аквааэробика для беременных"
          desc="Ваше тело скажет «спасибо». Бережно снимаем напряжение со спины, убираем отечность и готовим организм к легким родам в невесомости."
          icon={
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          }
        />
        <Item
          title="Детский массаж (0+)"
          desc="Золотые руки специалиста с 17-летним опытом. Точечная работа с зажимами, снятие гипертонуса и запуск правильного физического развития."
          icon={
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          }
        />
        <Item
          title="Женское здоровье (Фитнес)"
          desc="Возвращаем телу легкость, подвижность и энергию. Укрепление мышечного корсета и тазового дна в комфортной, поддерживающей атмосфере."
          icon={
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
        />
      </motion.div>

      {/* Информационный блок */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 p-8 lg:p-10 bg-gradient-to-r from-sky-50 to-white rounded-[2.5rem] border border-sky-100 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        
        <h4 className="text-xl font-bold text-slate-800 mb-6">Важно знать о занятиях:</h4>
        <ul className="text-slate-600 space-y-4 list-none text-lg font-medium relative z-10">
          {[
            "Форматы занятий: мини‑группы, индивидуально, с участием родителя или без.",
            "Длительность — от 30 минут (по показаниям индивидуально).",
            "Первая встреча — знакомство с тренером и подбор программы под ребёнка."
          ].map((text, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="shrink-0 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 mt-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Container>
  );
}
