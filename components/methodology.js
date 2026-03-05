import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./container";

const services = [
  {
    title: "Грудничковое плавание",
    desc: "Для малышей от 1 до 12 месяцев. Адаптация к воде, развитие рефлексов, укрепление мышц и иммунитета в формате игры.",
    color: "from-sky-100 to-teal-50"
  },
  {
    title: "Гидрореабилитация",
    desc: "Специализированные занятия для детей с особенностями развития (ДЦП, аутизм, задержка речи). Мягкая проработка тонуса и моторики.",
    color: "from-teal-100 to-emerald-50"
  },
  {
    title: "ЛФК на суше",
    desc: "Гимнастика перед плаванием для разогрева суставов и связок, профилактика плоскостопия и нарушений осанки.",
    color: "from-blue-100 to-indigo-50"
  },
  {
    title: "Раннее плавание",
    desc: "Для детей от 1 до 3 лет. Обучение базовым навыкам плавания, ныряния и правильного дыхания в воде.",
    color: "from-indigo-100 to-purple-50"
  }
];

export default function Methodology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-slate-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

          {/* Sticky Header */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] z-10">
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
                <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                duration: 0.8, 
                ease: "easeOut"
              }}
              className="mt-auto hidden lg:block relative w-full max-w-[400px]"
            >
              <Image
                src="/img/akulenok-mascot.png"
                alt="Акулёнок маскот"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Scrolling Services Cards */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8 relative z-0">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className={`flex flex-col p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br ${service.color} shadow-sm hover:shadow-glass transition-all duration-500 overflow-hidden relative group`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-24 h-24 sm:w-32 sm:h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight relative z-10">
                  {service.title}
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed font-medium relative z-10 max-w-xl">
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
