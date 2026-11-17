"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#", label: "Home", active: true },
  { href: "#why", label: "La palestra" },
  { href: "#services", label: "Corsi" },
  { href: "#services", label: "Personal training" },
  { href: "#plans", label: "Abbonamenti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors",
        scrolled ? "bg-iron/95 backdrop-blur-md border-b border-white/5" : "bg-iron"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px] h-[72px] md:h-[88px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="size-[30px] rounded-[7px] bg-lime" />
          <span className="font-extrabold text-[18px] md:text-[20px] tracking-tight text-snow">
            IRON CLUB
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={cn(
                "text-xs font-semibold transition",
                l.active ? "text-lime" : "text-fog hover:text-snow"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center h-12 px-4 rounded-[6px] bg-lime text-ink text-xs font-bold hover:bg-lime-soft transition"
        >
          PRENOTA UNA PROVA
        </a>

        <button
          type="button"
          className="lg:hidden p-2 text-snow"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-iron px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-fog hover:text-lime"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center rounded-[6px] bg-lime py-3 text-xs font-bold text-ink"
          >
            PRENOTA UNA PROVA
          </a>
        </div>
      )}
    </header>
  );
}
