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
                <h3 className="text-3xl font-black text-slate-800 mb-6">Привилегии центра</h3>
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
                <a href="/Оферта.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky-500 font-bold hover:text-sky-600 transition-colors group-hover:translate-x-1 duration-300">
                  Публичная оферта: Правила посещения центра
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

            {/* Mobile App Links */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 relative z-10">
              <a href="https://apps.apple.com/app/id6466166812" target="_blank" rel="noopener noreferrer" className="bg-black/90 text-white rounded-2xl flex items-center px-6 py-3 hover:scale-105 transition-transform shadow-lg border border-white/10 w-[200px]">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Загрузите в</span>
                  <span className="text-xl font-bold leading-tight">App Store</span>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.gocrm.akulenok" target="_blank" rel="noopener noreferrer" className="bg-black/90 text-white rounded-2xl flex items-center px-6 py-3 hover:scale-105 transition-transform shadow-lg border border-white/10 w-[200px]">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Доступно в</span>
                  <span className="text-xl font-bold leading-tight">Google Play</span>
                </div>
              </a>
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
