import React from "react";
import Image from "next/image";
import Container from "./container";

const items = [
  { emoji: "👕", text: "Смена одежды для ребёнка" },
  { emoji: "🩲", text: "Подгузник для бассейна" },
  { emoji: "🛁", text: "Полотенце или пелёнка" },
  { emoji: "🧢", text: "Шапочка и резиновая обувь" },
  { emoji: "🦆", text: "Любимая игрушка для воды" },
];

export default function Checklist() {
  return (
    <Container className="py-12">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Image
          src="/img/think.png"
          alt="Думающий акулёнок"
          width={150}
          height={150}
          className="w-32 h-auto md:w-40 animate-pulse"
        />

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold text-aqua-dark ">
            Что взять на первое занятие
          </h2>
          <p className="text-lg text-gray-600 ">
            Чтобы ваше первое занятие прошло комфортно, подготовьте всё необходимое заранее:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 w-full px-4">
          {items.map(({ emoji, text }) => (
            <div
              key={text}
              className="bg-white  p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center gap-4 transform transition hover:-translate-y-2 hover:shadow-2xl border-t-4 border-aqua-accent"
            >
              <div className="text-5xl drop-shadow-md">
                {emoji}
              </div>
              <span className="font-semibold text-gray-700  leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
