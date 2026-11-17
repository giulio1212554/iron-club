export default function FinalCta() {
  return (
    <section id="contact" className="bg-lime">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px] py-12 md:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-ink/70 text-xs font-bold">IL PRIMO PASSO È IL PIÙ IMPORTANTE.</p>
          <h2 className="mt-2 font-extrabold text-3xl md:text-[36px] text-ink leading-tight">
            PRONTO A INIZIARE?
          </h2>
          <p className="mt-2 text-ink/70 text-sm max-w-md">
            Prenota una prova e vieni a conoscere Iron Club.
          </p>
        </div>
        <a
          href="/checkout?plan=full"
          className="inline-flex h-12 items-center justify-center rounded-[6px] bg-ink px-6 text-xs font-bold text-lime hover:bg-iron transition shrink-0"
        >
          PRENOTA LA TUA PROVA
        </a>
      </div>
    </section>
  );
}
