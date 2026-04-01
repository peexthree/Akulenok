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
    <Container id="services" className="py-24 relative z-10 scroll-mt-24 overflow-hidden">
      


      {/* Декоративный фон для объема */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-tr from-sky-100/40 to-blue-50/40 rounded-full blur-[120px] -z-10" />

      {/* Используем наш новый смарт-компонент */}


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
            "Форматы занятий: индивидуальный, мини группы, семейное.",
            "Длительность - от 30 минут (по показаниям индивидуально).",
            "Первая встреча - знакомство с тренером и подбор программы под ребёнка."
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
