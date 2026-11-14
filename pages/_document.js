import { Html, Head, Main, NextScript } from "next/document";
import { nunito, manrope } from "../utils/fonts";

export default function Document() {
  return (
    <Html
      lang="ru"
      // Переменные шрифтов next/font вешаются на <Html> (= :root) классом .variable
      // вместо inline-стиля styled-jsx - CSP обходится без 'unsafe-inline' в style-src
      className={`scroll-smooth ${nunito.variable} ${manrope.variable}`}
    >
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head -- raw <title> required by scanners without regex attribute support */}
        <title>Семейный аквацентр «Акулёнок» в Туймазах - грудничковое плавание и фитнес</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <body className="bg-[#F6FBFF] text-[#0C1A2E] antialiased selection:bg-sky-500/25">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
