import Image from "next/image";
import Container from "./container";

const items = [
  {
    title: "Онлайн запись и поддержка",
    desc: "Свяжемся удобным для вас способом",
    img: "/img/hero.png",
  },
  {
    title: "Учимся играя",
    desc: "Занятия проходят легко и с интересом для малыша",
    img: "/img/benefit-one.png",
  },
  {
    title: "Комфорт для малыша",
    desc: "Создаём атмосферу доверия и заботы",
    img: "/img/benefit-two.png",
  },
];

export default function Benefits() {
  return (
    <Container>
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl border bg-white dark:bg-trueGray-900"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              className="object-contain"
            />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}