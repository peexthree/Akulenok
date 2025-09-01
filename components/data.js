import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Почему родители выбирают «Акулёнок»",
  desc: "Специализированный детский аквацентр: грудничковое плавание и лечебная физкультура в тёплой стерильной воде под присмотром опытных инструкторов.",
  image: benefitOneImg,
  bullets: [
    {
      title: "С 3 месяцев",
      desc: "Безопасные занятия для самых маленьких, бережный подход и игра.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Тёплая и чистая вода",
      desc: "Комфортный температурный режим и современная система очистки.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Индивидуальный подход",
      desc: "Мини‑группы и индивидуальные занятия, работа с особенностями развития.",
      icon: <CursorClickIcon />,
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
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Опытные инструкторы",
      desc: "Сертифицированные специалисты по раннему плаванию и ЛФК.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Уют для семьи",
      desc: "Зона ожидания для родителей, игрушки и тёплая атмосфера для малышей.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
