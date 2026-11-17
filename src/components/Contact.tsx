"use client";

import { useState, type FormEvent } from "react";
import { gym } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-iron">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-iron-800 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-display text-4xl md:text-5xl tracking-wide leading-tight">
                Ready to Commit? Let&apos;s Build Your{" "}
                <span className="text-lime">Strongest Self.</span>
              </h2>
              <p className="mt-4 text-white/50 text-sm">
                {gym.address} · {gym.hours}
              </p>
              <a
                href={`tel:${gym.phoneRaw}`}
                className="mt-4 text-lime font-semibold hover:underline"
              >
                {gym.phone}
              </a>
            </div>

            <div className="p-8 md:p-12 bg-iron-700/50 border-t lg:border-t-0 lg:border-l border-white/10">
              {sent ? (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <p className="font-display text-3xl text-lime">REQUEST SENT</p>
                    <p className="mt-2 text-white/60 text-sm">We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <input
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-iron px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-xl border border-white/10 bg-iron px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full rounded-xl border border-white/10 bg-iron px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-lime py-3.5 text-sm font-bold text-iron hover:bg-lime-400 transition"
                  >
                    BOOK NOW
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
