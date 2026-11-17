export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-iron py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-iron text-xs font-bold">
            IC
          </span>
          <span className="font-semibold text-white">IRON CLUB</span>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} IRON CLUB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
