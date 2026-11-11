import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Container from "./Container";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Тёплая встреча",
    desc: "Вас встретит заботливый администратор, который расскажет про правила центра и проводит на занятие.",
    img: "/img/gallery/q (1).webp",
  },
  {
    num: "02",
    title: "Подготовка и разминка",
    desc: "Тренер знакомится с ребёнком, выявляет потребности, начинает занятие с мягкой разминки.",
    img: "/img/gallery/q (4).webp",
  },
  {
    num: "03",
    title: "Бережное плавание",
    desc: "Погружение в воду температурой 32-33 °C в ритме ребёнка - через игры и осознанное погружение.",
    img: "/img/gallery/q (5).webp",
  },
  {
    num: "04",
    title: "Отдых",
    desc: "После занятия можно отдохнуть в зоне ожидания, выпить кислородный коктейль или ароматный кофе.",
    img: "/img/gallery/q (2).webp",
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-24 relative bg-[#F6FBFF] overflow-visible">
      <div className="absolute top-32 right-1/4 w-80 h-80 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 relative">
          {/* Липкий заголовок */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 lg:self-start">
            <span className="badge-pretitle mb-4">
              Первый визит
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-[1.1] mb-6 text-balance"
            >
              Как проходит первое занятие
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-6 leading-relaxed font-medium"
            >
              Мягкая адаптация шаг за шагом. Вы поймёте, что плавать с грудничком - это полезно, приятно и весело.
            </motion.p>
          </div>

          {/* Таймлайн */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12 sm:gap-16 relative">
            <div className="absolute left-[2.25rem] sm:left-[3.25rem] top-0 bottom-0 w-1 bg-sky-100 rounded-full z-0 hidden sm:block overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-sky-500 to-rose-500 origin-top"
                style={{ scaleY: scrollYProgress }}
              />
            </div>

            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 sm:gap-10 relative z-10 items-start group"
              >
                <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-white/90 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-soft group-hover:border-rose-300 transition-all duration-300 overflow-hidden relative">
                  <span className="font-display text-2xl sm:text-4xl font-extrabold text-sky-500 group-hover:text-rose-500 transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="flex-1 bg-white/80 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-9 shadow-soft hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0C1A2E] mb-3 tracking-tight relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium relative z-10 mb-6">
                    {step.desc}
                  </p>

                  <div className="relative w-full h-48 sm:h-64 rounded-3xl overflow-hidden shadow-sm bg-[#F6FBFF] z-10">
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
