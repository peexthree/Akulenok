import Link from "next/link";
import React from "react";
import ThemeChanger from "./DarkSwitch";

export default function Navbar() {
  return (
    <nav className="w-full py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">
          <a className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10h16V10" />
            </svg>
            Акулёнок
          </a>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/#about">
          <a className="hover:text-indigo-600">О нас</a>
        </Link>
        <Link href="/#services">
          <a className="hover:text-indigo-600">Услуги</a>
        </Link>
        <Link href="/#contact">
          <a className="hover:text-indigo-600">Контакты</a>
        </Link>

        <ThemeChanger />
      </div>
    </nav>
  );
}
