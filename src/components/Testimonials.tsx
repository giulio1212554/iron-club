"use client";

import { testimonials } from "@/data/content";

const avatars = [
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
];

export default function Testimonials() {
  return (
    <section className="bg-iron-card py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        <p className="text-lime text-xs font-bold">LA COMMUNITY PARLA</p>
        <h2 className="mt-3 font-extrabold text-3xl md:text-[38px] text-snow">
          IL CAMBIAMENTO SI VEDE.
        </h2>
        <p className="mt-4 text-fog text-[15px] max-w-2xl">
          Storie di persone che hanno scelto di mettersi in movimento.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className="rounded-card bg-iron p-5 min-h-[140px] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatars[i]}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <p className="text-[12px] font-bold text-snow">{t.name}</p>
                  <p className="text-[11px] text-fog">{t.meta}</p>
                </div>
              </div>
              <p className="text-lime text-sm tracking-wide">★★★★★</p>
              <p className="mt-2 text-[13px] text-snow leading-relaxed flex-1">
                “{t.text}”
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
