import React from "react";
import Container from "./container";

const About = () => {
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
            {stats.map((s) => (
              <div key={s.k} className="glass-card p-4 text-center">
                <div className="text-2xl font-bold">{s.k}</div>
                <div className="text-sm text-gray-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <div className="text-lg font-semibold mb-2">Почему нам доверяют</div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>
              Наши инструкторы имеют педагогическое, медицинское или спортивное образование и постоянно повышают квалификацию.
            </li>
            <li>
              Мы используем современные технологии очистки воды: многоступенчатую фильтрацию, ультрафиолет и озонирование, без хлора.
            </li>
            <li>
              У нас безопасно и комфортно: для каждого малыша отдельный инвентарь и одноразовые подгузники для плавания, которые входят в стоимость.
            </li>
            <li>
              Персональный подход: составляем индивидуальную программу тренировок с учётом возраста и физических данных ребёнка.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(About);