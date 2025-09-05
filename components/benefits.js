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
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
                  className="flex flex-col items-center text-center p-6"
          >
            <Image
              src={item.img}
              alt={item.title}
               width={400}
              height={400}
              className="object-contain"
            />
             <div className="mt-4 p-4 glass-card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}