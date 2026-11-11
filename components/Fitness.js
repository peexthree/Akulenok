import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";
import {
  ClockIcon,
  HeartIcon,
  UsersIcon,
  SparklesIcon,
  MusicalNoteIcon,
  StarIcon,
  BoltIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaTelegramPlane, FaWhatsapp, FaCommentDots } from "react-icons/fa";
import { COMPANY_DETAILS } from "../config/company";

const advantages = [
  { label: "Удобно для мам", icon: HeartIcon },
  { label: "Экономия времени", icon: ClockIcon },
  { label: "Забота о всей семье", icon: UsersIcon },
];

const programs = [
  {
    id: "women",
    title: "Женский фитнес",
    badge: "Для мам и женщин",
    image: "/img/fitness/women-fitness.webp",
    imageAlt: "Женский фитнес и стретчинг в студии Акулёнок",
    accent: "from-sky-500 to-blue-600",
    pillBg: "bg-sky-50 text-sky-800 border-sky-100",
    directions: [
      { label: "Фитнес", icon: BoltIcon },
      { label: "Стретчинг", icon: SparklesIcon },
      { label: "Хорошее настроение", icon: HeartIcon },
    ],
    days: "ПН / СР / ПТ",
    slots: [
      { time: "09:00", period: "Утро", parallel: false },
      { time: "10:00", period: "Утро", parallel: false },
      { time: "18:30", period: "Вечер", parallel: true },
      { time: "19:30", period: "Вечер", parallel: true },
    ],
    note: "Вечерние группы 18:30 и 19:30 идут параллельно с детской группой в соседнем зале.",
  },
  {
    id: "kids",
    title: "Детская группа",
    badge: "от 3 до 7 лет",
    image: "/img/fitness/kids-fitness.webp",
    imageAlt: "Детская группа ОФП, ритмики и гимнастики в центре Акулёнок",
    accent: "from-teal-500 to-sky-600",
    pillBg: "bg-teal-50 text-teal-800 border-teal-100",
    directions: [
      { label: "Ритмика", icon: MusicalNoteIcon },
      { label: "ОФП", icon: BoltIcon },
      { label: "Гимнастика", icon: StarIcon },
    ],
    days: "ПН / СР / ПТ",
    slots: [
      { time: "18:30", period: "Вечер", parallel: true },
      { time: "19:30", period: "Вечер", parallel: true },
    ],
    note: "Занятия проходят в соседнем зале одновременно с вечерним женским фитнесом.",
  },
];

export default function Fitness() {
  const [filter, setFilter] = useState("all"); // 'all' | 'women' | 'kids'

  const visiblePrograms =
    filter === "all" ? programs : programs.filter((p) => p.id === filter);

  return (
    <section
      id="fitness"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 scroll-mt-24"
    >
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-sky-200/35 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-200/25 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Заголовок блока и главное УТП */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4 shadow-sm"
          >
            Фитнес-студия
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4 text-balance"
          >
            Мама занимается —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              ребёнок развивается!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-xl text-slate-600 font-semibold leading-relaxed mb-8"
          >
            Параллельные занятия в соседних залах
          </motion.p>

          {/* 3 главных преимущества с афиши */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
          >
            {advantages.map((adv) => (
              <div
                key={adv.label}
                className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-sky-100 shadow-sm text-slate-800 font-bold text-sm sm:text-base"
              >
                <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <adv.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span>{adv.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Акцент совпадения времени */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-extrabold tracking-wide shadow-sm mb-8">
            <ClockIcon className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
            <span>Совмещайте удобно: ПН / СР / ПТ в 18:30 и 19:30 в соседних залах</span>
          </div>

          {/* Фильтр направлений */}
          <div
            role="group"
            aria-label="Фильтр направлений фитнеса"
            className="flex flex-wrap justify-center gap-2.5"
          >
            {[
              { id: "all", label: "Оба зала рядом" },
              { id: "women", label: "Женский фитнес" },
              { id: "kids", label: "Детская группа 3–7 лет" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Карточки направлений */}
        <div
          className={`grid gap-8 items-stretch ${
            visiblePrograms.length === 1 ? "max-w-2xl mx-auto grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
          }`}
        >
          {visiblePrograms.map((prog, idx) => (
            <motion.article
              key={prog.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[3rem] border border-white shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Изображение направления */}
              <div className="relative aspect-video w-full bg-sky-50 overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.imageAlt}
                  fill
                  sizes={visiblePrograms.length === 1 ? "(max-width: 768px) 100vw, 672px" : "(max-width: 1024px) 100vw, 50vw"}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${prog.accent} text-white text-xs font-black uppercase tracking-wider shadow-md`}
                  >
                    {prog.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md tracking-tight">
                    {prog.title}
                  </h3>
                </div>
              </div>

              {/* Контент карточки */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow gap-6">
                {/* Направления с иконками */}
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                    Направления
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {prog.directions.map((dir) => (
                      <div
                        key={dir.label}
                        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border font-bold text-sm ${prog.pillBg}`}
                      >
                        <dir.icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                        <span className="leading-snug">{dir.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Дни и расписание */}
                <div className="bg-slate-50/90 rounded-3xl p-5 border border-slate-100 mt-auto">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 text-slate-800 font-black text-sm sm:text-base">
                      <CalendarDaysIcon className="w-5 h-5 text-sky-600 shrink-0" aria-hidden="true" />
                      <span>Дни занятий: {prog.days}</span>
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
                      Параллельно: 18:30 и 19:30
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {prog.slots.map((slot) => (
                      <div
                        key={slot.time}
                        className={`rounded-2xl px-3 py-2.5 text-center border transition-colors ${
                          slot.parallel
                            ? "bg-sky-50 border-sky-300 shadow-sm"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        <div className="text-lg font-black text-slate-900 leading-tight">
                          {slot.time}
                        </div>
                        <div
                          className={`text-[11px] font-bold uppercase tracking-wider mt-0.5 ${
                            slot.parallel ? "text-sky-700" : "text-slate-500"
                          }`}
                        >
                          {slot.period}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {prog.note}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Нижняя панель с адресом, девизом и CTA (без цен) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 rounded-[2.5rem] p-7 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-sky-50 font-bold text-sm sm:text-base">
              <MapPinIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{COMPANY_DETAILS.shortAddress}</span>
            </div>
            <p className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Движение, развитие, восстановление
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-sky-700 hover:bg-sky-50 px-7 py-4 rounded-2xl font-black text-base sm:text-lg shadow-lg transition-all active:scale-95 text-center"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Узнать стоимость и записаться
            </a>

            <div className="flex items-center gap-2.5">
              <a
                href={COMPANY_DETAILS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в Telegram"
                className="p-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 text-white transition-colors"
              >
                <FaTelegramPlane size={20} aria-hidden="true" />
              </a>
              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в WhatsApp"
                className="p-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 text-white transition-colors"
              >
                <FaWhatsapp size={20} aria-hidden="true" />
              </a>
              <a
                href={COMPANY_DETAILS.max}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в MAX"
                className="p-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 text-white transition-colors"
              >
                <FaCommentDots size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
