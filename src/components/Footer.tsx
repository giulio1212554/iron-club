import Link from "next/link";
import { gym } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-iron border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px] py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <p className="font-extrabold text-xl text-snow">{gym.name}</p>
            <p className="mt-1 text-xs font-bold text-fog tracking-wide">
              TRAIN WITH PURPOSE.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog">
            <a href="#why" className="hover:text-lime">Palestra</a>
            <a href="#services" className="hover:text-lime">Corsi</a>
            <a href="#plans" className="hover:text-lime">Abbonamenti</a>
            <a href="#contact" className="hover:text-lime">Contatti</a>
            <span className="text-fog/50">Instagram</span>
          </nav>
        </div>
        <div className="mt-8 h-px bg-white/10" />
        <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-2 text-[11px] text-fog">
          <p>© 2026 IRON CLUB · DEMO CONCEPT</p>
          <p>
            {gym.address} · {gym.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
