"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-iron border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">
            Proven Numbers. Powerful Results.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-iron-700 p-6 text-center"
            >
              <p className="font-display text-4xl md:text-5xl text-lime tracking-wide">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-white/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
