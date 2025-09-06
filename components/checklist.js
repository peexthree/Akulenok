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
    <Container>
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8 md:justify-center">
        <Image
          src="/img/think.png"
          alt="Думающий акулёнок"
          width={512}
          height={512}
          className="mb-6 md:mb-0 w-48 h-auto md:w-64"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">
            Что взять на первое занятие
          </h2>
          <p className="text-center text-gray-600">
            Чтобы ваше первое занятие прошло комфортно, подготовьте всё необходимое заранее:
          </p>

          <ul className="space-y-3 flex flex-col items-center">
            {items.map(({ emoji, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="text-xl">{emoji}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}