import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";

const PopupWidget = dynamic(() => import("./popupWidget"), { ssr: false });

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // A tiny simulated preloader to give that snappy premium feel.
    // In a real app with many assets, you'd use a real load event.
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-nunito mesh-bg overflow-hidden selection:bg-sky-200 selection:text-sky-900">

      {/* Read Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-400 origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />

      {/* Preloader overlay */}
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          onAnimationComplete={() => setLoading(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl font-extrabold text-sky-500 tracking-tighter"
          >
            Акулёнок
          </motion.div>
        </motion.div>
      )}

      {/* Main Content wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 min-h-screen"
      >
        {children}
      </motion.div>

      <PopupWidget />
    </div>
  );
}
