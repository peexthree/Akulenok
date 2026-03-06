"use client";
import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle"; // Исправил регистр для Vercel
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";

const pricingData = [
  {
    id: 1,
    title: "Пробное заплыв",
    price: "850 ₽",
    description: "в «счастливый час» 12:00–16:00*",
    features: [
      "Знакомство с центром и тренером",
      "Диагностика навыков в воде",
      "Индивидуальный план развития",
      "Полная адаптация малыша"
    ],
    highlight: false,
    icon: "/img/3d-icons/service-1-mascot.webp"
  },
  {
    id: 2,
    title: "Абонементы",
    price: "от 4 800 ₽", 
    description: "Самый выгодный формат посещений",
    features: [
      "Фиксированное место в группе",
      "Приоритетная запись",
      "Занятие от 600 ₽",
      "Заморозка по болезни"
    ],
    highlight: true,
    icon: "/img/3d-icons/service-4-mascot.webp"
  },
  {
    id: 3,
    title: "Разовое занятие",
    price: "1 200 ₽",
    description: "Персональная тренировка",
    features: [
      "Работа 1-на-1 с инструктором",
      "Гидрореабилитация и ЛФК",
      "Глубокая проработка навыков",
      "Гибкий график без обязательств"
    ],
    highlight: false,
    icon: "/img/3d-icons/service-2-mascot.webp"
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
      <Container>
        <SectionTitle
          pretitle="Стоимость"
          title="Инвестиция в здоровье и радость"
        >
          Выберите удобный формат занятий. Мы создали гибкую систему цен, чтобы плавание было доступно каждой семье Туймазов.
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-3 items-stretch mt-16">
          {pricingData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className={`relative flex flex-col p-8 rounded-[3.5rem] transition-all duration-500 bg-white/80 backdrop-blur-xl border-2 ${
                item.highlight 
                ? "border-sky-400 shadow-2xl scale-105 z-10 bg-white" 
                : "border-white shadow-soft hover:shadow-xl"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <StarIcon className="h-4 w-4" />
                  Выбор мам
                </div>
              )}

              {/* 3D Иконка */}
              <div className="relative w-24 h-24 mx-auto mb-6 drop-shadow-2xl">
                <Image src={item.icon} alt={item.title} fill className="object-contain" unoptimized />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-sm uppercase font-black text-slate-400 tracking-widest mb-2">{item.title}</h3>
                <div className="text-5xl font-black text-slate-900 mb-2">{item.price}</div>
                <p className="text-sm text-sky-600 font-bold bg-sky-50 py-1 px-3 rounded-full inline-block">
                  {item.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-sky-500 shrink-0" />
                    <span className="text-slate-600 text-sm font-bold leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contacts"
                className={`w-full py-5 rounded-[2rem] font-black text-center transition-all duration-300 transform active:scale-95 ${
                  item.highlight
                    ? "bg-sky-500 text-white shadow-sky-200 shadow-xl hover:bg-sky-600"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                Начать заниматься
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Секция лояльности */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-soft flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-3xl flex items-center justify-center text-2xl font-black shrink-0">
              5%
            </div>
            <div>
              <h4 className="font-black text-xl text-slate-800">Постоянным клиентам</h4>
              <p className="text-slate-500 font-medium text-sm">При продлении абонемента до его завершения.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-soft flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center text-2xl font-black shrink-0">
              10%
            </div>
            <div>
              <h4 className="font-black text-xl text-slate-800">Социальная поддержка</h4>
              <p className="text-slate-500 font-medium text-sm">Льготы многодетным и семьям участников СВО.</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-orange-600 font-black text-[10px] uppercase bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100">
                  +2% за наличный расчет
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="text-center text-slate-400 text-xs mt-12 font-medium">
          *Предложение «Счастливый час» действует только для новых клиентов центра при первом посещении.
        </p>
      </Container>
    </section>
  );
}
