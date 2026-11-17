"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-iron-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Chi siamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide leading-tight">
            NON È UNA PALESTRA.
            <br />
            <span className="text-cyan">È UN CLUB.</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-lg">
            IRON CLUB è pensata per chi vuole risultati concreti: forza, composizione
            corporea e performance. Niente distrazioni, attrezzature di livello e un team
            che ti segue passo dopo passo.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              ["500+", "Membri"],
              ["12", "Coach"],
              ["7", "Giorni / sett."],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-cyan">{n}</p>
                <p className="text-sm text-white/50 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80"
            alt="Allenamento IRON CLUB"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
