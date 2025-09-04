import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // иконки
import Image from "next/image";
import Container from "./container";

const items = [
  "Смена одежды для ребёнка",
  "Подгузник для бассейна",
  "Полотенце или пелёнка",
  "Шапочка и резиновая обувь",
  "Любимая игрушка для воды",
];

export default function Checklist() {
  return (
    <Container>
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8">
        <Image
          src="/img/think.png"
          alt="Думающий акулёнок"
          width={256}
          height={256}
          className="mb-6 md:mb-0 w-48 h-auto md:w-64"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center md:text-left">
            Что взять на первое занятие
          </h2>
          <p className="text-center text-gray-600 md:text-left">
            Чтобы ваше первое занятие прошло комфортно, подготовьте всё необходимое заранее:
          </p>

          <ul className="space-y-3 flex flex-col items-center md:items-start">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircleIcon className="text-blue-500 w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
