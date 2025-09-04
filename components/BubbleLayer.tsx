import React, { useEffect, useRef } from "react";

const BubbleLayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function spawnBubble() {
      const bubble = document.createElement("span");
      bubble.className = "bubble";
      const size = Math.random() * 40 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 5 + 3}s`;
      bubble.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(bubble);
      bubble.addEventListener("animationend", () => bubble.remove());
    }

    const interval = setInterval(spawnBubble, 500);

    let lastScrollTop = window.pageYOffset;
    const onScroll = () => {
      const current = window.pageYOffset;
      const speed = Math.abs(current - lastScrollTop);
      if (speed > 50) spawnBubble();
      lastScrollTop = current;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 overflow-hidden" />;
};

export default BubbleLayer;