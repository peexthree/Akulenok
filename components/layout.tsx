import React from "react";
import OceanBackground from "./OceanBackground";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <OceanBackground />
      {children}
    </div>
  );
}