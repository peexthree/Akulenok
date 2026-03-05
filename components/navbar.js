"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
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

  // Отслеживаем скролл для эффекта "дыхания" хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      {/* Умный фон, который становится плотнее при скролле */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-sky-100"
            : "bg-transparent"
        }`}
      />

      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center gap-x-4">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center group">
            {/* Анимация плавания логотипа при наведении */}
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

        {/* Десктопное меню с "жидким" hover-эффектом */}
        <div className="hidden lg:flex lg:gap-x-2 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative px-4 py-2 text-sm font-bold leading-6 text-slate-600 transition-colors hover:text-sky-600"
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
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-4 lg:flex-none">
          {/* Кастомная кнопка действий (Call to Action) */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
            <Link href="#contacts" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-500/30 hover:bg-sky-400 transition-all">
              Записаться
            </Link>
          </motion.div>

          {/* Бургер */}
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

      {/* Мобильное меню (Анимация шторки) */}
      <Transition show={mobileMenuOpen} as={React.Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="transition ease-out duration-400 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm shadow-2xl">
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
                        transition={{ delay: index * 0.1 }}
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
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}

export default React.memo(Navbar);
