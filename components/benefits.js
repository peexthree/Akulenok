import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";

const items = [
  {
    title: "Снятие мышечного напряжения",
    desc: "Теплая вода мягко расслабляет тело, помогая малышу справиться с гипертонусом и нормализовать беспокойный сон.",
    img: "/img/love.png",
  },
  {
    title: "Стимуляция моторики",
    desc: "Водная среда запускает естественные процессы развития, помогая детям мягко и без перегрузок осваивать новые физические навыки.",
    img: "/img/play.png",
  },
  {
    title: "Укрощение гиперактивности",
    desc: "Правильная активность в бассейне трансформирует излишки энергии в здоровый аппетит и крепкую нервную систему.",
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
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold leading-snug tracking-tight text-slate-800 lg:leading-tight lg:text-4xl"
        >
          Почему неврологи и педиатры рекомендуют воду?
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-8 md:grid-cols-3 pb-12"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass-card p-10 flex flex-col items-center text-center transition-all duration-300"
          >
            <div className="w-32 h-32 mb-8 relative flex items-center justify-center bg-teal-50 rounded-[40px] overflow-hidden border-4 border-white shadow-soft">
              <Image
                src={item.img}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
