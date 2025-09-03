import React from "react";
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
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Что взять на первое занятие</h2>
        <ul className="list-disc pl-5 space-y-1">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}