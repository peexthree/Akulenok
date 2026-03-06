"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useShark } from "./SharkProvider";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "#services" },
  { name: "Цены", href: "#pricing" },
  { name: "Галерея", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  // --- МЕХАНИКА ПАСХАЛКИ ---
  const { setIsOpen } = useShark();
  const [clicks, setClicks] = useState(0);
  const timerRef = useRef(null);

  const handleLogoClick = () => {
    setClicks((prev) => prev + 1);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (clicks + 1 >= 5) {
      setIsOpen(true);
      setClicks(0);
    } else {
      timerRef.current = setTimeout(() => setClicks(0), 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-500 pt-0 sm:pt-2">
      {/* ОСНОВНАЯ ПАНЕЛЬ (КАПСУЛА)
          AnimatePresence здесь не нужен, используем встроенные переходы Tailwind для ширины и скругления
      */}
      <nav 
        className={`
          pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isScrolled 
            ? "w-[95%] max-w-5xl mt-2 rounded-full bg-white/80 backdrop-blur-xl shadow-glass border border-sky-100/50 px-6 py-2" 
            : "w-full max-w-full mt-0 rounded-none bg-transparent px-6 lg:px-12 py-6"
          }
        `}
      >
        {/* ЛОГОТИП */}
        <div className="flex items-center group cursor-pointer shrink-0" onClick={handleLogoClick}>
          <motion.img
            whileHover={{ y: -3, rotate: [-1, 1, -1] }}
            src="/img/logo-akulenok.png"
            alt="Акулёнок"
            className={`transition-all duration-500 ${isScrolled ? "h-10" : "h-14"}`}
          />
          <span className={`ml-3 text-xl font-black tracking-tight transition-colors duration-500 ${
            isScrolled ? "text-slate-900" : "text-white drop-shadow-md"
          }`}>
            Акулёнок
          </span>
        </div>

        {/* ДЕСКТОПНОЕ МЕНЮ */}
        <div className="hidden lg:flex items-center gap-x-1 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-500 ${
                  isActive ? "text-sky-600" : (isScrolled ? "text-slate-600" : "text-white/90")
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-sky-50 rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* КНОПКА ЗАПИСИ И МОБИЛЬНОЕ МЕНЮ */}
        <div className="flex items-center gap-x-4">
          <Link 
            href="#contacts" 
            className={`
              hidden sm:block rounded-full font-black text-sm transition-all duration-500
              ${isScrolled 
                ? "bg-sky-500 text-white px-5 py-2.5 shadow-lg shadow-sky-500/20 hover:bg-sky-600" 
                : "bg-white text-sky-600 px-6 py-3 hover:bg-sky-50"
              }
            `}
          >
            Записаться
          </Link>

          {/* ГАМБУРГЕР */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled ? "text-slate-700 bg-slate-100" : "text-white bg-white/20 backdrop-blur-sm"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* МОБИЛЬНОЕ МЕНЮ (Без изменений логики) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} static>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl"
            >
              <Dialog.Panel>
                <div className="flex items-center justify-between">
                  <div className="flex items-center" onClick={handleLogoClick}>
                    <img src="/img/logo-akulenok.png" alt="Акулёнок" className="h-10 w-auto" />
                    <span className="ml-3 text-2xl font-black text-slate-800">Акулёнок</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full bg-slate-100">
                    <XMarkIcon className="h-6 w-6 text-slate-700" />
                  </button>
                </div>
                <div className="mt-8 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name} href={item.href}
                      className="block rounded-2xl px-4 py-4 text-lg font-bold text-slate-700 hover:bg-sky-50 active:bg-sky-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
