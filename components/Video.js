import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function Video() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Не грузим 12 МБ видео при первом открытии страницы, подгружаем при приближении к секции
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoadVideo]);

  return (
    <Container className="py-24 relative z-10">
      <SectionTitle
        pretitle="Видеообзор центра"
        title="Познакомьтесь с нами ближе"
      >
        Посмотрите, как проходят занятия: только улыбки, профессиональная поддержка и чистая радость движения.
      </SectionTitle>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto group"
      >
        <div className="absolute -inset-6 bg-gradient-to-tr from-sky-300/30 via-transparent to-rose-300/20 rounded-3xl blur-3xl -z-10 pointer-events-none" />

        <div className="relative aspect-video rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-heavy border-[10px] sm:border-[12px] border-white/90 bg-sky-50">
          <div className="absolute top-5 right-5 z-20 pointer-events-none">
            <div className="flex items-center gap-2 bg-[#0C1A2E]/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 text-white text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-400" aria-hidden="true" />
              Атмосфера занятий
            </div>
          </div>

          <video
            ref={videoRef}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            muted
            loop
            playsInline
            preload={shouldLoadVideo ? "metadata" : "none"}
            controls
            poster="/video/poster.jpg"
          >
            {shouldLoadVideo && <source src="/video/hero_small.mp4" type="video/mp4" />}
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 md:mt-0 md:absolute md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-sky-100 max-w-sm mx-auto md:mx-0"
        >
          <p className="text-slate-800 font-bold text-sm leading-relaxed">
            «Мы создали место, где каждый ребёнок чувствует себя в безопасности с первых секунд в воде»
          </p>
          <div className="mt-2 text-sky-600 text-xs font-black uppercase tracking-widest">
            Команда Акулёнка
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
