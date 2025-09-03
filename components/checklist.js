import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // иконки
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
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          Что взять на первое занятие
        </h2>
        <p className="text-center text-gray-600">
          Чтобы ваше первое занятие прошло комфортно, подготовьте всё необходимое заранее:
        </p>
      
        <ul className="space-y-3 flex flex-col items-center">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
                        <CheckCircleIcon className="text-blue-500 w-5 h-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
