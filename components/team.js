import React from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";
const members = [
  {
    name: "Алсу Ханнанова",
    role: "Основатель Акулёнка",
    image: "/img/user1.jpg",
     },
  {
    name: "Любовь",
    role: "Инструктор по плаванию",
    image: "/img/user2.jpg",
 
  },
  {
    name: "Ралина",
    role: "Тренер по гидрореабилитации",
    image: "/img/user3.jpg",

  },
];

export default function Team() {
  return (
    <Container>
      <div id="team" className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Наша команда</h2>
        <p className="text-gray-700 mt-2">Опытные инструкторы, которые любят детей</p>
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
            className="text-center p-4 rounded-lg transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-accent"
          >
            <Image
              src={m.image}
              width={160}
              height={160}
              alt={m.name}
              className="mx-auto rounded-full object-cover"
            />
            <div className="mt-4 font-medium">{m.name}</div>
            <div className="text-sm text-gray-700">{m.role}</div>
           
          </motion.div>
        ))}
      </div>
    </Container>
  );
}