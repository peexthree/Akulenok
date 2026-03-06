/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      // Добавляем разрешения для Unsplash и будущих скриптов
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.yandex.ru; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https://images.unsplash.com https://*.yandex.net; " +
      "font-src 'self' data: https://fonts.gstatic.com; " +
      "object-src 'none'; " +
      "frame-ancestors 'none'; " +
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
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  // 1. Исправляем SEO: теперь роботы знают, что мы в RU-сегменте
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },

  // 2. Разрешаем внешние изображения для компонента <Image />
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Оптимизация сборки
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

export default nextConfig;
