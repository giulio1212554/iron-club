"use client";

import { motion } from "framer-motion";
import { gym } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-iron/80 via-iron/70 to-iron" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4"
        >
          Welcome to
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-none"
        >
          IRON <span className="text-cyan">CLUB</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto"
        >
          {gym.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#membership"
            className="rounded-full bg-cyan px-8 py-3.5 text-base font-bold text-iron hover:bg-cyan-400 transition shadow-lg shadow-cyan/20"
          >
            JOIN NOW
          </a>
          <a
            href="#programs"
            className="rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:border-cyan hover:text-cyan transition"
          >
            Scopri i programmi
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-white/60"
        >
          <span>Aperti 06–23</span>
          <span>·</span>
          <span>Coach certificati</span>
          <span>·</span>
          <span>Milano</span>
        </motion.div>
      </div>
    </section>
  );
}
