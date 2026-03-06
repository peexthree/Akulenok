"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SharkBlock from "./SharkBlock"; // Убедись, что твоя визитка лежит рядом

// Создаем канал связи
const SharkContext = createContext();
export const useShark = () => useContext(SharkContext);

export const SharkProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);

  // ПАСХАЛКА №1: ЧИТ-КОД "IGOR" (Слушаем клавиатуру)
  useEffect(() => {
    let keys = [];
    const secret = "igor";
    
    const handleKeyDown = (e) => {
      keys.push(e.key.toLowerCase());
      if (keys.length > secret.length) keys.shift(); // Держим в памяти только последние 4 буквы
      
      if (keys.join("") === secret) {
        setGlitch(true); // Врубаем тряску экрана
        setTimeout(() => {
          setGlitch(false);
          setIsOpen(true); // Открываем визитку
        }, 400);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SharkContext.Provider value={{ setIsOpen }}>
      {/* Если ввели код - весь сайт слегка трясется */}
      <motion.div animate={{ x: glitch ? [-10, 10, -10, 10, 0] : 0 }} className="relative z-0">
        {children}
      </motion.div>

      {/* Само всплывающее окно. Появится только если isOpen === true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/40 p-4"
            onClick={() => setIsOpen(false)} // Закрыть при клике в пустоту
          >
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Чтобы не закрывалось при клике на саму карточку
            >
              <SharkBlock />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SharkContext.Provider>
  );
};
