import React from "react";

const WaveDivider = ({ color = "fill-sky-50", flip = false }) => {
  return (
    <div className={`w-full leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        className="relative block w-full h-[100px] sm:h-[150px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160 C320,300 420,0 720,160 C1020,320 1120,20 1440,160 V0 H0 Z"
          className={color}
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
