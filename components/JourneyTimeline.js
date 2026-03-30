import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Container from "./container";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Теплая встреча",
    desc: "Вас встретит заботливый администратор, который расскажет про правила центра и проводит на занятие.",
    img: "/img/gallery/gallery-03.jpeg"
  },
  {
    num: "02",
    title: "Подготовка и разминка",
    desc: "Тренер знакомится с ребёнком, выявляет потребности, начинает занятие с разминки.",
    img: "/img/gallery/gallery-01.jpeg"
  },
  {
    num: "03",
    title: "Бережное плавание",
    desc: "Погружение в воду температурой 32-33°C в ритме ребенка через мягкие упражнения, игры и осознанное погружение.",
    img: "/img/gallery/gallery-04.jpeg"
  },
  {
    num: "04",
    title: "Отдых",
    desc: "Во время и после занятия можно отдохнуть в зоне ожидания, выпить оздоровительный кислородный коктейль или ароматный кофе.",
    img: "/img/gallery/gallery-05.jpeg"
  }
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-white/40">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

          {/* Sticky Header */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6 text-balance"
            >
              Как проходит первое занятие
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed font-medium"
            >
              Мягкая адаптация шаг за шагом. Вы поймете, что плавать с грудничком - это полезно, очень приятно и весело.
            </motion.p>
          </div>

          {/* Scrolling Timeline List */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12 sm:gap-20 relative">
            {/* Progress Line */}
            <div className="absolute left-[2.25rem] sm:left-[3.25rem] top-0 bottom-0 w-1 bg-slate-100 rounded-full z-0 hidden sm:block overflow-hidden">
               <motion.div
                 className="w-full bg-sky-400 origin-top"
                 style={{ scaleY: scrollYProgress }}
               />
            </div>

            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 sm:gap-10 relative z-10 items-start group"
              >
                {/* Number Bubble */}
                <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-[2rem] bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:border-sky-400 group-hover:shadow-soft transition-all duration-500 overflow-hidden relative">
                   <span className="text-2xl sm:text-4xl font-black text-slate-300 group-hover:text-sky-500 transition-colors absolute z-10 bg-white/80 w-full h-full flex items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-none">
                     {step.num}
                   </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-glass hover:shadow-soft transition-shadow duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-sky-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 tracking-tight relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium relative z-10 mb-6">
                    {step.desc}
                  </p>

                  {/* Image wrapper with smooth scaling */}
                  <div className="relative w-full h-48 sm:h-64 rounded-3xl overflow-hidden shadow-sm bg-slate-100 z-10">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
