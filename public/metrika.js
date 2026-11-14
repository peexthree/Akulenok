// Яндекс.Метрика, счётчик 114248302.
// Вынесен в отдельный файл, чтобы CSP script-src обходился без
// 'unsafe-inline' и 'unsafe-eval' (см. next.config.js).
// Загружается через <Script src="/metrika.js"> в pages/_app.js
// только после согласия на cookie (cookieConsent === "true").
(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
  m[i].l = 1 * new Date();
  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
  k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=114248302', 'ym');

ym(114248302, 'init', {
  ssr: true,
  webvisor: true,
  clickmap: true,
  ecommerce: "dataLayer",
  referrer: document.referrer,
  url: location.href,
  accurateTrackBounce: true,
  trackLinks: true,
});
