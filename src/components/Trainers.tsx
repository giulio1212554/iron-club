"use client";

import { motion } from "framer-motion";
import { trainers } from "@/data/content";

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 md:py-28 bg-iron-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-cyan text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            I NOSTRI COACH
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="relative mx-auto aspect-square max-w-xs rounded-2xl overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide">{t.name}</h3>
              <p className="text-cyan text-sm mt-1">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
