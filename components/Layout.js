import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";

import CookieBanner from "./CookieBanner";

const PopupWidget = dynamic(() => import("./PopupWidget"), { ssr: false });

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[#F6FBFF] text-[#0C1A2E] font-nunito overflow-x-clip selection:bg-sky-200 selection:text-[#0C1A2E]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-white focus:text-sky-700 focus:font-bold focus:shadow-lg"
      >
        Перейти к основному содержанию
      </a>

      {/* Индикатор прогресса чтения (Aqua → Rose) */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 to-rose-500 origin-left z-[100] rounded-r-full shadow-[0_0_15px_rgba(14,165,233,0.45)]"
        style={{ scaleX }}
      />

      <main id="main-content" className="relative z-10 flex flex-col min-h-screen">
        {children}
      </main>

      <PopupWidget />
      <CookieBanner />
    </div>
  );
}
