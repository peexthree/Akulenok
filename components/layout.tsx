import React from "react";
import dynamic from "next/dynamic";

const PopupWidget = dynamic(() => import("./popupWidget"), { ssr: false });

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-aqua-warm text-aqua-dark font-nunito">
      <div className="relative z-10 bg-white/40 backdrop-blur-3xl min-h-screen">
        {children}
      </div>
      <PopupWidget />
    </div>
  );
}
