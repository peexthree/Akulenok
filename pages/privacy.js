"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../components/container";
// Layout уже импортирован в _app.js, но здесь мы можем добавить 
// дополнительные SEO-теги через Head

export default function Privacy() {
  const lastUpdate = "06.03.2026"; // Статичная дата во избежание ошибок гидратации

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Навигация назад */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sky-500 font-bold mb-12 hover:text-sky-600 transition-colors group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Вернуться на главную
          </Link>

          {/* Стеклянная карточка с текстом */}
          <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-16 rounded-[3rem] shadow-soft overflow-hidden relative">
            {/* Декоративный акцент */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-blue-500" />
            
            <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
              Политика конфиденциальности
            </h1>

            <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
              <p className="text-xl text-slate-700 font-semibold mb-8">
                Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сайта «Акулёнок».
              </p>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">1</span>
                    Какие данные мы собираем
                  </h2>
                  <p>Имя и номер телефона, которые вы добровольно указываете при заполнении формы записи или при обращении через мессенджеры.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">2</span>
                    Цель обработки
                  </h2>
                  <p>Мы используем данные исключительно для обратной связи: подтверждения записи на занятия, уточнения расписания и информирования об услугах центра.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">3</span>
                    Хранение и защита
                  </h2>
                  <p>
                    Данные передаются по защищенным протоколам через Telegram Bot API и хранятся в закрытой системе администрирования. 
                    Мы принимаем все необходимые меры для защиты информации от несанкционированного доступа.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">4</span>
                    Передача третьим лицам
                  </h2>
                  <p>Мы не продаем и не передаем ваши данные третьим лицам. Доступ возможен только в случаях, прямо предусмотренных законодательством РФ.</p>
                </div>
                
                <div className="pt-8 border-t border-slate-100 mt-12">
                  <p className="text-sm">
                    По любым вопросам удаления или изменения данных вы можете связаться с нами:
                  </p>
                  <div className="flex flex-wrap gap-6 mt-4">
                    <a href="tel:+79273039977" className="font-bold text-slate-900 hover:text-sky-500 transition-colors">
                      +7 927 303-99-77
                    </a>
                    <a href="https://t.me/akulenok_tmz" className="font-bold text-sky-500 hover:underline">
                      @akulenok_tmz
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <p className="mt-12 text-xs text-slate-400 font-bold uppercase tracking-widest">
              Последнее обновление: {lastUpdate}
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
