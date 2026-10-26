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

        {/* SEO и Open Graph для соцсетей (Telegram, WhatsApp, VK) */}
        <meta name="description" content="Детский бассейн и центр гидрореабилитации «Акулёнок» в г. Туймазы: грудничковое плавание с 3 месяцев, опытные тренеры, чистая вода." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Акулёнок" />
        <meta property="og:title" content="Акулёнок • Центр грудничкового плавания • Туймазы" />
        <meta property="og:description" content="Грудничковое плавание с 3 месяцев, гидрореабилитация, оздоровительные программы для малышей в г. Туймазы." />
        <meta property="og:url" content="https://akulenok-tmz.ru/" />
        <meta property="og:image" content="https://akulenok-tmz.ru/img/look.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://akulenok-tmz.ru/" />
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
