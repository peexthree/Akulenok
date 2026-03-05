import React from "react";
import { motion } from "framer-motion";
import Container from "./container";

const items = [
  { title: "Питьевое качество", desc: "Вода проходит 3 ступени очистки" },
  { title: "Без хлора", desc: "Очистка серебром и УФ-лампами" },
  { title: "Медицинское", desc: "образование у всех тренеров" },
  { title: "Одобрено", desc: "педиатрами и неврологами" },
];

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-20 pb-12 w-full px-4 sm:px-6">
      <Container className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 bg-white/80 backdrop-blur-2xl rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(14,165,233,0.1)] border border-white"
        >
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-1 p-2 sm:p-4 hover:bg-slate-50/50 rounded-2xl transition-colors">
              <div className="w-10 h-10 mb-2 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-tight">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-snug">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
