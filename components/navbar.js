"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import clsx from "clsx";
import ThemeChanger from "./DarkSwitch";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "#services" },
  { name: "Расписание и цены", href: "#pricing" },
  { name: "Галерея", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакты", href: "#contacts" },
];

const MotionLink = motion(Link);

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur dark:bg-aqua-dark/80 shadow-md">
      <nav
          className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8"
        aria-label="Global"
      >
         {/* Логотип */}
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
                        <span className="text-xl font-bold text-aqua-accent">
              Акулёнок
            </span>
          </Link>
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
              className="text-sm font-semibold leading-6 text-aqua-dark transition-colors hover:text-aqua-accent focus:text-aqua-accent dark:text-aqua-background dark:hover:text-aqua-accent dark:focus:text-aqua-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-accent"
            >
              {item.name}
            </MotionLink>
          ))}
        </div>

        {/* Переключатель темы и кнопка меню */}
        <div className="flex flex-1 items-center justify-end gap-x-4 lg:flex-none">
          <ThemeChanger />
          <div className="flex lg:hidden">
            <button
              type="button"
                   className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-aqua-dark dark:text-aqua-background focus:outline-none focus:ring-2 focus:ring-aqua-accent"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
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
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-3/4 p-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                     <Link href="/" className="text-lg font-bold text-aqua-accent" onClick={() => setMobileMenuOpen(false)}>
		 Акулёнок
                </Link>
                <button
                  type="button"
                               className="p-2 text-aqua-dark dark:text-aqua-background focus:outline-none focus:ring-2 focus:ring-aqua-accent"
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
                    className="text-base font-medium text-aqua-dark transition-colors hover:text-aqua-accent focus:text-aqua-accent dark:text-aqua-background dark:hover:text-aqua-accent dark:focus:text-aqua-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-accent"
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
    </header>
  );
}

export default React.memo(Navbar);