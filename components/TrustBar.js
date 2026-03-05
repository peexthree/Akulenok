import React from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, BeakerIcon, AcademicCapIcon, HeartIcon } from "@heroicons/react/24/outline";

const trustItems = [
  { text: "Вода питьевого качества", icon: BeakerIcon },
  { text: "Тренеры с мед. образованием", icon: AcademicCapIcon },
  { text: "Без хлора", icon: ShieldCheckIcon },
  { text: "Одобрено педиатрами", icon: HeartIcon },
];

export default function TrustBar() {
  return (
    <div className="relative -mt-10 sm:-mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="glass-card bg-white/70 py-6 px-4 rounded-3xl sm:rounded-[2.5rem] shadow-soft border border-white"
      >
        <div className="flex overflow-hidden">
          {/* Marquee effect for mobile, grid for desktop */}
          <div className="flex w-max min-w-full justify-between items-center animate-marquee sm:animate-none sm:w-full sm:grid sm:grid-cols-4 gap-8 px-4">
             {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 whitespace-nowrap justify-center">
                  <div className="p-2 bg-sky-100 rounded-full text-sky-500 shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-semibold text-slate-700 text-sm sm:text-base">{item.text}</span>
                </div>
             ))}
             {/* Duplicate for seamless marquee on mobile */}
             <div className="flex sm:hidden w-max items-center gap-8 pl-8">
               {trustItems.map((item, idx) => (
                  <div key={`dup-${idx}`} className="flex items-center gap-3 whitespace-nowrap justify-center">
                    <div className="p-2 bg-sky-100 rounded-full text-sky-500 shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-semibold text-slate-700 text-sm sm:text-base">{item.text}</span>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </motion.div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}
