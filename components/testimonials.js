import Image from "next/image";
import React from "react";
import Container from "./container";

const testimonials = [
  {
    quote: "Ребёнок перестал бояться воды уже через два занятия!",
    name: "Ольга",
    title: "мама Саши",
    image: "/img/user1.jpg",
  },
  {
    quote: "Чистота и комфорт на высоте, тренеры – профессионалы.",
    name: "Дмитрий",
    title: "папа Киры",
    image: "/img/user2.jpg",
  },
];


export default function Testimonials() {
  return (
    <Container>
 <div className="grid gap-10 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 py-10 rounded-2xl dark:bg-trueGray-800"
          >
            <p className="text-xl leading-normal">"{t.quote}"</p>
            <Avatar image={t.image} name={t.name} title={t.title} />
          </div>
))}
      </div>
      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        Рейтинг ★ 4.7/5 на основе отзывов
              </div>

    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
          <div className="relative flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width={56}
          height={56}
          className="object-cover"
          alt="Avatar"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}