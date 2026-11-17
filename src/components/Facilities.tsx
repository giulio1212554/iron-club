"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { facilities } from "@/data/content";

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-iron">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80"
            alt="Strutture IRON CLUB"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
        <div>
          <p className="text-cyan text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Strutture
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            TUTTO QUELLO CHE TI SERVE
          </h2>
          <ul className="mt-8 space-y-4">
            {facilities.map((f) => (
              <li key={f} className="flex items-center gap-3 text-white/80">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
