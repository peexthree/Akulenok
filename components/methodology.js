import React from "react";
import Container from "./container";
import Image from "next/image";

export default function Methodology() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 items-center py-10">
        <div className="order-2 lg:order-1 flex justify-center">
          <Image
            src="/img/benefit-one.png"
            alt="Наша методика"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-aqua-dark dark:text-aqua-background mb-6">
            Наша методика
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Занятия основаны на современных подходах грудничкового плавания и
              лечебной физкультуры. Мы используем мягкие упражнения на развитие
              дыхания, координации и мышечного тонуса, уделяя особое внимание
              безопасности и комфорту малыша.
            </p>
            <p>
              Каждое занятие проходит в тёплой воде под контролем сертифицированных
              инструкторов, что помогает детям укреплять иммунитет и любовь к воде.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
