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
  { label: "Удобно для мам", icon: HeartIcon, rose: true },
  { label: "Экономия времени", icon: ClockIcon, rose: false },
  { label: "Забота о всей семье", icon: UsersIcon, rose: false },
];

const programs = [
  {
    id: "women",
    title: "Женский фитнес",
    badge: "Для мам и женщин",
    image: "/img/fitness/women-fitness.webp",
    imageAlt: "Женский фитнес и стретчинг в студии Акулёнок",
    accent: "from-rose-500 to-pink-500",
    pillBg: "bg-rose-50/90 text-rose-700 border-rose-200/70",
    slotActive: "bg-rose-50 border-rose-300 shadow-sm",
    slotLabel: "text-rose-700",
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
    accent: "from-sky-500 to-cyan-400",
    pillBg: "bg-sky-50/90 text-sky-700 border-sky-200/70",
    slotActive: "bg-sky-50 border-sky-300 shadow-sm",
    slotLabel: "text-sky-700",
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
  const [filter, setFilter] = useState("all");

  const visiblePrograms =
    filter === "all" ? programs : programs.filter((p) => p.id === filter);

  return (
    <section
      id="fitness"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#ECF8FF]/70 via-[#F6FBFF] to-[#F6FBFF] scroll-mt-24"
    >
      {/* Aurora Glow сквозь воду */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-rose-700 font-bold text-xs tracking-widest uppercase mb-4 shadow-sm"
          >
            Фитнес-студия
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-[1.12] mb-4 text-balance"
          >
            Мама занимается —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-400 to-rose-500">
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
                className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/90 shadow-soft text-[#0C1A2E] font-bold text-sm sm:text-base"
              >
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    adv.rose ? "bg-rose-50 text-rose-600" : "bg-sky-100 text-sky-600"
                  }`}
                >
                  <adv.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span>{adv.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-extrabold tracking-wide shadow-sm mb-8">
            <ClockIcon className="w-4 h-4 text-rose-500 shrink-0" aria-hidden="true" />
            <span>Совмещайте удобно: ПН / СР / ПТ в 18:30 и 19:30 в соседних залах</span>
          </div>

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
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-white/80 backdrop-blur-md text-slate-600 border border-white/90 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

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
              className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video w-full bg-sky-50 overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.imageAlt}
                  fill
                  sizes={visiblePrograms.length === 1 ? "(max-width: 768px) 100vw, 672px" : "(max-width: 1024px) 100vw, 50vw"}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2E]/65 via-[#0C1A2E]/10 to-transparent" />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${prog.accent} text-white text-xs font-extrabold uppercase tracking-wider shadow-md`}
                  >
                    {prog.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
                    {prog.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow gap-6">
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

                <div className="bg-[#F6FBFF] rounded-2xl p-5 border border-sky-100/80 mt-auto">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 text-[#0C1A2E] font-extrabold text-sm sm:text-base">
                      <CalendarDaysIcon className="w-5 h-5 text-sky-600 shrink-0" aria-hidden="true" />
                      <span>Дни занятий: {prog.days}</span>
                    </div>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200/70 px-3 py-1 rounded-full">
                      Параллельно: 18:30 и 19:30
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {prog.slots.map((slot) => (
                      <div
                        key={slot.time}
                        className={`rounded-2xl px-3 py-2.5 text-center border transition-colors ${
                          slot.parallel ? prog.slotActive : "bg-white border-slate-200/80"
                        }`}
                      >
                        <div className="font-display text-lg font-extrabold text-[#0C1A2E] leading-tight">
                          {slot.time}
                        </div>
                        <div
                          className={`text-[11px] font-bold uppercase tracking-wider mt-0.5 ${
                            slot.parallel ? prog.slotLabel : "text-slate-500"
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

        {/* Фирменный Aqua-Rose баннер (без выдуманных цен) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-br from-sky-500 via-indigo-400 to-rose-500 rounded-3xl p-7 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/30"
        >
          <div className="text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-white/90 font-bold text-sm sm:text-base">
              <MapPinIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{COMPANY_DETAILS.shortAddress}</span>
            </div>
            <p className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Движение, развитие, восстановление
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-rose-600 hover:bg-rose-50 px-7 py-4 rounded-2xl font-extrabold text-base sm:text-lg shadow-lg transition-all active:scale-95 text-center"
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
