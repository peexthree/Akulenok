"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";
import { motion } from "framer-motion";
import { 
  CheckBadgeIcon, 
  SparklesIcon, 
  BriefcaseIcon, 
  BeakerIcon, 
  HeartIcon 
} from "@heroicons/react/24/outline";

const items = [
  { icon: BriefcaseIcon, text: "Смена одежды для ребёнка" },
  { icon: BeakerIcon, text: "Подгузник для бассейна" },
  { icon: CheckBadgeIcon, text: "Полотенце или пелёнка" },
  { icon: SparklesIcon, text: "Шапочка и резиновая обувь" },
  { icon: HeartIcon, text: "Любимая игрушка для воды" },
];

export default function Checklist() {
  return (
    <Container className="py-24 relative overflow-hidden">
      <div className="flex flex-col items-center">
        
        {/* Единственное место для think.png */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ 
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 }
          }}
          className="mb-12 relative"
        >
          <Image
            src="/img/think.png"
            alt="Думающий акулёнок"
            width={180}
            height={180}
            className="w-36 h-auto md:w-44 drop-shadow-2xl"
          />
        </motion.div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6"
          >
            Что взять на занятие?
          </motion.h2>
          <p className="text-xl text-slate-600 font-medium">
            Акулёнок подсказывает: подготовьте эти вещи заранее, чтобы первый заплыв прошёл идеально.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {items.map(({ icon: Icon, text }, idx) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-soft border border-slate-100 flex flex-col items-center text-center gap-6"
            >
              <div className="p-4 bg-sky-50 rounded-2xl text-sky-500">
                <Icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-slate-700 leading-tight">
                {text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
