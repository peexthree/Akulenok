"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const SharkBlock = dynamic(() => import("./SharkBlock"), { 
  ssr: false,
  loading: () => <div className="text-white font-black animate-pulse text-center uppercase tracking-widest">Инициализация S25 Ultra...</div>
});

const SharkContext = createContext();
export const useShark = () => useContext(SharkContext);

export const SharkProvider = ({ children }) => {
  // egg1: 10 кликов (Navbar) | egg2: "IGOR" (Код) | egg3: Гигантский маскот
  const [activeEgg, setActiveEgg] = useState(null);
  const [glitch, setGlitch] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);

  // --- МЕХАНИКА ЧИТ-КОДА "IGOR" (Пасхалка №2) ---
  useEffect(() => {
    let keys = [];
    const secret = "igor";
    
    const handleKeyDown = (e) => {
      keys.push(e.key.toLowerCase());
      if (keys.length > secret.length) keys.shift();
      
      if (keys.join("") === secret) {
        setGlitch(true);
        setTimeout(() => {
          setGlitch(false);
          setActiveEgg("egg2"); // По твоему плану: IGOR -> второе видео
        }, 400);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SharkContext.Provider value={{ setActiveEgg, isFormOpen, setFormOpen }}>
      {/* Визуальный глитч при активации кода */}
      <motion.div 
        animate={{ 
          x: glitch ? [-3, 3, -3, 3, 0] : 0,
          filter: glitch ? "contrast(1.3) brightness(1.1) hue-rotate(45deg)" : "none" 
        }} 
        className="relative z-0"
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {activeEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Облегченный фон: почти прозрачный, чтобы не прятать сайт
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/10 backdrop-blur-md p-4"
            onClick={() => setActiveEgg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              {/* КНОПКА ЗАКРЫТЬ: Теперь по центру сверху, как ты просил */}
              <button 
                onClick={() => setActiveEgg(null)}
                className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-xl border border-white/20 rounded-full text-white transition-all group"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Закрыть</span>
                <XIcon />
              </button>

              {/* Сам контент пасхалки */}
              <SharkBlock eggId={activeEgg} onClose={() => setActiveEgg(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SharkContext.Provider>
  );
};

// Мини-компонент иконки, чтобы не плодить импорты
const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
