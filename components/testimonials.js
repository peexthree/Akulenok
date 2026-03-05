import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Марина и Артём (6 мес)",
    role: "Ушел тонус ножек",
    text: "Пришли с сильным гипертонусом, малыш постоянно плакал. После 5 занятий у Артёма расслабились ножки, он стал лучше спать и улыбаться. Тренеры — чудо!",
    image: "/img/user1.jpg",
    color: "from-teal-50 to-emerald-50"
  },
  {
    name: "Екатерина и София (1 год)",
    role: "Перестали бояться воды",
    text: "Дочка жутко боялась купаться даже дома. В Акулёнке настолько мягкий подход и столько игрушек, что она сама тянется в воду. Спасибо за терпение!",
    image: "/img/user2.jpg",
    color: "from-sky-50 to-blue-50"
  },
  {
    name: "Анна и Матвей (3 мес)",
    role: "Первые успехи в нырянии",
    text: "Очень чистая вода, нет запаха хлорки. Тренер Эльвира нашла подход за 5 минут. Матвей уже задерживает дыхание и радостно плещется.",
    image: "/img/user3.jpg",
    color: "from-indigo-50 to-purple-50"
  }
];

export default function Testimonials() {
  return (
    <Container className="py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
          Истории мам
        </h2>
        <p className="text-xl text-slate-600">Настоящие результаты и эмоции наших маленьких чемпионов.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className={`flex flex-col p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br ${item.color} shadow-sm hover:shadow-glass hover:-translate-y-2 transition-all duration-500 relative`}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-6xl text-slate-300 font-serif opacity-30 leading-none">
              "
            </div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
               <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full border-2 border-white shadow-sm object-cover" />
               <div>
                  <h4 className="text-lg font-bold text-slate-800">{item.name}</h4>
                  <span className="text-sm font-semibold text-teal-600 bg-teal-100/50 px-2 py-1 rounded-full">{item.role}</span>
               </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed font-medium relative z-10 flex-grow">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
