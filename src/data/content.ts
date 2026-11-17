export const gym = {
  name: "IRON CLUB",
  tagline: "Costruito per il tuo stile di vita fitness.",
  subtitle:
    "I tuoi obiettivi, il tuo ritmo, i nostri programmi collaudati — per allenarti con uno scopo e trasformarti con fiducia.",
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
    title: "Forza e pesi",
    desc: "Pesi liberi, macchinari e programmi progressivi per guadagni di forza reali.",
  },
  {
    title: "Allenamenti di gruppo HIIT",
    desc: "Classi ad alta energia che spingono cardio, resistenza e consumo di grassi.",
  },
  {
    title: "Personal training 1:1",
    desc: "Lavori direttamente con coach certificati su un piano su misura per te.",
  },
  {
    title: "Zone cardio e endurance",
    desc: "Velocità e condizionamento con percorsi strutturati e aree recovery.",
  },
];

export const trainers = [
  {
    name: "Marco Rossi",
    role: "Coach forza",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
  },
  {
    name: "Giulia Bianchi",
    role: "Coach HIIT e conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
  },
  {
    name: "Luca Ferri",
    role: "Performance coach",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
];

export const plans = [
  {
    name: "Piano Core",
    price: "49",
    period: "/mese",
    features: ["Accesso completo in sala", "Classi di gruppo", "Spogliatoi", "App di tracking"],
    featured: false,
  },
  {
    name: "Piano Elite",
    price: "89",
    period: "/mese",
    features: [
      "Tutto il Core",
      "HIIT illimitato",
      "2 sessioni PT / mese",
      "Sauna e recovery",
      "Prenotazione prioritaria",
    ],
    featured: true,
  },
];

export const stats = [
  { value: "10+", label: "Anni di esperienza" },
  { value: "25+", label: "Coach esperti" },
  { value: "2500+", label: "Membri attivi" },
  { value: "98%", label: "Tasso di successo" },
];

export const testimonials = [
  {
    text: "IRON CLUB ha cambiato il mio modo di allenarmi. Più forte, più concentrato, parte di una vera community.",
    name: "Marco B.",
  },
  {
    text: "I coach ti spingono forte ma con metodo. La scelta migliore per la mia forma fisica.",
    name: "Elena R.",
  },
  {
    text: "Spazio pulito, attrezzature serie, zero fronzoli. Esattamente quello che cercavo.",
    name: "Davide S.",
  },
];
