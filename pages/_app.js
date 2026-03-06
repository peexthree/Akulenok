import "../css/tailwind.css";
import { Nunito } from "next/font/google";
import Layout from "../components/layout";
import { SharkProvider } from "../components/SharkProvider"; // Глобальные пасхалки
import Head from "next/head";

export const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"], // Добавил 900 для black-заголовков
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Оптимизация под мобильные флагманы (S25 Ultra) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#7dd3fc" />
      </Head>

      {/* 1. SharkProvider теперь снаружи — пасхалки работают ВЕЗДЕ.
         2. Шрифт применяется к обертке, которая включает в себя Layout (Navbar/Footer).
      */}
      <SharkProvider>
        <div className={`${nunito.variable} font-nunito antialiased text-slate-900`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </SharkProvider>
    </>
  );
}

export default MyApp;
