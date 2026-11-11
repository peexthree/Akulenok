import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MagnifyingGlassPlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Container from "./Container";

const photos = [
  {
    src: "/img/gallery/pool1.jpg",
    alt: "Большая чаша бассейна: групповые и семейные занятия",
    category: "Бассейн и вода",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/img/gallery/pool4.jpg",
    alt: "Женский фитнес и стретчинг в светлом зале",
    category: "Фитнес и зал",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool6.jpg",
    alt: "Первые брызги, игры и улыбки с тренером",
    category: "Бассейн и вода",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool2.jpg",
    alt: "Занятия в сухом зале на мягких ковриках",
    category: "Фитнес и зал",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool91.jpg",
    alt: "Уютная зона ожидания с трансляцией занятия на экран",
    category: "Уют и команда",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool111.jpg",
    alt: "Мини-группы для детей: весело и с пользой",
    category: "Бассейн и вода",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/img/gallery/pool3.jpg",
    alt: "Бережная адаптация и тёплый контакт с ребёнком",
    category: "Бассейн и вода",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool5.jpg",
    alt: "Учимся уверенно держаться на воде",
    category: "Бассейн и вода",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool81.jpg",
    alt: "Заботливая команда и администраторы центра",
    category: "Уют и команда",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/img/gallery/pool7.jpg",
    alt: "Свобода движения: занятия с мамой в воде",
    category: "Бассейн и вода",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool13.jpg",
    alt: "Плавание и акварелакс для будущих мам",
    category: "Бассейн и вода",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool12.jpg",
    alt: "Подводное плавание в очках",
    category: "Бассейн и вода",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool14.jpg",
    alt: "Грудничковое плавание с первых месяцев",
    category: "Бассейн и вода",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/img/gallery/pool101.jpg",
    alt: "Упражнения у бортика для спины и координации",
    category: "Бассейн и вода",
    span: "col-span-2 md:col-span-2 row-span-1",
  },
];

const categories = ["Все фото", "Бассейн и вода", "Фитнес и зал", "Уют и команда"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Все фото");
  const [selectedIdx, setSelectedIdx] = useState(null);
  const dialogRef = useRef(null);
  const touchStartX = useRef(null);

  const filteredPhotos =
    activeCategory === "Все фото"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (idx) => {
    setSelectedIdx(idx);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIdx((prev) =>
      prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  const showNext = useCallback(() => {
    setSelectedIdx((prev) =>
      prev === null ? null : (prev + 1) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedIdx !== null) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [selectedIdx]);

  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, showPrev, showNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) showNext();
      else showPrev();
    }
    touchStartX.current = null;
  };

  const currentPhoto = selectedIdx !== null ? filteredPhotos[selectedIdx] : null;

  return (
    <Container id="gallery" className="py-16 pb-24 max-w-6xl mx-auto relative scroll-mt-24">
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="text-center mb-10 relative z-10">
        <span className="badge-pretitle mb-4">
          Фотогалерея
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0C1A2E] tracking-tight leading-[1.1] mb-4"
        >
          Атмосфера заботы
        </motion.h2>
        <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
          Нажмите на любое фото, чтобы рассмотреть детали бассейна, сухого зала и зоны ожидания.
        </p>

        {/* Фильтр по категориям */}
        <div
          role="group"
          aria-label="Категории фотографий"
          className="flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((cat) => {
            const count =
              cat === "Все фото"
                ? photos.length
                : photos.filter((p) => p.category === cat).length;
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIdx(null);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-white/80 backdrop-blur-md text-slate-600 border border-white/90 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                {cat} <span className={active ? "text-sky-100" : "text-slate-500"}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento-сетка */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 auto-rows-[170px] sm:auto-rows-[210px] grid-flow-dense relative z-10">
        {filteredPhotos.map((photo, idx) => (
          <motion.button
            key={photo.src}
            type="button"
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            onClick={() => openLightbox(idx)}
            aria-label={`Открыть фото: ${photo.alt}`}
            className={`relative rounded-[1.75rem] sm:rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300 bg-[#F6FBFF] text-left cursor-zoom-in ${
              activeCategory === "Все фото" ? photo.span : "col-span-1 row-span-1"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ocean/75 via-ocean/10 to-transparent opacity-0 sm:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 z-10" />

            <div className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-ocean flex items-center justify-center shadow-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-all duration-300 sm:scale-90 sm:group-hover:scale-100">
              <MagnifyingGlassPlusIcon className="w-5 h-5" aria-hidden="true" />
            </div>

            <div className="absolute top-3.5 left-3.5 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-opacity duration-300">
              <span className="inline-block px-2.5 py-1 rounded-full bg-ocean/55 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                {photo.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-all duration-300 transform sm:translate-y-2 sm:group-hover:translate-y-0">
              <p className="text-white font-bold text-xs sm:text-sm leading-snug drop-shadow-md line-clamp-2">
                {photo.alt}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Полноэкранный Lightbox на нативном <dialog> */}
      <dialog
        ref={dialogRef}
        onClose={closeLightbox}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeLightbox();
        }}
        aria-label="Просмотр фотографии"
        className="m-0 p-0 max-w-none max-h-none w-screen h-screen bg-transparent backdrop:bg-ocean/90 backdrop:backdrop-blur-xl"
      >
        {currentPhoto && (
          <div
            className="w-full h-full flex flex-col justify-between p-4 sm:p-6 text-white select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            {/* Верхняя панель */}
            <div className="flex items-center justify-between gap-4 max-w-6xl w-full mx-auto">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-black tracking-wider">
                  {String(selectedIdx + 1).padStart(2, "0")} / {String(filteredPhotos.length).padStart(2, "0")}
                </span>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-sky-500/25 border border-sky-400/30 text-sky-100 text-xs font-bold">
                  {currentPhoto.category}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Закрыть просмотр"
                className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Основное фото и стрелки */}
            <div className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4 min-h-0">
              <button
                type="button"
                onClick={showPrev}
                aria-label="Предыдущее фото"
                className="absolute left-1 sm:left-3 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/85 border border-white/20 text-white transition-all hover:scale-105"
              >
                <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="relative w-full h-full max-h-[68vh] rounded-3xl overflow-hidden">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Следующее фото"
                className="absolute right-1 sm:right-3 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/85 border border-white/20 text-white transition-all hover:scale-105"
              >
                <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Подпись и полоса миниатюр */}
            <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-3">
              <p className="text-center text-sm sm:text-base font-bold text-white/95 px-4">
                {currentPhoto.alt}
              </p>

              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1 px-2 scrollbar-custom">
                {filteredPhotos.map((thumb, idx) => (
                  <button
                    key={thumb.src}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    aria-label={`Выбрать фото ${idx + 1}: ${thumb.alt}`}
                    className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      idx === selectedIdx
                        ? "border-sky-400 scale-105 shadow-lg"
                        : "border-transparent opacity-55 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </Container>
  );
}
