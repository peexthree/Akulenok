"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./container";

const photos = [
  { src: "/img/gallery/pool1.jpg", alt: "Занятие в бассейне", size: "col-span-1 row-span-2 h-80 sm:h-96" },
  { src: "/img/gallery/pool2.jpg", alt: "Наш тренер", size: "col-span-1 row-span-1 h-40 sm:h-48" },
  { src: "/img/gallery/pool3.jpg", alt: "Первые успехи", size: "col-span-1 row-span-1 h-40 sm:h-48" },
  { src: "/img/gallery/pool12.jpg", alt: "Игровая форма", size: "col-span-2 md:col-span-1 row-span-1 h-48 sm:h-64" }, // Скорректировал для мобилки
  { src: "/img/gallery/pool13.jpg", alt: "Чистая вода", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool4.jpg", alt: "Комфорт", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool5.jpg", alt: "Улыбки", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool6.jpg", alt: "Развитие", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool7.jpg", alt: "Безопасность", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool14.jpg", alt: "Гармония", size: "col-span-1 row-span-2 h-80 sm:h-96" },
  { src: "/img/gallery/pool101.jpg", alt: "Здоровье", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool111.jpg", alt: "Радость", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool81.jpg", alt: "Сила", size: "col-span-1 row-span-1 h-48 sm:h-64" },
  { src: "/img/gallery/pool91.jpg", alt: "Успех", size: "col-span-1 row-span-1 h-48 sm:h-64" }
];

export default function Gallery() {
  return (
    <Container className="py-12 pb-24 max-w-6xl mx-auto relative">
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          Атмосфера заботы
        </motion.h2>
        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          Мы продумали каждую мелочь, чтобы вам и малышу было комфортно.
        </p>
      </div>

      {/* МАГИЯ ЗДЕСЬ: Добавлен grid-flow-row-dense для плотной упаковки */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 auto-rows-auto grid-flow-row-dense relative z-10">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }} // Оптимизировал задержку
            className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 ${photo.size}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Градиент */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Текст */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white font-bold text-lg tracking-wide drop-shadow-md">
                {photo.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
