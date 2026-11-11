import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const SharkBlock = dynamic(() => import("./SharkBlock"), {
  ssr: false,
  loading: () => (
    <div className="text-white font-black animate-pulse text-center uppercase tracking-widest">
      Загрузка...
    </div>
  ),
});

const SharkContext = createContext({ setActiveEgg: () => {} });
export const useShark = () => useContext(SharkContext);

export const SharkProvider = ({ children }) => {
  // egg1: 10 кликов (свернутое лого) | egg2: "IGOR" (клавиатура) | egg3: 10 кликов (большое лого)
  const [activeEgg, setActiveEgg] = useState(null);
  const [glitch, setGlitch] = useState(false);

  // Пасхалка №2: чит-код "IGOR" с клавиатуры
  useEffect(() => {
    let keys = [];
    const secret = "igor";
    let glitchTimer = null;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveEgg(null);
        return;
      }

      if (!e.key || e.key.length !== 1) return;

      const targetTag = e.target?.tagName;
      if (targetTag === "INPUT" || targetTag === "TEXTAREA" || e.target?.isContentEditable) {
        return;
      }

      keys.push(e.key.toLowerCase());
      if (keys.length > secret.length) keys.shift();

      if (keys.join("") === secret) {
        keys = [];
        setGlitch(true);
        if (glitchTimer) clearTimeout(glitchTimer);
        glitchTimer = setTimeout(() => {
          setGlitch(false);
          setActiveEgg("egg2");
        }, 400);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (glitchTimer) clearTimeout(glitchTimer);
    };
  }, []);

  return (
    <SharkContext.Provider value={{ setActiveEgg }}>
      <motion.div
        animate={{
          x: glitch ? [-3, 3, -3, 3, 0] : 0,
          filter: glitch ? "contrast(1.3) brightness(1.1) hue-rotate(45deg)" : "none",
        }}
        className="relative z-0"
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {activeEgg && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Секретный блок"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/25 backdrop-blur-md p-4"
            onClick={() => setActiveEgg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <button
                type="button"
                aria-label="Закрыть секретное окно"
                onClick={() => setActiveEgg(null)}
                className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 bg-slate-900/70 hover:bg-slate-900/90 backdrop-blur-xl border border-white/25 rounded-full text-white transition-all shadow-lg"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Закрыть</span>
                <XIcon />
              </button>

              <SharkBlock eggId={activeEgg} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SharkContext.Provider>
  );
};

const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
