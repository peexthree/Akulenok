import React, { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircleIcon, StarIcon, GiftIcon } from "@heroicons/react/24/solid";
import { COMPANY_DETAILS } from "../config/company";

const pricingData = [
  {
    id: 1,
    title: "Пробное занятие",
    price: "800 ₽",
    description: "Для новых клиентов",
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
    price: "от 4 928 ₽",
    description: "Самый выгодный формат посещений",
    features: [
      "Индивидуальный подбор расписания",
      "Приоритетная запись",
      "Дисциплина и регулярность",
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
  const [showPromo, setShowPromo] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyPromo = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText("АКУЛА");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Ignore clipboard failures in restricted environments
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      <Container>
        <SectionTitle
          pretitle="Стоимость"
          title="Инвестиция в здоровье и радость"
        >
          Выберите удобный формат занятий. Мы создали гибкую систему цен, чтобы плавание было доступно каждой семье г. Туймазы.
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-3 items-stretch mt-16">
          {pricingData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 rounded-[3rem] transition-all duration-300 backdrop-blur-xl border-2 ${
                item.highlight
                  ? "border-sky-400 shadow-2xl md:scale-[1.03] z-10 bg-white"
                  : "border-white shadow-soft hover:shadow-xl bg-white/85"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <StarIcon className="h-4 w-4" aria-hidden="true" />
                  Выбор мам
                </div>
              )}

              <div className="relative w-24 h-24 mx-auto mb-6 drop-shadow-xl">
                <Image src={item.icon} alt={item.title} fill sizes="96px" className="object-contain" />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-sm uppercase font-black text-slate-500 tracking-widest mb-2">
                  {item.title}
                </h3>
                <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-3 tracking-tight leading-none">
                  {item.price}
                </div>
                <p className="text-sm text-sky-700 font-bold bg-sky-50 py-1 px-3.5 rounded-full inline-block">
                  {item.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-600 text-sm font-bold leading-snug tracking-wide">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className={`w-full py-4 sm:py-5 rounded-[2rem] font-black tracking-wide leading-snug text-center transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                  item.highlight
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_10px_25px_rgba(14,165,233,0.35)] hover:shadow-[0_14px_30px_rgba(14,165,233,0.5)]"
                    : "bg-slate-100 text-slate-800 border border-slate-200 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </motion.div>
          ))}
        </div>

        {/* Секция лояльности */}
        <div id="discounts" className="mt-20 grid md:grid-cols-3 gap-8 scroll-mt-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-soft flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-3xl flex items-center justify-center text-xl font-black shrink-0">
                5%
              </div>
              <h4 className="font-black text-xl text-slate-900 leading-tight">
                Постоянным
                <br />
                клиентам
              </h4>
            </div>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              При продлении абонемента до его завершения.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-soft flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center text-xl font-black shrink-0">
                10%
              </div>
              <h4 className="font-black text-xl text-slate-900 leading-tight">
                Социальная
                <br />
                поддержка
              </h4>
            </div>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              Льготы многодетным и семьям участников СВО.
            </p>
            <div className="mt-auto">
              <span className="text-orange-700 font-black text-[11px] uppercase bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block">
                +2% за наличный расчёт
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-soft flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-3xl flex items-center justify-center text-xl font-black shrink-0 shadow-md">
                <GiftIcon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="font-black text-xl text-slate-900 leading-tight text-balance">
                Скидка
                <br />
                новым клиентам
              </h4>
            </div>
            <p className="text-slate-600 font-medium text-sm leading-relaxed relative z-10 flex-grow">
              В день первого посещения получите выгоду 10% на покупку абонемента!
            </p>

            <div className="mt-auto relative z-10">
              <AnimatePresence mode="wait">
                {!showPromo ? (
                  <motion.button
                    key="hidden"
                    type="button"
                    onClick={() => setShowPromo(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full py-3 bg-white/80 backdrop-blur-sm border border-indigo-200 border-dashed rounded-2xl text-center text-indigo-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-100 transition-colors"
                  >
                    <span>Узнать промокод</span>
                    <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                ) : (
                  <motion.button
                    key="visible"
                    type="button"
                    onClick={handleCopyPromo}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-center shadow-lg transition-colors"
                  >
                    <span className="text-xs font-medium opacity-90 uppercase tracking-widest block mb-1">
                      {copied ? "Скопировано ✓" : "Ваш промокод (нажмите, чтобы скопировать):"}
                    </span>
                    <span className="font-black text-2xl tracking-widest">АКУЛА</span>
                  </motion.button>
                )}
              </AnimatePresence>
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
