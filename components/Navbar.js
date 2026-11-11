import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useShark } from "./SharkProvider";
import { COMPANY_DETAILS } from "../config/company";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "#methodology" },
  { name: "Фитнес", href: "#fitness" },
  { name: "Цены", href: "#pricing" },
  { name: "Галерея", href: "#gallery" },
  { name: "Отзывы", href: "#testimonials" },
  { name: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeHref, setActiveHref] = useState("/");

  // Механика пасхалок (10 кликов по большому или маленькому логотипу)
  const { setActiveEgg } = useShark();
  const clicksRef = useRef(0);
  const timerRef = useRef(null);

  const handleLogoClick = () => {
    clicksRef.current += 1;

    if (timerRef.current) clearTimeout(timerRef.current);

    if (clicksRef.current >= 10) {
      setActiveEgg(isScrolled ? "egg1" : "egg3");
      clicksRef.current = 0;
    } else {
      timerRef.current = setTimeout(() => {
        clicksRef.current = 0;
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
      if (window.scrollY < 200) {
        setActiveHref("/");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navigation
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-700 pt-0 sm:pt-4">
      <nav
        aria-label="Основная навигация"
        className={`
          pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isScrolled
            ? "w-[95%] max-w-5xl rounded-full bg-white/92 backdrop-blur-xl shadow-lg border border-sky-100/70 px-5 sm:px-6 py-2"
            : "w-full max-w-full rounded-none bg-transparent px-6 sm:px-8 lg:px-16 py-6 sm:py-8"
          }
        `}
      >
        {/* Логотип (10 кликов открывают пасхалку) */}
        <div className="flex items-center shrink-0 w-[215px] sm:w-[250px] xl:w-[280px]">
          <button
            type="button"
            onClick={handleLogoClick}
            aria-label="Акулёнок — семейный аквацентр"
            className="flex items-center gap-3 sm:gap-4 cursor-pointer group h-10 text-left rounded-2xl focus-visible:ring-sky-400"
          >
            <motion.div
              whileHover={{ y: -4, rotate: [-1, 2, -1] }}
              className={`relative transition-all duration-700 ease-in-out z-20 shrink-0 ${
                isScrolled
                  ? "w-10 h-10"
                  : "w-16 h-16 sm:w-20 sm:h-20 -translate-y-1 sm:-translate-y-3"
              }`}
            >
              <Image
                src="/img/top.webp"
                alt="Акулёнок"
                fill
                priority
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div
              className={`transition-all duration-700 ease-in-out z-10 flex flex-col justify-center whitespace-nowrap overflow-hidden ${
                isScrolled
                  ? "max-w-[120px] opacity-100"
                  : "max-w-[210px] opacity-100 -translate-y-1 sm:-translate-y-3"
              }`}
            >
              {isScrolled ? (
                <span className="font-black tracking-tight text-xl text-slate-900 leading-tight">
                  Акулёнок
                </span>
              ) : (
                <>
                  <span className="font-bold tracking-wide text-xs sm:text-[13px] text-white/95 leading-tight uppercase drop-shadow-sm">
                    Семейный аква-центр
                  </span>
                  <span className="font-black tracking-tight text-xl sm:text-2xl text-white leading-tight mt-0.5 drop-shadow-sm">
                    Акулёнок
                  </span>
                </>
              )}
            </div>
          </button>
        </div>

        {/* Десктопное меню */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-x-0.5 xl:gap-x-1 relative">
          {navigation.map((item, index) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative px-3 xl:px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-300 rounded-full ${
                  isActive
                    ? isScrolled
                      ? "text-sky-600 bg-sky-50"
                      : "text-white bg-white/15"
                    : isScrolled
                      ? "text-slate-600 hover:text-sky-600"
                      : "text-white/90 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navHover"
                    className={`absolute inset-0 rounded-full -z-0 ${
                      isScrolled ? "bg-sky-50" : "bg-white/15 backdrop-blur-sm"
                    }`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Кнопка звонка и кнопка меню */}
        <div className="flex items-center justify-end shrink-0 gap-x-3 sm:w-[180px]">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className={`
              hidden sm:inline-flex items-center justify-center rounded-full font-black tracking-wide leading-snug transition-all duration-500 active:scale-95
              ${isScrolled
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white px-5 py-2.5 text-xs sm:text-sm shadow-md shadow-sky-500/25 hover:shadow-lg"
                : "bg-white/95 backdrop-blur-md text-sky-600 px-6 py-3 text-sm sm:text-base shadow-[0_0_20px_rgba(255,255,255,0.45)] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]"
              }
            `}
          >
            Позвонить
          </a>

          <button
            type="button"
            aria-label="Открыть меню"
            aria-expanded={mobileMenuOpen}
            className={`lg:hidden p-2.5 rounded-full transition-all ${
              isScrolled ? "text-slate-700 bg-slate-100" : "text-white bg-white/20 backdrop-blur-md"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden relative z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen} static>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl font-nunito"
            >
              <Dialog.Panel>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleLogoClick}
                    className="flex items-center gap-3 rounded-xl"
                    aria-label="Акулёнок"
                  >
                    <Image
                      src="/img/logo-akulenok.png"
                      alt="Акулёнок"
                      width={40}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                    <span className="text-2xl font-black text-slate-800">Акулёнок</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Закрыть меню"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-8 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-2xl px-4 py-4 text-lg font-bold text-slate-700 hover:bg-sky-50 active:bg-sky-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full mt-4 block text-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-4 text-lg font-black tracking-wide leading-snug text-white shadow-lg shadow-sky-500/25 active:scale-95 transition-transform"
                  >
                    Позвонить
                  </a>
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
