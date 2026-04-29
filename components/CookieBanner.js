"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cookieConsentGiven"));
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-[9999] bg-white/90 backdrop-blur-xl border border-sky-100 p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Мы используем файлы cookie 🍪</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed font-medium">
                Продолжая использовать сайт, вы соглашаетесь с нашей{" "}
                <Link href="/privacy" className="text-sky-500 hover:text-sky-600 underline underline-offset-2 transition-colors">
                  политикой конфиденциальности
                </Link>
                .
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={acceptCookies}
                  className="w-full bg-sky-500 text-white font-bold py-2.5 px-4 rounded-xl hover:bg-sky-600 transition-colors shadow-md active:scale-95"
                >
                  Хорошо
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Закрыть"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
