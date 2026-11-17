"use client";

import { stats } from "@/data/content";
import CountUp from "@/components/CountUp";

export default function Stats() {
  return (
    <section className="bg-iron-card">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px] py-10 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <CountUp
              value={s.value}
              className="font-extrabold text-[28px] md:text-[29px] text-lime tabular-nums"
            />
            <p className="mt-1 text-[11px] font-bold text-fog tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
