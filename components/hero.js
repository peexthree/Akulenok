import React, { useState, useRef } from "react";
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

  // Magnet effect reference
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // Slight translation based on mouse position
    buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden mesh-bg animate-mesh rounded-b-[3rem] sm:rounded-b-[4rem]"
    >
      {/* Cinematic Background Images / Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-multiply">
        {/* We can use the mesh-bg directly as a class above, but keep these animated blobs for extra feel */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-200/40 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-sky-200/40 rounded-full blur-[120px] animate-blob delay-700" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-glass mb-8 hover:bg-white/60 transition-colors"
        >
          <img src="/img/logo-akulenok-social.jpg" className="w-6 h-6 rounded-full" />
          <span className="flex h-2.5 w-2.5 rounded-full bg-sky-500 animate-pulse"></span>
          <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Первое занятие со скидкой 50%</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-800 leading-[1.05] mb-8 text-balance"
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
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
        >
          <div
             className="relative inline-block"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
             ref={buttonRef}
             style={{ transition: 'transform 0.1s ease-out' }}
          >
            <button
              onClick={() => setFormOpen(true)}
              className="group relative px-10 py-6 sm:px-12 sm:py-7 bg-slate-900 text-white rounded-[2.5rem] text-xl sm:text-2xl font-bold overflow-hidden shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                Записаться на экскурсию
                <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          <button className="px-10 py-6 sm:px-12 sm:py-7 bg-white/40 backdrop-blur-xl text-slate-800 rounded-[2.5rem] text-xl sm:text-2xl font-bold border border-white/60 shadow-glass hover:bg-white/60 hover:shadow-soft transition-all duration-300 w-full sm:w-auto">
            Узнать цены
          </button>
        </motion.div>

        {/* Decorative Floating Elements */}
        <motion.div style={{ y: y1 }} className="absolute hidden lg:block left-[5%] top-[20%] w-32 h-32 bg-white/30 backdrop-blur-2xl rounded-3xl rotate-12 shadow-glass border border-white/50 overflow-hidden">
           <Image src="/img/akulenok-mascot.png" alt="" fill className="object-contain p-4" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute hidden lg:block right-[5%] top-[40%] w-40 h-40 bg-white/30 backdrop-blur-2xl rounded-full shadow-glass border border-white/50 overflow-hidden">
           <Image src="/img/love.png" alt="" fill className="object-contain p-6" />
        </motion.div>

      </Container>

      {/* We'll mount the TrustBar below the hero natively or slightly overlapping */}

      <MultiStepForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </motion.section>
  );
}
