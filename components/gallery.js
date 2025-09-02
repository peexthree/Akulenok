import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./container";

const images = [
  "/img/gallery/pool1.jpg",
  "/img/gallery/pool2.jpg",
  "/img/gallery/pool3.jpg",
  "/img/gallery/pool4.jpg",
  "/img/gallery/pool5.jpg",
  "/img/gallery/pool6.jpg",
];

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function Gallery() {
  return (
    <Container>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Фотогалерея</h2>
        <p className="text-gray-500 mt-2">Реальные занятия в «Акулёнке»</p>
      </div>
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            variants={variants}
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
    </Container>
  );
}

export default React.memo(Gallery);