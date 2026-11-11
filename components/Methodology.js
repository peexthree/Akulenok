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
    color: "from-sky-100 via-sky-50 to-teal-50",
    badge: "bg-sky-500/10 text-sky-700",
    icon3d: "/img/3d-icons/1.webp",
  },
  {
    num: "02",
    title: "Раннее плавание",
    age: "от 1 до 7 лет",
    desc: "Обучение базовым навыкам плавания, ныряния и правильного дыхания в воде по авторской методике «осознанного погружения». Развитие навыков самоспасения на воде.",
    color: "from-blue-100 via-sky-50 to-indigo-50",
    badge: "bg-blue-500/10 text-blue-700",
    icon3d: "/img/3d-icons/4.webp",
  },
  {
    num: "03",
    title: "Семейное плавание",
    age: "для детей и родителей",
    desc: "Совместные занятия в бассейне, объединяющие физическую активность и тесную эмоциональную связь с родителем.",
    color: "from-indigo-100 via-indigo-50 to-purple-50",
    badge: "bg-indigo-500/10 text-indigo-700",
    icon3d: "/img/3d-icons/3.webp",
  },
  {
    num: "04",
    title: "Умный фитнес",
    age: "для женщин",
    desc: "Возвращаем телу лёгкость, подвижность и энергию. Укрепление мышечного корсета и тазового дна в комфортной, поддерживающей атмосфере.",
    color: "from-fuchsia-100 via-pink-50 to-rose-50",
    badge: "bg-fuchsia-500/10 text-fuchsia-700",
    icon3d: "/img/3d-icons/2.webp",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 lg:py-32 relative bg-slate-50 overflow-visible z-10 scroll-mt-24">
      <Container>
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 relative items-start">
          {/* Левая липкая колонка */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 self-start z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4">
              Направления
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance"
            >
              Комплексный подход в воде
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              Мы используем современные методики для гармоничного развития ребёнка, комбинируя работу в зале и воде.
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
                style={{ top: `calc(104px + ${idx * 22}px)` }}
                className={`lg:sticky flex flex-col p-8 sm:p-12 rounded-[2.25rem] sm:rounded-[3rem] bg-gradient-to-br ${service.color} shadow-xl border border-white hover:shadow-2xl transition-shadow duration-300 overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-85 group-hover:opacity-100 transition-transform duration-700 pointer-events-none z-0 group-hover:scale-105">
                  <Image
                    src={service.icon3d}
                    alt={service.title}
                    width={250}
                    height={250}
                    className="w-36 h-36 sm:w-56 sm:h-56 xl:w-60 xl:h-60 object-contain drop-shadow-xl"
                    priority={idx === 0}
                  />
                </div>

                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <span className="text-xs font-black tracking-widest uppercase text-slate-500">
                    {service.num}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.badge}`}>
                    {service.age}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight relative z-10 text-balance pr-16 sm:pr-44">
                  {service.title}
                </h3>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-semibold relative z-10 max-w-xl text-balance">
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
