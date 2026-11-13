import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { COMPANY_DETAILS } from "../config/company";

export default function Privacy() {
  const lastUpdate = "11.11.2026";
  const pageTitle = "Политика конфиденциальности - Аквацентр «Акулёнок» Туймазы";
  const pageDescription =
    "Порядок работы с техническими данными и файлами cookie на сайте детского аквацентра «Акулёнок» в г. Туймазы.";

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${COMPANY_DETAILS.siteUrl}/privacy`} />
      </Head>

      <div className="min-h-screen bg-[#F6FBFF] pt-24 pb-24 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sky-600 font-bold mb-10 hover:text-sky-700 transition-colors group rounded-lg"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Вернуться на главную
            </Link>

            <div className="bg-white/80 backdrop-blur-xl border border-white/90 p-8 md:p-16 rounded-3xl shadow-soft overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-500 to-rose-500" />

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C1A2E] mb-8 tracking-tight">
                Политика конфиденциальности
              </h1>

              <div className="text-slate-600 text-lg font-medium leading-relaxed space-y-8">
                <p className="text-xl text-slate-700 font-semibold">
                  Настоящая Политика определяет порядок обращения с техническими данными пользователей информационного сайта {COMPANY_DETAILS.name}.
                </p>

                <section className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">1</span>
                      Общие положения
                    </h2>
                    <p>
                      Сайт функционирует в формате информационного веб-ресурса (сайта-визитки). На сайте отсутствуют формы регистрации, личные кабинеты и формы сбора персональных данных: пользователь самостоятельно связывается с центром по телефону или в выбранном мессенджере.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">2</span>
                      Технические данные и Cookie
                    </h2>
                    <p className="mb-2">Сайт не хранит базы персональных данных пользователей и обрабатывает минимум технических сведений:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>
                        Файлы cookie и обезличенная статистика посещений (через сервис Яндекс.Метрика - исключительно после явного согласия пользователя в cookie-баннере). Эти данные применяются только для анализа посещаемости и улучшения удобства сайта.
                      </li>
                      <li>
                        Состояние выбора cookie-баннера сохраняется локально в вашем браузере (`localStorage`) и не передаётся третьим лицам.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">3</span>
                      Персональные данные сотрудников и медиаматериалы
                    </h2>
                    <p>
                      Информация о сотрудниках и тренерах центра размещена с их письменного согласия. Публикация фотографий и видеоматериалов осуществляется в соответствии со ст. 152.1 ГК РФ с письменного согласия законных представителей детей.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">4</span>
                      Контакты и обратная связь
                    </h2>
                    <p>
                      По любым вопросам, связанным с работой сайта или размещённой информацией, вы можете обратиться по указанным ниже контактам центра.
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
                      <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="font-bold text-slate-900 hover:text-sky-600 transition-colors">
                        {COMPANY_DETAILS.phone}
                      </a>
                      <a href={COMPANY_DETAILS.telegram} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-600 hover:underline">
                        Telegram @akulenok_tmz
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <p className="mt-12 text-xs text-slate-500 font-bold uppercase tracking-widest">
                Последнее обновление: {lastUpdate}
              </p>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
