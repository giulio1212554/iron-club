import { Dumbbell } from "lucide-react";
import { gym } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-iron py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-cyan" />
          <span className="font-display text-xl tracking-wider">
            IRON<span className="text-cyan">CLUB</span>
          </span>
        </div>
        <p className="text-sm text-white/40 text-center">
          © {new Date().getFullYear()} {gym.name} · {gym.address}
        </p>
        <a
          href={`https://wa.me/${gym.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-cyan hover:underline"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
