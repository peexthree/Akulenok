/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://mc.yandex.ru https://*.yandex.ru https://yastatic.net; " +
      "style-src 'self' 'unsafe-inline' https://yastatic.net; " +
      "img-src 'self' data: blob: https://mc.yandex.ru https://mc.yandex.com https://*.yandex.net https://*.yandex.ru; " +
      "font-src 'self' data: https://fonts.gstatic.com; " +
      "connect-src 'self' https://mc.yandex.ru https://mc.yandex.com wss://mc.yandex.ru wss://mc.yandex.com; " +
      "frame-src 'self' https://yandex.ru https://*.yandex.ru; " +
      "media-src 'self'; " +
      "object-src 'none'; " +
      "frame-ancestors 'self' https://metrika.yandex.ru https://*.metrika.yandex.ru https://metrika.yandex.by https://metrika.yandex.kz https://webvisor.com https://*.webvisor.com; " +
      "base-uri 'self'",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },

  images: {
    unoptimized: false,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        locale: false,
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
