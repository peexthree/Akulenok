const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        // Нейтральные оттенки
        trueGray: colors.neutral,

          // 🔹 Палитра аквамарина: фон, акцент и тёмный текст
        aqua: {
         background: "#E0F7FA", // очень светлый фон
          accent: "#0077B6", // основной акцент
          dark: "#003B46", // тёмный текст
          DEFAULT: "#0077B6", // значение по умолчанию
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
