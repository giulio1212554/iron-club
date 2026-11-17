export const gym = {
  name: "IRON CLUB",
  tagline: "Allenati. Trasformati. Domina.",
  description:
    "Palestra di forza e performance. Attrezzature di livello, coach certificati e programmi su misura.",
  phone: "+39 02 9876 5432",
  phoneRaw: "390298765432",
  whatsapp: "393331112233",
  email: "info@ironclub.it",
  address: "Via della Forza 8, 20100 Milano",
  hours: "Lun–Dom 06:00–23:00",
};

export const programs = [
  {
    title: "Strength Training",
    desc: "Forza massimale, powerlifting e progressive overload con coach dedicati.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    title: "HIIT & Conditioning",
    desc: "Sessioni ad alta intensità per bruciare grassi e migliorare la resistenza.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  },
  {
    title: "Personal Training",
    desc: "Piani 1:1 personalizzati su obiettivi, postura e alimentazione.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
  {
    title: "Functional & Mobility",
    desc: "Movimento funzionale, core e mobilità per performare meglio e prevenire infortuni.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
  },
];

export const trainers = [
  {
    name: "Marco Rossi",
    role: "Head Coach · Strength",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
  },
  {
    name: "Giulia Bianchi",
    role: "Coach HIIT & Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
  },
  {
    name: "Luca Ferri",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
];

export const plans = [
  {
    name: "Basic",
    price: "39",
    period: "/mese",
    features: ["Accesso sala pesi", "Orario standard", "App workout", "Spogliatoi"],
    featured: false,
  },
  {
    name: "Pro",
    price: "69",
    period: "/mese",
    features: [
      "Tutto Basic",
      "Classi HIIT illimitate",
      "1 sessione PT / mese",
      "Sauna & recovery",
      "Priorità booking",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "119",
    period: "/mese",
    features: [
      "Tutto Pro",
      "4 sessioni PT / mese",
      "Piano nutrizione",
      "Accesso 24/7",
      "Guest pass mensile",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    text: "In 6 mesi ho raddoppiato i carichi sullo squat. Coach e ambiente al top.",
    name: "Andrea M.",
  },
  {
    text: "Finalmente una palestra seria, senza code e con attrezzature sempre in ordine.",
    name: "Sara T.",
  },
  {
    text: "Il programma personalizzato ha cambiato il mio approccio all'allenamento.",
    name: "Davide R.",
  },
];

export const facilities = [
  "Sala pesi free-weight completa",
  "Rack e piattaforme olimpiche",
  "Zona cardio premium",
  "Studio HIIT dedicato",
  "Sauna e area recovery",
  "Spogliatoi e docce",
];
