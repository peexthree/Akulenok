import Image from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";

const items = [
  {
    title: "Интеллектуальный буст",
    desc: "Плавание стимулирует развитие нейронных связей. Пока Акулёнок работает, ваш малыш прокачивает мозг через координацию в воде.",
    img: "/img/benefit-one.png",
  },
  {
    title: "Доказанная методология",
    desc: "Мы не просто плаваем — мы изучаем. Каждое движение основано на рекомендациях педиатров и современной базе знаний о развитии.",
    img: "/img/benefit-two.png",
  },
  {
    title: "Эмоциональный интеллект",
    desc: "Результат занятий — это не только мышцы, но и комфорт. Спокойный сон, отсутствие стресса и уверенность в каждом движении.",
    img: "/img/hero.png",
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
        <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4">
          Преимущества
        </span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance"
        >
          Почему «Акулёнок» — это верный выбор?
        </motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3 pb-12 relative z-10"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.25 } }}
            className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 flex flex-col items-center text-center rounded-[2.5rem] sm:rounded-[3rem] border border-white shadow-soft hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-40 h-40 mb-8 relative flex items-center justify-center bg-sky-50 rounded-[40px] overflow-hidden border-4 border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="160px"
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
              {item.title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[120px] opacity-40 -z-10 pointer-events-none" />
    </Container>
  );
}
