const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      keyframes: {
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
        mesh: 'mesh 15s ease infinite',
        blob: 'blob 7s infinite',
      },
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
        'soft': '0 20px 40px -15px rgba(14, 165, 233, 0.15), 0 10px 20px -10px rgba(45, 212, 191, 0.1)',
        'glass': '0 8px 32px 0 rgba(14, 165, 233, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',


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
