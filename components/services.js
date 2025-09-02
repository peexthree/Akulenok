import React from "react";
import Container from "./container";
import { SparklesIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function Services() {
  const Item = ({ title, desc }) => (
    <div className="rounded-2xl border p-6 bg-white dark:bg-trueGray-900">
      <div className="text-xl font-semibold">{title}</div>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{desc}</p>
    </div>
  );

  return (
    <Container>
      <div id="services" className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Наши услуги</h2>
        <p className="text-gray-500 mt-2">Детский бассейн для малышей (3м+) и ЛФК/оздоровление</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Item
          title="Детский бассейн (3 месяца +)"
          desc="Занятия в тёплой стерильной воде, мини‑группы и индивидуально. Формируем навыки, убираем страх воды, развиваем координацию."
        />
        <Item
          title="ЛФК и оздоровление"
          desc="Лечебная физкультура для детей; укрепление мышечного корсета, осанки и моторики. Программы под возраст и рекомендации специалистов."
        />
      </div>
      <ul className="mt-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
        <li>Форматы занятий: мини‑группы, индивидуально, с участием родителя или без.</li>
        <li>Длительность — обычно 30 минут (по показаниям индивидуально).</li>
        <li>Первая встреча — знакомство с тренером и подбор программы под ребёнка.</li>
      </ul>
    </Container>
  );
}
