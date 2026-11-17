"use client";

import { motion } from "framer-motion";
import { programs } from "@/data/content";

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-iron">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-cyan text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Programmi
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            ALLENATI CON METODO
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-iron-700 border border-white/5 hover:border-cyan/40 transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
