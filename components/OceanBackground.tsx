import React from "react";

const OceanBackground = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-[#E6F7FB] bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: "url('/ocean-bg.webp')" }}
  />
);

export default OceanBackground;