"use client";

import { useEffect, useRef } from "react";

// Sits at the Hero -> Project boundary. Starts empty and fills left to
// right as you scroll it into view - driven directly by scroll position,
// not a timer and not a one-shot trigger.
export default function HealthBarDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const updateFill = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Starts filling once its top reaches 85% down the viewport (just
      // entering from below) and is fully filled by the time its top
      // reaches 15% down the viewport.
      const startY = viewportHeight * 0.85;
      const endY = viewportHeight * 0.15;
      const progress = (startY - rect.top) / (startY - endY);
      const clamped = Math.min(1, Math.max(0, progress));

      node.style.setProperty("--fill-percent", `${clamped * 100}%`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateFill);
    };

    updateFill();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="section-divider section-divider-healthbar"
    />
  );
}
