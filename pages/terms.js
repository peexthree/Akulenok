import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { COMPANY_DETAILS } from "../config/company";

export default function Terms() {
  const lastUpdate = "14.11.2026";
  const pageTitle = "Условия использования сайта - Аквацентр «Акулёнок» Туймазы";
  const pageDescription =
    "Условия использования информационного сайта детского аквацентра «Акулёнок» в г. Туймазы.";

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${COMPANY_DETAILS.siteUrl}/terms`} />
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
                Условия использования сайта
              </h1>

              <div className="text-slate-600 text-lg font-medium leading-relaxed space-y-8">
                <p className="text-xl text-slate-700 font-semibold">
                  Настоящие Условия определяют порядок использования информационного сайта {COMPANY_DETAILS.siteUrl.replace(/^https?:\/\//, "")} ({COMPANY_DETAILS.name}).
                </p>

                <section className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">1</span>
                      Общие положения
                    </h2>
                    <p>
                      Сайт принадлежит {COMPANY_DETAILS.legalName} и функционирует в формате информационного веб-ресурса (сайта-визитки): содержит сведения об услугах центра, расписании, ценах и контактных данных. Использование сайта означает согласие с настоящими Условиями.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">2</span>
                      Информация на сайте
                    </h2>
                    <p className="mb-2">
                      Материалы сайта носят информационный характер и не являются публичной офертой в смысле ст. 437 ГК РФ. Актуальные цены, расписание и условия посещения уточняйте у администратора по телефону или в мессенджерах. Условия оказания услуг закреплены в публичной оферте, доступной по ссылке ниже.
                    </p>
                    <a
                      href="/oferta.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors"
                    >
                      Публичная оферта (PDF)
                    </a>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">3</span>
                      Интеллектуальная собственность
                    </h2>
                    <p>
                      Текстовые и графические материалы, фотографии и видеозаписи, размещённые на сайте, являются объектами интеллектуальной собственности правообладателя. Копирование и использование материалов без письменного согласия правообладателя не допускается.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">4</span>
                      Ответственность
                    </h2>
                    <p>
                      Администрация сайта стремится обеспечить актуальность размещённой информации, однако не несёт ответственности за возможные неточности, а также за решения, принятые пользователем на основании материалов сайта. Порядок работы с техническими данными пользователей определён в <Link href="/privacy" className="text-sky-600 font-bold hover:underline">Политике конфиденциальности</Link>.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center min-w-[2rem] w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm">5</span>
                      Изменение условий
                    </h2>
                    <p>
                      Администрация вправе изменять настоящие Условия в одностороннем порядке. Актуальная редакция всегда доступна на этой странице.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 mt-12 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Реквизиты</h3>
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
