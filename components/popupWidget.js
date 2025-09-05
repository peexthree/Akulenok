"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import clsx from "clsx";

function PopupWidget() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const buttonClasses = clsx(
    "fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg transition-all duration-300",
    open ? "bg-red-500 text-white hover:bg-red-600" : "bg-indigo-600 text-white hover:bg-indigo-500"
  );

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <>
      <button onClick={toggleOpen} className={buttonClasses} aria-label="Toggle chat widget">
        <span className="sr-only">
          {open ? "Закрыть виджет" : "Открыть виджет"}
        </span>
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftIcon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 w-72 z-50 rounded-lg bg-white shadow-xl p-4 border dark:bg-trueGray-800 dark:border-trueGray-700"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Напишите нам
            </h3>
            <p className="text-sm text-gray-600 mt-2 dark:text-gray-400">
              Мы ответим на ваш вопрос в ближайшее время.
            </p>
            <div className="mt-4 grid gap-3">
              <a
                href="https://wa.me/79273039977"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded bg-green-500 px-4 py-2 text-center text-white font-medium hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+79273039977"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded bg-blue-500 px-4 py-2 text-center text-white font-medium hover:bg-blue-600 transition"
              >
                Telegram
              </a>
 <a
                href="tel:+79273039977"
                className="block w-full rounded bg-blue-500 px-4 py-2 text-center text-white font-medium hover:bg-blue-600 transition"
              >
                Позвонить
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default React.memo(PopupWidget);