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
          "100%": { transform: "translateX(100%)" },
        },
        mesh: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        mesh: "mesh 15s ease infinite",
        blob: "blob 7s infinite",
      },
      colors: {
        neutral: colors.neutral,
        ice: "#F6FBFF",
        ocean: "#0C1A2E",
        aqua: {
          50: "#ECF8FF",
          100: "#E0F2FE",
          500: "#0EA5E9",
          600: "#0284C7",
          900: "#0C1A2E",
          DEFAULT: "#0EA5E9",
        },
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        display: ["var(--font-display)", "var(--font-nunito)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 40px -15px rgba(14, 165, 233, 0.12), 0 8px 20px -12px rgba(12, 26, 46, 0.06)",
        glass: "0 8px 32px 0 rgba(14, 165, 233, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.7)",
        heavy: "0 25px 50px -12px rgba(12, 26, 46, 0.16)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
