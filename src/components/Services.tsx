"use client";

import { services } from "@/data/content";

const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
];

export default function Services() {
  return (
    <section id="services" className="bg-iron py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        <p className="text-lime text-xs font-bold">IL METODO IRON CLUB</p>
        <h2 className="mt-3 font-extrabold text-3xl md:text-[38px] leading-tight text-snow max-w-3xl">
          TUTTO QUELLO CHE TI SERVE.
          <br />
          IN UN SOLO POSTO.
        </h2>
        <p className="mt-5 text-fog text-[15px] max-w-2xl">
          Dalla prima sessione al prossimo traguardo: trovi il percorso giusto per te.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="rounded-card bg-iron-card overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[i]}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron-card/80 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-lime text-[13px] font-bold">{s.n}</span>
                  <span className="text-fog text-[10px] font-bold">{s.tag}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-snow">{s.title}</h3>
                <p className="mt-2 text-[13px] text-fog flex-1">{s.desc}</p>
                <a href="#plans" className="mt-4 text-lime text-[11px] font-bold hover:underline">
                  SCOPRI DI PIÙ &nbsp;↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
