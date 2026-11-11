import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { COMPANY_DETAILS } from "../config/company";

function Schedule() {
  return (
    <Container className="py-24 relative z-10 scroll-mt-24" id="schedule">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-sky-700 font-bold text-xs tracking-widest uppercase mb-4">
          Режим работы
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-tight mb-4"
        >
          Выберите своё время
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 font-medium leading-relaxed tracking-wide"
        >
          Подберём комфортный формат для вас и малыша.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 shadow-soft border border-white/90 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative"
        >
          <div className="flex-1 w-full space-y-8 relative z-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A2E] mb-2">с понедельника по пятницу</h3>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight leading-none">
                  {COMPANY_DETAILS.hoursWeekdays}
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-sky-100 via-rose-100 to-transparent" />

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200/70 text-rose-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A2E] mb-2">суббота / воскресенье</h3>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-rose-500 tracking-tight leading-none">
                  {COMPANY_DETAILS.hoursWeekend}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left bg-[#F6FBFF] p-8 rounded-3xl border border-sky-100/80 relative z-10">
            <div className="mb-6 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-sky-100">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Круглый год</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#0C1A2E] mb-4 leading-snug text-balance">
              Работаем по предварительной записи в любое время года
            </h3>

            <p className="text-slate-600 font-medium mb-5 leading-relaxed">
              Свяжитесь с нами, чтобы забронировать удобное время для вашего малыша. Количество мест в мини-группах ограничено.
            </p>

            <a
              href="#fitness"
              className="text-sm font-bold text-sky-600 hover:text-rose-600 mb-6 inline-flex items-center gap-1.5 transition-colors"
            >
              Групповой фитнес для мам и детей (ПН / СР / ПТ) →
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl font-extrabold text-lg tracking-wide leading-snug transition-all duration-300 hover:scale-[1.02] active:scale-95 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg shadow-rose-500/25 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Записаться сейчас
            </a>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default React.memo(Schedule);
