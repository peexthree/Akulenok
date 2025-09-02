import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

const pricingData = [
  {
    id: 1,
    title: "Пробное занятие",
    price: "850 ₽",
    description: "в «счастливый час» 12:00–16:00*",
    features: [
      "30 минут в воде с инструктором",
      "Знакомство с тренером и программой",
      "Рекомендации для родителей",
    ],
    highlight: false,
  },
  {
    id: 2,
    title: "Абонемент (месяц)",
    price: "от 8 960 ₽",
    description: "групповые/мини‑группы",
    features: [
      "Регулярные тренировки по расписанию",
      "Индивидуальный подход, мини‑группы",
      "Сопровождение родителя по желанию",
    ],
    highlight: true,
  },
  {
    id: 3,
    title: "Индивидуальные",
    price: "по запросу",
    description: "плавание / ЛФК",
    features: [
      "Персональная программа под задачи",
      "Реабилитация, гидрореабилитация",
      "Гибкое время занятий",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <Container>
      <div id="pricing" className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Цены и форматы</h2>
        <p className="text-gray-500 mt-2">
          Актуальные предложения для занятий по плаванию и ЛФК
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {pricingData.map((item) => (
          <motion.div
            key={item.id}
             variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            tabIndex={0}
            className={`rounded-2xl border p-6 dark:border-trueGray-700 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-accent ${
              item.highlight
                ? "ring-1 ring-indigo-200 dark:ring-indigo-700 shadow-lg relative"
                : ""
            }`}
           
          >
            <div
              className={`text-sm uppercase font-semibold ${
                item.highlight ? "text-indigo-600" : "text-gray-500"
              }`}
            >
              {item.title}
            </div>
            <div className="mt-2 text-3xl font-bold">{item.price}</div>
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

export default React.memo(Pricing);