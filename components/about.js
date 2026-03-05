import React from "react";
import Container from "./container";
import Image from "next/image";

const About = () => {
  const stats = [
    { k: "3м+", v: "возраст начала" },
    { k: "4.7★", v: "рейтинг по отзывам" },
    { k: "30 мин", v: "длительность занятия" },
  ];
  return (
    <Container>
      <div id="about" className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="relative">
          <h2 className="text-3xl font-semibold mb-4">О центре «Акулёнок»</h2>
          <p className="text-gray-600 ">
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
          <div className="absolute -bottom-10 -left-10 w-24 h-24 opacity-10 rotate-12">
             <Image src="/img/play.png" alt="" width={100} height={100} />
          </div>
        </div>
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="text-lg font-semibold mb-2 relative z-10">Почему нам доверяют</div>
          <ul className="space-y-2 text-gray-600 list-inside relative z-10">
            <li className="flex items-start gap-2">
              <span className="shrink-0 text-sky-400">●</span>
              Наши инструкторы имеют педагогическое, медицинское или спортивное образование и постоянно повышают квалификацию.
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 text-sky-400">●</span>
              Мы используем современные технологии очистки воды: многоступенчатую фильтрацию, вода соответствует санитарным нормам (нет озонирования).
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 text-sky-400">●</span>
              У нас безопасно и комфортно: для каждого малыша отдельный инвентарь и чистые пеленальные столы и зона отдыха.
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 text-sky-400">●</span>
              Персональный подход: составляем индивидуальную программу тренировок с учётом возраста и физических данных ребёнка.
            </li>
          </ul>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 translate-x-1/4 translate-y-1/4">
             <Image src="/img/akulenok-mascot.png" alt="" width={128} height={128} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(About);
