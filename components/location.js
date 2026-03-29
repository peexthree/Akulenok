"use client";
import React from "react";
import Container from "./container";
import clsx from "clsx";
import { FaMapMarkerAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Location() {
  const address = "ул. Столярова, 1, г. Туймазы";
  const phone = "+7 (927) 303-99-77";
  const mapLink = "https://yandex.ru/maps/org/akulenok/125018811972/?ll=53.728390%2C54.600103&z=16";
  
  const commonButtonClasses =
    "inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-bold transition-all duration-300 focus:outline-none w-full text-white shadow-md hover:shadow-lg hover:-translate-y-1";

  return (
    <Container id="contacts" className="py-24 relative z-10 scroll-mt-24">
      
      <div className="text-center mb-16 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          Ждём вас в гости
        </motion.h2>
        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          Удобное расположение, парковка и уютная атмосфера.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:grid-cols-[450px_1fr] items-center bg-white/80 backdrop-blur-xl border border-white p-6 sm:p-10 rounded-[3rem] shadow-soft mx-auto"
      >
        {/* Информационный блок */}
        <div className="flex flex-col justify-center h-full space-y-8">
          
          <div className="space-y-6 text-lg">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-sky-500 uppercase tracking-wider">Адрес</span>
              <span className="font-bold text-slate-800 text-xl">{address}</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-sky-500 uppercase tracking-wider">Телефон</span>
              <a href="tel:+79273039977" className="font-bold text-slate-800 text-2xl hover:text-sky-600 transition-colors">
                {phone}
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-sky-500 uppercase tracking-wider">Режим работы</span>
              <span className="font-semibold text-slate-700">Ежедневно до 21:00</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl border border-amber-100">
              <span className="text-amber-500 text-xl">★</span>
              <span className="font-bold text-slate-800">4.7</span>
              <span className="text-slate-500 text-sm font-medium">(На основе 59 отзывов)</span>
            </div>
          </div>

          {/* Кнопки связи */}
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-slate-800 hover:bg-slate-700 xl:col-span-2")}
            >
              <FaMapMarkerAlt size={22} />
              <span>Построить маршрут</span>
            </a>
            <a
              href="https://t.me/akulenok_tmz" // Исправлено на правильный username
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-[#2AABEE] hover:bg-[#2298D6]")}
            >
              <FaTelegramPlane size={22} />
              <span>Telegram</span>
            </a>
            <a
              href="https://wa.me/79273039977" // Исправлен формат для WhatsApp (без плюса)
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(commonButtonClasses, "bg-[#25D366] hover:bg-[#20BD5A]")}
            >
              <FaWhatsapp size={22} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        
        {/* Блок с картой */}
        <div className="relative rounded-[2rem] overflow-hidden h-[450px] shadow-inner bg-slate-100">
          {/* loading="lazy" - КРИТИЧНО для скорости сайта */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3bc8364469f998d48316e3069ad02bfec23d4cf2a256c4d1fece1f5daac7dfca&source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            loading="lazy"
            title="Карта проезда к бассейну Акулёнок"
            className="absolute inset-0"
          ></iframe>
        </div>
      </motion.div>
      
    </Container>
  );
}
