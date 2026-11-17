"use client";

import { useState, type FormEvent } from "react";
import { gym } from "@/data/content";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-iron-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-cyan text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Contatti
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide">
            ENTRA NEL CLUB
          </h2>
          <p className="mt-4 text-white/60">
            Scrivici o passa in palestra. Ti facciamo fare un tour gratuito.
          </p>
          <div className="mt-10 space-y-5">
            <a href={`tel:${gym.phoneRaw}`} className="flex items-center gap-3 text-white/80 hover:text-cyan">
              <Phone className="h-5 w-5 text-cyan" /> {gym.phone}
            </a>
            <a href={`mailto:${gym.email}`} className="flex items-center gap-3 text-white/80 hover:text-cyan">
              <Mail className="h-5 w-5 text-cyan" /> {gym.email}
            </a>
            <p className="flex items-center gap-3 text-white/80">
              <MapPin className="h-5 w-5 text-cyan" /> {gym.address}
            </p>
            <p className="flex items-center gap-3 text-white/80">
              <Clock className="h-5 w-5 text-cyan" /> {gym.hours}
            </p>
          </div>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-cyan/30 bg-cyan/5 p-10 flex items-center justify-center text-center">
            <div>
              <p className="font-display text-3xl text-cyan">RICHIESTA INVIATA</p>
              <p className="mt-2 text-white/70">Ti ricontattiamo a breve.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-iron p-6 md:p-8 space-y-4">
            <div>
              <label className="text-sm text-white/60">Nome</label>
              <input
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white focus:border-cyan focus:outline-none"
                placeholder="Il tuo nome"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/60">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white focus:border-cyan focus:outline-none"
                  placeholder="email@esempio.it"
                />
              </div>
              <div>
                <label className="text-sm text-white/60">Telefono</label>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white focus:border-cyan focus:outline-none"
                  placeholder="+39 ..."
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/60">Messaggio</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white focus:border-cyan focus:outline-none resize-none"
                placeholder="Obiettivi, orari preferiti..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-cyan py-3.5 text-sm font-bold text-iron hover:bg-cyan-400 transition"
            >
              Invia richiesta
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
