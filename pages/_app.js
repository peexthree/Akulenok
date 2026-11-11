import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import "../css/tailwind.css";
import { Nunito, Manrope } from "next/font/google";
import Layout from "../components/Layout";
import { SharkProvider } from "../components/SharkProvider";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { YM_COUNTER_ID, handleTrackedLinkClick } from "../utils/metrika";

export const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Премиальная стартовая заставка (Liquid Glass + Aqua-Rose, без <h1> и aria-hidden)
const LoadingScreen = () => (
  <motion.div
    key="loader"
    aria-hidden="true"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.65, ease: "easeInOut" }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F6FBFF] pointer-events-none select-none overflow-hidden"
  >
    <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="relative z-10 flex flex-col items-center"
    >
      <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-sky-600 mb-3">
        Семейный аквацентр
      </span>
      <div className="font-display text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-sky-500 via-indigo-400 to-rose-500 bg-clip-text text-transparent tracking-tight mb-5">
        Акулёнок
      </div>
      <div className="w-40 h-1.5 bg-sky-100 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
          className="h-full w-full bg-gradient-to-r from-sky-500 via-indigo-400 to-rose-500 rounded-full"
        />
      </div>
    </motion.div>
  </motion.div>
);

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage.getItem("cookieConsent") === "true") {
      setIsConsentGiven(true);
    }

    const handleConsentEvent = () => setIsConsentGiven(true);
    window.addEventListener("cookieConsentGiven", handleConsentEvent);

    return () => window.removeEventListener("cookieConsentGiven", handleConsentEvent);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== "undefined" && window.ym && isConsentGiven) {
        window.ym(YM_COUNTER_ID, "hit", url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, isConsentGiven]);

  useEffect(() => {
    if (!isConsentGiven) return undefined;

    document.addEventListener("click", handleTrackedLinkClick);
    return () => document.removeEventListener("click", handleTrackedLinkClick);
  }, [isConsentGiven]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="robots" content="index, follow" />
      </Head>

      <style jsx global>{`
        :root {
          --font-nunito: ${nunito.style.fontFamily};
          --font-display: ${manrope.style.fontFamily};
        }
      `}</style>

      {isConsentGiven && (
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(${YM_COUNTER_ID}, 'init', {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
      )}

      <MotionConfig reducedMotion="user">
        <SharkProvider>
          <div className={`${nunito.variable} ${manrope.variable} font-nunito antialiased text-[#0C1A2E]`}>
            {isConsentGiven && (
              <noscript>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element -- noscript tracking pixel requires raw img */}
                  <img
                    src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                  />
                </div>
              </noscript>
            )}

            <AnimatePresence mode="wait">
              {isLoading && <LoadingScreen />}
            </AnimatePresence>

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </SharkProvider>
      </MotionConfig>
    </>
  );
}

export default MyApp;
