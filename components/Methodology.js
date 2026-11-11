import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const services = [
  {
    num: "01",
    title: "Грудничковое плавание",
    age: "от 3 до 12 месяцев",
    desc: "Мягкая адаптация к воде, формирование правильных двигательных навыков, укрепление мышц и иммунитета в игровой форме.",
    color: "from-white via-[#F6FBFF] to-sky-100/80",
    badge: "bg-sky-100 text-sky-700",
    icon3d: "/img/3d-icons/1.webp",
  },
  {
    num: "02",
    title: "Раннее плавание",
    age: "от 1 до 7 лет",
    desc: "Обучение базовым навыкам плавания, ныряния и правильного дыхания в воде по авторской методике «осознанного погружения». Развитие навыков самоспасения на воде.",
    color: "from-sky-50 via-white to-cyan-100/70",
    badge: "bg-sky-100 text-sky-700",
    icon3d: "/img/3d-icons/4.webp",
  },
  {
    num: "03",
    title: "Семейное плавание",
    age: "для детей и родителей",
    desc: "Совместные занятия в бассейне, объединяющие физическую активность и тесную эмоциональную связь с родителем.",
    color: "from-[#ECF8FF] via-white to-sky-100/80",
    badge: "bg-sky-100 text-sky-700",
    icon3d: "/img/3d-icons/3.webp",
  },
  {
    num: "04",
    title: "Женский фитнес",
    age: "для мам и женщин · ПН / СР / ПТ",
    desc: "Фитнес, стретчинг и отличное самочувствие: утренние группы (09:00, 10:00) и вечерние (18:30, 19:30) параллельно с детскими занятиями.",
    color: "from-sky-50 via-white to-rose-100/70",
    badge: "bg-rose-50 text-rose-700 border border-rose-200/70",
    icon3d: "/img/3d-icons/2.webp",
  },
  {
    num: "05",
    title: "Детский фитнес",
    age: "от 3 до 7 лет · ПН / СР / ПТ",
    desc: "Ритмика, ОФП и гимнастика в соседнем зале в 18:30 и 19:30 - ребёнок развивается, пока мама спокойно занимается рядом.",
    color: "from-cyan-50 via-white to-sky-100/70",
    badge: "bg-sky-100 text-sky-700",
    icon3d: "/img/3d-icons/service-4-mascot.webp",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 lg:py-32 relative bg-[#ECF8FF] overflow-visible z-10 scroll-mt-24">
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 relative items-start">
          {/* Левая липкая колонка */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 self-start z-10">
            <span className="badge-pretitle mb-4">
              Направления
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-[1.1] mb-6 text-balance"
            >
              Комплексный подход в воде и зале
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              Используем современные методики для гармоничного развития ребёнка и восстановления мам.
            </motion.p>
          </div>

          {/* Правая колонка: складывающиеся sticky-карточки */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6 relative z-0 pb-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
                style={{ top: `calc(92px + ${idx * 18}px)` }}
                className={`lg:sticky flex flex-col p-8 sm:p-11 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br ${service.color} backdrop-blur-xl shadow-soft border border-white/90 hover:shadow-xl transition-all duration-300 overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-85 group-hover:opacity-100 transition-transform duration-700 pointer-events-none z-0 group-hover:scale-105">
                  <Image
                    src={service.icon3d}
                    alt={service.title}
                    width={240}
                    height={240}
                    className="w-36 h-36 sm:w-52 sm:h-52 xl:w-56 xl:h-56 object-contain drop-shadow-xl"
                    priority={idx === 0}
                  />
                </div>

                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <span className="font-display text-xs font-extrabold tracking-widest uppercase text-slate-500">
                    {service.num}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.badge}`}>
                    {service.age}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0C1A2E] mb-4 tracking-tight relative z-10 text-balance pr-16 sm:pr-44">
                  {service.title}
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-semibold relative z-10 max-w-xl text-balance">
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
