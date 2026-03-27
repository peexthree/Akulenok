"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../css/tailwind.css";
import { Nunito } from "next/font/google";
import Layout from "../components/layout";
import { SharkProvider } from "../components/SharkProvider"; 
import Head from "next/head";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    // Ждем 2 секунды или до полной загрузки страницы
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.ym) {
        window.ym(108276956, 'hit', url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#7dd3fc" />
        <meta name="robots" content="index, follow" />

        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108276956', 'ym');

              ym(108276956, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `
          }}
        />
      </Head>

      <SharkProvider>
        <div className={`${nunito.variable} font-nunito antialiased text-slate-900`}>

        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108276956" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
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
