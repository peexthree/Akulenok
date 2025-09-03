import React from "react";
import OceanBackground from "./OceanBackground";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <OceanBackground />
       {/* Полупрозрачный слой с размытием для улучшения читаемости текста */}
      <div className="relative z-10 backdrop-blur-md bg-white/30 dark:bg-aqua-dark/25">
        {children}
      </div>
    </div>
  );
}