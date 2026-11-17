"use client";

import { useMemo, useState, Suspense, type FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock, CheckCircle2 } from "lucide-react";
import { plans } from "@/data/content";
import { cn } from "@/lib/utils";

function CheckoutInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planKey = (searchParams.get("plan") || "elite").toLowerCase();

  const plan = useMemo(() => {
    const found = plans.find((p) => p.name.toLowerCase().includes(planKey));
    return found || plans.find((p) => p.featured) || plans[0];
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
          <h1 className="mt-6 font-display text-4xl tracking-wide">Pagamento riuscito</h1>
          <p className="mt-3 text-white/60 text-sm">
            Abbonamento <span className="text-lime font-semibold">{plan.name}</span> attivato
            (simulazione). Riceverai una email di conferma a {email || "la tua casella"}.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-iron-700 p-5 text-left text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-white/50">Piano</span>
              <span>{plan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Importo</span>
              <span className="text-lime font-semibold">€{plan.price}{plan.period}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Stato</span>
              <span className="text-lime">Attivo (demo)</span>
            </div>
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-lime px-6 py-3 text-sm font-bold text-iron hover:bg-lime-400 transition"
          >
            Torna alla home
          </Link>
          <p className="mt-6 text-xs text-white/30">
            Nessun addebito reale — checkout solo dimostrativo.
          </p>
        </div>
      </div>
    );
  }

  if (step === "processing") {
    return (
      <div className="min-h-screen bg-iron flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full border-2 border-lime border-t-transparent animate-spin" />
          <p className="mt-6 font-display text-2xl tracking-wide">Elaborazione pagamento…</p>
          <p className="mt-2 text-sm text-white/40">Simulazione in corso</p>
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
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-lime mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Indietro
        </button>

        <h1 className="font-display text-4xl tracking-wide">Checkout</h1>
        <p className="mt-2 text-sm text-white/50">
          Pagamento simulato — non viene addebitata nessuna carta.
        </p>

        <div className="mt-8 rounded-2xl border border-lime/30 bg-lime/5 p-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-lime font-semibold">Piano scelto</p>
            <p className="font-display text-2xl mt-1">{plan.name}</p>
          </div>
          <p className="font-display text-3xl text-lime">
            €{plan.price}
            <span className="text-sm text-white/40 font-sans">{plan.period}</span>
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-xs text-white/50">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tua@email.it"
              className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs text-white/50">Intestatario carta</label>
            <input
              required
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Nome e cognome"
              className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs text-white/50">Numero carta</label>
            <div className="relative mt-1">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              <input
                required
                inputMode="numeric"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCard(e.target.value))}
                placeholder="4242 4242 4242 4242"
                className="w-full rounded-xl border border-white/10 bg-iron-700 pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/50">Scadenza</label>
              <input
                required
                inputMode="numeric"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/AA"
                className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-white/50">CVC</label>
              <input
                required
                inputMode="numeric"
                maxLength={4}
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="123"
                className="mt-1 w-full rounded-xl border border-white/10 bg-iron-700 px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className={cn(
              "w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime py-3.5 text-sm font-bold text-iron hover:bg-lime-400 transition"
            )}
          >
            <Lock className="h-4 w-4" />
            Paga €{plan.price} (simulato)
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/30">
          Usa qualsiasi numero carta fittizio (es. 4242…). Nessun dato viene inviato a un gateway reale.
        </p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-iron flex items-center justify-center text-white/50">
          Caricamento…
        </div>
      }
    >
      <CheckoutInner />
    </Suspense>
  );
}
