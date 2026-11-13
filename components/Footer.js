import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaInstagram, FaVk } from "react-icons/fa";
import { motion } from "framer-motion";
import { COMPANY_DETAILS } from "../config/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#ECF8FF] to-sky-100/70 pt-16 pb-8 mt-12 rounded-t-[3rem] sm:rounded-t-[5rem] overflow-hidden border-t border-white">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-sky-200/70 pb-10">
          {/* Блок 1: Бренд и реквизиты */}
          <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
            <motion.div whileHover={{ scale: 1.05, rotate: -5 }} className="mb-4">
              <Image
                src="/img/love2.webp"
                alt="Акулёнок"
                width={90}
                height={90}
                className="drop-shadow-md object-contain"
              />
            </motion.div>
            <h3 className="text-2xl font-extrabold text-[#0C1A2E] tracking-tight mb-2">
              {COMPANY_DETAILS.name}
            </h3>
            <p className="text-slate-600 font-medium text-sm mb-4">
              Бережное грудничковое плавание. Растим здоровых и счастливых малышей с 3 месяцев.
            </p>
            <div className="text-xs text-slate-500 font-medium space-y-1">
              <p>{COMPANY_DETAILS.legalName}</p>
              <p>ИНН: {COMPANY_DETAILS.inn} | ОГРНИП: {COMPANY_DETAILS.ogrn}</p>
              <p>{COMPANY_DETAILS.address}</p>
            </div>
          </div>

          {/* Блок 2: Навигация */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-ocean mb-4">Навигация</h4>
            <div className="flex flex-col gap-3 font-medium text-slate-600 items-center md:items-start">
              <Link href="/" className="hover:text-sky-600 transition-colors">Главная</Link>
              <Link href="/#about" className="hover:text-sky-600 transition-colors">О нас</Link>
              <Link href="/#methodology" className="hover:text-sky-600 transition-colors">Услуги</Link>
              <Link href="/#contacts" className="hover:text-sky-600 transition-colors">Контакты</Link>
              <Link href="/privacy" className="hover:text-sky-600 transition-colors">Политика конфиденциальности</Link>
            </div>
          </div>

          {/* Блок 3: Контакты */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-ocean mb-4">Мы на связи</h4>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <a
                href={COMPANY_DETAILS.max}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Max Messenger"
                className="p-3 bg-white text-sky-600 font-bold rounded-2xl shadow-sm hover:shadow-md hover:bg-sky-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-w-[46px] min-h-[46px]"
              >
                MAX
              </a>
              <a
                href={COMPANY_DETAILS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-3 bg-white text-sky-500 rounded-2xl shadow-sm hover:shadow-md hover:bg-sky-50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaTelegramPlane size={22} aria-hidden="true" />
              </a>
              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-3 bg-white text-[#25D366] rounded-2xl shadow-sm hover:shadow-md hover:bg-[#25D366]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp size={22} aria-hidden="true" />
              </a>
              <a
                href={COMPANY_DETAILS.vk}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                className="p-3 bg-white text-sky-700 rounded-2xl shadow-sm hover:shadow-md hover:bg-sky-50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaVk size={22} aria-hidden="true" />
              </a>
              <a
                href={COMPANY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-white text-rose-500 rounded-2xl shadow-sm hover:shadow-md hover:bg-rose-50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram size={22} aria-hidden="true" />
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                aria-label="Позвонить"
                className="p-3 bg-white text-rose-500 rounded-2xl shadow-sm hover:shadow-md hover:bg-rose-50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaPhoneAlt size={22} aria-hidden="true" />
              </a>
            </div>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="font-display text-2xl font-extrabold text-[#0C1A2E] hover:text-rose-600 transition-colors"
            >
              {COMPANY_DETAILS.phone}
            </a>
            <span className="text-sm text-slate-600 mt-1 font-medium tracking-wide">г. Туймазы</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-slate-500 text-sm font-medium">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} {COMPANY_DETAILS.name}. Все права защищены.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("openCookieSettings"));
                  }
                }}
                className="hover:text-sky-600 transition-colors cursor-pointer underline underline-offset-4 decoration-slate-300 hover:decoration-sky-500"
              >
                Настройки cookie
              </button>
              <span className="hidden sm:inline text-slate-300">•</span>
              <a
                href="/oferta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 transition-colors"
              >
                Публичная оферта: Правила посещения центра
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center md:text-left leading-relaxed">
            {COMPANY_DETAILS.metaDisclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
