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
      
      {/* ВАЖНО: font-nunito подтянется автоматически, 
          так как в _app.js мы обернули все в div с этой переменной.
      */}
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-sky-500/30">
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108276956" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
