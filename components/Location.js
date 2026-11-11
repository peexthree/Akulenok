import React from "react";
import Container from "./Container";
import clsx from "clsx";
import { FaMapMarkerAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { COMPANY_DETAILS } from "../config/company";

export default function Location() {
  const commonButtonClasses =
    "inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-bold transition-all duration-300 w-full text-white shadow-md hover:shadow-lg hover:-translate-y-1";

  return (
    <Container id="contacts" className="py-24 relative z-10 scroll-mt-24">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="text-center mb-16 relative">
        <span className="badge-pretitle mb-4">
          Контакты
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-[1.1] mb-4"
        >
          Ждём вас в гости
        </motion.h2>
        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
          Удобное расположение, парковка и уютная атмосфера.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="grid gap-8 lg:grid-cols-[450px_1fr] items-center glass-card p-6 sm:p-10 mx-auto"
      >
        <div className="flex flex-col justify-center h-full space-y-8">
          <div className="space-y-6 text-lg">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-sky-600 uppercase tracking-wider">Адрес</span>
              <span className="font-bold text-[#0C1A2E] text-xl">{COMPANY_DETAILS.shortAddress}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-sky-600 uppercase tracking-wider">Телефон</span>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="font-display font-extrabold text-[#0C1A2E] text-2xl hover:text-rose-600 transition-colors self-start rounded-lg"
              >
                {COMPANY_DETAILS.phone}
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-sky-600 uppercase tracking-wider">Режим работы</span>
              <span className="font-semibold text-slate-600">
                Пн-Пт: {COMPANY_DETAILS.hoursWeekdays} · Сб-Вс: {COMPANY_DETAILS.hoursWeekend}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#F6FBFF] px-4 py-2 rounded-xl border border-sky-200/70 self-start">
              <span className="text-amber-400 text-xl" aria-hidden="true">★</span>
              <span className="font-display font-extrabold text-[#0C1A2E]">{COMPANY_DETAILS.rating}</span>
              <span className="text-slate-600 text-sm font-medium">({COMPANY_DETAILS.reviewsCountText})</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={COMPANY_DETAILS.yandexMaps}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-[#0C1A2E] hover:bg-ocean/90 sm:col-span-2")}
            >
              <FaMapMarkerAlt size={20} aria-hidden="true" />
              <span>Построить маршрут</span>
            </a>
            <a
              href={COMPANY_DETAILS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-[#2AABEE] hover:bg-[#2298D6]")}
            >
              <FaTelegramPlane size={20} aria-hidden="true" />
              <span>Telegram</span>
            </a>
            <a
              href={COMPANY_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-[#25D366] hover:bg-[#20BD5A]")}
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden h-[320px] sm:h-[450px] shadow-inner bg-[#F6FBFF]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3bc8364469f998d48316e3069ad02bfec23d4cf2a256c4d1fece1f5daac7dfca&source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            loading="lazy"
            title="Карта проезда к бассейну Акулёнок"
            className="absolute inset-0"
          />
        </div>
      </motion.div>
    </Container>
  );
}
