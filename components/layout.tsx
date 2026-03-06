"use client"; // Обязательно для хуков Framer Motion на уровне Layout
import React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";

const PopupWidget = dynamic(() => import("./popupWidget"), { ssr: false });

export default function Layout({ children }) {
  // Хуки для плавного прогресс-бара чтения
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-nunito overflow-x-hidden selection:bg-sky-200 selection:text-sky-900">
      
      {/* Прогресс-бар чтения (Read Progress) 
        Добавил градиент и неоновое свечение для премиальности
      */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 origin-left z-[100] rounded-r-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
        style={{ scaleX }}
      />

      {/* Обертка контента. 
        ТОЛЬКО opacity, никаких сдвигов по 'y', чтобы не ломать анимации внутри страниц.
      */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        {children}
      </motion.main>

      <PopupWidget />
    </div>
  );
}
