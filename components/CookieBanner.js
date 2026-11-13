import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsVisible(true);
    window.addEventListener("openCookieSettings", handleOpen);
    return () => window.removeEventListener("openCookieSettings", handleOpen);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    window.dispatchEvent(new Event("cookieConsentGiven"));
  };

  const dismissBanner = () => {
    localStorage.setItem("cookieConsent", "dismissed");
    setIsVisible(false);
    window.dispatchEvent(new Event("cookieBannerClosed"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="region"
          aria-label="Уведомление об использовании cookie"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-[9999] bg-white/85 backdrop-blur-xl border border-white/90 p-5 rounded-3xl shadow-soft"
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-base font-extrabold text-[#0C1A2E] mb-1.5">Мы используем файлы cookie 🍪</h3>
              <p className="text-sm text-slate-600 mb-3 leading-snug font-medium">
                Нажимая «Хорошо», вы соглашаетесь на работу аналитики согласно{" "}
                <Link href="/privacy" className="text-sky-600 hover:text-sky-700 underline underline-offset-2 transition-colors">
                  политике конфиденциальности
                </Link>
                .
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={acceptCookies}
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md shadow-sky-500/20 active:scale-95"
                >
                  Хорошо
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={dismissBanner}
              className="text-slate-500 hover:text-slate-700 transition-colors p-2.5 -m-1 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Отказаться и закрыть"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
