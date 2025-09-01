import React from "react";
import Container from "./container";

export default function Schedule() {
  return (
    <Container>
      <div id="schedule" className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Расписание</h2>
        <p className="text-gray-500 mt-2">Ежедневно открыты до 21:00. Подберём удобное время.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <div className="font-semibold">Утро</div>
          <div className="text-gray-500">10:00–12:00</div>
          <ul className="mt-3 text-gray-600 list-disc list-inside">
            <li>Мини‑группы 3–18 мес</li>
            <li>Индивидуальные занятия</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6 ring-1 ring-indigo-200">
          <div className="font-semibold">«Счастливый час»</div>
          <div className="text-gray-500">12:00–16:00</div>
          <ul className="mt-3 text-gray-600 list-disc list-inside">
            <li>Пробное занятие 850 ₽</li>
            <li>Знакомство с тренером</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <div className="font-semibold">Вечер</div>
          <div className="text-gray-500">16:00–21:00</div>
          <ul className="mt-3 text-gray-600 list-disc list-inside">
            <li>Дошкольники и первоклассники</li>
            <li>ЛФК/персональные</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-4">* Точное время подтверждает администратор при записи.</p>
    </Container>
  );
}
