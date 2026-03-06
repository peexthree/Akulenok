"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

// Динамический импорт: исключаем ошибку при сборке и SSR
const SharkBlock = dynamic(() => import("./SharkBlock"), { 
  ssr: false,
  loading: () => <div className="text-white font-black animate-pulse">Инициализация Эйдоса...</div>
});

const SharkContext = createContext();
export const useShark = () => useContext(SharkContext);

export const SharkProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);

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
          setIsOpen(true);
        }, 400);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SharkContext.Provider value={{ setIsOpen }}>
      {/* Эффект тряски при активации */}
      <motion.div 
        animate={{ 
          x: glitch ? [-5, 5, -5, 5, 0] : 0,
          filter: glitch ? "contrast(1.2) brightness(1.2)" : "none" 
        }} 
        className="relative z-0"
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-xl p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg"
            >
              <SharkBlock />
              
              {/* Кнопка закрытия для UX */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors font-bold flex items-center gap-2"
              >
                Закрыть
                <kbd className="bg-white/10 px-2 py-1 rounded text-xs border border-white/20">ESC</kbd>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SharkContext.Provider>
  );
};
