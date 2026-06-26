import type { Dictionary } from "../types";

/**
 * English — the canonical, default locale (served at the site root).
 * Translated from the original Dutch v2 copy into natural, idiomatic English.
 */
export const en: Dictionary = {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
    title: "ReadyClaw — Your AI coworker. Ready. No hassle.",
    description:
      "Pre-configured AI systems on a Mac mini — local or in the cloud. Plug in, log in, done. Skip months of API hassle. From €899, one-time, no subscription.",
    ogTitle: "ReadyClaw — Your AI coworker. Ready. No hassle.",
    ogDescription:
      "Pre-configured AI systems on a Mac mini. Plug in, log in, done. From €899, one-time — no subscription, no learning curve.",
  },

  languageNames: { en: "English", es: "Español", nl: "Nederlands", de: "Deutsch" },

  nav: {
    homeAria: "ReadyClaw home",
    menuAria: "Menu",
    languageAria: "Language",
    order: "Order",
    links: [
      { href: "#what", label: "What it does" },
      { href: "#how", label: "How it works" },
      { href: "#packages", label: "Packages" },
      { href: "#support", label: "Support" },
      { href: "#faq", label: "FAQ" },
    ],
  },

  hero: {
    imgAlt: "A workspace at night — a Mac that keeps working while you sleep",
    chip: "Pre-configured · Mac mini · Local or cloud",
    headline: { line1: "Your AI coworker.", emphasis: "Ready.", rest: " No hassle." },
    body: "No months of figuring it out. No experimenting with API costs. We deliver a Mac mini with your AI system fully set up — local or in the cloud. Within a few hours, you're ready to work.",
    ctaPackage: "Choose your package",
    ctaHow: "See how it works",
    quote: "“Good morning. Three things need your attention.”",
    quoteCaption: "— your morning briefing, automatic · Mac mini M4",
    stats: [
      { v: "~4 hrs", l: "Ready to work" },
      { v: "100%", l: "Remote setup" },
      { v: "€0/mo", l: "Local — no API costs" },
      { v: "3–6 mos", l: "Learning curve you skip" },
    ],
  },

  marquee: [
    "No subscription",
    "30-day money-back",
    "Lifetime hardware ownership",
    "100% local on Jarvis",
    "GDPR-defendable",
    "No vendor lock-in",
    "30-min onboarding",
    "No learning curve",
  ],

  product: {
    kicker: "The device",
    imgAlt: "The Mac mini with your ReadyClaw system, ready between your screens",
    headline: { before: "One quiet little box. Your entire ", emphasis: "AI layer", after: ", preloaded." },
    body: "No server rack, no cloud subscription, no blinking lights. A Mac mini the size of a notepad that runs your AI coworker — fully offline on your own desk if you want.",
    specs: [
      { k: "Apple silicon", v: "M4 · up to 48GB" },
      { k: "Footprint", v: "12.7 × 12.7 cm" },
      { k: "Power", v: "~7W idle" },
      { k: "Ownership", v: "100% yours" },
    ],
  },

  what: {
    kicker: "What your ReadyClaw does",
    headline: { before: "Three skills that remove ", emphasis: "90%", after: " of daily friction." },
    body: "No chat window to go to. The work happens in the background, on your own device — and you only see the result.",
    imgAlt: "Mac mini on a tidy desk, top-down view",
    blocks: [
      {
        n: "01",
        label: "Email triage",
        title: "Wake up to a sorted inbox.",
        body: "Overnight, your AI reads every email, ranks them by priority, summarizes the rest and drafts replies to routine messages. You wake up to a 3-minute briefing instead of a 90-minute mess.",
        bullets: [
          "Top 3 priorities surfaced",
          "Routine replies pre-drafted",
          "Noise auto-archived with an audit log",
        ],
      },
      {
        n: "02",
        label: "Calendar prep",
        title: "Walk into every meeting prepared.",
        body: "15 minutes before each external meeting, your AI delivers a briefing: company info, recent emails with the attendees, prep notes and a suggested opening question.",
        bullets: [
          "Auto-research on external attendees",
          "Recent communication pulled in",
          "Specific prep per meeting type",
        ],
      },
      {
        n: "03",
        label: "Document Q&A",
        title: "Ask your files anything.",
        body: "Connect Drive, Dropbox, OneDrive or local folders. Then ask in plain language: 'What does the Acme contract say about cancellation?' Answer in 2 seconds, with the source.",
        bullets: [
          "Works on PDF, Word, Pages, plain text",
          "Answers with source and a direct link",
          "Local indexing on the Jarvis tier",
        ],
      },
    ],
  },

  how: {
    kicker: "How it works",
    headline: { before: "From order to ", emphasis: "working AI", after: " in 5 days." },
    note: "No IT team needed",
    steps: [
      { n: "01", t: "Order", d: "Pick a package or do the 5-min interview. Pay via Stripe." },
      { n: "02", t: "We configure", d: "4 hours of setup per device. Skills installed, accounts connected, tested." },
      { n: "03", t: "Delivery", d: "PostNL/DHL with track & trace. You get a Mac mini, a welcome card and a setup link." },
      { n: "04", t: "Plug in & go", d: "30-min Zoom with Robbie. We do the first login together. Day 1: it works." },
    ],
  },

  packages: {
    kicker: "Packages",
    headline: { before: "Three tiers. ", emphasis: "One promise:", after: " it works out of the box." },
    body: "Choose what fits. Upgrade later when you outgrow it.",
    mostChosen: "Most chosen",
    fromPrice: "from",
    footnote:
      "→ All packages include lifetime hardware ownership. No subscriptions. 30-day money-back guarantee. Already own a Mac mini? We do everything 100% remotely — let us know with your order and we'll deduct the hardware cost.",
    tiers: {
      basic: {
        tagline: "For 90% of small businesses",
        priceNote: "one-time · incl. Mac mini · excl. VAT",
        hardware: "Mac mini M4 · 16GB",
        features: [
          "Pre-configured Mac mini",
          "Email triage & morning briefing",
          "Calendar prep with context",
          "Document Q&A",
          "Cloud AI (your own Claude/OpenAI key)",
          "5-day delivery · 30-min onboarding",
        ],
        cta: "Order Basic",
      },
      custom: {
        tagline: "Configured in a 5-min conversation",
        priceNote: "one-time · excl. VAT",
        hardware: "Mac mini M4 · 24–48GB",
        features: [
          "Everything in Basic, plus:",
          "5-min AI interview to map your workflow",
          "2–4 skills tailored to your work",
          "Cloud, local or hybrid",
          "Custom integrations (CRM, DMS, etc.)",
          "2-week delivery",
        ],
        cta: "Start interview",
      },
      jarvis: {
        tagline: "Top tier · 100% local · GDPR-defendable",
        priceNote: "one-time · incl. Mac mini Pro · excl. VAT",
        hardware: "Mac mini M4 Pro · 48GB",
        features: [
          "Everything in Custom, plus:",
          "100% local AI (Qwen 2.5 14B via MLX)",
          "No data leaves your device",
          "Whisper for voice/audio",
          "For lawyers, doctors, accountants",
          "Priority delivery (5–7 days)",
        ],
        cta: "Order Jarvis",
      },
    },
  },

  support: {
    kicker: "Support",
    headline: { before: "Optional. ", emphasis: "Not required.", after: "" },
    body: "You own the hardware. Add support if you want a safety net. 2 months free with annual billing.",
    monthly: "Monthly",
    yearly: "Yearly",
    yearlyBadge: "-17%",
    perYear: " /year",
    perMonth: " /month",
    tiers: [
      { id: "free", name: "Free", features: ["Email support 48h", "Online docs", "Skill updates", "Self-serve"] },
      {
        id: "basic",
        name: "Basic",
        features: ["Email support 24h on weekdays", "Phone 9–5", "Remote troubleshooting", "Skill tweaks included"],
      },
      {
        id: "premium",
        name: "Premium",
        features: [
          "24/7 human support",
          "4h response, weekends included",
          "Hardware swap within 24h",
          "Monthly review call",
        ],
      },
    ],
  },

  founder: {
    imgAlt: "The ReadyClaw Mac mini in hand — small enough to carry with you",
    nameTag: "Robbie — ReadyClaw",
    roleTag: "Founder",
    kicker: "From the founder",
    quote: '"I built this because I was tired of seeing smart people lose to AI."',
    paragraphs: [
      "Three months ago I was wrestling with API keys, n8n workflows and prompt engineering — and I'm technical. I thought: if this is already hard for me, how is an ordinary business owner ever going to get it running?",
      "The answer: they don't. They get stuck on ChatGPT and never go further. Meanwhile AI just keeps moving without them.",
      "ReadyClaw is the answer I wished existed. A Mac mini, pre-configured. Plug in. Log in. Done. No subscriptions, no consultants, no learning curve.",
      "Sounds like what you've been waiting for? Let's talk.",
    ],
    signature: "— Robbie, Founder",
    cta: "Book a 15-min demo",
    waMessage: "Hi Robbie! I'd like to book a 15-min demo.",
  },

  faq: {
    kicker: "FAQ",
    headline: { before: "Questions, ", emphasis: "answered.", after: "" },
    items: [
      {
        q: "Why €899 when ChatGPT is €20/mo?",
        a: "ChatGPT is a chat window. ReadyClaw is a working system that handles email triage, calendar prep and document Q&A automatically in the background. You're buying a working setup, not a subscription.",
      },
      {
        q: "What if I can do this myself?",
        a: "You probably can. It'll cost you 200+ hours of learning plus ongoing maintenance. We've already done that work. You're buying time back.",
      },
      {
        q: "Is my data safe?",
        a: "On the Jarvis tier nothing leaves your device — fully local AI. On Basic/Custom data goes through your own Claude/OpenAI account, not through us. We never see your content.",
      },
      {
        q: "What if something breaks?",
        a: "Apple warranty on the hardware. With Premium support we send a replacement within 24h. Your data sits in an encrypted backup.",
      },
      {
        q: "What if you go out of business?",
        a: "The Mac mini is yours. The skills run locally or through your own accounts. No vendor lock-in. Worst case: you have a working Mac mini you can maintain yourself.",
      },
      {
        q: "Do I need IT skills?",
        a: "If you can set up an iPhone, you can do this. The 30-min onboarding call does everything together.",
      },
      {
        q: "Can I upgrade or add skills later?",
        a: "Yes. Basic → Custom is a remote upgrade. Adding skills costs €150–€400 each depending on complexity.",
      },
      {
        q: "30-day money-back?",
        a: "Yes. Not working for you? Send it back, full refund. No fine print.",
      },
    ],
  },

  finalCta: {
    kicker: "Ready to get started?",
    headline: { before: "Plug in. Log in. ", emphasis: "Done.", after: "" },
    body: "Ask your questions or order right away. No obligation — we always email first and think along about what fits your work.",
    ctaPackage: "Choose your package",
    ctaWhatsApp: "Send a WhatsApp",
    waMessage:
      "Hi ReadyClaw! I'm interested in a pre-configured AI coworker on a Mac mini. Can you tell me more?",
  },

  footer: {
    tagline: "AI coworker, ready to go.",
    productHeading: "Product",
    infoHeading: "Info",
    contactHeading: "Contact",
    productLinks: [
      { href: "#what", label: "What it does" },
      { href: "#packages", label: "Packages" },
      { href: "#how", label: "How it works" },
      { href: "#support", label: "Support" },
    ],
    infoLinks: [
      { href: "#faq", label: "FAQ" },
      { href: "#packages", label: "Contact" },
    ],
    whatsApp: "WhatsApp",
    waMessage: "Hi ReadyClaw! I have a question.",
    country: "Netherlands",
    copyright: "© 2026 ReadyClaw",
    closer: "Plug in. Log in. Done.",
  },

  order: {
    tierLabels: {
      basic: "Basic — €899",
      custom: "Custom — from €1.199",
      jarvis: "Jarvis — €2.499",
    },
    titlePrefix: "Order ",
    doneTitle: "Order received",
    doneDescription: "We'll be in touch within 24h.",
    formDescription: "Fill in your details. No obligation — we email first.",
    doneHint: "Check your inbox for the confirmation",
    fieldName: "Name",
    fieldEmail: "Email",
    fieldPhone: "Phone (optional)",
    fieldHasMac: "Do you already have a Mac mini?",
    fieldMode: "Local or cloud?",
    fieldNotes: "Notes",
    hasMacOptions: [
      { v: "No", l: "No" },
      { v: "Yes, remote setup only", l: "Yes, remote setup only" },
      { v: "Not sure", l: "Not sure" },
    ],
    modeOptions: [
      { v: "Local", l: "Local" },
      { v: "Cloud", l: "Cloud" },
      { v: "Hybrid", l: "Hybrid" },
      { v: "Not sure", l: "Not sure" },
    ],
    submit: "Send order →",
    consent: "By submitting, you agree we use your details only to handle your order.",
    submitting: "Sending…",
    whatsAppCta: "Prefer WhatsApp",
    waMessagePrefix: "Hi ReadyClaw! I'd like to order ",
    waMessageSuffix: ".",
    waMessageFallback: "a package",
    errors: {
      nameRequired: "Name is required",
      emailInvalid: "Invalid email address",
      validation: "Validation error",
      notConfigured: "Orders aren't connected yet. Get in touch via WhatsApp or the form below.",
      generic: "Something went wrong. Try again or send us a WhatsApp.",
      unknown: "Unknown error",
    },
    emailSubjectPrefix: "New ReadyClaw order — ",
  },
};
