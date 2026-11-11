/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://mc.yandex.ru https://*.yandex.ru https://yastatic.net; " +
      "style-src 'self' 'unsafe-inline' https://yastatic.net; " +
      "img-src 'self' data: blob: https://mc.yandex.ru https://mc.yandex.com https://mc.webvisor.com https://mc.webvisor.org https://yastatic.net https://*.yandex.net https://*.yandex.ru; " +
      "font-src 'self' data: https://fonts.gstatic.com; " +
      "connect-src 'self' https://mc.yandex.ru https://mc.yandex.com wss://mc.yandex.ru wss://mc.yandex.com https://mc.webvisor.com https://mc.webvisor.org wss://mc.webvisor.com wss://mc.webvisor.org; " +
      "frame-src 'self' blob: https://yandex.ru https://*.yandex.ru; " +
      "child-src 'self' blob: https://mc.yandex.ru https://*.yandex.ru; " +
      "worker-src 'self' blob:; " +
      "media-src 'self'; " +
      "object-src 'none'; " +
      "frame-ancestors 'self' https://metrika.yandex.ru https://*.metrika.yandex.ru https://metrika.yandex.com https://metrika.yandex.by https://metrika.yandex.kz https://webvisor.com https://*.webvisor.com; " +
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
      {
        source: "/(.*)",
        locale: false,
        has: [
          {
            type: "host",
            value: ".*\\.vercel\\.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "akulenok-tmz\\.ru",
          },
        ],
        destination: "https://www.akulenok-tmz.ru/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
