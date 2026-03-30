"use client";
import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle"; // Используем обновленный компонент
import { motion } from "framer-motion";

export default function Video() {
  return (
    <Container className="py-24 relative z-10">
      
      {/* 1. Консистентный заголовок */}
      <SectionTitle
        pretitle="Познакомьтесь с нами ближе"
        title="Познакомьтесь с нами ближе"
      >
        Посмотрите, как проходят занятия: только улыбки, профессиональная поддержка и чистая радость движения.
      </SectionTitle>

      {/* 2. Обертка с анимацией и эффектами */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto group"
      >
        {/* Фоновое свечение (Glow effect) */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/20 to-blue-400/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white/80 backdrop-blur-sm bg-slate-100">
          
          {/* Индикатор "Смотреть со звуком" или просто декоративный элемент */}
          <div className="absolute top-6 right-6 z-20">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Live
            </div>
          </div>

          <video
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls
            poster="/img/video-poster.jpg" // ОБЯЗАТЕЛЬНО: добавь заглушку
          >
            <source src="/video/hero_small.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        {/* Декоративная подпись под видео в стиле Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-6 -left-6 hidden md:block bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-sky-50 max-w-xs"
        >
          <p className="text-slate-800 font-bold text-sm leading-relaxed">
             «Мы создали место, где каждый ребенок чувствует себя в безопасности с первых секунд в воде»
          </p>
          <div className="mt-2 text-sky-500 text-xs font-black uppercase tracking-widest">Команда Акулёнка</div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
