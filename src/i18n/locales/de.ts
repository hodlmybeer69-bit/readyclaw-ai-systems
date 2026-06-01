import type { Dictionary } from "../types";

/** German — natural, informal (du-form) German translated from the Dutch source. */
export const de: Dictionary = {
  meta: {
    htmlLang: "de",
    ogLocale: "de_DE",
    title: "ReadyClaw — Dein KI-Mitarbeiter. Startklar. Ohne Aufwand.",
    description:
      "Vorkonfigurierte KI-Systeme auf einem Mac mini — lokal oder in der Cloud. Einstecken, anmelden, fertig. Spar dir monatelangen API-Aufwand. Ab 899 €, einmalig, kein Abo.",
    ogTitle: "ReadyClaw — Dein KI-Mitarbeiter. Startklar. Ohne Aufwand.",
    ogDescription:
      "Vorkonfigurierte KI-Systeme auf einem Mac mini. Einstecken, anmelden, fertig. Ab 899 €, einmalig — kein Abo, keine Lernkurve.",
  },

  languageNames: { en: "English", es: "Español", nl: "Nederlands", de: "Deutsch" },

  nav: {
    homeAria: "ReadyClaw Startseite",
    menuAria: "Menü",
    languageAria: "Sprache",
    order: "Bestellen",
    links: [
      { href: "#what", label: "Was es macht" },
      { href: "#how", label: "So funktioniert's" },
      { href: "#packages", label: "Pakete" },
      { href: "#support", label: "Support" },
      { href: "#faq", label: "FAQ" },
    ],
  },

  hero: {
    imgAlt: "Ein Arbeitsplatz bei Nacht — ein Mac, der weiterarbeitet, während du schläfst",
    chip: "Vorkonfiguriert · Mac mini · Lokal oder Cloud",
    headline: { line1: "Dein KI-Mitarbeiter.", emphasis: "Startklar.", rest: " Ohne Aufwand." },
    body: "Kein monatelanges Herumprobieren. Kein Experimentieren mit API-Kosten. Wir liefern einen Mac mini mit deinem KI-System komplett eingerichtet — lokal oder in der Cloud. Innerhalb weniger Stunden bist du startklar.",
    ctaPackage: "Wähle dein Paket",
    ctaHow: "So funktioniert's",
    quote: "„Guten Morgen. Drei Dinge brauchen deine Aufmerksamkeit.“",
    quoteCaption: "— dein Morgen-Briefing, automatisch · Mac mini M4",
    stats: [
      { v: "~4 Std.", l: "Startklar zum Arbeiten" },
      { v: "100%", l: "Remote-Einrichtung" },
      { v: "€0/mo", l: "Lokal — keine API-Kosten" },
      { v: "3–6 Mon.", l: "Lernkurve, die du überspringst" },
    ],
  },

  marquee: [
    "Kein Abo",
    "30 Tage Geld-zurück",
    "Hardware-Eigentum auf Lebenszeit",
    "100% lokal auf Jarvis",
    "DSGVO-fest",
    "Kein Vendor-Lock-in",
    "30-Min-Onboarding",
    "Keine Lernkurve",
  ],

  product: {
    kicker: "Das Gerät",
    imgAlt: "Der Mac mini mit deinem ReadyClaw-System, bereit zwischen deinen Bildschirmen",
    headline: { before: "Eine leise kleine Box. Deine gesamte ", emphasis: "KI-Schicht", after: ", vorinstalliert." },
    body: "Kein Serverschrank, kein Cloud-Abo, keine blinkenden Lämpchen. Ein Mac mini in der Größe eines Notizblocks, der deinen KI-Mitarbeiter ausführt — auf Wunsch komplett offline auf deinem eigenen Schreibtisch.",
    specs: [
      { k: "Apple Silicon", v: "M4 · bis 48GB" },
      { k: "Stellfläche", v: "12,7 × 12,7 cm" },
      { k: "Verbrauch", v: "~7W Leerlauf" },
      { k: "Eigentum", v: "100% deins" },
    ],
  },

  what: {
    kicker: "Was dein ReadyClaw macht",
    headline: { before: "Drei Skills, die ", emphasis: "90%", after: " der täglichen Reibung beseitigen." },
    body: "Kein Chatfenster, zu dem du gehen musst. Die Arbeit passiert im Hintergrund, auf deinem eigenen Gerät — und du siehst nur das Ergebnis.",
    imgAlt: "Mac mini auf einem aufgeräumten Schreibtisch, Draufsicht",
    blocks: [
      {
        n: "01",
        label: "E-Mail-Triage",
        title: "Wach auf mit einem sortierten Posteingang.",
        body: "Nachts liest deine KI jede E-Mail, ordnet sie nach Priorität, fasst den Rest zusammen und schreibt Antwortentwürfe für Routinenachrichten. Du wachst mit einem 3-Minuten-Briefing auf statt mit einem 90-Minuten-Chaos.",
        bullets: [
          "Top-3-Prioritäten nach oben",
          "Routineantworten vorformuliert",
          "Rauschen automatisch archiviert mit Audit-Log",
        ],
      },
      {
        n: "02",
        label: "Termin-Vorbereitung",
        title: "Geh vorbereitet in jedes Meeting.",
        body: "15 Minuten vor jedem externen Meeting liefert dir deine KI ein Briefing: Firmeninfos, aktuelle Mails mit den Teilnehmern, Vorbereitungsnotizen und eine vorgeschlagene Einstiegsfrage.",
        bullets: [
          "Automatische Recherche zu externen Teilnehmern",
          "Aktuelle Kommunikation einbezogen",
          "Spezifische Vorbereitung je Meeting-Typ",
        ],
      },
      {
        n: "03",
        label: "Dokumenten-Q&A",
        title: "Frag deine Dateien alles.",
        body: "Verbinde Drive, Dropbox, OneDrive oder lokale Ordner. Frag dann in normaler Sprache: ‚Was sagt der Acme-Vertrag zur Kündigung?‘ Antwort in 2 Sekunden, mit Quelle.",
        bullets: [
          "Funktioniert mit PDF, Word, Pages, Klartext",
          "Antworten mit Quelle und direktem Link",
          "Lokale Indexierung im Jarvis-Tarif",
        ],
      },
    ],
  },

  how: {
    kicker: "So funktioniert's",
    headline: { before: "Von der Bestellung zur ", emphasis: "laufenden KI", after: " in 5 Tagen." },
    note: "Kein IT-Team nötig",
    steps: [
      { n: "01", t: "Bestellen", d: "Wähle ein Paket oder mach das 5-Min-Interview. Zahl per Stripe." },
      { n: "02", t: "Wir konfigurieren", d: "4 Stunden Einrichtung pro Gerät. Skills installiert, Konten verbunden, getestet." },
      { n: "03", t: "Lieferung", d: "PostNL/DHL mit Sendungsverfolgung. Du bekommst einen Mac mini, eine Willkommenskarte und einen Setup-Link." },
      { n: "04", t: "Einstecken & los", d: "30-Min-Zoom mit Robbie. Wir machen die erste Anmeldung gemeinsam. Tag 1: es läuft." },
    ],
  },

  packages: {
    kicker: "Pakete",
    headline: { before: "Drei Tarife. ", emphasis: "Ein Versprechen:", after: " es funktioniert direkt aus der Box." },
    body: "Wähle, was passt. Rüste später auf, wenn du herauswächst.",
    mostChosen: "Am häufigsten gewählt",
    fromPrice: "ab",
    footnote:
      "→ Alle Pakete beinhalten Hardware-Eigentum auf Lebenszeit. Keine Abos. 30 Tage Geld-zurück-Garantie. Hast du schon einen Mac mini? Wir machen alles 100% remote — sag es bei deiner Bestellung, dann ziehen wir die Hardware-Kosten ab.",
    tiers: {
      basic: {
        tagline: "Für 90% der kleinen Unternehmen",
        priceNote: "einmalig · inkl. Mac mini · zzgl. MwSt.",
        hardware: "Mac mini M4 · 16GB",
        features: [
          "Vorkonfigurierter Mac mini",
          "E-Mail-Triage & Morgen-Briefing",
          "Termin-Vorbereitung mit Kontext",
          "Dokumenten-Q&A",
          "Cloud-KI (dein eigener Claude/OpenAI-Key)",
          "5 Tage Lieferung · 30-Min-Onboarding",
        ],
        cta: "Basic bestellen",
      },
      custom: {
        tagline: "Konfiguriert in einem 5-Min-Gespräch",
        priceNote: "einmalig · zzgl. MwSt.",
        hardware: "Mac mini M4 · 24–48GB",
        features: [
          "Alles aus Basic, plus:",
          "5-Min-KI-Interview, um deinen Workflow zu erfassen",
          "2–4 auf deine Arbeit abgestimmte Skills",
          "Cloud, lokal oder hybrid",
          "Individuelle Integrationen (CRM, DMS, usw.)",
          "2 Wochen Lieferung",
        ],
        cta: "Interview starten",
      },
      jarvis: {
        tagline: "Top-Tarif · 100% lokal · DSGVO-fest",
        priceNote: "einmalig · inkl. Mac mini Pro · zzgl. MwSt.",
        hardware: "Mac mini M4 Pro · 48GB",
        features: [
          "Alles aus Custom, plus:",
          "100% lokale KI (Qwen 2.5 14B via MLX)",
          "Keine Daten verlassen dein Gerät",
          "Whisper für Sprache/Audio",
          "Für Anwälte, Ärzte, Steuerberater",
          "Priority-Lieferung (5–7 Tage)",
        ],
        cta: "Jarvis bestellen",
      },
    },
  },

  support: {
    kicker: "Support",
    headline: { before: "Optional. ", emphasis: "Nicht verpflichtend.", after: "" },
    body: "Die Hardware gehört dir. Füge Support hinzu, wenn du ein Sicherheitsnetz willst. 2 Monate gratis bei jährlicher Zahlung.",
    monthly: "Monatlich",
    yearly: "Jährlich",
    yearlyBadge: "-17%",
    perYear: " /Jahr",
    perMonth: " /Monat",
    tiers: [
      { id: "free", name: "Free", features: ["E-Mail-Support 48 Std.", "Online-Doku", "Skill-Updates", "Self-Service"] },
      {
        id: "basic",
        name: "Basic",
        features: ["E-Mail-Support 24 Std. werktags", "Telefon 9–17 Uhr", "Remote-Fehlerbehebung", "Skill-Anpassungen inklusive"],
      },
      {
        id: "premium",
        name: "Premium",
        features: [
          "24/7 menschlicher Support",
          "4 Std. Reaktionszeit, Wochenenden inklusive",
          "Hardware-Tausch innerhalb 24 Std.",
          "Monatliches Review-Gespräch",
        ],
      },
    ],
  },

  founder: {
    imgAlt: "Der ReadyClaw Mac mini in der Hand — klein genug zum Mitnehmen",
    nameTag: "Robbie — ReadyClaw",
    roleTag: "Gründer",
    kicker: "Vom Gründer",
    quote: "„Ich habe das gebaut, weil ich es leid war, mitanzusehen, wie kluge Leute gegen die KI verlieren.“",
    paragraphs: [
      "Vor drei Monaten habe ich mich mit API-Keys, n8n-Workflows und Prompt-Engineering herumgeschlagen — und ich bin technisch versiert. Ich dachte: Wenn das schon für mich schwierig ist, wie soll ein normaler Unternehmer das jemals zum Laufen bringen?",
      "Die Antwort: gar nicht. Sie bleiben bei ChatGPT hängen und kommen nie weiter. Währenddessen zieht die KI einfach ohne sie davon.",
      "ReadyClaw ist die Antwort, die ich mir gewünscht hätte. Ein Mac mini, vorkonfiguriert. Einstecken. Anmelden. Fertig. Keine Abos, keine Berater, keine Lernkurve.",
      "Klingt nach dem, worauf du gewartet hast? Lass uns reden.",
    ],
    signature: "— Robbie, Gründer",
    cta: "15-Min-Demo buchen",
    waMessage: "Hallo Robbie! Ich würde gern eine 15-Min-Demo buchen.",
  },

  faq: {
    kicker: "FAQ",
    headline: { before: "Fragen, ", emphasis: "beantwortet.", after: "" },
    items: [
      {
        q: "Warum 899 €, wenn ChatGPT 20 €/Monat kostet?",
        a: "ChatGPT ist ein Chatfenster. ReadyClaw ist ein laufendes System, das E-Mail-Triage, Termin-Vorbereitung und Dokumenten-Q&A automatisch im Hintergrund erledigt. Du kaufst eine funktionierende Einrichtung, kein Abo.",
      },
      {
        q: "Was, wenn ich das selbst kann?",
        a: "Wahrscheinlich kannst du das. Es kostet dich 200+ Stunden Lernen plus laufende Wartung. Wir haben diese Arbeit schon erledigt. Du kaufst dir Zeit zurück.",
      },
      {
        q: "Sind meine Daten sicher?",
        a: "Im Jarvis-Tarif verlässt nichts dein Gerät — vollständig lokale KI. Bei Basic/Custom laufen die Daten über dein eigenes Claude/OpenAI-Konto, nicht über uns. Wir sehen deine Inhalte nie.",
      },
      {
        q: "Was, wenn etwas kaputtgeht?",
        a: "Apple-Garantie auf die Hardware. Mit Premium-Support schicken wir innerhalb von 24 Std. einen Ersatz. Deine Daten liegen in einem verschlüsselten Backup.",
      },
      {
        q: "Was, wenn ihr pleitegeht?",
        a: "Der Mac mini gehört dir. Die Skills laufen lokal oder über deine eigenen Konten. Kein Vendor-Lock-in. Im schlimmsten Fall: Du hast einen funktionierenden Mac mini, den du selbst warten kannst.",
      },
      {
        q: "Brauche ich IT-Kenntnisse?",
        a: "Wenn du ein iPhone einrichten kannst, kannst du das. Der 30-Min-Onboarding-Call macht alles gemeinsam.",
      },
      {
        q: "Kann ich später aufrüsten oder Skills hinzufügen?",
        a: "Ja. Basic → Custom ist ein Remote-Upgrade. Skills hinzufügen kostet je nach Komplexität 150–400 € pro Stück.",
      },
      {
        q: "30 Tage Geld-zurück?",
        a: "Ja. Funktioniert es nicht für dich? Schick ihn zurück, volle Rückerstattung. Kein Kleingedrucktes.",
      },
    ],
  },

  finalCta: {
    kicker: "Bereit loszulegen?",
    headline: { before: "Einstecken. Anmelden. ", emphasis: "Fertig.", after: "" },
    body: "Stell deine Fragen oder bestell direkt. Keine Verpflichtung — wir mailen immer zuerst und denken mit, was zu deiner Arbeit passt.",
    ctaPackage: "Wähle dein Paket",
    ctaWhatsApp: "WhatsApp senden",
    waMessage:
      "Hallo ReadyClaw! Ich interessiere mich für einen vorkonfigurierten KI-Mitarbeiter auf einem Mac mini. Könnt ihr mir mehr erzählen?",
  },

  footer: {
    tagline: "KI-Mitarbeiter, sofort einsatzbereit.",
    productHeading: "Produkt",
    infoHeading: "Info",
    contactHeading: "Kontakt",
    productLinks: [
      { href: "#what", label: "Was es macht" },
      { href: "#packages", label: "Pakete" },
      { href: "#how", label: "So funktioniert's" },
      { href: "#support", label: "Support" },
    ],
    infoLinks: [
      { href: "#faq", label: "FAQ" },
      { href: "#packages", label: "Kontakt" },
    ],
    whatsApp: "WhatsApp",
    waMessage: "Hallo ReadyClaw! Ich habe eine Frage.",
    country: "Niederlande",
    copyright: "© 2026 ReadyClaw",
    closer: "Einstecken. Anmelden. Fertig.",
  },

  order: {
    tierLabels: {
      basic: "Basic — €899",
      custom: "Custom — ab €1.199",
      jarvis: "Jarvis — €2.499",
    },
    titlePrefix: "Bestellen: ",
    doneTitle: "Bestellung erhalten",
    doneDescription: "Wir melden uns innerhalb von 24 Std.",
    formDescription: "Trag deine Daten ein. Keine Verpflichtung — wir mailen zuerst.",
    doneHint: "Sieh in deinem Posteingang nach der Bestätigung",
    fieldName: "Name",
    fieldEmail: "E-Mail",
    fieldPhone: "Telefon (optional)",
    fieldHasMac: "Hast du schon einen Mac mini?",
    fieldMode: "Lokal oder Cloud?",
    fieldNotes: "Anmerkungen",
    hasMacOptions: [
      { v: "Nein", l: "Nein" },
      { v: "Ja, nur Remote-Einrichtung", l: "Ja, nur Remote-Einrichtung" },
      { v: "Weiß ich nicht", l: "Weiß ich nicht" },
    ],
    modeOptions: [
      { v: "Lokal", l: "Lokal" },
      { v: "Cloud", l: "Cloud" },
      { v: "Hybrid", l: "Hybrid" },
      { v: "Weiß ich nicht", l: "Weiß ich nicht" },
    ],
    submit: "Bestellung senden →",
    submitting: "Senden…",
    whatsAppCta: "Lieber per WhatsApp",
    waMessagePrefix: "Hallo ReadyClaw! Ich möchte gern ",
    waMessageSuffix: " bestellen.",
    waMessageFallback: "ein Paket",
    errors: {
      nameRequired: "Name ist erforderlich",
      emailInvalid: "Ungültige E-Mail-Adresse",
      validation: "Validierungsfehler",
      notConfigured:
        "Bestellungen sind noch nicht angebunden. Melde dich per WhatsApp oder über das Formular unten.",
      generic: "Etwas ist schiefgelaufen. Versuch es erneut oder schick uns eine WhatsApp.",
      unknown: "Unbekannter Fehler",
    },
    emailSubjectPrefix: "Neue ReadyClaw-Bestellung — ",
  },
};
