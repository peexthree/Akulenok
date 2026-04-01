const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        },
        mesh: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
        mesh: 'mesh 15s ease infinite',
        blob: 'blob 7s infinite',
      },
      colors: {
        // Используем современные имена цветов
        neutral: colors.neutral,
        aqua: {
          50: "#F0FDF4",
          100: "#E0F2FE",
          500: "#0EA5E9",
          900: "#0F172A",
          DEFAULT: "#0EA5E9",
        },
      },
      fontFamily: {
        // Связываем с переменной из _app.js
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      boxShadow: {
        // Глубокая "водная" тень
        'soft': '0 20px 40px -15px rgba(14, 165, 233, 0.15), 0 10px 20px -10px rgba(45, 212, 191, 0.1)',
        // Эффект дорогого Apple-стекла
        'glass': '0 8px 32px 0 rgba(14, 165, 233, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
        'heavy': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem', // Для очень мягких карточек
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),

    // aspect-ratio удален, так как он встроен в ядро
  ],
};
