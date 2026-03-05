import React from "react";
import Container from "./container";
import Image from "next/image";

export default function Methodology() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 items-center py-10">
        <div className="order-1 lg:order-1 flex justify-center">
          <Image
            src="/img/benefit-one.png"
            alt="Наша методика"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="space-y-6 order-2 lg:order-2">
          <h2 className="text-4xl font-bold text-aqua-dark mb-6">
            Наша методика
          </h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              <strong>Индивидуальный подход:</strong> составляем индивидуальную программу тренировок с учетом возрастных особенностей и потребностей ребенка.
            </p>
            <p>
              Нет цели научить ребенка плавать, есть цель подружить ребенка с водой, научиться с ней взаимодействовать. При этом мы получаем выгоду со стороны дыхания, мышечного корсета.
            </p>
            <p>
              Мы используем мягкую методику через мотивацию ребенка в игровой форме, чтобы каждое занятие приносило радость.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
