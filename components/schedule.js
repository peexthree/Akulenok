import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

const scheduleData = [
  {
    id: 1,
    title: "Утро",
    time: "10:00–12:00",
    description: "Начните день с пользой.",
    features: [
      "Мини‑группы 3–18 мес",
      "Индивидуальные занятия",
    ],
  },
  {
    id: 2,
    title: "«Счастливый час»",
    time: "12:00–16:00",
    description: "Пробное занятие со скидкой.",
    features: [
      "Пробное занятие 850 ₽",
      "Знакомство с тренером",
    ],
    highlight: true,
  },
  {
    id: 3,
    title: "Вечер",
    time: "16:00–21:00",
    description: "Занятия после садика и работы.",
    features: [
      "Занятия для групп 3-6 лет",
      "ЛФК",
    ],
  },
];

function Schedule() {
  return (
    <Container>
      <div id="schedule" className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Расписание и форматы</h2>
        <p className="text-gray-500 mt-2">
          Ежедневно открыты до 21:00. Подберём удобное время.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {scheduleData.map((item) => (
          <motion.div
            key={item.id}
            className={`rounded-2xl border p-6 dark:border-trueGray-700 ${
              item.highlight ? "ring-1 ring-indigo-200 dark:ring-indigo-700 shadow-lg relative" : ""
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`text-sm uppercase font-semibold ${
              item.highlight ? "text-indigo-600" : "text-gray-500"
            }`}>
              {item.title}
            </div>
            <div className="mt-2 text-xl font-bold">{item.time}</div>
            <div className="text-sm text-gray-500 mt-1">{item.description}</div>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <CheckIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="#lead-form"
                className={`block w-full text-center rounded-md py-3 font-medium transition ${
                  item.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-trueGray-700 dark:text-white dark:hover:bg-trueGray-600"
                }`}
              >
                Записаться
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default React.memo(Schedule);