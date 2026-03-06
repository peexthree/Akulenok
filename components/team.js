"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";
import SectionTitle from "./SectionTitle"; // Используем наш прокачанный заголовок
import { motion } from "framer-motion";

const team = [
  {
    name: "Эльвира Фатхутдинова",
    role: "Главный тренер",
    specialty: "Грудничковое плавание (0+)",
    experience: "Стаж 12 лет",
    education: "Медицинское образование (АГМУ). Курсы ВОЗ по ГВ и сну.",
    image: "/img/team/elvira.jpg",
  },
  {
    name: "Анастасия Иванова",
    role: "Инструктор ЛФК",
    specialty: "Гидрореабилитация",
    experience: "Стаж 8 лет",
    education: "Высшее физкультурное (БГУ). Сертификат по гидрокинезиотерапии.",
    image: "/img/team/anastasia.jpg",
  },
  {
    name: "Елена Смирнова",
    role: "Старший тренер",
    specialty: "Мягкая адаптация (1-3 года)",
    experience: "Стаж 15 лет",
    education: "Педагогическое образование. Психолог раннего развития.",
    image: "/img/team/elena.jpg",
  }
];

export default function Team() {
  return (
    <Container className="py-24 relative z-10" id="team">
      
      <SectionTitle
        pretitle="Наши эксперты"
        title="Профессионалы, влюбленные в свое дело"
      >
        Каждый тренер нашего центра проходит строгий отбор и регулярную сертификацию. Мы не просто учим плавать — мы заботимся о гармоничном развитии вашего малыша.
      </SectionTitle>

      <div className="grid gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative flex flex-col bg-white/80 backdrop-blur-xl p-6 rounded-[3rem] border border-white shadow-soft hover:shadow-xl transition-all duration-500 h-full"
          >
            {/* Фото тренера с эффектом глубины */}
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] mb-8 overflow-hidden bg-sky-50 shadow-inner">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Бейдж стажа */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                <span className="text-sky-600 font-bold text-sm">{member.experience}</span>
              </div>
              
              {/* Оверлей при наведении */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="flex-grow flex flex-col items-center text-center">
              <h3 className="text-2xl font-black text-slate-800 mb-2 leading-tight">
                {member.name}
              </h3>
              <div className="text-sky-500 font-bold mb-4 px-4 py-1 bg-sky-50 rounded-full text-sm">
                {member.specialty}
              </div>
              
              <div className="space-y-4 w-full">
                <div className="bg-slate-50/50 p-5 rounded-[2rem] border border-slate-100/50">
                  <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                    «{member.education}»
                  </p>
                </div>
              </div>
            </div>

            {/* Кнопка "Узнать больше" или соцсети можно добавить сюда */}
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
