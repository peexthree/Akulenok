import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-trueGray-900 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-semibold">© 2024 Акулёнок</div>

        <div className="flex gap-6">
          <Link href="/">
            <a className="hover:text-indigo-600">Главная</a>
          </Link>
          <Link href="/#about">
            <a className="hover:text-indigo-600">О нас</a>
          </Link>
          <Link href="/#services">
            <a className="hover:text-indigo-600">Услуги</a>
          </Link>
          <Link href="/#contact">
            <a className="hover:text-indigo-600">Контакты</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
