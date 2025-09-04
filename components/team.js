import React from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";

const members = [
  { name: "Алсу Ханнанова", role: "Основатель Акулёнка", image: "/img/user1.jpg" },
  { name: "Любовь", role: "Инструктор по плаванию", image: "/img/user2.jpg" },
  { name: "Ралина", role: "Тренер по гидрореабилитации", image: "/img/user3.jpg" },
];

export default function Team() {
  return (
    <Container>
      <div id="team" className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Наша команда
        </h2>
        <p className="mt-2 text-base md:text-lg text-slate-700/90">
          Опытные инструкторы, которые любят детей
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {members.map((m) => (
          <motion.div
            key={m.name}
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
            <div className="mx-auto w-44 h-44 rounded-full p-1.5 bg-gradient-to-br from-slate-100 to-slate-300 shadow-md">
              <Image
                src={m.image}
                width={176}
                height={176}
                alt={m.name}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>

            {/* Имя — крупнее и контрастнее */}
            <div className="mt-4 text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              {m.name}
            </div>

            {/* Роль — мягкий аква-оттенок, чуть меньше */}
            <div className="mt-0.5 text-sm md:text-base text-slate-700/90">
              {m.role}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}