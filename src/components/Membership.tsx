"use client";

import Link from "next/link";
import { plans } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Membership() {
  return (
    <section id="plans" className="bg-iron py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        <p className="text-lime text-xs font-bold">SCEGLI IL TUO RITMO</p>
        <h2 className="mt-3 font-extrabold text-3xl md:text-[38px] text-snow">
          IL PIANO GIUSTO PER TE.
        </h2>
        <p className="mt-4 text-fog text-[15px]">
          Inizia quando vuoi. Il prossimo passo lo decidi tu.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {plans.map((plan) => {
            const slug = plan.name.toLowerCase().includes("full")
              ? "full"
              : plan.name.toLowerCase().includes("coach")
                ? "coach"
                : "start";
            return (
              <article
                key={plan.name}
                className={cn(
                  "rounded-card p-6 min-h-[285px] flex flex-col",
                  plan.featured
                    ? "bg-lime text-ink"
                    : "bg-iron-card text-snow"
                )}
              >
                {plan.featured && (
                  <span className="text-[11px] font-bold uppercase tracking-wide opacity-80">
                    PIÙ SCELTO
                  </span>
                )}
                <p
                  className={cn(
                    "text-[13px] font-bold",
                    plan.featured ? "text-ink mt-1" : "text-lime"
                  )}
                >
                  {plan.name}
                </p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="font-extrabold text-[42px] leading-none">
                    {plan.price}€
                  </span>
                  <span
                    className={cn(
                      "text-xs font-medium",
                      plan.featured ? "text-ink/60" : "text-fog"
                    )}
                  >
                    {plan.period}
                  </span>
                </p>
                <p
                  className={cn(
                    "mt-3 text-xs",
                    plan.featured ? "text-ink/70" : "text-fog"
                  )}
                >
                  {plan.blurb}
                </p>
                <div
                  className={cn(
                    "my-4 h-px",
                    plan.featured ? "bg-ink/15" : "bg-white/10"
                  )}
                />
                <ul className="space-y-2 flex-1 text-[13px]">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout?plan=${slug}`}
                  className={cn(
                    "mt-6 block text-center rounded-[6px] py-3 text-xs font-bold transition",
                    plan.featured
                      ? "bg-ink text-lime hover:bg-iron"
                      : "bg-lime text-ink hover:bg-lime-soft"
                  )}
                >
                  Paga ora
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-[11px] text-fog/60">
          Checkout in modalità demo — nessun addebito reale.
        </p>
      </div>
    </section>
  );
}
