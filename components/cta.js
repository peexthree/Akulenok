"use client";
import React from "react";
import clsx from "clsx";
import Container from "./container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useShark } from "./SharkProvider";

function Cta() {
  const { setFormOpen } = useShark();

  return (
    <Container className="mb-24 relative overflow-visible">
      {/* Маскот-указатель: Выглядывает сверху справа */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -top-16 right-0 lg:right-12 z-20 hidden md:block"
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
          "relative flex flex-wrap items-center justify-between w-full max-w-5xl gap-8 mx-auto text-white",
          "bg-gradient-to-r from-sky-500 to-aqua-dark p-8 lg:p-16 lg:flex-nowrap rounded-[3rem] shadow-2xl",
          "overflow-hidden border-4 border-white/20"
        )}
      >
        {/* Декоративные пузырьки на фоне */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-4 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-white rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 flex-grow text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black leading-tight tracking-tight"
          >
            Готовы на <br /> пробное занятие?
          </motion.h2>
          <p className="mt-4 text-xl font-medium text-sky-50 opacity-90">
            Оставьте заявку — подберём удобное <br className="hidden lg:block" /> время и формат для вашего малыша.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFormOpen(true); }}
              className="w-full lg:w-auto block text-center bg-orange-500 text-white text-2xl font-black px-12 py-6 rounded-2xl shadow-xl hover:bg-orange-600 transition-all hover:shadow-orange-300/50"
            >
              Записаться
            </button>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(Cta);
