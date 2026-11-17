"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-iron">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Recensioni
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            DICONO DI NOI
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-iron-700 p-6"
            >
              <p className="text-white/80 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-4 text-cyan text-sm font-semibold">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
