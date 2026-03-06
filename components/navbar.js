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

  const { setActiveEgg } = useShark();
  const [clicks, setClicks] = useState(0);
  const timerRef = useRef(null);

  // --- ГЛАВНЫЕ МЕХАНИКИ ПАСХАЛОК ---
  const handleLogoClick = () => {
    // 1. Если маскот еще гигантский (не проскроллено), открываем egg3 (твое фото)
    if (!isScrolled) {
      setActiveEgg("egg3");
      return;
    }

    // 2. Если маскот маленький (скролл > 40), считаем 10 кликов для egg1
    setClicks((prev) => prev + 1);
    if (timerRef.current) clearTimeout(timerRef.current);
    
    if (clicks + 1 >= 10) {
      setActiveEgg("egg1");
      setClicks(0);
    } else {
      timerRef.current = setTimeout(() => setClicks(0), 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-700 pt-0 sm:pt-4">
      <nav 
        className={`
          pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isScrolled 
            ? "w-[95%] max-w-5xl rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-sky-100/50 px-6 py-2" 
            : "w-full max-w-full rounded-none bg-transparent px-8 lg:px-16 py-8"
          }
        `}
      >
        {/* ГРУППА ЛОГОТИПА С ИЗОЛИРОВАННЫМ МАСКОТОМ */}
        <div className="flex items-center shrink-0 w-[180px] sm:w-[240px]">
          <div className="relative cursor-pointer group h-10 flex items-center" onClick={handleLogoClick}>
            {/* МАСКОТ: Когда не проскроллено, он получает 'absolute' и вылетает вверх, 
              не занимая места в разметке навбара.
            */}
            <motion.img
              whileHover={{ y: -5, rotate: [-1, 2, -1] }}
              src="/img/logo-akulenok.png"
              alt="Акулёнок"
              className={`transition-all duration-700 ease-in-out object-contain drop-shadow-2xl z-20 ${
                isScrolled 
                  ? "h-10 w-auto" 
                  : "h-32 sm:h-40 w-auto absolute -top-12 sm:-top-16 left-0" 
              }`}
            />
            
            {/* ТЕКСТ: Всегда стабилен по позиции */}
            <span className={`
              font-black tracking-tight transition-all duration-500 z-10
              ${isScrolled 
                ? "ml-14 text-xl text-slate-900" 
                : "ml-0 text-xl sm:text-2xl text-white drop-shadow-lg"
              }
            `}>
              Акулёнок
            </span>
          </div>
        </div>

        {/* ДЕСКТОПНОЕ МЕНЮ (Стабильно по центру) */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-x-1 relative">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative px-4 py-2 text-sm font-bold transition-colors duration-500 ${
                  isActive ? "text-sky-600" : (isScrolled ? "text-slate-600" : "text-white")
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navHover"
                    className={`absolute inset-0 rounded-full -z-0 ${isScrolled ? "bg-sky-50" : "bg-white/10 backdrop-blur-sm"}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* КНОПКА ЗАПИСИ (Стабильно справа) */}
        <div className="flex items-center justify-end shrink-0 w-[120px] sm:w-[180px] gap-x-4">
          <Link 
            href="#contacts" 
            className={`
              hidden sm:block rounded-full font-black transition-all duration-500 transform active:scale-95
              ${isScrolled 
                ? "bg-sky-500 text-white px-5 py-2.5 text-xs sm:text-sm shadow-md" 
                : "bg-white text-sky-600 px-6 py-3 text-sm sm:text-base shadow-xl hover:bg-sky-50"
              }
            `}
          >
            Записаться
          </Link>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-full transition-all ${
              isScrolled ? "text-slate-700 bg-slate-100" : "text-white bg-white/20 backdrop-blur-md"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

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
