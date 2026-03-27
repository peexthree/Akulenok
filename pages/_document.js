import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru" className="scroll-smooth">
      <Head>
        {/* Стандартные иконки */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        
        {/* Настройка шрифтов и кодировки */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Преконнекты для ускорения (если есть внешние ресурсы) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />


      </Head>
      
      {/* ВАЖНО: font-nunito подтянется автоматически, 
          так как в _app.js мы обернули все в div с этой переменной.
      */}
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-sky-500/30">

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
