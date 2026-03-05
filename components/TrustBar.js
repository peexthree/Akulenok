import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  BeakerIcon, 
  AcademicCapIcon, 
  HeartIcon,
  SunIcon,
  SparklesIcon,
  FaceSmileIcon,
  HomeModernIcon
} from "@heroicons/react/24/outline";

// Расширенный список для длинного "паровоза"
const trustItems = [
  { text: "Вода лучшего качества", icon: BeakerIcon },
  { text: "Тренеры с мед. образованием", icon: AcademicCapIcon },
  { text: "Без хлора", icon: ShieldCheckIcon },
  { text: "Одобрено педиатрами", icon: HeartIcon },
  { text: "Температура воды 33-34°C", icon: SunIcon },
  { text: "Многоступенчатая очистка", icon: SparklesIcon },
  { text: "Игровой подход без слез", icon: FaceSmileIcon },
  { text: "Теплые пеленальные зоны", icon: HomeModernIcon },
];

export default function TrustBar() {
  return (
    <div className="relative -mt-10 sm:-mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-white/80 backdrop-blur-lg py-6 px-4 rounded-3xl sm:rounded-[2.5rem] shadow-soft border border-white"
      >
        {/* Единая бегущая строка для всех устройств */}
        <div className="overflow-hidden w-full relative mask-image-fade group">
          {/* group-hover:pause останавливает анимацию при наведении мыши */}
          <div className="flex w-max animate-marquee gap-8 pr-8 group-hover:[animation-play-state:paused]">
            {/* Склеиваем массив для бесконечного лупа */}
            {[...trustItems, ...trustItems].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 whitespace-nowrap"
                aria-hidden={idx >= trustItems.length ? "true" : "false"}
              >
                <div className="p-2 bg-sky-100 rounded-full text-sky-500 shrink-0 shadow-sm transition-transform group-hover:scale-110">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-bold text-slate-700 text-sm sm:text-base cursor-default">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .animate-marquee {
          /* На десктопе строка длиннее, поэтому увеличиваем время прохождения (40s), 
             чтобы скорость была комфортной для чтения */
          animation: marquee 40s linear infinite;
        }
        
        /* Ускоряем для мобилок, так как экран уже */
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
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
    </div>
  );
}
