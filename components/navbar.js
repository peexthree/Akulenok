"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

import { motion } from "framer-motion";

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

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm" />
      <nav
         className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center gap-x-4">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <img src="/img/logo-akulenok.png" alt="Акулёнок" className="h-10 w-auto mr-3" />
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Акулёнок
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold leading-6 text-slate-600 transition-all hover:text-sky-500 hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-4 lg:flex-none">
          <button className="hidden sm:block px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-sky-200">
            Записаться
          </button>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Transition show={mobileMenuOpen} as={React.Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <img src="/img/logo-akulenok.png" alt="Акулёнок" className="h-10 w-auto mr-3" />
                <span className="text-2xl font-black text-slate-800">Акулёнок</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-slate-900 hover:bg-slate-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}

export default React.memo(Navbar);
