"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../css/tailwind.css";
import { Nunito } from "next/font/google";
import Layout from "../components/layout";
import { SharkProvider } from "../components/SharkProvider"; 
import Head from "next/head";

export const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

// 1. Компонент заставки
const LoadingScreen = () => (
  <motion.div
    key="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
  >
    {/* Анимированный текст АКУЛЁНОК */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col items-center"
    >
      <h1 className="text-5xl sm:text-7xl font-black text-sky-500 tracking-tighter mb-2">
        Акулёнок
      </h1>
      <div className="h-1.5 w-12 bg-sky-200 rounded-full animate-pulse" />
    </motion.div>
  </motion.div>
);

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ждем 2 секунды или до полной загрузки страницы
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#7dd3fc" />
        <meta name="robots" content="index, follow" />
      </Head>

      <SharkProvider>
        <div className={`${nunito.variable} font-nunito antialiased text-slate-900`}>
          {/* AnimatePresence отвечает за плавное исчезновение лоадера */}
          <AnimatePresence mode="wait">
            {isLoading && <LoadingScreen />}
          </AnimatePresence>

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </SharkProvider>
    </>
  );
}

export default MyApp;
