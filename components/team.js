"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";
import SectionTitle from "./sectionTitle"; // Используем наш прокачанный заголовок
import { motion } from "framer-motion";

const team = [
  {
    name: "Ханнанова Алсу Айратовна",
    role: "Руководитель и основатель центра",
    specialty: "Врач педиатр, инструктор грудничкового и раннего плавания, гидрореабилитолог",
    experience: "Социальный предприниматель",
    education: "Медицинское образование",
    image: "/img/personal/1.png",
  },
  {
    name: "Фазлиахметова Алия",
    role: "Тренер по плаванию, Инструктор",
    specialty: "Инструктор по раннему и грудничковому плаванию, Педагог АФК",
    experience: "Разряд по плаванию",
    education: "Педагогическое образование",
    image: "/img/personal/2.png",
  },
  {
    name: "Луганцева Александра",
    role: "Администратор",
    specialty: "Администратор",
    experience: "",
    education: "",
    image: "/img/personal/3.png",
  },
  {
    name: "Пурецкая Виктория",
    role: "Администратор",
    specialty: "Администратор",
    experience: "",
    education: "",
    image: "/img/personal/4.png",
  },
  {
    name: "Данилова Нурия",
    role: "Массажист",
    specialty: "Массажист",
    experience: "",
    education: "Медицинское образование",
    image: "/img/personal/5.png",
  },
  {
    name: "Нугаева Регина",
    role: "Инструктор",
    specialty: "Инструктор по раннему и грудничковому плаванию",
    experience: "Курсы по гидрореабилитации детей с нарушением речи, психики, поведения",
    education: "Экономическое образование",
    image: "/img/personal/6.png",
  },
  {
    name: "Шабиева Нелли",
    role: "Инструктор",
    specialty: "Инструктор по грудничковому и раннему плаванию",
    experience: "Курсы по нейропсихологии",
    education: "Медицинское образование",
    image: "/img/personal/7.png",
  },
  {
    name: "Рахматуллина Арина",
    role: "Инструктор",
    specialty: "Инструктор по раннему и грудничковому плаванию",
    experience: "Сертифицированный специалист по гидрореабилитации детей с нарушением речи, психики, поведения",
    education: "Высшее медицинское образование",
    image: "/img/personal/8.png",
  },
  {
    name: "Точилкина Любовь",
    role: "Инструктор",
    specialty: "Инструктор по раннему и грудничковому плаванию",
    experience: "Разряд по плаванию",
    education: "Медицинское образование",
    image: "/img/personal/10.png",
  },
  {
    name: "Нурметова Эльвина",
    role: "Фитнес тренер, Инструктор АФК",
    specialty: "Вожатый летнего лагеря",
    experience: "",
    education: "Педагогическое образование",
    image: "/img/personal/11.png",
  },
  {
    name: "Бусалова Анастасия",
    role: "Реабилитолог, Инструктор АФК",
    specialty: "Миофасциальный массаж",
    experience: "",
    education: "Медицинское образование",
    image: "/img/personal/12.png",
  },
  {
    name: "Игнатьева Виктория Николаевна",
    role: "Администратор",
    specialty: "Администратор",
    experience: "",
    education: "",
    image: "/img/personal/13.png",
  }
];

export default function Team() {
  return (
    <Container className="py-24 relative z-10" id="team">
      
      <SectionTitle
        pretitle="Наши эксперты"
        title="Профессионалы, влюбленные в свое дело"
      >
        Каждый специалист нашего центра проходит строгий отбор и регулярную сертификацию. Мы не просто учим плавать - мы заботимся о гармоничном развитии вашего малыша.
      </SectionTitle>

      
      <div className="mt-16 overflow-hidden w-full relative mask-image-fade group">
        <div className="flex w-max animate-marquee gap-8 pr-8 group-hover:[animation-play-state:paused]">
          {[...team, ...team].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % team.length) * 0.1 }}
              className="relative flex flex-col bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white shadow-soft hover:shadow-xl transition-all duration-500 h-full w-[300px] shrink-0"
            >
              {/* Фото тренера с эффектом глубины */}
              <div className="relative w-full aspect-[4/5] rounded-2xl mb-8 overflow-hidden bg-sky-50 shadow-inner">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="300px"
                />
                {/* Бейдж стажа */}
                {member.role && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                    <span className="text-sky-600 font-bold text-sm whitespace-nowrap">{member.role}</span>
                  </div>
                )}
                
                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex-grow flex flex-col items-center text-center">
                <h3 className="text-2xl font-black text-slate-800 mb-2 leading-tight">
                  {member.name}
                </h3>
                {member.specialty && (
                  <div className="text-sky-500 font-bold mb-4 px-4 py-1 bg-sky-50 rounded-full text-sm">
                    {member.specialty}
                  </div>
                )}
                
                <div className="space-y-4 w-full">
                  {(member.education || member.experience) && (
                    <div className="bg-slate-50/50 p-5 rounded-[2rem] border border-slate-100/50">
                      {member.experience && (
                        <p className="text-slate-600 text-sm font-medium leading-relaxed italic mb-2">
                          {member.experience}
                        </p>
                      )}
                      {member.education && (
                        <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                          «{member.education}»
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        .mask-image-fade {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
</Container>
  );
}
