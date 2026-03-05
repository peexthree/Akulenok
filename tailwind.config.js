const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        // Soft pastel colors based on prompt
        aqua: {
          background: "#F0FDF4", // teal-50 equivalent
          accent: "#0EA5E9", // sky-500
          dark: "#0F172A", // slate-900 for texts
          light: "#E0F2FE", // sky-100
          warm: "#F8FAFC", // slate-50
          DEFAULT: "#0EA5E9",
        },
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(14, 165, 233, 0.15)',
        'glass': '0 8px 32px 0 rgba(14, 165, 233, 0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
