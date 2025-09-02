import Link from "next/link";
import React from "react";
import Container from "./container";

function Footer() {
  return (
    <Container className="bg-gray-100 dark:bg-trueGray-900 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-semibold">© 2024 Акулёнок</div>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Главная
          </Link>
          <Link href="/#about" className="hover:text-blue-600">
            О нас
          </Link>
          <Link href="/#services" className="hover:text-blue-600">
            Услуги
          </Link>
          <Link href="/#contact" className="hover:text-blue-600">
            Контакты
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(Footer);