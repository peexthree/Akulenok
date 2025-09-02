import React from "react";
import Image from "next/image";
import Container from "./container";

const members = [
  {
    name: "Алсу Ханнанова",
    role: "Основатель и инструктор",
    image: "/img/user1.jpg",
    desc: "Сертифицированный специалист по грудничковому плаванию",
  },
  {
    name: "Екатерина Иванова",
    role: "Инструктор по ЛФК",
    image: "/img/user2.jpg",
    desc: "Помогает укреплять мышечный корсет и осанку",
  },
  {
    name: "Марат Исламов",
    role: "Тренер по гидрореабилитации",
    image: "/img/user3.jpg",
    desc: "Находит подход к каждому малышу",
  },
];

export default function Team() {
  return (
    <Container>
      <div id="team" className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Наша команда</h2>
        <p className="text-gray-500 mt-2">Опытные инструкторы, которые любят детей</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {members.map((m) => (
          <div key={m.name} className="text-center">
            <Image
              src={m.image}
              width={160}
              height={160}
              alt={m.name}
              className="mx-auto rounded-full object-cover"
            />
            <div className="mt-4 font-medium">{m.name}</div>
            <div className="text-sm text-gray-500">{m.role}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{m.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}