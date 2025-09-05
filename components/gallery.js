import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./container";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
const images = [
  "/img/gallery/pool1.jpg",
  "/img/gallery/pool2.jpg",
  "/img/gallery/pool3.jpg",
  "/img/gallery/pool4.jpg",
  "/img/gallery/pool5.jpg",
  "/img/gallery/pool6.jpg",
 "/img/gallery/pool7.jpg",
  "/img/gallery/pool81.jpg",
  "/img/gallery/pool91.jpg",
  "/img/gallery/pool101.jpg",
  "/img/gallery/pool111.jpg",
  "/img/gallery/pool12.jpg",
 "/img/gallery/pool13.jpg",
  "/img/gallery/pool14.jpg",
];

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function Gallery() {
const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const { scrollLeft, clientWidth, scrollWidth } = el;
      const maxScrollLeft = scrollWidth - clientWidth;
      if (scrollLeft >= maxScrollLeft) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 336, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (offset) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };
  return (
    <Container>
          <div id="gallery" className="relative scroll-mt-24">
        <motion.div
          ref={scrollRef}
         className="flex gap-4 overflow-x-auto snap-x snap-mandatory mt-8 pb-4 scrollbar-custom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="relative w-80 h-64 flex-none snap-center rounded-xl overflow-hidden shadow-lg cursor-pointer"
              variants={variants}
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`Фото из бассейна Акулёнок ${i + 1}`}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
        <button
          type="button"
          aria-label="Прокрутить влево"
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-gray-800/70 shadow"
        >
          <ChevronLeftIcon className="h-6 w-6 text-aqua-dark dark:text-aqua-background" />
        </button>
        <button
          type="button"
          aria-label="Прокрутить вправо"
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-gray-800/70 shadow"
        >
          <ChevronRightIcon className="h-6 w-6 text-aqua-dark dark:text-aqua-background" />
        </button>
      </div>
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <Image
            src={selected}
            alt="Просмотр фото"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      )}
    </Container>
  );
}

export default React.memo(Gallery);