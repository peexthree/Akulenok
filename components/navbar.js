"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Для постоянных клиентов", href: "#loyal" },
  { name: "Услуги", href: "#services" },
  { name: "Расписание и цены", href: "#pricing" },
  { name: "Галерея", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакты", href: "#contacts" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  // Оптимизированный скролл: обновляем стейт только при переходе границы
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-sky-100"
            : "bg-transparent"
        }`}
      />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
        <div className="flex flex-1 items-center gap-x-4">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center group">
            <motion.img
              whileHover={{ y: -5, rotate: [-2, 2, -2], transition: { repeat: Infinity, duration: 1.5 } }}
              src="/img/logo-akulenok.png"
              alt="Акулёнок"
              className="h-12 w-auto mr-3 drop-shadow-sm"
            />
            <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-sky-500 transition-colors">
              Акулёнок
            </span>
          </Link>
        </div>

        {/* Десктопное меню: добавлена поддержка клавиатуры и активный стейт */}
        <div className="hidden lg:flex lg:gap-x-2 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                className={`relative px-4 py-2 text-sm font-bold leading-6 transition-colors ${
                  isActive ? "text-sky-600" : "text-slate-600 hover:text-sky-600"
                }`}
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="hoverBackground"
                    className="absolute inset-0 bg-sky-100 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-4 lg:flex-none">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
            <Link href="#contacts" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-500/30 hover:bg-sky-400 transition-all">
              Записаться
            </Link>
          </motion.div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-slate-700 bg-white/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню: чистый Framer Motion + Headless UI Dialog */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} static>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm shadow-2xl"
            >
              <Dialog.Panel>
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                    <img src="/img/logo-akulenok.png" alt="Акулёнок" className="h-10 w-auto mr-3" />
                    <span className="text-2xl font-black text-slate-800">Акулёнок</span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-full p-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-my-6 divide-y divide-slate-200">
                    <div className="space-y-2 py-6">
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="-mx-3 block rounded-2xl px-3 py-3 text-lg font-bold leading-7 text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}

export default React.memo(Navbar);
