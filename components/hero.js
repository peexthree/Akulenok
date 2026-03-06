"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Добавил Link для второй кнопки
import Container from "./container";
import { motion, useScroll, useTransform } from "framer-motion";
import MultiStepForm from "./MultiStepForm";

export default function Hero() {
  const [isFormOpen, setFormOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Оживляем Parallax: текст и кнопки будут двигаться с разной скоростью
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const buttonsY = useTransform(scrollY, [0, 500], [0, -50]);

  // Magnet effect
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem] bg-slate-900"
    >
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105" // Оптимизировал классы
          autoPlay
          muted
          loop
          playsInline
          poster="/video/poster.jpg"
        >
          <source src="/video/HB.webm" type="video/webm" />
          <source src="/video/hero_small.mp4" type="video/mp4" />
        </video>
        {/* Градиенты для читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/90 z-10" />
        <div className="absolute inset-0 bg-slate-900/30 z-10" />
      </div>

      <Container className="relative z-30 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Привязываем Parallax к контенту */}
        <motion.div style={{ y: textY }} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
          >
            <span className="text-xs sm:text-sm font-bold text-white tracking-[0.2em] uppercase">
              Первое занятие со скидкой 50%
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.9] mb-6 text-balance uppercase drop-shadow-lg"
          >
            Больше <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-300">
              чем бассейн
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed text-balance font-medium drop-shadow-md"
          >
            Забота, развитие и здоровье для всей семьи с первых дней жизни.
          </motion.p>
        </motion.div>

        {/* Группа кнопок (Свой Parallax слой) */}
        <motion.div
          style={{ y: buttonsY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          {/* Магнитная кнопка */}
          <div
            className="relative inline-block w-full sm:w-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={buttonRef}
            style={{ transition: 'transform 0.1s ease-out' }}
          >
            <button
              onClick={() => setFormOpen(true)}
              className="group relative px-10 py-5 bg-white text-slate-900 rounded-full text-xl font-black overflow-hidden transition-all duration-300 w-full sm:w-auto hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                Записаться
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Рабочая вторая кнопка */}
          <Link 
            href="#about"
            className="px-10 py-5 bg-transparent text-white rounded-full text-xl font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 w-full sm:w-auto text-center"
          >
            О центре
          </Link>
        </motion.div>

      </Container>

      <MultiStepForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </motion.section>
  );
}
