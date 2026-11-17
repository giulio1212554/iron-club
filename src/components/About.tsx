"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-iron">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-iron-700 overflow-hidden"
        >
          <div className="relative aspect-[4/3] bg-iron-600">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
              alt="Sala pesi IRON CLUB"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide leading-tight">
              Una palestra che ti allena a essere{" "}
              <span className="text-lime">più forte, in forma</span> e concentrato
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl bg-lime p-8 md:p-10 text-iron flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-70">
                Chi siamo
              </p>
              <p className="mt-4 text-4xl md:text-5xl font-display tracking-wide leading-none">
                Scelti da oltre
                <br />
                1.000 membri
              </p>
            </div>
            <p className="mt-6 text-iron/80 text-sm leading-relaxed">
              In IRON CLUB la community non si limita a presentarsi: sale di livello.
              Dai principianti agli atleti, ogni membro spinge più forte e supporta
              gli altri in ogni ripetizione.
            </p>
          </div>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-lime hover:text-lime transition"
          >
            Scopri di più
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
