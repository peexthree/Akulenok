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
    icon3d: "/img/3d-icons/1.webp" // ИСПРАВЛЕНО ПОД ТВОЙ GITHUB
  },
  {
    title: "Гидрореабилитация",
    desc: "Специализированные занятия для детей с особенностями развития (ДЦП, аутизм, задержка речи). Мягкая проработка тонуса и моторики.",
    color: "from-teal-100 to-emerald-50",
    icon3d: "/img/3d-icons/2.webp"
  },
  {
    title: "ЛФК на суше",
    desc: "Гимнастика перед плаванием для разогрева суставов и связок, профилактика плоскостопия и нарушений осанки.",
    color: "from-blue-100 to-indigo-50",
    icon3d: "/img/3d-icons/3.webp"
  },
  {
    title: "Раннее плавание",
    desc: "Для детей от 1 до 3 лет. Обучение базовым навыкам плавания, ныряния и правильного дыхания в воде.",
    color: "from-indigo-100 to-purple-50",
    icon3d: "/img/3d-icons/4.webp"
  }
];

export default function Methodology() {
  return (
    <section className="py-24 lg:py-32 relative bg-slate-50 overflow-visible z-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

          {/* Левая колонка: Только текст, ничего лишнего */}
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
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              Мы используем современные методики для гармоничного развития ребенка, комбинируя работу в зале и воде.
            </motion.p>
          </div>

          {/* Правая колонка: Складывающиеся карточки */}
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
                
                {/* 3D ИКОНКА */}
                <motion.div 
                  className="absolute top-0 right-0 p-4 opacity-80 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10 group-hover:scale-110"
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                >
                  <Image
                    src={service.icon3d}
                    alt={service.title}
                    width={250}
                    height={250}
                    className="w-44 h-44 sm:w-60 sm:h-60 xl:w-64 xl:h-64 object-contain drop-shadow-xl"
                    priority={idx === 0} // Приоритет первой карточке
                  />
                </motion.div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight relative z-10 text-balance">
                  {service.title}
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed font-semibold relative z-10 max-w-xl text-balance">
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
