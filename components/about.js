import React from "react";
import Container from "./container";

export default function About() {
  const stats = [
    { k: "3м+", v: "возраст начала" },
    { k: "4.7★", v: "рейтинг по отзывам" },
    { k: "30 мин", v: "длительность занятия" },
  ];
  return (
    <Container>
      <div id="about" className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">О центре «Акулёнок»</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Специализированный детский аквацентр в Туймазах: грудничковое плавание и ЛФК.
            Создаём безопасную среду для здоровья и развития малышей — тёплая стерильная вода,
            небольшой формат групп, внимательные инструкторы.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl border p-4 text-center">
                <div className="text-2xl font-bold">{s.k}</div>
                <div className="text-sm text-gray-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border p-6 dark:border-trueGray-700">
          <div className="text-lg font-semibold mb-2">Почему нам доверяют</div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Опытные инструкторы по раннему плаванию и ЛФК.</li>
            <li>Индивидуальный подход, работа с особенностями развития.</li>
            <li>Зона ожидания и видеонаблюдение для родителей.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
