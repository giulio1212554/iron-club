"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { gym } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-0 overflow-hidden bg-iron">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-[0.95] max-w-4xl mx-auto"
        >
          Built for Your{" "}
          <span className="text-lime">Fitness</span> Lifestyle.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-white/60 text-base md:text-lg max-w-xl mx-auto"
        >
          {gym.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="#membership"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-iron hover:bg-lime-400 transition shadow-lg shadow-lime/20"
          >
            BOOK NOW
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-iron text-lime">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 relative mx-auto max-w-4xl"
        >
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f14f?w=1400&q=80"
              alt="Athlete training"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iron/60 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="mt-10 overflow-hidden border-y border-lime/30 bg-lime py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 font-display text-2xl tracking-wider text-iron"
            >
              Workout
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
