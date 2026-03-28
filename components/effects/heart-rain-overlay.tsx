'use client';

import { useEffect, useMemo } from 'react';
import type { CSSProperties } from 'react';

const HEART_COUNT = 28;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function HeartRainOverlay({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onComplete, 5000);
    return () => window.clearTimeout(t);
  }, [onComplete]);

  const hearts = useMemo(
    () =>
      Array.from({ length: HEART_COUNT }, (_, i) => ({
        id: i,
        left: randomBetween(2, 98),
        dur: randomBetween(2.8, 5.2),
        delay: randomBetween(0, 1.8),
        drift: randomBetween(-40, 40),
        rot: randomBetween(-20, 24),
        size: randomBetween(14, 26),
      })),
    []
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none z-9999 overflow-hidden"
      aria-hidden
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute top-0 select-none text-[#e84b6a] drop-shadow-sm"
          style={
            {
              left: `${h.left}%`,
              fontSize: h.size,
              lineHeight: 1,
              '--heart-drift': `${h.drift}px`,
              '--heart-rot': `${h.rot}deg`,
              animation: `heart-rain-fall ${h.dur}s ease-in ${h.delay}s forwards`,
            } as CSSProperties
          }
        >
          ♥
        </span>
      ))}
    </div>
  );
}
