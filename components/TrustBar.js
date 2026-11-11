import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BeakerIcon,
  AcademicCapIcon,
  SunIcon,
  SparklesIcon,
  FaceSmileIcon,
  HomeModernIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/outline";

const trustItems = [
  { text: "Вода лучшего качества", icon: BeakerIcon },
  { text: "Сотрудники с медицинским и педагогическим образованием", icon: AcademicCapIcon },
  { text: "Температура воды 32-33 °C", icon: SunIcon },
  { text: "Многоступенчатая система очистки воды - вода питьевого качества", icon: SparklesIcon },
  { text: "Игровой формат", icon: FaceSmileIcon },
  { text: "Удобная зона отдыха и ожидания", icon: HomeModernIcon },
];

export default function TrustBar() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative -mt-10 sm:-mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="glass-card py-5 px-4 sm:px-6 flex items-center gap-3"
      >
        <div className="overflow-hidden w-full relative marquee-mask group">
          <div
            className={`flex w-max marquee gap-8 pr-8 group-hover:[animation-play-state:paused] ${
              paused ? "[animation-play-state:paused]" : ""
            }`}
            style={{ "--marquee-duration": "40s" }}
          >
            {[...trustItems, ...trustItems].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 whitespace-nowrap"
                aria-hidden={idx >= trustItems.length}
              >
                <div className="p-2 bg-sky-100 rounded-full text-sky-600 shrink-0 shadow-sm">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <span className="font-bold text-slate-600 text-sm sm:text-base cursor-default">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Запустить бегущую строку" : "Остановить бегущую строку"}
          className="shrink-0 w-11 h-11 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-colors"
        >
          {paused ? (
            <PlayIcon className="w-5 h-5" aria-hidden="true" />
          ) : (
            <PauseIcon className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </motion.div>
    </div>
  );
}
