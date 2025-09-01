import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Логотип */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Акулёнок"
              />
            </Link>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-gray-700 hover:text-blue-600">Услуги</Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600">Цены</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-blue-600">Галерея</Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">Контакты</Link>
          </div>

          {/* Мобильное меню */}
          <div className="flex items-center md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                ☰
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#services"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Услуги
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#pricing"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Цены
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#gallery"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Галерея
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#faq"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          FAQ
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#contact"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Контакты
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
