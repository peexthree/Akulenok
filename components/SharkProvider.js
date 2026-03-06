"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const SharkBlock = dynamic(() => import("./SharkBlock"), { 
  ssr: false,
  loading: () => <div className="text-white font-black animate-pulse text-center">Синхронизация с S25 Ultra...</div>
});

const SharkContext = createContext();
export const useShark = () => useContext(SharkContext);

export const SharkProvider = ({ children }) => {
  // activeEgg может быть: 'egg1' (video), 'egg2' (video), 'egg3' (image) или null
  const [activeEgg, setActiveEgg] = useState(null);
  const [glitch, setGlitch] = useState(false);

  // --- МЕХАНИКА ЧИТ-КОДА "IGOR" ---
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
          setActiveEgg("egg1"); // Запускаем первое видео по чит-коду
        }, 400);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SharkContext.Provider value={{ setActiveEgg }}>
      {/* Визуальный отклик системы на активацию */}
      <motion.div 
        animate={{ 
          x: glitch ? [-5, 5, -5, 5, 0] : 0,
          filter: glitch ? "contrast(1.5) brightness(1.2) hue-rotate(90deg)" : "none" 
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 backdrop-blur-2xl p-4"
            onClick={() => setActiveEgg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full flex justify-center"
            >
              {/* Передаем ID пасхалки в компонент отображения */}
              <SharkBlock eggId={activeEgg} onClose={() => setActiveEgg(null)} />
              
              <button 
                onClick={() => setActiveEgg(null)}
                className="absolute -top-16 right-0 text-white/40 hover:text-white transition-colors font-black flex items-center gap-2 group"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">Закрыть терминал</span>
                <div className="bg-white/10 p-2 rounded-full border border-white/20 group-hover:border-sky-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SharkContext.Provider>
  );
};
