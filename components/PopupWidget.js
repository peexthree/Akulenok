import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftEllipsisIcon,
  XMarkIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import { COMPANY_DETAILS } from "../config/company";

function useClickOutside(ref, onClose) {
  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handle);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("keydown", handleKey);
    };
  }, [ref, onClose]);
}

const actionLinks = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: COMPANY_DETAILS.whatsapp,
    external: true,
    color: "bg-green-500/10 text-green-700 border-green-200 hover:bg-green-500 hover:text-white",
  },
  {
    name: "Telegram",
    icon: PaperAirplaneIcon,
    href: COMPANY_DETAILS.telegram,
    external: true,
    color: "bg-sky-500/10 text-sky-700 border-sky-200 hover:bg-sky-500 hover:text-white",
  },
  {
    name: "Позвонить",
    icon: PhoneIcon,
    href: `tel:${COMPANY_DETAILS.phoneRaw}`,
    external: false,
    color: "bg-orange-500/10 text-orange-700 border-orange-200 hover:bg-orange-500 hover:text-white",
  },
];

export default function PopupWidget() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isBannerClosed, setIsBannerClosed] = useState(true);
  const widgetRef = useRef(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setIsBannerClosed(Boolean(consent));

    const handleBannerClosed = () => setIsBannerClosed(true);
    window.addEventListener("cookieConsentGiven", handleBannerClosed);
    window.addEventListener("cookieBannerClosed", handleBannerClosed);
    return () => {
      window.removeEventListener("cookieConsentGiven", handleBannerClosed);
      window.removeEventListener("cookieBannerClosed", handleBannerClosed);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowHint(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [open]);

  const closePopup = useCallback(() => setOpen(false), []);
  useClickOutside(widgetRef, closePopup);

  const toggle = () => {
    setOpen((v) => !v);
    setShowHint(false);
  };

  return (
    <div
      ref={widgetRef}
      className={clsx(
        "fixed right-6 z-[100] transition-all duration-300",
        isBannerClosed ? "bottom-6" : "bottom-40 sm:bottom-36"
      )}
    >
      {/* Облачко-подсказка */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 16 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="absolute bottom-16 right-0 mb-3 w-52 bg-white p-3.5 rounded-2xl shadow-xl border border-sky-100 text-sm font-bold text-slate-700 pointer-events-none"
          >
            Привет! 👋 <br />Связаться с нами:
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-sky-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Основная кнопка (FAB) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Закрыть окно связи" : "Связаться с нами"}
        aria-expanded={open}
        className={clsx(
          "h-14 w-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300",
          "bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 text-white",
          open ? "rotate-90 scale-95" : "hover:scale-110 active:scale-90"
        )}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
            >
              <ChatBubbleLeftEllipsisIcon className="h-6 w-6" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Панель мессенджеров */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Способы связи"
            initial={{ opacity: 0, y: 16, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-2xl border border-sky-100 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 mb-1">
              <div className="relative w-14 h-14 shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src="/img/shark-code.gif"
                  alt="Акулёнок на связи"
                  fill
                  sizes="56px"
                  unoptimized
                  className="object-contain scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-slate-900 leading-tight">Акулёнок</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                  <p className="text-[11px] uppercase tracking-wider text-slate-600 font-bold">На связи</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 font-medium">
              Выберите удобный способ связи, чтобы позвонить или написать нам:
            </p>

            <div className="flex flex-col gap-2.5">
              {actionLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={clsx(
                    "flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 font-bold text-sm",
                    link.color
                  )}
                >
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
