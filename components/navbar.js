"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import clsx from "clsx";
import ThemeChanger from "./DarkSwitch";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";

const navigation = [
  { name: "Главная", href: "#hero" },
  { name: "Услуги", href: "#services" },
  { name: "Расписание и цены", href: "#pricing" },
  { name: "Галерея", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакты", href: "#contacts" },
];

const MotionLink = motion(Link);

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace("#", "")),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur dark:bg-aqua-dark/80 shadow-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8"
        aria-label="Global"
      >
        {/* Логотип */}
        <div className="flex flex-1 items-center gap-x-4">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-brand-700">
              Акулёнок
            </span>
          </Link>
  <ThemeChanger />
        </div>

        {/* Меню для десктопа */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <MotionLink
              key={item.name}
              href={item.href}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={clsx(
                "text-sm font-semibold leading-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",
                activeSection === item.href.replace("#", "")
                  ? "text-brand-700 dark:text-brand-200"
                  : "text-neutral-700 hover:text-brand-600 focus:text-brand-600 dark:text-neutral-100 dark:hover:text-brand-200 dark:focus:text-brand-200",
              )}
              aria-current={
                activeSection === item.href.replace("#", "") ? "page" : undefined
              }
            >
              {item.name}
            </MotionLink>
          ))}
        </div>

      {/* Кнопка меню */}
        <div className="flex flex-1 items-center justify-end gap-x-4 lg:flex-none">

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      <Transition show={mobileMenuOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-black/30" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-3/4 p-6 sm:max-w-sm bg-white/90 backdrop-blur dark:bg-aqua-dark/90">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-lg font-bold text-brand-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Акулёнок
                </Link>
                <button
                  type="button"
                  className="p-2 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-y-4">
                {navigation.map((item) => (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className={clsx(
                    "text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",
                    activeSection === item.href.replace("#", "")
                      ? "text-brand-700 dark:text-brand-200"
                      : "text-neutral-800 hover:text-brand-600 focus:text-brand-600 dark:text-neutral-100 dark:hover:text-brand-200 dark:focus:text-brand-200",
                  )}
                  aria-current={
                    activeSection === item.href.replace("#", "") ? "page" : undefined
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </MotionLink>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>

      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 lg:hidden">
        <a
          href="tel:+79273039977"
          className="flex-1 rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
        >
          Позвонить
        </a>
        <a
          href="https://wa.me/79273039977"
          className="flex-1 rounded-lg bg-neutral-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
          target="_blank"
          rel="noreferrer"
        >
          Написать
        </a>
      </div>
    </header>
  );
}

export default React.memo(Navbar);