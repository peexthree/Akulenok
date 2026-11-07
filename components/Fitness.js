"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import {
  SparklesIcon,
  ClockIcon,
  HeartIcon,
  PhoneIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  SunIcon,
  MoonIcon,
  FaceSmileIcon,
  BoltIcon,
  MusicalNoteIcon
} from "@heroicons/react/24/outline";
import { COMPANY_DETAILS } from "../config/company";

// Выносим статичные данные за пределы компонента во избежание лишних аллокаций
const ADVANTAGES = [
  {
    title: "Удобно для мам",
    desc: "Пока ребенок на занятиях, вы посвящаете время своему здоровью и красоте",
    icon: SparklesIcon,
    badgeColor: "bg-pink-100 text-pink-600 border-pink-200"
  },
  {
    title: "Экономия времени",
    desc: "Тренировки проходят параллельно в соседних залах — никаких лишних поездок",
    icon: ClockIcon,
    badgeColor: "bg-sky-100 text-sky-600 border-sky-200"
  },
  {
    title: "Забота о всей семье",
    desc: "Здоровые привычки, гармония и отличное самочувствие для детей и родителей",
    icon: HeartIcon,
    badgeColor: "bg-emerald-100 text-emerald-600 border-emerald-200"
  }
];

const PROGRAMS = {
  women: {
    id: "women",
    title: "Женский фитнес",
    badge: "Для мам и девушек",
    accentGradient: "from-pink-500 via-rose-500 to-amber-500",
    bgCardGradient: "from-rose-50/80 via-white to-pink-50/50",
    borderActive: "border-pink-300 ring-2 ring-pink-400/20",
    description: "Комплексные тренировки для легкости в теле, стройности, подтянутости и внутренней энергии.",
    directions: [
      {
        name: "Фитнес",
        desc: "Тонус мышц, выносливость и активное сжигание калорий в мягком темпе",
        icon: BoltIcon,
        color: "text-rose-500 bg-rose-50"
      },
      {
        name: "Стретчинг",
        desc: "Глубокая растяжка, гибкость, снятие зажимов и здоровье суставов",
        icon: SparklesIcon,
        color: "text-purple-500 bg-purple-50"
      },
      {
        name: "Хорошее настроение",
        desc: "Заряд эндорфинов, перезагрузка от бытовой рутины и поддержка единомышленниц",
        icon: FaceSmileIcon,
        color: "text-amber-500 bg-amber-50"
      }
    ],
    days: "ПН / СР / ПТ",
    schedule: [
      {
        type: "Утренние группы",
        time: "09:00, 10:00",
        icon: SunIcon,
        note: "Бодрый старт дня"
      },
      {
        type: "Вечерние группы",
        time: "18:30, 19:30",
        icon: MoonIcon,
        note: "Параллельно с детской группой"
      }
    ],
    image: "/img/gallery/gallery-03.jpeg",
    icon3d: "/img/3d-icons/2.webp"
  },
  kids: {
    id: "kids",
    title: "Детская группа",
    badge: "Возраст: от 3 до 7 лет",
    accentGradient: "from-sky-500 via-blue-500 to-indigo-500",
    bgCardGradient: "from-sky-50/80 via-white to-blue-50/50",
    borderActive: "border-sky-300 ring-2 ring-sky-400/20",
    description: "Увлекательные развивающие занятия для формирования крепкого мышечного корсета и правильной осанки.",
    directions: [
      {
        name: "Ритмика",
        desc: "Чувство ритма, музыкальность, координация движений и пластичность",
        icon: MusicalNoteIcon,
        color: "text-sky-500 bg-sky-50"
      },
      {
        name: "ОФП",
        desc: "Общая физическая подготовка, сила, баланс и укрепление иммунитета",
        icon: BoltIcon,
        color: "text-blue-500 bg-blue-50"
      },
      {
        name: "Гимнастика",
        desc: "Гибкость, правильная осанка, укрепление стоп и профилактика плоскостопия",
        icon: SparklesIcon,
        color: "text-indigo-500 bg-indigo-50"
      }
    ],
    days: "ПН / СР / ПТ",
    schedule: [
      {
        type: "Вечерние группы",
        time: "18:30, 19:30",
        icon: MoonIcon,
        note: "В соседнем зале одновременно с мамой!"
      }
    ],
    image: "/img/gallery/gallery-05.jpeg",
    icon3d: "/img/3d-icons/1.webp"
  }
};

export default function Fitness() {
  const [activeTab, setActiveTab] = useState("women");
  const activeProgram = PROGRAMS[activeTab];

  return (
    <section id="fitness" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24 z-10">
      {/* Декоративное фоновое свечение */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-pink-200/30 via-sky-200/30 to-purple-200/30 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <Container>
        {/* Заголовок блока с УТП */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-soft text-slate-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            Фитнес-пространство «Акулёнок»
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance"
          >
            Мама занимается — <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-sky-500">
              ребёнок развивается!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-700 font-semibold tracking-wide max-w-2xl mx-auto mb-4"
          >
            Параллельные занятия в соседних залах
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-block px-5 py-1.5 rounded-2xl bg-sky-50 border border-sky-100 text-sky-700 text-sm sm:text-base font-bold tracking-wide"
          >
            движение • развитие • восстановление
          </motion.div>
        </div>

        {/* 3 главных преимущества */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-white shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shadow-sm ${adv.badgeColor}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3 tracking-tight">
                  {adv.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Переключатель направлений (Табы) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/70 backdrop-blur-md shadow-inner border border-white/60">
            <button
              type="button"
              onClick={() => setActiveTab("women")}
              className={`relative px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-black transition-all duration-300 ${
                activeTab === "women"
                  ? "text-white shadow-lg shadow-pink-500/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {activeTab === "women" && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Женский фитнес
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("kids")}
              className={`relative px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-black transition-all duration-300 ${
                activeTab === "kids"
                  ? "text-white shadow-lg shadow-sky-500/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {activeTab === "kids" && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Детская группа (3–7 лет)
              </span>
            </button>
          </div>
        </div>

        {/* Интерактивная карточка выбранного направления */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`relative rounded-[3rem] p-8 sm:p-12 lg:p-14 bg-gradient-to-br ${activeProgram.bgCardGradient} border-2 border-white shadow-xl backdrop-blur-xl overflow-hidden`}
          >
            {/* 3D Иконка-декор */}
            <div className="absolute -top-6 -right-6 w-44 h-44 sm:w-56 sm:h-56 pointer-events-none opacity-20 sm:opacity-40 -z-0">
              <Image
                src={activeProgram.icon3d}
                alt={activeProgram.title}
                width={220}
                height={220}
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Левая колонка: описание и направления */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r ${activeProgram.accentGradient} shadow-md`}>
                    {activeProgram.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200">
                    Дни: {activeProgram.days}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                  {activeProgram.title}
                </h3>

                <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-8">
                  {activeProgram.description}
                </p>

                {/* Направления с иконками */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Ключевые направления:
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {activeProgram.directions.map((dir) => {
                      const DirIcon = dir.icon;
                      return (
                        <div
                          key={dir.name}
                          className="p-4 rounded-2xl bg-white/90 border border-slate-100 shadow-sm flex flex-col"
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${dir.color}`}>
                            <DirIcon className="w-5 h-5" />
                          </div>
                          <span className="font-extrabold text-slate-800 text-base mb-1">
                            {dir.name}
                          </span>
                          <span className="text-xs text-slate-500 font-medium leading-relaxed">
                            {dir.desc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Блок расписания */}
                <div className="p-6 rounded-3xl bg-white/95 border border-slate-100 shadow-sm mb-8">
                  <div className="flex items-center gap-2 mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
                    <CalendarDaysIcon className="w-4 h-4 text-slate-600" />
                    Расписание (ПН / СР / ПТ):
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeProgram.schedule.map((item, i) => {
                      const TimeIcon = item.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-slate-700 shadow-sm shrink-0">
                            <TimeIcon className="w-5 h-5 text-amber-500" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-500 uppercase">
                              {item.type}
                            </div>
                            <div className="text-base font-black text-slate-800 tracking-tight">
                              {item.time}
                            </div>
                            <div className="text-[11px] font-semibold text-rose-500">
                              {item.note}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Кнопка записи без ценников */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className={`px-8 py-5 rounded-full font-black text-base tracking-wide text-white bg-gradient-to-r ${activeProgram.accentGradient} shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3`}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Узнать стоимость и записаться
                  </a>
                  <span className="text-xs text-slate-500 font-semibold text-center sm:text-left">
                    г. Туймазы, ул. Столярова, 1
                  </span>
                </div>
              </div>

              {/* Правая колонка: Фото-аналог с информационным бейджем */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={activeProgram.image}
                    alt={activeProgram.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                  {/* Плавающий бейдж на фото */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black shrink-0">
                        ⚡
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase text-slate-900 tracking-wide">
                          Удобное расписание
                        </div>
                        <div className="text-xs font-semibold text-slate-600">
                          Вечером в 18:30 и 19:30 — параллельно в двух залах
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
