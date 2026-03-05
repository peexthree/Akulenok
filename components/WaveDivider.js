import React from "react";

const WaveDivider = ({ color = "fill-sky-50", flip = false }) => {
  return (
    <div className={`w-full leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        className="relative block w-full h-[60px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.7,56.33,101.45,56.43,152.12,52.2c52.81-4.4,105.91-10.76,158.82-14.73Z"
          className={color}
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
