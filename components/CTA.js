import React from "react";
import clsx from "clsx";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactButtons from "./ContactButtons";
import { COMPANY_DETAILS } from "../config/company";

function Cta() {
  return (
    <Container id="cta" className="mb-24 relative overflow-visible">
      <motion.div
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="absolute -top-16 right-0 lg:right-12 z-20 hidden md:block pointer-events-none"
      >
        <Image
          src="/img/look.png"
          alt="Указывающий акулёнок"
          width={220}
          height={220}
          className="drop-shadow-2xl rotate-[-10deg]"
        />
      </motion.div>

      <div
        className={clsx(
          "relative flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl gap-8 mx-auto text-white",
          "bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-500 p-8 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] shadow-2xl",
          "overflow-hidden border border-white/30"
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-4 left-10 w-32 h-32 bg-white rounded-full blur-2xl" />
          <div className="absolute bottom-4 right-16 w-48 h-48 bg-rose-400 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex-grow text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-md"
          >
            Готовы записаться <br /> на пробное занятие?
          </motion.h2>
          <p className="mt-4 text-lg sm:text-xl font-medium leading-relaxed tracking-wide text-sky-50 opacity-95">
            Позвоните нам или напишите в удобный мессенджер - подберём лучшее время для вашего малыша.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 w-full lg:w-auto flex flex-col gap-4">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="btn-primary-lg w-full border border-white/25"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>

          <ContactButtons vertical />
        </div>
      </div>
    </Container>
  );
}

export default React.memo(Cta);
