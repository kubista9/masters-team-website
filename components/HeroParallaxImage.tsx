"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

// How far the image can drift from center, in pixels.
const MAX_SHIFT = 10;

export default function HeroParallaxImage() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const frame = frameRef.current;
      if (!frame) return;

      const rect = frame.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;

      setShift({ x: relX * MAX_SHIFT * -2, y: relY * MAX_SHIFT * -2 });
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setShift({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pixel-border pixel-shadow-accent relative h-[280px] w-full flex-shrink-0 overflow-hidden sm:h-[360px] lg:h-[480px] lg:flex-1 lg:self-stretch"
    >
      <div
        className="absolute -inset-3 transition-transform duration-150 ease-out"
        style={{ transform: `translate(${shift.x}px, ${shift.y}px)` }}
      >
        <Image
          src="/hero-saxion.jpg"
          alt="Pixel-art illustration of the Saxion University building"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-fill"
        />
      </div>
    </div>
  );
}
