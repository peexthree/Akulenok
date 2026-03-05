"use client";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const pricingData = [
  {
    id: 1,
    title: "Пробное занятие",
    price: "850 ₽",
    description: "в «счастливый час» 12:00–16:00*",
    features: [
      "Знакомство с центром и тренером",
      "Диагностика навыков в воде",
      "Полная адаптация малыша"
    ],
    highlight: false,
    icon: "/img/3d-icons/service-1-mascot.webp"
  },
  {
    id: 2,
    title: "Абонемент",
    price: "от 4 800 ₽", // Игорь, поставь реальную минималку
    description: "групповые / мини‑группы",
    features: [
      "Индивидуальный план развития",
      "Фиксированное расписание",
      "Максимальная выгода за занятие"
    ],
    highlight: true,
    icon: "/img/3d-icons/service-4-mascot.webp"
  },
  {
    id: 3,
    title: "Разовое занятие",
    price: "от 1 200 ₽",
    description: "Персональная тренировка",
    features: [
      "Работа 1-на-1 с инструктором",
      "Гидрореабилитация и ЛФК",
      "Гибкий график посещений"
    ],
    highlight: false,
    icon: "/img/3d-icons/service-2-mascot.webp"
  },
];

function Pricing() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6"
          >
            Стоимость занятий
          </motion.h2>
          <p className="text-xl text-slate-600 font-medium">
            Выберите подходящий формат обучения для вашего ребенка.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {pricingData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className={`relative flex flex-col p-8 rounded-[3rem] transition-all duration-500 bg-white/70 backdrop-blur-xl border-2 ${
                item.highlight 
                ? "border-sky-400 shadow-2xl scale-105 z-10 bg-white" 
                : "border-white shadow-xl hover:shadow-2xl"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-6 py-1 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                  Популярно
                </div>
              )}

              {/* 3D Иконка тарифа */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image src={item.icon} alt={item.title} fill className="object-contain drop-shadow-md" />
              </div>

              <div className="text-center mb-6">
                <div className="text-xs uppercase font-black text-slate-400 tracking-widest mb-1">{item.title}</div>
                <div className="text-4xl font-black text-slate-900">{item.price}</div>
                <div className="text-sm text-slate-500 mt-2 font-medium">{item.description}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-sky-400 shrink-0" />
                    <span className="text-slate-600 text-sm font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#lead-form"
                className={`w-full py-4 rounded-2xl font-black text-center transition-all duration-300 ${
                  item.highlight
                    ? "bg-sky-500 text-white shadow-sky-200 shadow-lg hover:bg-sky-600 hover:shadow-xl"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                Записаться
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Блок скидок в стиле Apple-карточек */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white to-sky-50 border border-white shadow-soft flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-sky-200 shrink-0">
              5%
            </div>
            <div>
              <h4 className="font-black text-xl text-slate-800 mb-1">Постоянным клиентам</h4>
              <p className="text-slate-600 font-medium">Ваша лояльность вознаграждается на каждом абонементе.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white to-orange-50 border border-white shadow-soft flex flex-col justify-center"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-orange-200 shrink-0">
                10%
              </div>
              <div>
                <h4 className="font-black text-xl text-slate-800 mb-1">Социальные льготы</h4>
                <p className="text-slate-600 font-medium text-sm">Многодетным, участникам СВО, детям с ОВЗ.</p>
                <p className="text-orange-600 font-black text-xs mt-1 uppercase tracking-wider">+2% за наличный расчет</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default React.memo(Pricing);
