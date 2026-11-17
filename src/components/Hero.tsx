"use client";

import { motion } from "framer-motion";
import { gym } from "@/data/content";

export default function Hero() {
  return (
    <section className="pt-[88px] bg-iron">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px] py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lime text-xs font-bold tracking-wide"
          >
            {gym.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-extrabold text-4xl sm:text-5xl lg:text-[62px] leading-[1.05] text-snow"
          >
            ALLENA IL TUO
            <br />
            POTENZIALE.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-fog text-[15px] md:text-[17px] leading-relaxed max-w-md"
          >
            {gym.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-[6px] bg-lime px-5 text-xs font-bold text-ink hover:bg-lime-soft transition"
            >
              INIZIA CON UNA PROVA
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center rounded-[6px] bg-iron-muted px-5 text-xs font-bold text-snow hover:bg-iron-card transition"
            >
              SCOPRI I CORSI
            </a>
          </motion.div>
          <p className="mt-6 text-lime text-xs font-bold whitespace-pre-wrap">{gym.rating}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-[14px] overflow-hidden min-h-[380px] md:min-h-[470px] bg-iron-card"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
            alt="Allenamento in palestra"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iron via-iron/50 to-iron/20" />

          <div className="relative z-10 h-full min-h-[380px] md:min-h-[470px] p-6 md:p-7 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-lime text-xs font-bold">TRAIN HARD</span>
              <span className="text-fog text-[11px] font-bold">01 / 03</span>
            </div>

            <div>
              <h2 className="font-extrabold text-4xl md:text-[54px] leading-none text-snow drop-shadow">
                NO
                <br />
                EXCUSES.
              </h2>
              <div className="mt-6 h-2 w-full max-w-[420px] rounded bg-lime" />
              <div className="mt-4 flex items-end justify-between gap-4">
                <p className="text-fog text-[11px] font-bold tracking-wide">
                  STRENGTH &nbsp;/&nbsp; FOCUS &nbsp;/&nbsp; PROGRESS
                </p>
                <div className="shrink-0 rounded-[8px] bg-lime px-3 py-2 text-center text-ink">
                  <p className="font-extrabold text-2xl leading-none">100%</p>
                  <p className="text-[9px] font-bold mt-1">DEDIZIONE</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
