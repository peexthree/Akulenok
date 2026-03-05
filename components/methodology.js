"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Container from "./container";

const services = [
  {
    title: "Грудничковое плавание",
    desc: "Для малышей от 1 до 12 месяцев. Адаптация к воде, развитие рефлексов, укрепление мышц и иммунитета в формате игры.",
    color: "from-sky-100 to-teal-50",
    // Новый путь к 3D ассету
    icon3d: "/img/3d-icons/baby-glass.webp" 
  },
  {
    title: "Гидрореабилитация",
    desc: "Специализированные занятия для детей с особенностями развития (ДЦП, аутизм, задержка речи). Мягкая проработка тонуса и моторики.",
    color: "from-teal-100 to-emerald-50",
    icon3d: "/img/3d-icons/splash-glass.webp"
  },
  {
    title: "ЛФК на суше",
    desc: "Гимнастика перед плаванием для разогрева суставов и связок, профилактика плоскостопия и нарушений осанки.",
    color: "from-blue-100 to-indigo-50",
    icon3d: "/img/3d-icons/gym-glass.webp"
  },
  {
    title: "Раннее плавание",
    desc: "Для детей от 1 до 3 лет. Обучение базовым навыкам плавания, ныряния и правильного дыхания в воде.",
    color: "from-indigo-100 to-purple-50",
    icon3d: "/img/3d-icons/buoy-glass.webp"
  }
];

export default function Methodology() {
  return (
    <section className="py-24 lg:py-32 relative bg-slate-50 overflow-visible z-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

          {/* Левая колонка: Sticky Header */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 self-start z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6 text-balance"
            >
              Комплексный подход
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed font-medium"
            >
              Мы используем современные методики для гармоничного развития ребенка, комбинируя работу в зале и воде.
            </motion.p>
            
            {/* Плавающий маскот */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -15, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, duration: 0.8, ease: "easeOut" }}
              className="hidden lg:block relative w-full max-w-[320px] mx-auto xl:max-w-[400px] z-10"
            >
              <Image
                src="/img/akulenok-mascot.png"
                alt="Акулёнок маскот"
                width={400}
                height={400}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>

          {/* Правая колонка: Карточки с эффектом наложения (Stacking) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6 relative z-0 pb-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                style={{ top: `calc(120px + ${idx * 25}px)` }}
                className={`sticky flex flex-col p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br ${service.color} shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                
                {/* ГИГАНТСКАЯ 3D ИКОНКА С АНИМАЦИЕЙ */}
                <motion.div 
                  className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10 group-hover:scale-110"
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                >
                  <Image
                    src={service.icon3d}
                    alt={service.title}
                    width={200}
                    height={200}
                    className="w-40 h-40 sm:w-56 sm:h-56 xl:w-64 xl:h-64 object-contain drop-shadow-lg"
                  />
                </motion.div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight relative z-10 text-balance">
                  {service.title}
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed font-medium relative z-10 max-w-xl text-balance">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
