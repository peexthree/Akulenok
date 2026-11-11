import React, { useRef } from "react";
import Link from "next/link";
import Container from "./Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { COMPANY_DETAILS } from "../config/company";

const heroHighlights = [
  { value: "32–33 °C", label: "тёплая вода" },
  { value: "3 ступени", label: "очистка воды 24/7" },
  { value: `${COMPANY_DETAILS.rating} ★`, label: "рейтинг Яндекс" },
  { value: "с 3 мес", label: "плавание и фитнес" },
];

export default function Hero() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, -70]);
  const buttonsY = useTransform(scrollY, [0, 500], [0, -35]);

  const buttonRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!buttonRef.current) return;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;
      buttonRef.current.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (buttonRef.current) {
      buttonRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <section data-ym-section="hero" className="relative min-h-[94vh] flex flex-col justify-center pt-28 pb-24 overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem] bg-[#0C1A2E]">
      {/* Фоновое видео */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/poster.jpg"
        >
          <source src="/video/HB.webm" type="video/webm" />
          <source src="/video/hero_small.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1A2E]/65 via-[#0C1A2E]/30 to-[#0C1A2E]/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(244,63,94,0.14),transparent_55%)] z-10" />
      </div>

      <Container className="relative z-30 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div style={{ y: textY }} className="flex flex-col items-center">
          <a
            href="#discounts"
            className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-8 shadow-2xl hover:bg-white/25 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.8)]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-[0.18em] uppercase">
              Выгодные абонементы и скидки
            </span>
          </a>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-[6.75rem] font-extrabold tracking-tight text-white leading-[1.02] mb-6 text-balance uppercase drop-shadow-[0_6px_28px_rgba(12,26,46,0.55)]">
            Больше <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-cyan-100 to-white">
              чем бассейн
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-sky-50/95 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide text-balance font-semibold drop-shadow-md">
            Грудничковое и раннее плавание от 3 месяцев, женский и детский фитнес в г. Туймазы · Здоровье для всей семьи
          </p>
        </motion.div>

        <motion.div
          style={{ y: buttonsY }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center w-full sm:w-auto justify-center"
        >
          {/* Горячая CTA — Розовый импульс */}
          <div
            className="relative inline-block w-full sm:w-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={buttonRef}
            style={{ transition: "transform 0.15s ease-out" }}
          >
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="group relative px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full text-xl font-extrabold overflow-hidden transition-all duration-300 w-full sm:w-auto shadow-lg shadow-rose-500/35 hover:shadow-xl hover:shadow-rose-500/50 flex items-center justify-center tracking-wide leading-snug border border-white/25"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                Позвонить
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Вторичная CTA — Стеклянная аква */}
          <Link
            href="#fitness"
            className="px-9 py-5 bg-white/15 text-white rounded-full text-lg sm:text-xl font-bold border border-white/40 backdrop-blur-xl hover:bg-white/25 hover:border-white/70 transition-all duration-300 w-full sm:w-auto text-center shadow-lg"
          >
            Фитнес и услуги
          </Link>
        </motion.div>

        {/* Стеклянные мини-плашки */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
          {heroHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3.5 text-center shadow-lg"
            >
              <div className="font-display text-base sm:text-lg font-extrabold text-white leading-tight">
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-sky-100/90 mt-0.5">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
