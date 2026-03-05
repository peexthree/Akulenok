import React from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";

const members = [
  { name: "Алсу Ханнанова", role: "Основатель", image: "/img/user1.jpg" },
  { name: "Любовь Точилкина", role: "Инструктор по плаванию", image: "/img/user2.jpg" },
  { name: "Рахматуллина Арина", role: "Инструктор по плаванию", image: "/img/user3.jpg" },
  { name: "Фазлыахметова", role: "Инструктор по плаванию", image: "/img/user3.jpg" },
  { name: "Нугаева Регина", role: "Инструктор по плаванию", image: "/img/user3.jpg" },
  { name: "Нэлли", role: "Инструктор по плаванию", image: "/img/user3.jpg" },
  { name: "Гусалова Анастасия", role: "Реабилитолог", image: "/img/user3.jpg" },
  { name: "Данилова Нурия", role: "Массажист", image: "/img/user3.jpg" },
  { name: "Эльвина", role: "Фитнес инструктор", image: "/img/user3.jpg" },
  { name: "Виктория Игнатьева", role: "Старший администратор", image: "/img/user3.jpg" },
  { name: "Пурецкая Виктория", role: "Администратор", image: "/img/user3.jpg" },
  { name: "Луганцева Александра", role: "Администратор", image: "/img/user3.jpg" },
];

export default function Team() {
  return (
    <Container>
      <div id="team" className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Наша команда
        </h2>
        <p className="mt-2 text-base md:text-lg text-slate-700/90">
          Опытные специалисты, которые любят свое дело
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {members.map((m, index) => (
          <motion.div
            key={m.name + index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            tabIndex={0}
            className="
              group text-center p-5 rounded-2xl shadow-sm transition
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200
              bg-white/70 backdrop-blur-sm hover:bg-white/80
            "
          >
            <div className="mx-auto w-32 h-32 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-br from-slate-100 to-slate-300 shadow-md">
              <Image
                src={m.image}
                width={176}
                height={176}
                alt={m.name}
                className="rounded-full object-cover w-full h-full"
                priority={index < 3}
              />
            </div>

            {/* Имя */}
            <div className="mt-4 text-lg md:text-xl font-semibold tracking-tight text-slate-900 leading-tight">
              {m.name}
            </div>

            {/* Роль */}
            <div className="mt-1 text-sm md:text-base text-slate-700/90 leading-tight">
              {m.role}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
