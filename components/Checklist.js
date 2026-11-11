import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";

const gymItems = [
  "удобная спортивная одежда",
  "бутылка воды",
  "сланцы",
  "хорошее настроение",
];

const poolUnder3Items = [
  "многоразовый подгузник для плавания",
  "пелёнка",
  "полотенце",
  "сменная футболка и обувь для родителя",
  "мыло и мочалка",
];

const pool3to7Items = [
  "очки для плавания",
  "полотенце",
  "плавки или купальник",
  "шапочка для плавания",
  "сменная обувь для родителя и ребёнка",
  "мыло и мочалка",
];

export default function Checklist() {
  const [activeTab, setActiveTab] = useState("pool"); // 'gym' | 'pool'
  const [poolAge, setPoolAge] = useState("under3"); // 'under3' | '3to7'

  const renderList = (items) => (
    <motion.ul
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="space-y-3 mt-4 text-left w-full max-w-md mx-auto"
    >
      {items.map((item, idx) => (
        <li
          key={item}
          className="flex items-center gap-3.5 text-slate-700 font-semibold bg-slate-50/80 px-4 py-3 rounded-2xl border border-slate-100"
        >
          <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-black shrink-0">
            {idx + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <Container className="py-24 relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl my-6 shadow-soft border border-white/90">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] z-0 pointer-events-none select-none opacity-20"
      >
        <Image
          src="/img/think.webp"
          alt=""
          fill
          className="object-contain blur-[6px]"
          sizes="700px"
        />
      </div>

      <div className="flex flex-col items-center pt-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4">
            Памятка
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] mb-5 tracking-tight"
          >
            Что взять на занятие?
          </motion.h2>
          <p className="text-xl text-slate-600 font-medium text-balance">
            Всё необходимое для плавания можно приобрести в нашем аквацентре. С собой понадобится:
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto flex flex-col items-center bg-white/85 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-soft border border-white/90 z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6" role="group" aria-label="Выбор зоны занятия">
            <button
              type="button"
              aria-pressed={activeTab === "pool"}
              onClick={() => setActiveTab("pool")}
              className={`px-8 py-3.5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === "pool"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/20 scale-[1.02]"
                  : "bg-[#F6FBFF] text-slate-600 border border-sky-100 hover:bg-sky-50"
              }`}
            >
              Бассейн
            </button>
            <button
              type="button"
              aria-pressed={activeTab === "gym"}
              onClick={() => setActiveTab("gym")}
              className={`px-8 py-3.5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === "gym"
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/25 scale-[1.02]"
                  : "bg-[#F6FBFF] text-slate-600 border border-sky-100 hover:bg-rose-50 hover:text-rose-700"
              }`}
            >
              Зал
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "gym" && (
              <motion.div
                key="gym"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center"
              >
                {renderList(gymItems)}
              </motion.div>
            )}

            {activeTab === "pool" && (
              <motion.div
                key="pool"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center"
              >
                <div className="flex flex-wrap justify-center gap-3 mb-4" role="group" aria-label="Возраст ребёнка">
                  <button
                    type="button"
                    aria-pressed={poolAge === "under3"}
                    onClick={() => setPoolAge("under3")}
                    className={`px-5 py-2 rounded-xl font-bold text-sm transition-all duration-200 ${
                      poolAge === "under3"
                        ? "bg-sky-100 text-sky-700 border-2 border-sky-300"
                        : "bg-white border-2 border-slate-200 text-slate-600 hover:border-sky-200"
                    }`}
                  >
                    до 3 лет
                  </button>
                  <button
                    type="button"
                    aria-pressed={poolAge === "3to7"}
                    onClick={() => setPoolAge("3to7")}
                    className={`px-5 py-2 rounded-xl font-bold text-sm transition-all duration-200 ${
                      poolAge === "3to7"
                        ? "bg-sky-100 text-sky-700 border-2 border-sky-300"
                        : "bg-white border-2 border-slate-200 text-slate-600 hover:border-sky-200"
                    }`}
                  >
                    от 3 до 7 лет
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {poolAge === "under3" && (
                    <motion.div key="u3" className="w-full">
                      {renderList(poolUnder3Items)}
                    </motion.div>
                  )}
                  {poolAge === "3to7" && (
                    <motion.div key="37" className="w-full">
                      {renderList(pool3to7Items)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
}
