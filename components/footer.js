"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  // Динамический год — код профессионала
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-sky-50 pt-16 pb-8 mt-12 rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden">
      
      {/* Мягкий центральный блик для объема */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[80px] opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-sky-200/60 pb-10">
          
          {/* Блок 1: Бренд */}
          <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -5 }}
              className="mb-4"
            >
              <Image
                src="/img/love2.png"
                alt="Акулёнок"
                width={90}
                height={90}
                className="drop-shadow-md object-contain"
              />
            </motion.div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Акулёнок</h3>
            <p className="text-slate-500 font-medium">
              Бережное грудничковое плавание. Растим здоровых и счастливых малышей с первых дней жизни.
            </p>
          </div>

          {/* Блок 2: Быстрые ссылки */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-slate-800 mb-4">Навигация</h4>
            <div className="flex flex-col gap-3 font-medium text-slate-600">
              <Link href="/" className="hover:text-sky-500 transition-colors">Главная</Link>
              <Link href="/#about" className="hover:text-sky-500 transition-colors">О нас</Link>
              <Link href="/#services" className="hover:text-sky-500 transition-colors">Услуги</Link>
              <Link href="/#contact" className="hover:text-sky-500 transition-colors">Контакты</Link>
            </div>
          </div>

          {/* Блок 3: Контакты (Без "светофора") */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-slate-800 mb-4">Мы на связи</h4>
            
            <div className="flex gap-3 mb-6">
              <a href="https://t.me/akulenok_tmz" target="_blank" rel="noopener noreferrer" aria-label="Telegram" 
                 className="p-3 bg-white text-sky-500 rounded-2xl shadow-sm hover:shadow-md hover:bg-sky-50 hover:-translate-y-1 transition-all duration-300">
                <FaTelegramPlane size={22} />
              </a>
              <a href="https://wa.me/79273039977" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" 
                 className="p-3 bg-white text-emerald-500 rounded-2xl shadow-sm hover:shadow-md hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300">
                <FaWhatsapp size={22} />
              </a>
              <a href="https://www.instagram.com/akulenok_tmz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" 
                 className="p-3 bg-white text-pink-500 rounded-2xl shadow-sm hover:shadow-md hover:bg-pink-50 hover:-translate-y-1 transition-all duration-300">
                <FaInstagram size={22} />
              </a>
              <a href="tel:+79273039977" aria-label="Позвонить" 
                 className="p-3 bg-white text-orange-500 rounded-2xl shadow-sm hover:shadow-md hover:bg-orange-50 hover:-translate-y-1 transition-all duration-300">
                <FaPhoneAlt size={22} />
              </a>
            </div>
            
            <a href="tel:+79273039977" className="text-2xl font-black text-slate-800 hover:text-sky-600 transition-colors">
              +7 (927) 303-99-77
            </a>
            <span className="text-sm text-slate-500 mt-1 font-medium tracking-wide">г. Туймазы</span>
          </div>
        </div>

        {/* Копирайт и подпись автора */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-slate-400 text-sm font-medium gap-4">
          <p>© {currentYear} Детский центр «Акулёнок». Все права защищены.</p>
          <p>
            Разработка — <a href="https://t.me/peexthree" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 font-bold transition-colors">Игорь Сычёв</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
