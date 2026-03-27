"use client";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useShark } from "./SharkProvider";

export default function LoyalClients() {
  const { setFormOpen } = useShark();

  return (
    <section className="py-24 relative overflow-hidden bg-sky-50">
      
      {/* Декоративные блики для объема */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 font-bold text-sm tracking-wider uppercase mb-4"
          >
            Программа лояльности
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-4 drop-shadow-sm"
          >
            Для тех, кто с нами
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium leading-relaxed tracking-wide"
          >
            Ценим ваше доверие и дарим привилегии уже со второго визита.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 mt-10">
          
          {/* Левая карточка: Условия */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-soft border border-white h-full flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300">
              <div>
                <h3 className="text-3xl font-black text-slate-800 mb-6">Привилегии клуба</h3>
                <p className="text-lg text-slate-600 leading-relaxed tracking-wide font-medium mb-8 bg-sky-50/80 backdrop-blur-sm border border-sky-100 p-4 rounded-2xl shadow-inner">
                  Статус постоянного клиента активируется автоматически со <strong>2-го посещения</strong>.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Постоянная скидка 5% на все абонементы",
                    "Ранний доступ к специальным предложениям",
                    "Приоритетная запись к ведущим тренерам"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="shrink-0 w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 mt-0.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Элегантная ссылка на правила */}
              <div className="mt-10 pt-6 border-t border-slate-100">
                <a href="/privacy" className="inline-flex items-center gap-2 text-sky-500 font-bold hover:text-sky-600 transition-colors group-hover:translate-x-1 duration-300">
                  Правила посещения центра
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Правая карточка: Приложение / Бот */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col items-center text-center bg-gradient-to-br from-sky-500 to-blue-600 p-10 rounded-[2.5rem] shadow-lg relative overflow-hidden"
          >
            {/* Декор внутри синей карточки */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
            
            <h3 className="text-3xl font-black text-white mb-4 relative z-10">Запись в 2 клика</h3>
            <p className="text-sky-100 text-lg font-medium mb-10 relative z-10 max-w-sm">
              Управляйте абонементами и переносите занятия прямо в вашем смартфоне.
            </p>

            {/* Premium QR Placeholder */}
            <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl mb-10 group cursor-pointer hover:scale-105 transition-transform duration-300 z-10">
              <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center p-3 relative overflow-hidden">
                {/* Имитация красивого QR */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-slate-400 font-bold text-sm text-center relative z-10 group-hover:opacity-0 transition-opacity duration-300">Наведите<br/>камеру</span>
              </div>
            </div>

            {/* Мощный CTA вместо желтой плашки */}
            {/* <button
              type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFormOpen(true); }}
              className="relative z-10 w-full bg-white text-sky-600 px-8 py-5 rounded-2xl font-black text-xl hover:bg-sky-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
            >
              Перейти к онлайн-записи
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button> */}
            <a
              href="tel:+79273039977"
              className="relative z-10 w-full bg-white/95 backdrop-blur-md text-sky-600 px-8 py-5 rounded-2xl font-black text-xl tracking-wide leading-snug hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 border border-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить
            </a>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
