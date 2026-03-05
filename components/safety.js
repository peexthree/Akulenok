import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

export default function Safety() {
  return (
    <Container className="py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card p-10 lg:p-16 text-center max-w-4xl mx-auto flex flex-col items-center shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-20 h-20 mb-6 bg-sky-100 rounded-[30px] flex items-center justify-center shadow-soft"
        >
          <svg className="w-10 h-10 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </motion.div>

        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800 mb-6">
          Чистота, которой доверяют
        </h2>

        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
          Мы знаем, как для вас важна безопасность. В наших бассейнах вода строго соответствует санитарным нормам без использования агрессивного озонирования. Естественная, чистая и теплая среда — почти как мамины объятия.
        </p>
      </motion.div>
    </Container>
  );
}
