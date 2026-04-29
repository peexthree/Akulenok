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

              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">1</span>
                    Общие положения
                  </h2>
                  <p>
                    Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению их безопасности.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">2</span>
                    Собираемые данные и цели обработки
                  </h2>
                  <p className="mb-2">Мы можем собирать следующие данные:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Сведения об использовании сайта (файлы cookie, IP-адрес, данные аналитики), если вы дали на это согласие. Цель: улучшение работы сайта и аналитика.</li>
                    <li>Имя и номер телефона при обращении через мессенджеры. Цель: обратная связь, подтверждение записи и консультация.</li>
                  </ul>
                  <p>
                    Обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, интимной жизни, не осуществляется.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">3</span>
                    Персональные данные сотрудников
                  </h2>
                  <p>
                    В разделе «О нас» и других разделах сайта размещены фотографии, имена и сведения об образовании и квалификации сотрудников нашего центра. Данная информация размещена с письменного согласия каждого сотрудника в соответствии с требованиями законодательства РФ.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">4</span>
                    Порядок сбора, хранения, передачи и защиты
                  </h2>
                  <p className="mb-4">
                    Безопасность персональных данных обеспечивается путем реализации правовых, организационных и технических мер. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
                  </p>
                  <p className="mb-4">
                    Передача данных третьим лицам не осуществляется, за исключением случаев, прямо предусмотренных законодательством РФ. В случае выявления неточностей в персональных данных, пользователь может актуализировать их самостоятельно, путем направления уведомления Оператору.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">5</span>
                    Права пользователя
                  </h2>
                  <p>
                    Вы имеете право на получение информации, касающейся обработки ваших персональных данных. Вы можете отозвать согласие на обработку персональных данных в любой момент, направив нам уведомление по контактам, указанным ниже. Срок обработки данных прекращается по достижении целей обработки или после отзыва согласия.
                  </p>
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
