"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Марина и Артём (6 мес)",
    result: "Ушел тонус ножек",
    text: "Пришли с сильным гипертонусом, малыш постоянно плакал. После 5 занятий у Артёма расслабились ножки, он стал лучше спать и улыбаться. Тренеры - чудо!",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Екатерина и София (1 год)",
    result: "Перестали бояться воды",
    text: "Дочка жутко боялась купаться даже дома. В Акулёнке настолько мягкий подход и столько игрушек, что она сама тянется в воду. Спасибо за терпение!",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Анна и Матвей (3 мес)",
    result: "Первые успехи в нырянии",
    text: "Очень чистая вода, нет запаха хлорки. Тренер Эльвира нашла подход за 5 минут. Матвей уже задерживает дыхание и радостно плещется.",
    image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=300",
  }
];

export default function Testimonials() {
  return (
    <Container id="testimonials" className="py-24 relative z-10 scroll-mt-24">
      
      <SectionTitle
        pretitle="Отзывы"
        title="Истории наших маленьких чемпионов"
      >
        Настоящие результаты и искренние эмоции мам, которые доверили нам здоровье своих детей.
      </SectionTitle>

      <div className="grid gap-8 lg:grid-cols-3 mt-16">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col p-8 rounded-[3rem] bg-white/80 backdrop-blur-xl border border-white shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative group h-full"
          >
            <div className="absolute top-6 right-8 text-sky-200 group-hover:text-sky-300 transition-colors duration-500">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
              </svg>
            </div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 leading-tight">{item.name}</h4>
                <div className="flex text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="inline-block text-sm font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-4 py-1.5 rounded-xl border border-sky-100">
                Результат: {item.result}
              </span>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed font-medium relative z-10 flex-grow italic">
              «{item.text}»
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <a 
          href="https://yandex.ru/maps/org/akulenok/125018811972/reviews/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-sky-500 transition-colors mb-4 block"
        >
          Читать 59+ отзывов на Яндекс.Картах
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="https://yandex.ru/maps/org/akulenok/125018811972/reviews/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
        >
          Оставьте и вы свой отзыв о нашей работе, нам будет приятно
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </a>
      </motion.div>

    </Container>
  );
}
