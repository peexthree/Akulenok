import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Container from "./container";

const galleryItems = [
  {
    src: "/img/gallery/pool1.jpg",
    alt: "Тренер поддерживает малыша в бассейне",
    category: "pool",
    caption: "Первое знакомство с водой под контролем инструктора",
  },
  {
    src: "/img/gallery/pool2.jpg",
    alt: "Мама и ребёнок на занятии",
    category: "pool",
    caption: "Семейные занятия укрепляют доверие и уверенность",
  },
  {
    src: "/img/gallery/pool3.jpg",
    alt: "Акваигры в теплой воде",
    category: "pool",
    caption: "Игровая адаптация для малышей от 3 месяцев",
  },
  {
    src: "/img/gallery/pool4.jpg",
    alt: "Групповое занятие в бассейне",
    category: "events",
    caption: "Мини-группы до 4 человек с персональным вниманием",
  },
  {
    src: "/img/gallery/pool5.jpg",
    alt: "Упражнения на спине",
    category: "lfk",
    caption: "ЛФК для укрепления мышц и дыхания",
  },
  {
    src: "/img/gallery/pool6.jpg",
    alt: "Занятие с игрушками",
    category: "events",
    caption: "Праздничные программы с тематическими играми",
  },
  {
    src: "/img/gallery/pool7.jpg",
    alt: "Тренер поддерживает малыша на животе",
    category: "lfk",
    caption: "Коррекция осанки и мягкая реабилитация",
  },
  {
    src: "/img/gallery/pool81.jpg",
    alt: "Развивающие упражнения",
    category: "lfk",
    caption: "Сенсорная стимуляция в тёплой воде",
  },
  {
    src: "/img/gallery/pool91.jpg",
    alt: "Детский праздник у бассейна",
    category: "events",
    caption: "Украшения и аниматоры для важных дат",
  },
  {
    src: "/img/gallery/pool101.jpg",
    alt: "Игровой тоннель в воде",
    category: "events",
    caption: "Соревнования и эстафеты для старших ребят",
  },
  {
    src: "/img/gallery/pool111.jpg",
    alt: "Поддержка тренера",
    category: "pool",
    caption: "Безопасность — всегда рядом тренер и спасатель",
  },
  {
    src: "/img/gallery/pool12.jpg",
    alt: "Комфортная раздевалка",
    category: "events",
    caption: "Тепло, сушилки и пеленальные станции",
  },
  {
    src: "/img/gallery/pool13.jpg",
    alt: "Счастливые родители",
    category: "pool",
    caption: "Довольные семьи после занятий",
  },
  {
    src: "/img/gallery/pool14.jpg",
    alt: "Инструктор демонстрирует упражнение",
    category: "lfk",
    caption: "Отработка техники перед заходом в воду",
  },
];

const categories = [
  { key: "all", label: "Все" },
  { key: "pool", label: "Бассейн" },
  { key: "lfk", label: "ЛФК" },
  { key: "events", label: "Праздники" },
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  useEffect(() => {
    const handleKey = (event) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? filteredItems.length - 1 : prev - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filteredItems.length, selectedIndex]);

  const scrollContainerRef = React.useRef(null);

  const scroll = (offset) => {
    scrollContainerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <Container>
      <div id="gallery" className="relative scroll-mt-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Живой взгляд на занятия
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Реальные фото и видео из бассейна: безопасность, радость и прогресс.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() => setFilter(category.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 ${
                  filter === category.key
                    ? "bg-brand-600 text-white shadow-soft"
                    : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={scrollContainerRef}
          className="mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-custom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {filteredItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.src}
              className="group relative h-64 w-80 flex-none overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-soft"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-4 text-white">
                <p className="text-sm font-semibold uppercase tracking-wide">{categories.find((c) => c.key === item.category)?.label}</p>
                <p className="text-base font-bold leading-snug">{item.caption}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
          <button
            type="button"
            aria-label="Прокрутить влево"
            onClick={() => scroll(-320)}
            className="pointer-events-auto ml-2 rounded-full bg-white/80 p-2 text-neutral-900 shadow-soft backdrop-blur transition hover:bg-white"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            aria-label="Прокрутить вправо"
            onClick={() => scroll(320)}
            className="pointer-events-auto mr-2 rounded-full bg-white/80 p-2 text-neutral-900 shadow-soft backdrop-blur transition hover:bg-white"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && filteredItems[selectedIndex] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-900"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={filteredItems[selectedIndex].src}
                alt={filteredItems[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 space-y-2 bg-gradient-to-t from-neutral-900/90 via-neutral-900/70 to-transparent p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-100">
                  {categories.find((c) => c.key === filteredItems[selectedIndex].category)?.label}
                </p>
                <p className="text-xl font-bold">{filteredItems[selectedIndex].caption}</p>
                <p className="text-sm text-white/80">{filteredItems[selectedIndex].alt}</p>
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center p-4">
                <button
                  type="button"
                  className="rounded-full bg-white/80 p-3 text-neutral-900 shadow-soft transition hover:bg-white"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === 0 ? filteredItems.length - 1 : prev - 1,
                    )
                  }
                  aria-label="Предыдущее фото"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center p-4">
                <button
                  type="button"
                  className="rounded-full bg-white/80 p-3 text-neutral-900 shadow-soft transition hover:bg-white"
                  onClick={() =>
                    setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
                  }
                  aria-label="Следующее фото"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default React.memo(Gallery);
