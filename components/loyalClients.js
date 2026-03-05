import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import { motion } from "framer-motion";

export default function LoyalClients() {
  return (
    <section  className="py-16 bg-aqua-background ">
      <Container>
        <SectionTitle
          pretitle="Программа лояльности"
          title="Для постоянных клиентов"
        >
          Мы ценим, что вы выбираете нас для здоровья ваших детей!
        </SectionTitle>

        <div className="flex flex-wrap items-center justify-center lg:flex-nowrap gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-aqua-dark mb-4">Условия программы:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Статус постоянного клиента присваивается со <strong>2-го посещения</strong> нашего центра.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Постоянная скидка 5% на все абонементы</li>
                <li>Доступ к специальным предложениям</li>
                <li>Удобная запись через мобильное приложение</li>
              </ul>
            </div>

            <div className="bg-aqua-accent/10 p-6 rounded-2xl border border-aqua-accent/20">
              <h4 className="text-xl font-bold text-aqua-dark mb-2">Правила центра</h4>
              <p className="text-gray-700">
                Пожалуйста, ознакомьтесь с правилами нашего центра для комфортного и безопасного пребывания.
              </p>
              <a href="#" className="mt-3 inline-block text-aqua-accent font-semibold hover:underline">
                Читать правила
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col items-center text-center gap-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-aqua-dark">Мобильное приложение</h3>
            <p className="text-gray-600">
              Скачайте наше приложение для быстрой записи и управления абонементами
            </p>

            {/* Заглушка для QR кода */}
            <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-400">
              <span className="text-gray-500 font-medium">QR-код приложения</span>
            </div>

            <div className="w-full mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="font-semibold text-yellow-800 mb-2">Забыли записаться?</p>
              <a
                href="#"
                className="inline-block bg-aqua-accent text-white px-6 py-2 rounded-full font-medium hover:bg-aqua-dark transition-colors"
              >
                Ссылка на быструю запись!
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
