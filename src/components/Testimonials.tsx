"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-iron-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            Cosa dicono i nostri membri
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
              className="rounded-3xl border border-white/10 bg-iron p-6"
            >
              <div className="text-lime text-2xl mb-3">&ldquo;</div>
              <p className="text-white/80 leading-relaxed text-sm">{t.text}</p>
              <footer className="mt-4 text-lime text-sm font-semibold">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
