"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";
import SectionTitle from "./sectionTitle"; // Используем наш прокачанный заголовок
import { motion } from "framer-motion";

const team = [
  {
    name: "Ханнанова Алсу Айратовна",
    role: "Основатель центра",
    specialty: "Врач педиатр, инструктор грудничкового и раннего плавания, гидрореабилитолог",
    experience: "Социальный предприниматель",
    education: "Медицинское образование",
    image: "/img/personal/1.png",
  },
  {
    name: "Фазлиахметова Алия",
    role: "Тренер по плаванию",
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
    role: "Фитнес тренер",
    specialty: "Вожатый летнего лагеря",
    experience: "Инструктор АФК",
    education: "Педагогическое образование",
    image: "/img/personal/11.png",
  },
  {
    name: "Бусалова Анастасия",
    role: "Реабилитолог",
    specialty: "Миофасциальный массаж",
    experience: "Инструктор АФК",
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


const AquaCard = ({ member, idx, teamLength }) => {
  return (
    <motion.div
      // Эффект левитации (дыхание воды)
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: [0, -8, 0] }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.6, delay: (idx % teamLength) * 0.1 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: (idx % teamLength) * 0.1 }
      }}
      whileHover={{ scale: 1.02, y: -12 }}
      className="relative group w-[320px] shrink-0 rounded-[2.5rem] p-6 overflow-hidden
                 bg-white/30 backdrop-blur-xl border border-white/40
                 shadow-[0_8px_32px_rgba(31,38,135,0.07)]"
    >
      {/* Анимированный блик при наведении */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-20 pointer-events-none" />

      {/* Фото с обтравкой или легким фоном */}
      <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-6 bg-gradient-to-b from-sky-100 to-sky-50 shadow-inner">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Бейдж стажа */}
        {member.role && (
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-sm z-10">
            <span className="text-sky-600 font-bold text-xs whitespace-nowrap">{member.role}</span>
          </div>
        )}
      </div>

      <div className="relative z-10 text-center flex flex-col items-center flex-grow h-[calc(100%-18rem)]">
        <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight">{member.name}</h3>

        {/* Стеклянная плашка для специальности */}
        {member.specialty && (
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-3 border border-white/30 text-slate-600 text-xs font-medium mb-3 mt-auto">
            {member.specialty}
          </div>
        )}

        <div className="space-y-2 w-full mt-auto">
          {(member.education || member.experience) && (
             <div className="bg-slate-50/40 p-3 rounded-[1.5rem] border border-slate-100/50">
               {member.experience && (
                 <p className="text-slate-600 text-[11px] font-medium leading-relaxed italic mb-1">
                   {member.experience}
                 </p>
               )}
               {member.education && (
                 <p className="text-slate-600 text-[11px] font-medium leading-relaxed italic">
                   «{member.education}»
                 </p>
               )}
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

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
            <AquaCard key={idx} member={member} idx={idx} teamLength={team.length} />
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
