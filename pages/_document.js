import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru" className="scroll-smooth">
      <Head>
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
