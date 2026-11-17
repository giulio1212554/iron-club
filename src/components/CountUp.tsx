"use client";

import { useEffect, useRef, useState } from "react";

function parseTarget(raw: string): { end: number; suffix: string; decimals: number } {
  const cleaned = raw.replace(/\s/g, "");
  // 1.200+ → 1200, 24/7 stays special, 35+, 98%, 12
  if (cleaned.includes("/")) {
    return { end: 0, suffix: cleaned, decimals: 0 }; // handled as static label
  }
  const m = cleaned.match(/^([\d.,]+)(.*)$/);
  if (!m) return { end: 0, suffix: raw, decimals: 0 };
  const numStr = m[1].replace(/\./g, "").replace(",", ".");
  const end = parseFloat(numStr) || 0;
  const suffix = m[2] || "";
  const decimals = m[1].includes(",") ? 1 : 0;
  return { end, suffix, decimals };
}

function formatItalian(n: number, decimals: number): string {
  if (decimals > 0) {
    return n.toFixed(decimals).replace(".", ",");
  }
  return Math.round(n).toLocaleString("it-IT");
}

export default function CountUp({
  value,
  className,
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const { end, suffix, decimals } = parseTarget(value);

    // Static values like 24/7
    if (end === 0 && suffix === value.replace(/\s/g, "")) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const from = 0;

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          const current = from + (end - from) * eased;
          setDisplay(`${formatItalian(current, decimals)}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
