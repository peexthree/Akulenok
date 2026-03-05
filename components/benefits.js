import Image from "next/image";
import Container from "./container";

const items = [
  {
    title: "Нам доверяют",
    desc: "Родители чувствуют уверенность, а малыши — заботу и внимание. Мы строим отношения на доверии, искренности и любви к детям, чтобы каждый малыш рос в атмосфере поддержки и радости.",
    img: "/img/love.png",
  },
  {
    title: "Учимся играя",
    desc: "Каждое занятие построено в игровой форме: малыши двигаются, играют и осваивают новые навыки через радость. Так они быстрее адаптируются и получают удовольствие от процесса.",
    img: "/img/play.png",
  },
  {
    title: "Комфорт для малыша",
    desc: "Мы создаём атмосферу доверия, заботы и уюта: тёплая вода, внимательные инструкторы и доброжелательная обстановка помогают малышу чувствовать себя спокойно и безопасно.",
    img: "/img/hero.png",
  },
];

export default function Benefits() {
  return (
    <Container>
      <div className="grid gap-8 md:grid-cols-3 pb-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white  rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-32 h-32 mb-6 relative flex items-center justify-center bg-aqua-background  rounded-full overflow-hidden border-4 border-white  shadow-inner">
              <Image
                src={item.img}
                alt={item.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-aqua-dark  mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600  leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
