"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useShark } from "./SharkProvider";

// Поп-ап не нужен поисковикам, грузим только на клиенте
const PopupWidget = dynamic(() => import("./popupWidget"), { ssr: false });
const MultiStepForm = dynamic(() => import("./MultiStepForm"), { ssr: false });

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const { isFormOpen, setFormOpen } = useShark();
  
  // Плавность "как по маслу"
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-nunito overflow-x-hidden selection:bg-sky-200 selection:text-sky-900">
      
      {/* ПРОГРЕСС-БАР: 
          Добавил 'backdrop-blur' для эффекта глубины над контентом 
      */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 origin-left z-[100] rounded-r-full shadow-[0_0_15px_rgba(56,189,248,0.6)] backdrop-blur-sm"
        style={{ scaleX }}
      />

      {/* ОСНОВНОЙ КОНТЕНТ: 
          Добавил 'will-change-opacity' для оптимизации GPU на твоем S25 Ultra
      */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col min-h-screen will-change-[opacity]"
      >
        {children}
      </motion.main>

      {/* Виджет обратной связи */}
      <PopupWidget />

      {/* Глобальная форма записи */}
      <AnimatePresence>
        {isFormOpen && (
          <MultiStepForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
