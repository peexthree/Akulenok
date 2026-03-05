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
      "Для того, чтобы протестировать и понять нужно ли это",
      "Ощутить на себе, познакомиться с центром",
      "Познакомиться с тренером, с диагностикой воды"
    ],
    highlight: false,
  },
  {
    id: 2,
    title: "Абонемент",
    price: "Узнать цену у администратора",
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
    title: "Разовое занятие",
    price: "Узнать цену у администратора",
    description: "Полноценное стандартное занятие",
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
    <div  className="text-center mb-8 ">
         <h2 className="text-3xl font-semibold">Цены</h2>
        <p className="text-gray-700 mt-2">
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
           className={`glass-card p-6 text-center transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-accent ${
              item.highlight ? "ring-2 ring-orange-300" : ""
            }`}
           
          >
           <div className="text-sm uppercase font-semibold text-gray-500">
              {item.title}
            </div>
            <div className="mt-2 text-2xl font-bold">{item.price}</div>     <div className="text-sm text-gray-700 mt-1">{item.description}</div>
            <ul className="mt-4 space-y-2 text-gray-800 ">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-left">
                  <CheckIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="#lead-form"
               className={`block w-full rounded-md py-3 font-medium text-white transition ${
                  item.highlight
                     ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Узнать цену / Записаться
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-2xl shadow-md p-8 border border-aqua-accent/10">
        <h3 className="text-2xl font-bold text-center text-aqua-dark mb-6">Наши скидки</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-aqua-background p-6 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-aqua-accent text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
              5%
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Для постоянных клиентов</h4>
              <p className="text-gray-700">Скидка предоставляется вне зависимости от выбранного абонемента.</p>
            </div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
              10%
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Особым категориям</h4>
              <p className="text-gray-700">Многодетным, участникам СВО, детям с ОВЗ — всем скидка 10%.</p>
              <p className="text-sm text-gray-500 mt-2 font-semibold">+2% при оплате наличными</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(Pricing);
