import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
  };

  const Item = ({ title, desc }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-8 flex flex-col h-full justify-start transition-all duration-300 hover:shadow-lg bg-white/60"
    >
      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-base lg:text-lg">{desc}</p>
    </motion.div>
  );

  return (
    <Container className="py-16">
      <div  className="text-center mb-12 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-extrabold text-slate-800"
        >
          Наши услуги
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-500 mt-3 text-lg"
        >
          Многопрофильный семейный центр для вашего здоровья
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-6 md:grid-cols-2 lg:gap-8"
      >
        <Item
          title="Адаптивное плавание"
          desc="Никакого жесткого принуждения. Только мягкое знакомство с водой в индивидуальном темпе, формирование крепкого мышечного корсета и правильного дыхания."
        />
        <Item
          title="Аквааэробика для беременных"
          desc="Ваше тело скажет «спасибо». Бережно снимаем напряжение со спины, убираем отечность и готовим организм к легким родам."
        />
        <Item
          title="Детский массаж (0+)"
          desc="Золотые руки специалиста с 17-летним опытом. Точечная работа с зажимами и запуск правильного физического развития."
        />
        <Item
          title="Женское здоровье (Фитнес)"
          desc="Возвращаем телу легкость, подвижность и энергию. Укрепление корсета в комфортной, поддерживающей атмосфере."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 p-8 glass-card bg-sky-50/50"
      >
        <ul className="text-slate-600 space-y-3 list-none text-lg">
          <li className="flex items-start">
            <span className="text-sky-400 mr-3 text-xl">✨</span>
            <span>Форматы занятий: мини‑группы, индивидуально, с участием родителя или без.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-3 text-xl">✨</span>
            <span>Длительность — обычно 30 минут (по показаниям индивидуально).</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-3 text-xl">✨</span>
            <span>Первая встреча — знакомство с тренером и подбор программы под ребёнка.</span>
          </li>
        </ul>
      </motion.div>
    </Container>
  );
}
