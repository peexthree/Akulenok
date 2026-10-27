"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { COMPANY_DETAILS } from "../config/company";

export default function Privacy() {
  const lastUpdate = "06.03.2026";

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
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-blue-500" />
            
            <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
              Политика конфиденциальности
            </h1>

            <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed space-y-8">
              <p className="text-xl text-slate-700 font-semibold mb-8">
                Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сайта «Акулёнок» ({COMPANY_DETAILS.name}).
              </p>

              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">1</span>
                    Общие положения
                  </h2>
                  <p>
                    Настоящая Политика обработки персональных данных разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок работы сайта, функционирующего в формате информационного веб-сайта (сайта-визитки).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">2</span>
                    Сбор данных и использование Cookie
                  </h2>
                  <p className="mb-2">Сайт собирает минимальный объем технических данных:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Файлы cookie и анонимные технические данные (IP-адрес, тип устройства, статистика посещений через анонимную аналитику Яндекс.Метрика при согласии пользователя). Данные используются исключительно для корректной работы интерфейса сайта и анализа посещаемости.</li>
                    <li>Данные обратной связи (имя и номер телефона), передаваемые пользователем добровольно при заполнении формы записи для оперативной связи и консультации. Данный ресурс не хранит базу данных пользователей на внешних зарубежных серверах и используется как визитка для связи.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">3</span>
                    Персональные данные сотрудников и материалы
                  </h2>
                  <p>
                    Информация о сотрудниках и тренерах центра размещена с их письменного согласия. Публикация медиаматериалов (фотографии и видео) осуществляется в соответствии со ст. 152.1 ГК РФ с письменного согласия законных представителей детей.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">4</span>
                    Защита информации и права пользователя
                  </h2>
                  <p className="mb-4">
                    Оператор принимает необходимые технические и организационные меры для защиты персональной информации от неправомерного доступа. Вы можете в любой момент отозвать свое согласие на обработку данных или запросить изменение сведений, направив обращение по указанным ниже контактам.
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-12 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800">Реквизиты оператора</h3>
                  <div className="text-slate-700 space-y-1">
                    <p className="font-bold">{COMPANY_DETAILS.name} ({COMPANY_DETAILS.legalName})</p>
                    <p>ИНН: {COMPANY_DETAILS.inn} | ОГРНИП: {COMPANY_DETAILS.ogrn}</p>
                    <p>Адрес: {COMPANY_DETAILS.address}</p>
                  </div>
                  <div className="flex flex-wrap gap-6 pt-2">
                    <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="font-bold text-slate-900 hover:text-sky-500 transition-colors">
                      {COMPANY_DETAILS.phone}
                    </a>
                    <a href={COMPANY_DETAILS.telegram} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-500 hover:underline">
                      Telegram @akulenok_tmz
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
