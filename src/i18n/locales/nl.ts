import type { Dictionary } from "../types";

/**
 * Dutch — the original v2 copy, extracted verbatim from the components.
 * This is the meaning-of-record that EN/ES/DE are translated from.
 */
export const nl: Dictionary = {
  meta: {
    htmlLang: "nl",
    ogLocale: "nl_NL",
    title: "ReadyClaw — Jouw AI-medewerker. Klaar. Zonder gedoe.",
    description:
      "Pre-configured AI-systemen op Mac mini — lokaal of in de cloud. Plug in, log in, klaar. Sla maanden API-gedoe over. Vanaf €899, eenmalig, geen abonnement.",
    ogTitle: "ReadyClaw — Jouw AI-medewerker. Klaar. Zonder gedoe.",
    ogDescription:
      "Pre-configured AI-systemen op Mac mini. Plug in, log in, klaar. Vanaf €899, eenmalig — geen abonnement, geen leercurve.",
  },

  languageNames: { en: "English", es: "Español", nl: "Nederlands", de: "Deutsch" },

  nav: {
    homeAria: "ReadyClaw home",
    menuAria: "Menu",
    languageAria: "Taal",
    order: "Bestel",
    links: [
      { href: "#what", label: "Wat het doet" },
      { href: "#how", label: "Hoe het werkt" },
      { href: "#packages", label: "Pakketten" },
      { href: "#support", label: "Support" },
      { href: "#faq", label: "FAQ" },
    ],
  },

  hero: {
    imgAlt: "Een werkplek bij nacht — een Mac die doorwerkt terwijl jij slaapt",
    chip: "Pre-configured · Mac mini · Lokaal of cloud",
    headline: { line1: "Jouw AI-medewerker.", emphasis: "Klaar.", rest: " Zonder gedoe." },
    body: "Geen maandenlang uitvogelen. Geen experimenteren met API-kosten. Wij leveren een Mac mini met je AI-systeem er compleet op — lokaal of in de cloud. Binnen een paar uur ben je klaar om te werken.",
    ctaPackage: "Kies je pakket",
    ctaHow: "Zo werkt het",
    quote: "“Goedemorgen. 3 dingen vragen aandacht.”",
    quoteCaption: "— je ochtendbriefing, automatisch · Mac mini M4",
    stats: [
      { v: "~4 uur", l: "Klaar om te werken" },
      { v: "100%", l: "Remote setup" },
      { v: "€0/mo", l: "Lokaal — geen API-kosten" },
      { v: "3–6 mnd", l: "Leercurve die je overslaat" },
    ],
  },

  marquee: [
    "Geen abonnement",
    "30 dagen geld-terug",
    "Lifetime hardware-eigendom",
    "100% lokaal op Jarvis",
    "AVG-defendable",
    "Geen vendor lock-in",
    "30-min onboarding",
    "Geen leercurve",
  ],

  product: {
    kicker: "Het apparaat",
    imgAlt: "De Mac mini met je ReadyClaw-systeem, klaar tussen je schermen",
    headline: { before: "Eén stil kastje. Je hele ", emphasis: "AI-laag", after: ", voorgeladen." },
    body: "Geen serverkast, geen cloud-abonnement, geen knipperende lampjes. Een Mac mini ter grootte van een notitieblok die je AI-medewerker draait — desnoods volledig offline op je eigen bureau.",
    specs: [
      { k: "Apple silicon", v: "M4 · tot 48GB" },
      { k: "Footprint", v: "12,7 × 12,7 cm" },
      { k: "Verbruik", v: "~7W idle" },
      { k: "Eigendom", v: "100% van jou" },
    ],
  },

  what: {
    kicker: "Wat je ReadyClaw doet",
    headline: { before: "Drie skills die ", emphasis: "90%", after: " van de dagelijkse wrijving wegnemen." },
    body: "Geen chatvenster waar je naartoe moet. Het werk gebeurt op de achtergrond, op je eigen apparaat — en je ziet alleen het resultaat.",
    imgAlt: "Mac mini op een opgeruimd bureau, bovenaanzicht",
    blocks: [
      {
        n: "01",
        label: "Email triage",
        title: "Word wakker met een gesorteerde inbox.",
        body: "Je AI leest 's nachts elke email, rangschikt op prioriteit, vat de rest samen en schrijft concept-antwoorden voor routineberichten. Je wordt wakker met een briefing van 3 minuten in plaats van een puinhoop van 90.",
        bullets: [
          "Top 3 prioriteiten naar boven",
          "Routine-antwoorden voorgeschreven",
          "Ruis automatisch gearchiveerd met audit-log",
        ],
      },
      {
        n: "02",
        label: "Agenda-prep",
        title: "Loop elke meeting voorbereid binnen.",
        body: "15 minuten voor elke externe meeting levert je AI een briefing: bedrijfsinfo, recente mails met de deelnemers, prep-notities en een voorgestelde openingsvraag.",
        bullets: [
          "Auto-research op externe deelnemers",
          "Recente communicatie meegenomen",
          "Specifieke prep per type meeting",
        ],
      },
      {
        n: "03",
        label: "Document Q&A",
        title: "Vraag je bestanden alles.",
        body: "Koppel Drive, Dropbox, OneDrive of lokale mappen. Vraag dan in gewone taal: 'Wat zegt het Acme-contract over opzegging?' Antwoord in 2 seconden, met bron.",
        bullets: [
          "Werkt op PDF, Word, Pages, platte tekst",
          "Antwoorden met bron en directe link",
          "Lokale indexering op de Jarvis-tier",
        ],
      },
    ],
  },

  how: {
    kicker: "Hoe het werkt",
    headline: { before: "Van bestelling naar ", emphasis: "werkende AI", after: " in 5 dagen." },
    note: "Geen IT-team nodig",
    steps: [
      { n: "01", t: "Bestel", d: "Kies een pakket of doe het interview van 5 min. Betaal via Stripe." },
      { n: "02", t: "Wij configureren", d: "4 uur setup per apparaat. Skills geïnstalleerd, accounts gekoppeld, getest." },
      { n: "03", t: "Levering", d: "PostNL/DHL met track & trace. Je krijgt een Mac mini, een welkomstkaart en een setup-link." },
      { n: "04", t: "Plug in & go", d: "30-min Zoom met Robbie. We doen de eerste login samen. Dag 1: het werkt." },
    ],
  },

  packages: {
    kicker: "Pakketten",
    headline: { before: "Drie tiers. ", emphasis: "Eén belofte:", after: " het werkt uit de doos." },
    body: "Kies wat past. Upgrade later als je eroverheen groeit.",
    mostChosen: "Meest gekozen",
    fromPrice: "vanaf",
    footnote:
      "→ Alle pakketten zijn inclusief lifetime hardware-eigendom. Geen abonnementen. 30 dagen geld-terug-garantie. Heb je al een Mac mini? Wij doen alles 100% remote — laat het weten bij je bestelling, dan trekken we de hardware-kosten af.",
    tiers: {
      basic: {
        tagline: "Voor 90% van de kleine bedrijven",
        priceNote: "eenmalig · incl. Mac mini · ex. btw",
        hardware: "Mac mini M4 · 16GB",
        features: [
          "Pre-configured Mac mini",
          "Email triage & ochtendbriefing",
          "Agenda-prep met context",
          "Document Q&A",
          "Cloud AI (jouw Claude/OpenAI key)",
          "5 dagen levering · 30-min onboarding",
        ],
        cta: "Bestel Basic",
      },
      custom: {
        tagline: "Geconfigureerd in een gesprek van 5 min",
        priceNote: "eenmalig · ex. btw",
        hardware: "Mac mini M4 · 24–48GB",
        features: [
          "Alles van Basic, plus:",
          "5-min AI-interview om je workflow te mappen",
          "2–4 skills afgestemd op jouw werk",
          "Cloud, lokaal of hybride",
          "Custom integraties (CRM, DMS, etc.)",
          "2 weken levering",
        ],
        cta: "Start interview",
      },
      jarvis: {
        tagline: "Top tier · 100% lokaal · AVG-defendable",
        priceNote: "eenmalig · incl. Mac mini Pro · ex. btw",
        hardware: "Mac mini M4 Pro · 48GB",
        features: [
          "Alles van Custom, plus:",
          "100% lokale AI (Qwen 2.5 14B via MLX)",
          "Geen data verlaat je apparaat",
          "Whisper voor voice/audio",
          "Voor advocaten, artsen, accountants",
          "Priority delivery (5–7 dagen)",
        ],
        cta: "Bestel Jarvis",
      },
    },
  },

  support: {
    kicker: "Support",
    headline: { before: "Optioneel. ", emphasis: "Niet verplicht.", after: "" },
    body: "Je bent eigenaar van de hardware. Kies support als je een vangnet wil. 2 maanden gratis bij jaarbetaling.",
    monthly: "Maandelijks",
    yearly: "Jaarlijks",
    yearlyBadge: "-17%",
    perYear: " /jaar",
    perMonth: " /maand",
    tiers: [
      { id: "free", name: "Free", features: ["Email-support 48u", "Online docs", "Skill-updates", "Self-serve"] },
      {
        id: "basic",
        name: "Basic",
        features: ["Email-support 24u op werkdagen", "Telefoon 9–17", "Remote troubleshooting", "Skill-tweaks inbegrepen"],
      },
      {
        id: "premium",
        name: "Premium",
        features: [
          "24/7 menselijke support",
          "4u response, weekenden inbegrepen",
          "Hardware-swap binnen 24u",
          "Maandelijks review-gesprek",
        ],
      },
    ],
  },

  founder: {
    imgAlt: "De ReadyClaw Mac mini in de hand — klein genoeg om mee te nemen",
    nameTag: "Robbie — ReadyClaw",
    roleTag: "Founder",
    kicker: "Van de oprichter",
    quote: '"I built this because I was tired of seeing smart people lose to AI."',
    paragraphs: [
      "Drie maanden geleden zat ik te worstelen met API-keys, n8n-workflows en prompt engineering — en ik ben technisch. Ik dacht: als dit voor mij al lastig is, hoe moet een gewone ondernemer dit ooit aan de praat krijgen?",
      "Antwoord: dat doen ze niet. Ze blijven hangen op ChatGPT en komen nooit verder. Ondertussen gaat AI gewoon door zonder hen.",
      "ReadyClaw is het antwoord dat ik wenste dat bestond. Een Mac mini, pre-configured. Plug in. Log in. Klaar. Geen abonnementen, geen consultants, geen leercurve.",
      "Klinkt als waar je op wachtte? Laten we praten.",
    ],
    signature: "— Robbie, Founder",
    cta: "Boek een 15-min demo",
    waMessage: "Hoi Robbie! Ik wil graag een 15-min demo boeken.",
  },

  faq: {
    kicker: "FAQ",
    headline: { before: "Vragen, ", emphasis: "beantwoord.", after: "" },
    items: [
      {
        q: "Waarom €899 als ChatGPT €20/mo is?",
        a: "ChatGPT is een chat-venster. ReadyClaw is een werkend systeem dat email-triage, agenda-prep en document Q&A automatisch op de achtergrond afhandelt. Je koopt een werkende setup, geen abonnement.",
      },
      {
        q: "Wat als ik dit zelf kan?",
        a: "Waarschijnlijk kun je dat. Het kost je 200+ uur leren plus doorlopend onderhoud. Wij hebben dat werk al gedaan. Je koopt tijd terug.",
      },
      {
        q: "Is mijn data veilig?",
        a: "Op de Jarvis tier verlaat niets je apparaat — volledig lokale AI. Op Basic/Custom gaat data via je eigen Claude/OpenAI account, niet via ons. Wij zien je content nooit.",
      },
      {
        q: "Wat als er iets stuk gaat?",
        a: "Apple-garantie op de hardware. Met Premium support sturen we binnen 24u een vervanging. Je data staat in versleutelde backup.",
      },
      {
        q: "Wat als jullie failliet gaan?",
        a: "De Mac mini is van jou. De skills draaien lokaal of via je eigen accounts. Geen vendor lock-in. Worst case: je hebt een werkende Mac mini die je zelf kunt onderhouden.",
      },
      {
        q: "Heb ik IT-skills nodig?",
        a: "Als je een iPhone kunt instellen, kun je dit. De 30-min onboarding-call doet alles samen.",
      },
      {
        q: "Kan ik later upgraden of skills toevoegen?",
        a: "Ja. Basic → Custom is een remote upgrade. Skills toevoegen kost €150–€400 per stuk afhankelijk van complexiteit.",
      },
      {
        q: "30 dagen geld-terug?",
        a: "Ja. Werkt het niet voor je? Stuur 'm terug, volledige refund. Geen kleine lettertjes.",
      },
    ],
  },

  finalCta: {
    kicker: "Klaar om te beginnen?",
    headline: { before: "Plug in. Log in. ", emphasis: "Klaar.", after: "" },
    body: "Stel je vragen of bestel direct. Geen verplichting — we mailen altijd eerst en denken mee over wat bij jouw werk past.",
    ctaPackage: "Kies je pakket",
    ctaWhatsApp: "Stuur een WhatsApp",
    waMessage:
      "Hoi ReadyClaw! Ik heb interesse in een pre-configured AI-medewerker op Mac mini. Kunnen jullie me meer vertellen?",
  },

  footer: {
    tagline: "AI-medewerker, kant-en-klaar.",
    productHeading: "Product",
    infoHeading: "Info",
    contactHeading: "Contact",
    productLinks: [
      { href: "#what", label: "Wat het doet" },
      { href: "#packages", label: "Pakketten" },
      { href: "#how", label: "Hoe het werkt" },
      { href: "#support", label: "Support" },
    ],
    infoLinks: [
      { href: "#faq", label: "FAQ" },
      { href: "#packages", label: "Contact" },
    ],
    whatsApp: "WhatsApp",
    waMessage: "Hoi ReadyClaw! Ik heb een vraag.",
    country: "Nederland",
    copyright: "© 2026 ReadyClaw",
    closer: "Plug in. Log in. Klaar.",
  },

  order: {
    tierLabels: {
      basic: "Basic — €899",
      custom: "Custom — vanaf €1.199",
      jarvis: "Jarvis — €2.499",
    },
    titlePrefix: "Bestel ",
    doneTitle: "Bestelling ontvangen",
    doneDescription: "We nemen binnen 24u contact op.",
    formDescription: "Vul je gegevens in. Geen verplichting — we mailen eerst.",
    doneHint: "Check je inbox voor de bevestiging",
    fieldName: "Naam",
    fieldEmail: "Email",
    fieldPhone: "Telefoon (optioneel)",
    fieldHasMac: "Heb je al een Mac mini?",
    fieldMode: "Lokaal of cloud?",
    fieldNotes: "Notities",
    hasMacOptions: [
      { v: "Nee", l: "Nee" },
      { v: "Ja, alleen remote setup", l: "Ja, alleen remote setup" },
      { v: "Weet ik niet", l: "Weet ik niet" },
    ],
    modeOptions: [
      { v: "Lokaal", l: "Lokaal" },
      { v: "Cloud", l: "Cloud" },
      { v: "Hybride", l: "Hybride" },
      { v: "Weet ik niet", l: "Weet ik niet" },
    ],
    submit: "Verstuur bestelling →",
    consent: "Door te verzenden ga je akkoord dat we je gegevens alleen gebruiken om je bestelling te verwerken.",
    submitting: "Bezig…",
    whatsAppCta: "Liever via WhatsApp",
    waMessagePrefix: "Hoi ReadyClaw! Ik wil graag ",
    waMessageSuffix: " bestellen.",
    waMessageFallback: "een pakket",
    errors: {
      nameRequired: "Naam is verplicht",
      emailInvalid: "Ongeldig e-mailadres",
      validation: "Validatiefout",
      notConfigured:
        "Bestellingen worden nog gekoppeld. Neem contact op via WhatsApp of het formulier hieronder.",
      generic: "Er ging iets mis. Probeer opnieuw of stuur ons een WhatsApp.",
      unknown: "Onbekende fout",
    },
    emailSubjectPrefix: "Nieuwe ReadyClaw-bestelling — ",
  },
};
