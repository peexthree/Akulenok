import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ханнанова Алсу Айратовна",
    role: "Основатель центра",
    specialty: "Инструктор грудничкового и раннего плавания",
    experience: "Социальный предприниматель",
    education: "Высшее образование",
    image: "/img/personal/1.webp",
  },
  {
    name: "Фазлиахметова Алия",
    role: "Тренер по плаванию",
    specialty: "Инструктор по раннему и грудничковому плаванию",
    experience: "Разряд по плаванию",
    education: "Педагогическое образование",
    image: "/img/personal/2.webp",
  },
  {
    name: "Луганцева Александра",
    role: "Администратор",
    specialty: "Администратор",
    experience: "",
    education: "",
    image: "/img/personal/3.webp",
  },
  {
    name: "Нугаева Регина",
    role: "Инструктор",
    specialty: "Инструктор по раннему и грудничковому плаванию",
    experience: "",
    education: "Экономическое образование",
    image: "/img/personal/6.webp",
  },
  {
    name: "Рахматуллина Арина",
    role: "Инструктор",
    specialty: "Инструктор по раннему и грудничковому плаванию",
    experience: "",
    education: "Высшее образование",
    image: "/img/personal/8.webp",
  },
  {
    name: "Точилкина Любовь",
    role: "Инструктор",
    specialty: "Инструктор по раннему и грудничковому плаванию",
    experience: "Разряд по плаванию",
    education: "Высшее образование",
    image: "/img/personal/10.webp",
  },
  {
    name: "Игнатьева Виктория Николаевна",
    role: "Администратор",
    specialty: "Администратор",
    experience: "",
    education: "",
    image: "/img/personal/13.webp",
  },
];

const AquaCard = ({ member, isDuplicate }) => {
  return (
    <motion.div
      aria-hidden={isDuplicate}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative group w-[300px] sm:w-[320px] shrink-0 rounded-3xl p-6 overflow-hidden
                 bg-white/80 backdrop-blur-xl border border-white/90
                 shadow-soft hover:shadow-xl flex flex-col"
    >
      <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden mb-5 bg-gradient-to-b from-sky-100 to-sky-50 shadow-inner">
        <Image
          src={member.image}
          alt={isDuplicate ? "" : member.name}
          fill
          sizes="320px"
          className="object-contain bg-white/25 transition-transform duration-700 group-hover:scale-105"
        />
        {member.role && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md px-3 py-2 rounded-2xl shadow-sm z-10 flex items-center justify-center">
            <span className="text-sky-700 font-bold text-sm text-center leading-tight">{member.role}</span>
          </div>
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center flex-grow w-full">
        <h3 className="text-[1.15rem] font-bold text-slate-900 mb-2 leading-tight text-center">
          {member.name}
        </h3>

        {member.specialty && (
          <div className="bg-sky-50 rounded-2xl p-3 border border-sky-100 text-sky-800 text-xs font-semibold mb-3 w-full text-center">
            {member.specialty}
          </div>
        )}

        <div className="space-y-2 w-full mt-auto flex flex-col">
          {member.experience && (
            <div className="bg-slate-50/90 p-2.5 rounded-xl border border-slate-100 flex items-start text-left gap-2">
              <span className="text-sky-500 mt-0.5 text-sm shrink-0 leading-none" aria-hidden="true">✦</span>
              <p className="text-slate-600 text-xs font-medium leading-relaxed">{member.experience}</p>
            </div>
          )}
          {member.education && (
            <div className="bg-slate-50/90 p-2.5 rounded-xl border border-slate-100 flex items-start text-left gap-2">
              <span className="text-sky-500 mt-0.5 text-sm shrink-0 leading-none" aria-hidden="true">🎓</span>
              <p className="text-slate-600 text-xs font-medium leading-relaxed">{member.education}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Team() {
  const [paused, setPaused] = useState(false);

  return (
    <Container className="py-24 relative z-10" id="team">
      <SectionTitle
        pretitle="Наши эксперты"
        title="Профессионалы, влюблённые в своё дело"
      >
        Каждый специалист нашего центра проходит строгий отбор и регулярную сертификацию. Мы не просто учим плавать — мы заботимся о гармоничном развитии вашего малыша.
      </SectionTitle>

      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm text-xs font-bold text-slate-600 hover:text-sky-600 hover:border-sky-200 transition-colors"
        >
          {paused ? "▶ Продолжить карусель" : "❚❚ Остановить карусель"}
        </button>
      </div>

      <div className="overflow-hidden w-full relative mask-image-fade group py-2">
        <div
          className={`flex w-max animate-marquee gap-7 pr-7 group-hover:[animation-play-state:paused] ${
            paused ? "[animation-play-state:paused]" : ""
          }`}
        >
          {[...team, ...team].map((member, idx) => (
            <AquaCard key={idx} member={member} isDuplicate={idx >= team.length} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 70s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .mask-image-fade {
          mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
        }
      `}</style>
    </Container>
  );
}
