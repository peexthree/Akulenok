import React, { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { StarIcon, CheckBadgeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { COMPANY_DETAILS } from "../config/company";

const yandexReviews = [
  {
    author: "Татьяна Галиева",
    initials: "ТГ",
    avatarColor: "from-sky-500 to-cyan-400",
    date: "23 июля · Яндекс.Карты",
    tag: "Тренеры Регина и Любовь",
    text: "Очень приятно и радостно видеть замечательный персонал, который любит детей. Тренер Регина и Любовь - вам отдельная благодарность. Успехов вам всем и здоровья.",
  },
  {
    author: "Ксения Жернакова",
    initials: "КЖ",
    avatarColor: "from-rose-500 to-pink-500",
    date: "26 июля 2025 · Яндекс.Карты",
    tag: "Преодолели страх воды · Арина",
    text: "Супер место. Приятные администраторы, отличный тренер Арина. Буквально за пару занятий моя дочь перестала бояться воды, стала держаться на плаву и даже немного поплыла. Спасибо большое.",
  },
  {
    author: "Евгений",
    initials: "Е",
    avatarColor: "from-sky-500 to-rose-400",
    date: "14 июля 2024 · Яндекс.Карты",
    tag: "Ходим уже 4 месяца",
    text: "Детский центр «Акулёнок» вообще отличный, возим ребёнка 4 месяца - ему нравится. Специалисты хорошие, добрые, умеют обращаться с детьми, и с такими маленькими в том числе. Советую!",
  },
  {
    author: "Фотолюкс",
    initials: "Ф",
    avatarColor: "from-sky-500 to-sky-600",
    date: "1 мая 2023 · Яндекс.Карты",
    tag: "Бассейн, уют и монитор для родителей",
    text: "Единственный в своём роде, уникальный водный комплекс для маленьких детей. Добрые администраторы, большой бассейн, опытные тренеры, уютная зона ожидания и монитор для наблюдения за тем, как плавает ваш маленький пловец.",
  },
];

export default function Testimonials() {
  const [showMobileWidget, setShowMobileWidget] = useState(false);

  return (
    <section id="testimonials" className="py-24 relative z-10 scroll-mt-24 overflow-hidden">
      <div className="absolute top-24 right-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 left-1/4 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          pretitle="Реальные отзывы"
          title="Истории наших маленьких чемпионов"
        >
          Проверенные отзывы родителей с Яндекс.Карт о наших тренерах, тёплой воде и атмосфере центра.
        </SectionTitle>

        {/* Плашка рейтинга Яндекс.Карт */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 glass-card p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-3 bg-[#F6FBFF] border border-sky-200/70 px-4 py-2.5 rounded-2xl">
              <span className="font-display text-3xl font-extrabold text-[#0C1A2E] leading-none">
                {COMPANY_DETAILS.rating}
              </span>
              <div className="flex flex-col">
                <div className="flex text-amber-400" aria-label={`Рейтинг ${COMPANY_DETAILS.rating} из 5`}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-600 mt-0.5">Яндекс.Карты</span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#0C1A2E] font-extrabold text-base sm:text-lg">
                <CheckBadgeIcon className="w-5 h-5 text-sky-500 shrink-0" aria-hidden="true" />
                <span>Подтверждённые отзывы посетителей</span>
              </div>
              <p className="text-sm text-slate-600 font-medium">
                {COMPANY_DETAILS.reviewsCountText} · г. Туймазы, ул. Столярова, 1
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowMobileWidget((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center gap-2 bg-sky-50 text-sky-700 border border-sky-200 font-bold py-3 px-5 rounded-xl text-sm hover:bg-sky-100 transition-colors"
            >
              {showMobileWidget ? "Скрыть ленту отзывов" : "Живая лента отзывов"}
            </button>

            <a
              href={COMPANY_DETAILS.yandexReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-2xl shadow-md shadow-sky-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              Оставить отзыв
              <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Основная сетка: слева 4 живых отзыва, справа официальный виджет Яндекс.Карт */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {yandexReviews.map((item, index) => (
              <motion.article
                key={item.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-card flex flex-col p-6 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    aria-hidden="true"
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.avatarColor} text-white font-display font-extrabold text-base flex items-center justify-center shrink-0 shadow-md`}
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0C1A2E] leading-tight truncate">
                      {item.author}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{item.date}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-xl border border-sky-100">
                    {item.tag}
                  </span>
                  <div className="flex text-amber-400 shrink-0" aria-label="Оценка 5 из 5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium flex-grow">
                  «{item.text}»
                </p>
              </motion.article>
            ))}
          </div>

          {/* Живой официальный виджет Яндекс.Карт */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={`lg:col-span-5 flex-col glass-card p-4 sm:p-5 ${
              showMobileWidget ? "flex" : "hidden lg:flex"
            }`}
          >
            <div className="flex items-center justify-between gap-2 px-2 pb-3 mb-3 border-b border-sky-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" aria-hidden="true" />
                <span className="text-sm font-extrabold text-[#0C1A2E]">Лента Яндекс.Карт</span>
              </div>
              <a
                href={COMPANY_DETAILS.yandexReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
              >
                Открыть в Картах
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="relative w-full h-[480px] lg:h-full lg:min-h-[540px] rounded-2xl overflow-hidden bg-[#F6FBFF] border border-sky-100/70">
              <iframe
                src={COMPANY_DETAILS.yandexReviewsWidget}
                title="Живые отзывы о центре Акулёнок на Яндекс.Картах"
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={COMPANY_DETAILS.yandexReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md text-[#0C1A2E] font-bold py-3.5 px-7 rounded-2xl shadow-soft border border-white hover:border-sky-200 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Все {COMPANY_DETAILS.reviewsCountText} на Яндекс.Картах
            <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href={COMPANY_DETAILS.yandexReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-sky-600 hover:text-rose-600 inline-flex items-center gap-1.5 transition-colors"
          >
            Написать свой отзыв на Яндексе
            <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
