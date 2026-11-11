import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import "../css/tailwind.css";
import { Nunito } from "next/font/google";
import Layout from "../components/Layout";
import { SharkProvider } from "../components/SharkProvider";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

export const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Премиальная стартовая заставка (SEO-безопасная: без <h1> и aria-hidden)
const LoadingScreen = () => (
  <motion.div
    key="loader"
    aria-hidden="true"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.65, ease: "easeInOut" }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 via-white to-sky-50 pointer-events-none select-none"
  >
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="flex flex-col items-center"
    >
      <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-sky-400 mb-3">
        Семейный аквацентр
      </span>
      <div className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-sky-500 via-blue-500 to-teal-400 bg-clip-text text-transparent tracking-tighter mb-4">
        Акулёнок
      </div>
      <div className="w-36 h-1.5 bg-sky-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
          className="h-full w-full bg-gradient-to-r from-sky-400 to-teal-400 rounded-full"
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
        window.ym(108276956, "hit", url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, isConsentGiven]);

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

            ym(108276956, 'init', {
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
          <div className={`${nunito.variable} font-nunito antialiased text-slate-900`}>
            {isConsentGiven && (
              <noscript>
                <div>
                  <img
                    src="https://mc.yandex.ru/watch/108276956"
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
