"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programmi" },
  { href: "#trainers", label: "Coach" },
  { href: "#facilities", label: "Strutture" },
  { href: "#membership", label: "Abbonamenti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-iron/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-cyan" />
          <span className="font-display text-2xl tracking-wider text-white">
            IRON<span className="text-cyan">CLUB</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-cyan transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-cyan px-5 py-2.5 text-sm font-bold text-iron hover:bg-cyan-400 transition"
          >
            Contattaci
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-iron px-4 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/90 hover:text-cyan py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-cyan px-5 py-3 text-sm font-bold text-iron"
          >
            Contattaci
          </a>
        </div>
      )}
    </header>
  );
}
