"use client";

import { motion } from "framer-motion";
import { trainers } from "@/data/content";

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 md:py-28 bg-iron-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-lime text-sm font-semibold uppercase tracking-wider mb-2">
            Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            Expert Trainers Who Inspire Results
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-iron overflow-hidden group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-2xl tracking-wide">{t.name}</h3>
                  <p className="text-lime text-sm mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
