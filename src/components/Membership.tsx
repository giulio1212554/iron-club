"use client";

import { motion } from "framer-motion";
import { plans } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Membership() {
  return (
    <section id="membership" className="py-20 md:py-28 bg-iron-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-cyan text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Abbonamenti
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            SCEGLI IL TUO PIANO
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "rounded-2xl border p-8 flex flex-col",
                plan.featured
                  ? "border-cyan bg-cyan/5 scale-[1.02] shadow-xl shadow-cyan/10"
                  : "border-white/10 bg-iron-700"
              )}
            >
              {plan.featured && (
                <span className="self-start text-xs font-bold uppercase tracking-wider bg-cyan text-iron px-3 py-1 rounded-full mb-4">
                  Più scelto
                </span>
              )}
              <h3 className="font-display text-2xl tracking-wide">{plan.name}</h3>
              <p className="mt-4">
                <span className="font-display text-5xl text-cyan">€{plan.price}</span>
                <span className="text-white/50 text-sm">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-white/70 flex gap-2">
                    <span className="text-cyan">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "mt-8 block text-center rounded-full py-3 text-sm font-bold transition",
                  plan.featured
                    ? "bg-cyan text-iron hover:bg-cyan-400"
                    : "border border-white/20 text-white hover:border-cyan hover:text-cyan"
                )}
              >
                Inizia ora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
