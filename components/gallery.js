import React from "react";
import Container from "./container";
import Image from "next/image";

const images = [
  "/img/gallery/pool1.jpg",
  "/img/gallery/pool2.jpg",
  "/img/gallery/pool3.jpg",
  "/img/gallery/pool4.jpg",
  "/img/gallery/pool5.jpg",
  "/img/gallery/pool6.jpg",
];

export default function Gallery() {
  return (
    <Container>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Фотогалерея</h2>
        <p className="text-gray-500 mt-2">Реальные занятия в «Акулёнке»</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div key={src} className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image 
              src={src} 
              alt={`Фото из бассейна Акулёнок ${i + 1}`} 
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}