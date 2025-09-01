import React from "react";
import Container from "./container";

export default function Pricing() {
  return (
    <Container>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Цены и форматы</h2>
        <p className="text-gray-500 mt-2">Актуальные предложения для занятий по плаванию и ЛФК</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <div className="text-sm uppercase text-gray-500">Пробное занятие</div>
          <div className="mt-2 text-3xl font-bold">850 ₽</div>
          <div className="text-sm text-gray-500 mt-1">в «счастливый час» 12:00–16:00*</div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>30 минут в воде с инструктором</li>
            <li>Знакомство с тренером и программой</li>
            <li>Рекомендации для родителей</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6 ring-1 ring-indigo-200">
          <div className="text-sm uppercase text-indigo-600">Абонемент (месяц)</div>
          <div className="mt-2 text-3xl font-bold">от 8 960 ₽</div>
          <div className="text-sm text-gray-500 mt-1">групповые/мини‑группы</div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Регулярные тренировки по расписанию</li>
            <li>Индивидуальный подход, мини‑группы</li>
            <li>Сопровождение родителя по желанию</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <div className="text-sm uppercase text-gray-500">Индивидуальные</div>
          <div className="mt-2 text-3xl font-bold">по запросу</div>
          <div className="text-sm text-gray-500 mt-1">плавание / ЛФК</div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Персональная программа под задачи</li>
            <li>Реабилитация, гидрореабилитация</li>
            <li>Гибкое время занятий</li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">* Акции и условия могут меняться — уточняйте у администратора по телефону или в мессенджерах.</p>
    </Container>
  );
}
