import "../css/tailwind.css";
import { Nunito } from "next/font/google";
import Layout from "../components/layout";
import { SharkProvider } from "../components/SharkProvider"; 
import Head from "next/head";

// Настройка шрифта с поддержкой всех необходимых начертаний
export const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#7dd3fc" />
        {/* Базовые SEO-теги, которые будут на всех страницах */}
        <meta name="robots" content="index, follow" />
      </Head>

      <SharkProvider>
        {/* Применение шрифта к корневому элементу гарантирует 
            его наличие во всех модальных окнах и порталах */}
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
