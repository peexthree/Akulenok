"use client";
import React, { memo } from "react"; // Явный импорт memo
import clsx from "clsx";
import { motion } from "framer-motion";

// 1. Объявляем компонент как обычную функцию
const SectionTitle = (props) => {
  const isLeft = props.align === "left";

  const wrapperClasses = clsx(
    "flex w-full flex-col mb-12 relative z-10",
    { "items-center text-center mx-auto": !isLeft },
    { "items-start text-left": isLeft },
    props.className
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={wrapperClasses}
    >
      {props.pretitle && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-block px-5 py-2 rounded-full bg-sky-100 text-sky-600 font-bold text-sm tracking-widest uppercase mb-4 shadow-sm"
        >
          {props.pretitle}
        </motion.div>
      )}

      {props.title && (
        <h2 className="max-w-3xl mt-2 text-4xl sm:text-5xl font-black leading-tight tracking-tight text-slate-900 text-balance">
          {props.title}
        </h2>
      )}

      {props.children && (
        <div className="max-w-2xl py-4 text-xl font-medium leading-relaxed text-slate-600 text-balance">
          {props.children}
        </div>
      )}
    </motion.div>
  );
};

// 2. Указываем displayName для отладки (Next.js это любит)
SectionTitle.displayName = "SectionTitle";

// 3. Экспортируем мемоизированную версию
const MemoizedSectionTitle = memo(SectionTitle);
export default MemoizedSectionTitle;
