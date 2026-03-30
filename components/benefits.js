"use client";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";

const items = [
  {
    title: "Интеллектуальный буст",
    desc: "Плавание стимулирует развитие нейронных связей. Пока Акулёнок работает, ваш малыш прокачивает мозг через координацию в воде.",
    img: "/img/benefit-one.png",
  },
  {
    title: "Доказанная методология",
    desc: "Мы не просто плаваем - мы изучаем. Каждое движение основано на рекомендациях педиатров и современной базе знаний о развитии.",
    img: "/img/benefit-two.png",
  },
  {
    title: "Эмоциональный интеллект",
    desc: "Результат занятий - это не только мышцы, но и комфорт. Спокойный сон, отсутствие стресса и уверенность в каждом движении.",
    img: "/img/hero.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
};

export default function Benefits() {
  return (
    <Container>
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight"
        >
          Почему «Акулёнок» - это верный выбор?
        </motion.h2>
        <div className="w-24 h-2 bg-sky-500 mx-auto mt-6 rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-10 md:grid-cols-3 pb-12 relative z-10"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="bg-white/60 backdrop-blur-xl p-10 flex flex-col items-center text-center rounded-[3rem] border border-white shadow-soft hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-40 h-40 mb-8 relative flex items-center justify-center bg-sky-50 rounded-[40px] overflow-hidden border-4 border-white shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4 leading-tight">
              {item.title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Мягкое фоновое свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[120px] opacity-40 -z-10" />
    </Container>
  );
}
