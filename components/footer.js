import Link from "next/link";
import React from "react";
import Container from "./container";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-aqua-dark text-white py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Копирайт */}
          <div className="text-lg font-semibold text-center md:text-left">
            © 2024 Акулёнок
          </div>

          {/* Навигация */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link href="/" className="hover:text-orange-400 transition">
              Главная
            </Link>
            <Link href="/#about" className="hover:text-orange-400 transition">
              О нас
            </Link>
            <Link href="/#services" className="hover:text-orange-400 transition">
              Услуги
            </Link>
            <Link href="/#contact" className="hover:text-orange-400 transition">
              Контакты
            </Link>
          </div>

          {/* Соцсети */}
          <div className="flex gap-4">
            <a
              href="https://t.me/akulenok_tmz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="https://wa.me/79273039977"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="tel:+79273039977"
              className="p-3 bg-orange-500 hover:bg-orange-600 rounded-full transition"
            >
              <FaPhoneAlt size={18} />
            </a>
            <a
              href="https://www.instagram.com/akulenok_tmz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-600 hover:bg-pink-700 rounded-full transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default React.memo(Footer);
