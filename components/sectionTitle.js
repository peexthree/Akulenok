"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

function SectionTitle(props) {
  // Определяем выравнивание (по умолчанию - по центру)
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={wrapperClasses}
    >
      {/* Pretitle в виде стильной плашки */}
      {props.pretitle && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-block px-5 py-2 rounded-full bg-sky-100 text-sky-600 font-bold text-sm tracking-widest uppercase mb-4 shadow-sm"
        >
          {props.pretitle}
        </motion.div>
      )}

      {/* Главный заголовок */}
      {props.title && (
        <h2 className="max-w-3xl mt-2 text-4xl sm:text-5xl font-black leading-tight tracking-tight text-slate-900 text-balance">
          {props.title}
        </h2>
      )}

      {/* Подзаголовок / Описание */}
      {props.children && (
        <p className="max-w-2xl py-4 text-xl font-medium leading-relaxed text-slate-600 text-balance">
          {props.children}
        </p>
      )}
    </motion.div>
  );
}

// React.memo защищает от лишних перерисовок
export default React.memo(SectionTitle);
