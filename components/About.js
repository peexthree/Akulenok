import React from "react";
import Container from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const stats = [
  { k: "3 мес+", v: "возраст начала" },
  { k: "4.7★", v: "рейтинг по отзывам" },
  { k: "от 30 мин", v: "длительность занятия" },
];

const reasons = [
  "Наши специалисты имеют педагогическое и профильное образование и постоянно повышают квалификацию.",
  "Мы используем современные технологии и многоступенчатую систему очистки воды, соответствующую требованиям санитарных правил.",
  "Комфорт и безопасность для детей и взрослых.",
  "Индивидуальный подход к каждому и персональная программа тренировок.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <Container>
      <div id="about" className="grid gap-12 lg:gap-12 lg:grid-cols-2 items-center relative z-10 py-12 lg:py-20 scroll-mt-24">
        {/* Левая колонка */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative p-2"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 opacity-15 rotate-12 pointer-events-none -z-10">
            <Image src="/img/play.png" alt="" fill className="object-contain" sizes="(max-width: 768px) 256px, 320px" />
          </div>

          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4"
          >
            О центре
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Про нас
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 leading-relaxed z-10 relative font-medium">
            Семейный аквацентр в г. Туймазы: грудничковое плавание, раннее и семейное плавание, а также женский и детский фитнес (ритмика, ОФП, гимнастика, стретчинг). Комфортные условия для здоровья всей семьи.
          </motion.p>

          <motion.div variants={containerVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 z-10 relative">
            {stats.map((s) => (
              <motion.div
                key={s.k}
                variants={itemVariants}
                className="bg-white/85 backdrop-blur-md border border-sky-100/70 p-5 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-black text-sky-600 mb-1">{s.k}</div>
                <div className="text-sm font-semibold text-slate-600">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Правая колонка */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group h-full"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 sm:p-10 pb-28 sm:pb-32 shadow-soft relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 mb-6 relative z-10">
              Почему нам доверяют
            </h3>

            <ul className="space-y-5 relative z-10 pr-4 sm:pr-12">
              {reasons.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-6 h-6 text-sky-500" aria-hidden="true" />
                  </div>
                  <span className="text-slate-600 leading-relaxed font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 w-44 h-44 sm:w-56 sm:h-56 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 z-20 drop-shadow-xl">
            <Image src="/img/love.png" alt="Акулёнок" fill className="object-contain" sizes="(max-width: 768px) 176px, 224px" />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default React.memo(About);
