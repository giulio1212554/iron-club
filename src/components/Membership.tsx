"use client";

import { motion } from "framer-motion";
import { plans } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Membership() {
  return (
    <section id="membership" className="py-20 md:py-28 bg-iron">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-lime text-sm font-semibold uppercase tracking-wider mb-2">
            Prezzi
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            Scegli il piano adatto al tuo stile di vita
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "rounded-3xl border p-8 flex flex-col",
                plan.featured
                  ? "border-lime bg-lime text-iron"
                  : "border-white/10 bg-iron-700 text-white"
              )}
            >
              <h3 className="font-display text-2xl tracking-wide">{plan.name}</h3>
              <p className="mt-4">
                <span className="font-display text-5xl">€{plan.price}</span>
                <span className={cn("text-sm", plan.featured ? "text-iron/60" : "text-white/50")}>
                  {plan.period}
                </span>
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm flex gap-2">
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "mt-8 block text-center rounded-full py-3 text-sm font-bold transition",
                  plan.featured
                    ? "bg-iron text-lime hover:bg-iron-700"
                    : "bg-lime text-iron hover:bg-lime-400"
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
