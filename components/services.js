import React from "react";
import Container from "./container";

export default function Services() {
  const Item = ({ title, desc }) => (
    <div className="glass-card p-6">
      <div className="text-xl font-semibold">{title}</div>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );

  return (
    <Container>
        <div id="services" className="text-center mb-8 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-aqua-dark">Наши услуги</h2>
        <p className="text-gray-500 mt-2">Многопрофильный семейный центр для вашего здоровья</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Item
          title="Адаптивное плавание"
          desc="Для детей от 3 мес (занятия в теплой воде). Форматы: мини-группы, индивидуальные занятия, гидрореабилитация для детей с ОВЗ (без родителей)."
        />
        <Item
          title="ЛФК и Реабилитация"
          desc="Лечебная физкультура и реабилитация для детей; укрепление мышечного корсета, осанки и моторики."
        />
        <Item
          title="Аквааэробика для беременных"
          desc="Индивидуальные занятия. Убирает отечность, снимает напряжение со спины, готовит организм к родам."
        />
        <Item
          title="Женское здоровье (фитнес)"
          desc="Укрепляют мышечный корсет, возвращают молодость, подвижность и женственность."
        />
        <Item
          title="Массаж для детей (0+)"
          desc="Опытные специалисты более 17 лет опыта."
        />
        <Item
          title="Занятия для детей (от 2х лет) нейропсихолог"
          desc="(в разработке)"
        />
      </div>
      <ul className="mt-6 text-gray-600 list-disc list-inside">
        <li>Форматы занятий: мини‑группы, индивидуально, с участием родителя или без.</li>
        <li>Длительность — обычно 30 минут (по показаниям индивидуально).</li>
        <li>Первая встреча — знакомство с тренером и подбор программы под ребёнка.</li>
      </ul>
    </Container>
  );
}
