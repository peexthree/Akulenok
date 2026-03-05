import React, { useState } from "react";
import Image from "next/image";
import Container from "./container";
import TrustBar from "./TrustBar";
import { motion, useScroll, useTransform } from "framer-motion";
import MultiStepForm from "./MultiStepForm";

export default function Hero() {
  const [isFormOpen, setFormOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Cinematic Background Images / Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-sky-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse delay-700" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
          <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">Первое занятие со скидкой 50%</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 leading-[1.1] mb-8 text-balance"
        >
          Бережное плавание для гармоничного развития
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500"> вашего малыша</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed text-balance font-medium"
        >
          Снимаем гипертонус, укрепляем иммунитет и нервную систему через игру и мягкую адаптацию к воде. Без слез и стресса.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => setFormOpen(true)}
            className="group relative px-8 py-5 sm:px-10 sm:py-6 bg-slate-900 text-white rounded-[2rem] text-lg sm:text-xl font-bold overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-sky-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-in-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Записаться на экскурсию
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>

          <button className="px-8 py-5 sm:px-10 sm:py-6 bg-white/60 backdrop-blur-md text-slate-800 rounded-[2rem] text-lg sm:text-xl font-bold border border-white/80 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 w-full sm:w-auto">
            Узнать цены
          </button>
        </motion.div>

        {/* Decorative Floating Elements (optional, if you have assets, otherwise just CSS shapes) */}
        <motion.div style={{ y: y1 }} className="absolute hidden lg:block left-[5%] top-[20%] w-24 h-24 bg-white/40 backdrop-blur-xl rounded-3xl rotate-12 shadow-glass border border-white/60" />
        <motion.div style={{ y: y2 }} className="absolute hidden lg:block right-[5%] top-[40%] w-32 h-32 bg-white/40 backdrop-blur-xl rounded-full shadow-glass border border-white/60" />

      </Container>
      <TrustBar />

      <MultiStepForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </motion.section>
  );
}
