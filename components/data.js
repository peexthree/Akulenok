import {
  FaceSmileIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import React from "react";

const benefitOne = {
  title: "Почему родители выбирают «Акулёнок»",
  desc: "Специализированный детский аквацентр: грудничковое плавание и лечебная физкультура в тёплой стерильной воде под присмотром опытных инструкторов.",
  image: benefitOneImg,
  bullets: [
    {
      title: "С 3 месяцев",
      desc: "Безопасные занятия для самых маленьких, бережный подход и игра.",
      icon: <FaceSmileIcon />, // ✅ Имя иконки исправлено
    },
    {
      title: "Тёплая и чистая вода",
      desc: "Комфортный температурный режим и современная система очистки.",
      icon: <ChartBarIcon />,
    },
    {
      title: "Индивидуальный подход",
      desc: "Мини‑группы и индивидуальные занятия, работа с особенностями развития.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Польза для здоровья и развития",
  desc: "Укрепляем иммунитет, развиваем координацию и мышечный тонус, снижаем страх воды. Родители наблюдают процесс на экране в зоне ожидания.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "ЛФК для детей",
      desc: "Занятия с элементами лечебной физкультуры в воде и на суше.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Опытные инструкторы",
      desc: "Сертифицированные специалисты по раннему плаванию и ЛФК.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Уют для семьи",
      desc: "Зона ожидания для родителей, игрушки и тёплая атмосфера для малышей.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };