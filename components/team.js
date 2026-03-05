import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

const team = [
  {
    name: "Эльвира Фатхутдинова",
    role: "Главный тренер по грудничковому плаванию",
    education: "Медицинское образование (АГМУ). Курсы ВОЗ по ГВ и сну.",
    image: "/img/team/elvira.jpg",
  },
  {
    name: "Анастасия Иванова",
    role: "Инструктор ЛФК и детского массажа",
    education: "Высшее физкультурное (БГУ). Сертификат по гидрокинезиотерапии.",
    image: "/img/team/anastasia.jpg",
  },
  {
    name: "Елена Смирнова",
    role: "Тренер раннего плавания (1-3 года)",
    education: "Педагогическое образование. Специалист по мягкой адаптации.",
    image: "/img/team/elena.jpg",
  }
];

export default function Team() {
  return (
    <Container className="py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
          Лица нашего центра
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
          Опытные и заботливые тренеры, которым мамы доверяют самое ценное. У всех медицинское или профильное образование.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="group flex flex-col items-center p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-glass hover:shadow-soft transition-all duration-500 overflow-hidden relative"
          >
            {/* Background Blob on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-50 to-transparent translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-in-out -z-10" />

            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-[2rem] bg-slate-200 mb-8 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow relative">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-teal-100 flex items-center justify-center text-teal-300 font-black text-6xl">
                 {member.name.charAt(0)}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 text-center mb-2 group-hover:text-sky-600 transition-colors">
              {member.name}
            </h3>
            <p className="text-sky-500 font-semibold mb-4 text-center">
              {member.role}
            </p>
            <div className="bg-slate-50 text-slate-600 text-sm px-4 py-3 rounded-2xl text-center leading-relaxed">
              <span className="font-bold block mb-1">Образование:</span>
              {member.education}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
