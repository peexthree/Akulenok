"use client";

import React, { useEffect, useRef, useState } from "react";
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
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [ref, onClose]);
}

export default function PopupWidget() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasConsent, setHasConsent] = useState(true);
  const panelRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookieConsent");
      setHasConsent(Boolean(consent));

      const handleConsent = () => setHasConsent(true);
      window.addEventListener("cookieConsentGiven", handleConsent);
      return () => window.removeEventListener("cookieConsentGiven", handleConsent);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowHint(true);
    }, 150000);
    return () => clearTimeout(timer);
  }, [open]);

  const toggle = () => {
    setOpen((v) => !v);
    setShowHint(false);
  };

  useClickOutside(panelRef, () => setOpen(false));

  const actionLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: COMPANY_DETAILS.whatsapp,
      color: "bg-green-500/10 text-green-600 border-green-200 hover:bg-green-500 hover:text-white",
    },
    {
      name: "Telegram",
      icon: PaperAirplaneIcon,
      href: COMPANY_DETAILS.telegram,
      color: "bg-sky-500/10 text-sky-600 border-sky-200 hover:bg-sky-500 hover:text-white",
    },
    {
      name: "Позвонить",
      icon: PhoneIcon,
      href: `tel:${COMPANY_DETAILS.phoneRaw}`,
      color: "bg-orange-500/10 text-orange-600 border-orange-200 hover:bg-orange-500 hover:text-white",
    },
  ];

  return (
    <div
      className={clsx(
        "fixed right-6 z-[100] transition-all duration-300",
        hasConsent ? "bottom-6" : "bottom-36 sm:bottom-36"
      )}
    >
      {/* Облачко-подсказка */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 mb-4 w-48 bg-white p-3 rounded-2xl shadow-xl border border-sky-100 text-sm font-bold text-slate-700 pointer-events-none"
          >
            Привет! 👋 <br />Связаться с нами:
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-sky-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Основная кнопка (FAB) */}
      <button
        onClick={toggle}
        aria-label="Связаться с нами"
        className={clsx(
          "h-14 w-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300",
          "bg-gradient-to-br from-blue-400 via-sky-500 to-white-500 text-white",
          open ? "rotate-90 scale-90" : "hover:scale-110 active:scale-90"
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
              <XMarkIcon className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
            >
              <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Панель мессенджеров */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-2xl border border-white flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 mb-1">
              <div className="relative w-14 h-14 shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src="/img/shark-code.gif"
                  alt="Shark typing"
                  fill
                  unoptimized
                  className="object-contain scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-slate-800 leading-tight">Акулёнок</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">На связи</p>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 font-bold text-sm",
                    link.color
                  )}
                >
                  <link.icon className="h-5 w-5" />
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
