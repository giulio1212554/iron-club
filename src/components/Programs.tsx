"use client";

import { motion } from "framer-motion";
import { programs } from "@/data/content";
import { ChevronRight } from "lucide-react";

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-iron-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-lime text-sm font-semibold uppercase tracking-wider mb-2">
              Programmi
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">
              Forza e
              <br />
              allenamento
            </h2>
          </div>
        </div>

        <div className="space-y-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-iron/50 px-5 py-5 hover:border-lime/40 hover:bg-iron-700 transition"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white group-hover:text-lime transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/50 mt-0.5 line-clamp-1">{p.desc}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-white/30 group-hover:text-lime shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
