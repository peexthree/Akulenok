import React, { memo } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

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
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={wrapperClasses}
    >
      {props.pretitle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-block px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4 shadow-sm"
        >
          {props.pretitle}
        </motion.div>
      )}

      {props.title && (
        <h2 className="max-w-3xl mt-2 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#0C1A2E] text-balance">
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
