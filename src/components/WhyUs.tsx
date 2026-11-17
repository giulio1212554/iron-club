"use client";

import { benefits } from "@/data/content";

export default function WhyUs() {
  return (
    <section id="why" className="bg-iron-card py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px] grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lime text-xs font-bold">PERCHÉ SCEGLIERE NOI</p>
          <h2 className="mt-3 font-extrabold text-3xl md:text-[38px] leading-tight text-snow">
            NON È SOLO ALLENAMENTO.
            <br />
            È IL TUO MOMENTO.
          </h2>
          <p className="mt-5 text-fog text-[15px] max-w-md">
            Ambiente curato, supporto concreto e una community che ti spinge a dare il meglio.
          </p>
          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-3 items-start">
                <span className="mt-1.5 size-2.5 rounded-[5px] bg-lime shrink-0" />
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-[13px] font-bold text-snow">{b.title}</span>
                  <span className="text-[12px] text-fog">{b.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-xl overflow-hidden min-h-[320px] bg-iron">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1000&q=80"
            alt="Atleta in allenamento"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iron via-iron/70 to-iron/30" />
          <div className="relative z-10 p-8 min-h-[320px] flex flex-col justify-end">
            <p className="text-lime text-xs font-bold">IL TUO PERCORSO</p>
            <h3 className="mt-3 font-extrabold text-3xl md:text-[40px] leading-none text-snow">
              DISCIPLINA
              <br />
              OGNI GIORNO.
            </h3>
            <div className="mt-8 h-[7px] w-full max-w-[420px] rounded bg-lime" />
            <p className="mt-4 text-[13px] text-fog">Piccoli progressi. Grandi cambiamenti.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
