import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircleIcon, StarIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { COMPANY_DETAILS } from "../config/company";

const pricingData = [
  {
    id: 1,
    title: "Пробное занятие",
    price: "800 ₽",
    description: "Первое знакомство с центром",
    features: [
      "Знакомство с центром и тренером",
      "Диагностика навыков в воде",
      "Индивидуальный план развития",
      "Полная адаптация малыша",
    ],
    highlight: false,
    icon: "/img/3d-icons/service-1-mascot.webp",
  },
  {
    id: 2,
    title: "Абонементы",
    price: "от 5 600 ₽",
    description: "Индивидуальные занятия в бассейне",
    packages: [
      { count: "4 занятия", total: "5 600 ₽", perSession: "1 400 ₽ / зан." },
      { count: "8 занятий", total: "10 400 ₽", perSession: "1 300 ₽ / зан." },
      { count: "12 занятий", total: "15 000 ₽", perSession: "1 250 ₽ / зан." },
      { count: "24 занятия", total: "27 120 ₽", perSession: "1 130 ₽ / зан.", best: true },
    ],
    features: [
      "Индивидуальный подбор расписания",
      "Приоритетная запись к тренеру",
      "Срок действия - 45 дней (24 зан. - 105 дней)",
      "Продление по болезни при наличии справки",
    ],
    highlight: true,
    icon: "/img/3d-icons/service-4-mascot.webp",
  },
  {
    id: 3,
    title: "Разовое занятие",
    price: "1 650 ₽",
    description: "Персональная тренировка",
    features: [
      "Работа 1-на-1 с инструктором",
      "Гибкий график без обязательств",
      "Запись в день тренировки",
    ],
    highlight: false,
    icon: "/img/3d-icons/service-2-mascot.webp",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F6FBFF] relative overflow-hidden scroll-mt-24">
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          pretitle="Стоимость"
          title="Инвестиция в здоровье и радость"
        >
          Мы сохранили прежний уровень цен на индивидуальные занятия в бассейне и понятную систему выгод для постоянных семей г. Туймазы.
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-3 items-stretch mt-16">
          {pricingData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                item.highlight
                  ? "glass-card border-sky-300 shadow-heavy md:scale-[1.03] z-10 bg-white/95 ring-2 ring-sky-200/70"
                  : "glass-card hover:shadow-xl"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-rose-500/25 flex items-center gap-2 whitespace-nowrap">
                  <StarIcon className="h-4 w-4" aria-hidden="true" />
                  Выбор мам
                </div>
              )}

              <div className="relative w-24 h-24 mx-auto mb-6 drop-shadow-xl">
                <Image src={item.icon} alt={item.title} fill sizes="96px" className="object-contain" />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-sm uppercase font-extrabold text-slate-500 tracking-widest mb-2">
                  {item.title}
                </h3>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] mb-3 tracking-tight leading-none">
                  {item.price}
                </div>
                <p className="text-sm text-sky-700 font-bold bg-sky-50 border border-sky-100 py-1 px-3.5 rounded-full inline-block">
                  {item.description}
                </p>
              </div>

              {item.packages && (
                <div className="space-y-2 mb-6">
                  {item.packages.map((pkg) => (
                    <div
                      key={pkg.count}
                      className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl border text-sm ${
                        pkg.best
                          ? "bg-rose-50/80 border-rose-200/80"
                          : "bg-[#F6FBFF] border-sky-100/80"
                      }`}
                    >
                      <span className="font-extrabold text-[#0C1A2E]">{pkg.count}</span>
                      <div className="text-right">
                        <span className="font-display font-extrabold text-[#0C1A2E]">{pkg.total}</span>
                        <span
                          className={`block text-xs font-bold ${
                            pkg.best ? "text-rose-600" : "text-slate-500"
                          }`}
                        >
                          {pkg.perSession}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <ul className="space-y-3.5 mb-8 flex-grow">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon
                      className={`h-5 w-5 shrink-0 mt-0.5 ${item.highlight ? "text-rose-500" : "text-sky-500"}`}
                      aria-hidden="true"
                    />
                    <span className="text-slate-600 text-sm font-medium leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className={`w-full ${item.highlight ? "btn-primary" : "btn-secondary"}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </motion.div>
          ))}
        </div>

        {/* Секция лояльности (65 / 25 / 10 Aqua-Rose) */}
        <div id="discounts" className="mt-20 grid md:grid-cols-3 gap-6 sm:gap-8 scroll-mt-24">
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-8 flex flex-col gap-4 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="font-display w-14 h-14 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center text-xl font-extrabold shrink-0">
                5%
              </div>
              <h4 className="font-extrabold text-xl text-[#0C1A2E] leading-tight">
                Постоянным
                <br />
                клиентам
              </h4>
            </div>
            <p className="text-slate-600 font-medium text-sm leading-relaxed flex-grow">
              Постоянная скидка при покупке от 3 абонементов - ценим вашу регулярность и доверие.
            </p>
            <div className="mt-auto">
              <span className="text-sky-700 font-extrabold text-xs uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200/70 inline-block">
                От 3 абонементов
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-8 flex flex-col gap-4 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="font-display w-14 h-14 bg-rose-50 border border-rose-200/70 text-rose-600 rounded-2xl flex items-center justify-center text-xl font-extrabold shrink-0">
                +2%
              </div>
              <h4 className="font-extrabold text-xl text-[#0C1A2E] leading-tight">
                За наличный
                <br />
                расчёт
              </h4>
            </div>
            <p className="text-slate-600 font-medium text-sm leading-relaxed flex-grow">
              Дополнительная скидка при оплате наличными в центре - суммируется со скидкой 5%.
            </p>
            <div className="mt-auto">
              <span className="text-rose-700 font-extrabold text-xs uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200/70 inline-block">
                Суммируется до 7%
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-sky-50/90 via-white/90 to-rose-50/90 backdrop-blur-xl border border-white/90 shadow-soft flex flex-col gap-4 relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-rose-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-rose-400 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                <SparklesIcon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="font-extrabold text-xl text-[#0C1A2E] leading-tight text-balance">
                Выгода
                <br />
                в абонементе
              </h4>
            </div>
            <p className="text-slate-600 font-medium text-sm leading-relaxed relative z-10 flex-grow">
              Стоимость одного занятия снижается с 1 650 ₽ до 1 130 ₽ при покупке пакета на 24 тренировки.
            </p>

            <div className="mt-auto relative z-10">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full py-3 bg-gradient-to-br from-sky-500 to-rose-500 text-white rounded-2xl text-center font-extrabold text-sm shadow-lg transition-all hover:brightness-105 flex items-center justify-center gap-2"
              >
                <span>Подобрать абонемент</span>
                <span className="font-display bg-white/20 px-2.5 py-0.5 rounded-full text-xs">до -31%</span>
              </a>
            </div>
          </motion.div>
        </div>

        <p className="mt-12 text-center text-xs text-slate-500 font-medium">
          {COMPANY_DETAILS.offerDisclaimer}
        </p>
      </Container>
    </section>
  );
}
