import Image from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";

const items = [
  {
    title: "Интеллектуальный буст",
    desc: "Плавание стимулирует развитие нейронных связей. Пока Акулёнок работает, ваш малыш прокачивает мозг через координацию в воде.",
    img: "/img/benefit-one.webp",
  },
  {
    title: "Доказанная методология",
    desc: "Мы не просто плаваем - мы изучаем. Каждое движение основано на рекомендациях педиатров и современной базе знаний о развитии.",
    img: "/img/benefit-two.webp",
  },
  {
    title: "Эмоциональный интеллект",
    desc: "Результат занятий - это не только мышцы, но и комфорт. Спокойный сон, отсутствие стресса и уверенность в каждом движении.",
    img: "/img/hero.webp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Benefits() {
  return (
    <Container className="relative">
      <div className="text-center mb-16 relative z-10">
        <span className="badge-pretitle mb-4">
          Преимущества
        </span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-[1.1] text-balance"
        >
          Почему «Акулёнок» - это верный выбор?
        </motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-rose-500 mx-auto mt-6 rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:gap-8 md:grid-cols-3 pb-12 relative z-10"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className={`backdrop-blur-xl p-8 rounded-3xl border border-white/90 shadow-soft hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center ${
              index === 1
                ? "bg-gradient-to-b from-white/95 to-sky-50/85 ring-1 ring-sky-200/60"
                : "glass-card"
            }`}
          >
            <div className="w-36 h-36 sm:w-40 sm:h-40 mb-7 relative flex items-center justify-center bg-[#ECF8FF] rounded-3xl overflow-hidden border-2 border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="160px"
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0C1A2E] mb-4 leading-tight">
              {item.title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
    </Container>
  );
}
