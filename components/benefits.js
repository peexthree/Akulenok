import Image from "next/image";
import Container from "./container";

const items = [
  
  {
  title: "Онлайн запись и поддержка",
  desc: "Вы можете записаться в любое время онлайн, а наша команда свяжется удобным для вас способом и ответит на все вопросы, чтобы вы чувствовали спокойствие и уверенность.",
  img: "/img/benefit-one.png",
},
{
  title: "Учимся играя",
  desc: "Каждое занятие построено в игровой форме: малыши двигаются, играют и осваивают новые навыки через радость. Так они быстрее адаптируются и получают удовольствие от процесса.",
  img: "/img/benefit-two.png",
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