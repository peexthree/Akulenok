"use client";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useShark } from "./SharkProvider";

function Schedule() {


  return (
    <Container className="py-24 relative z-10 scroll-mt-24" id="schedule">
      
      {/* Заголовок */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 drop-shadow-sm"
        >
          Выберите свое время
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

      {/* Новый красиво оформленный блок расписания */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 sm:p-14 shadow-soft border border-sky-100 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative"
        >
          {/* Декоративный элемент фона */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3 opacity-70" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full blur-2xl -z-10 translate-y-1/2 -translate-x-1/4 opacity-60" />

          {/* Левая часть: График работы */}
          <div className="flex-1 w-full space-y-8 relative z-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-500 flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">с понедельника по пятницу</h3>
                <p className="text-3xl sm:text-4xl font-black text-sky-500 tracking-tight leading-none">9:00 - 21:00</p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-slate-100 via-slate-200 to-transparent" />

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">суббота / воскресенье</h3>
                <p className="text-3xl sm:text-4xl font-black text-orange-500 tracking-tight leading-none">10:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Правая часть: Призыв и инфо */}
          <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative z-10">
            <div className="mb-6 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </span>
               <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">Круглый год</span>
            </div>

            <h3 className="text-2xl font-black text-slate-800 mb-4 leading-snug text-balance">
              Работаем по предварительной записи в любое время года
            </h3>

            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
              Свяжитесь с нами, чтобы забронировать удобное время для вашего малыша. Количество мест в мини-группах ограничено.
            </p>

            <a
              href="tel:+79273039977"
              className="w-full sm:w-auto px-10 py-5 rounded-[2rem] font-black text-lg tracking-wide leading-snug transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-xl shadow-sky-200/50 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
