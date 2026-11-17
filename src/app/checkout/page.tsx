"use client";

import { useMemo, useState, Suspense, type FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock, CheckCircle2 } from "lucide-react";
import { plans } from "@/data/content";

function CheckoutInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planKey = (searchParams.get("plan") || "full").toLowerCase();

  const plan = useMemo(() => {
    if (planKey.includes("start")) return plans[0];
    if (planKey.includes("coach") || planKey.includes("pro")) return plans[2];
    if (planKey.includes("full") || planKey.includes("elite")) return plans[1];
    return plans.find((p) => p.featured) || plans[1];
  }, [planKey]);

  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");

  const formatCard = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  const formatExpiry = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep("processing");
    setTimeout(() => setStep("success"), 1800);
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-iron pt-28 pb-16 px-4">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime/20 text-lime">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mt-6 font-extrabold text-3xl text-snow">Pagamento riuscito</h1>
          <p className="mt-3 text-fog text-sm">
            Abbonamento <span className="text-lime font-semibold">{plan.name}</span> attivato
            (simulazione). Conferma a {email || "la tua email"}.
          </p>
          <div className="mt-8 rounded-card border border-white/10 bg-iron-card p-5 text-left text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-fog">Piano</span>
              <span className="text-snow">{plan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fog">Importo</span>
              <span className="text-lime font-semibold">
                {plan.price}€ {plan.period}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-fog">Stato</span>
              <span className="text-lime">Attivo (demo)</span>
            </div>
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-[6px] bg-lime px-6 py-3 text-xs font-bold text-ink hover:bg-lime-soft transition"
          >
            Torna alla home
          </Link>
          <p className="mt-6 text-xs text-fog/50">Nessun addebito reale — solo demo.</p>
        </div>
      </div>
    );
  }

  if (step === "processing") {
    return (
      <div className="min-h-screen bg-iron flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full border-2 border-lime border-t-transparent animate-spin" />
          <p className="mt-6 font-extrabold text-xl text-snow">Elaborazione pagamento…</p>
          <p className="mt-2 text-sm text-fog">Simulazione in corso</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-iron pt-24 pb-16 px-4">
      <div className="mx-auto max-w-lg">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm text-fog hover:text-lime mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Indietro
        </button>

        <h1 className="font-extrabold text-3xl text-snow">Checkout</h1>
        <p className="mt-2 text-sm text-fog">Pagamento simulato — nessuna carta addebitata.</p>

        <div className="mt-8 rounded-card border border-lime/30 bg-lime/5 p-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-lime font-semibold">Piano scelto</p>
            <p className="font-extrabold text-xl mt-1 text-snow">{plan.name}</p>
          </div>
          <p className="font-extrabold text-3xl text-lime">
            {plan.price}€
            <span className="text-sm text-fog font-medium ml-1">{plan.period}</span>
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-xs text-fog">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tua@email.it"
              className="mt-1 w-full rounded-[10px] border border-white/10 bg-iron-card px-4 py-3 text-snow placeholder:text-fog/40 focus:border-lime focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs text-fog">Intestatario carta</label>
            <input
              required
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Nome e cognome"
              className="mt-1 w-full rounded-[10px] border border-white/10 bg-iron-card px-4 py-3 text-snow placeholder:text-fog/40 focus:border-lime focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs text-fog">Numero carta</label>
            <div className="relative mt-1">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fog/50" />
              <input
                required
                inputMode="numeric"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCard(e.target.value))}
                placeholder="4242 4242 4242 4242"
                className="w-full rounded-[10px] border border-white/10 bg-iron-card pl-10 pr-4 py-3 text-snow placeholder:text-fog/40 focus:border-lime focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-fog">Scadenza</label>
              <input
                required
                inputMode="numeric"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/AA"
                className="mt-1 w-full rounded-[10px] border border-white/10 bg-iron-card px-4 py-3 text-snow placeholder:text-fog/40 focus:border-lime focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-fog">CVC</label>
              <input
                required
                inputMode="numeric"
                maxLength={4}
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="123"
                className="mt-1 w-full rounded-[10px] border border-white/10 bg-iron-card px-4 py-3 text-snow placeholder:text-fog/40 focus:border-lime focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-[6px] bg-lime py-3.5 text-xs font-bold text-ink hover:bg-lime-soft transition"
          >
            <Lock className="h-4 w-4" />
            Paga {plan.price}€ (simulato)
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-fog/50">
          Usa carta fittizia (es. 4242…). Nessun gateway reale.
        </p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-iron flex items-center justify-center text-fog">
          Caricamento…
        </div>
      }
    >
      <CheckoutInner />
    </Suspense>
  );
}
