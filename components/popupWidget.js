"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftIcon,
  XMarkIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";import clsx from "clsx";

// Close panel when clicking outside of it
function useClickOutside(onClose) {
  const ref = useRef(null);
  useEffect(() => {
    function handle(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);
  return ref;
}

export default function PopupWidget() {
  const [open, setOpen] = useState(false);
const [hasInteracted, setHasInteracted] = useState(false);

  const toggle = () => {
    setOpen((v) => !v);
    setHasInteracted(true);
  };

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const panelRef = useClickOutside(() => setOpen(false));

  const fabClasses = clsx(
    "fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center",
    "h-14 w-14 rounded-full shadow-2xl ring-1 ring-black/5",
    "bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500",
    "text-white transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300",
    open ? "scale-100" : "hover:scale-105 active:scale-95"
  );

  return (
    <>
    {/* Floating Action Button */}
      <button
        aria-label={open ? "Закрыть чат" : "Открыть чат"}
        onClick={toggle}
        className={fabClasses}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ChatBubbleLeftIcon className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

 {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
             ref={panelRef}
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={clsx(
              "fixed bottom-24 right-6 z-[50] w-80 max-w-[calc(100vw-2rem)]",
              "rounded-xl bg-white/70 p-4 shadow-lg backdrop-blur-md ring-1 ring-black/10",
              "dark:bg-gray-800/70 dark:ring-white/10",
              "flex flex-col gap-3"
            )}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Напишите нам
            </h3>
           <p className="text-sm text-gray-600 dark:text-gray-400">
              Мы ответим на ваш вопрос в ближайшее время.
            </p>
           <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/79273039977"
                target="_blank"
                rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
              >
<FaWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="https://t.me/+79273039977"
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 transition"
              >
 <PaperAirplaneIcon className="h-5 w-5" />
                Telegram
              </a>
 <a
                href="tel:+79273039977"
                className="block w-full rounded bg-blue-500 px-4 py-2 text-center text-white font-medium hover:bg-blue-600 transition"
              >
 <PhoneIcon className="h-5 w-5" />
                Позвонить
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

