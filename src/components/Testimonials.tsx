import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-iron-card py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        <p className="text-lime text-xs font-bold">LA COMMUNITY PARLA</p>
        <h2 className="mt-3 font-extrabold text-3xl md:text-[38px] text-snow">
          IL CAMBIAMENTO SI VEDE.
        </h2>
        <p className="mt-4 text-fog text-[15px] max-w-2xl">
          Storie di persone che hanno scelto di mettersi in movimento.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-card bg-iron p-5 min-h-[120px]"
            >
              <p className="text-lime text-sm tracking-wide">★★★★★</p>
              <p className="mt-2 text-[13px] text-snow leading-relaxed">
                “{t.text}”
              </p>
              <footer className="mt-4 text-[12px] text-fog font-medium">
                {t.name} &nbsp;·&nbsp; {t.meta}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
