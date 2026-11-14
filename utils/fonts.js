import { Nunito, Manrope } from "next/font/google";

// Шрифты вынесены в общий модуль: переменные классов .variable вешаются
// на <Html> в _document.js, поэтому CSP обходится без 'unsafe-inline' в style-src
export const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
