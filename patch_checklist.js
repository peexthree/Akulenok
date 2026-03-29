const fs = require('fs');

const fileContent = `"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Container from "./container";
import { motion, AnimatePresence } from "framer-motion";
import { useShark } from "./SharkProvider";

export default function Checklist() {
  const { setIsOpen } = useShark();
  const [isPressing, setIsPressing] = useState(false);
  const pressTimer = useRef(null);

  // States for interactive checklist
  const [activeTab, setActiveTab] = useState(null); // 'gym' | 'pool'
  const [poolAge, setPoolAge] = useState(null); // 'under3' | '3to7'

  const startPress = () => {
    setIsPressing(true);
    pressTimer.current = setTimeout(() => {
      setIsPressing(false);
      setIsOpen(true);
    }, 3000);
  };

  const cancelPress = () => {
    setIsPressing(false);
    if (pressTimer.current) clearTimeout(pressTimer.current);
  };

  const gymItems = [
    "удобная спортивная одежда",
    "бутылка воды",
    "сланцы",
    "хорошее настроение"
  ];

  const poolUnder3Items = [
    "подгузник многоразовый",
    "пелёнка",
    "Полотенце",
    "мыло",
    "мочалка",
    "сменная обувь для родителя",
    "сменная футболка (необязательно)"
  ];

  const pool3to7Items = [
    "плавки/купальник",
    "очки плавательные",
    "шапочка для плавания",
    "Полотенце",
    "мыло",
    "мочалка",
    "сменная обувь для родителя и ребёнка"
  ];

  const renderList = (items) => (
    <motion.ul
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="space-y-3 mt-6 text-left w-full max-w-sm mx-auto"
    >
      {items.map((item, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="flex items-center gap-3 text-slate-700 font-medium"
        >
          <div className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <Container className="py-24 relative overflow-hidden bg-white">

      {/* ИНТЕРАКТИВНЫЙ МАСКОТ-ПАСХАЛКА */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] z-0 cursor-crosshair"
        onMouseDown={startPress}
        onMouseUp={cancelPress}
        onMouseLeave={cancelPress}
        onTouchStart={startPress}
        onTouchEnd={cancelPress}
      >
        <AnimatePresence>
          {isPressing && (
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[8px] border-sky-400 pointer-events-none"
            />
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <Image
            src="/img/think.png"
            alt="Background Thinking Shark"
            fill
            unoptimized
            className="object-contain blur-[8px] pointer-events-none select-none"
            sizes="1000px"
          />
        </motion.div>
      </div>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <div className="flex flex-col items-center pt-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 relative pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight drop-shadow-sm pointer-events-auto"
          >
            Что взять на занятие?
          </motion.h2>
          <p className="text-xl text-slate-600 font-medium text-balance pointer-events-auto">
            Акулёнок подсказывает: подготовьте эти вещи заранее, чтобы первый заплыв прошёл идеально.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto flex flex-col items-center bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-[3rem] shadow-soft border border-slate-100 z-10 pointer-events-auto">

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => { setActiveTab(activeTab === 'gym' ? null : 'gym'); setPoolAge(null); }}
              className={\`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 \${
                activeTab === 'gym'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-200 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }\`}
            >
              Зал
            </button>
            <button
              onClick={() => { setActiveTab(activeTab === 'pool' ? null : 'pool'); setPoolAge(null); }}
              className={\`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 \${
                activeTab === 'pool'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-200 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }\`}
            >
              Бассейн
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'gym' && (
              <motion.div key="gym" className="w-full flex flex-col items-center">
                {renderList(gymItems)}
              </motion.div>
            )}

            {activeTab === 'pool' && (
              <motion.div key="pool" className="w-full flex flex-col items-center">
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={() => setPoolAge('under3')}
                    className={\`px-6 py-2 rounded-xl font-semibold transition-all duration-300 \${
                      poolAge === 'under3'
                      ? 'bg-sky-100 text-sky-600 border-2 border-sky-300'
                      : 'bg-white border-2 border-slate-200 text-slate-500 hover:border-sky-200'
                    }\`}
                  >
                    до 3 лет
                  </button>
                  <button
                    onClick={() => setPoolAge('3to7')}
                    className={\`px-6 py-2 rounded-xl font-semibold transition-all duration-300 \${
                      poolAge === '3to7'
                      ? 'bg-sky-100 text-sky-600 border-2 border-sky-300'
                      : 'bg-white border-2 border-slate-200 text-slate-500 hover:border-sky-200'
                    }\`}
                  >
                    от 3 до 7 лет
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {poolAge === 'under3' && <motion.div key="u3">{renderList(poolUnder3Items)}</motion.div>}
                  {poolAge === '3to7' && <motion.div key="37">{renderList(pool3to7Items)}</motion.div>}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </Container>
  );
}
`;

fs.writeFileSync('components/checklist.js', fileContent);
console.log('checklist.js updated');
