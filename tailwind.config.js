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

        // 🔹 Добавляем свой небесный цвет для аквацентра
        aqua: {
          light: "#E0F7FA", // очень светлый
          DEFAULT: "#87CEEB", // небесно-голубой
          dark: "#00BFFF", // насыщенный голубой
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
