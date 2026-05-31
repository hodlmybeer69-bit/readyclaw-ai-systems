import { Mail, CalendarClock, FileSearch } from "lucide-react";

const BLOCKS = [
  {
    n: "01",
    icon: Mail,
    label: "Email triage",
    title: "Word wakker met een gesorteerde inbox.",
    body: "Je AI leest 's nachts elke email, rangschikt op prioriteit, vat de rest samen en schrijft concept-antwoorden voor routineberichten. Je wordt wakker met een briefing van 3 minuten in plaats van een puinhoop van 90.",
    bullets: ["Top 3 prioriteiten naar boven", "Routine-antwoorden voorgeschreven", "Ruis automatisch gearchiveerd met audit-log"],
  },
  {
    n: "02",
    icon: CalendarClock,
    label: "Agenda-prep",
    title: "Loop elke meeting voorbereid binnen.",
    body: "15 minuten voor elke externe meeting levert je AI een briefing: bedrijfsinfo, recente mails met de deelnemers, prep-notities en een voorgestelde openingsvraag.",
    bullets: ["Auto-research op externe deelnemers", "Recente communicatie meegenomen", "Specifieke prep per type meeting"],
  },
  {
    n: "03",
    icon: FileSearch,
    label: "Document Q&A",
    title: "Vraag je bestanden alles.",
    body: "Koppel Drive, Dropbox, OneDrive of lokale mappen. Vraag dan in gewone taal: 'Wat zegt het Acme-contract over opzegging?' Antwoord in 2 seconden, met bron.",
    bullets: ["Werkt op PDF, Word, Pages, platte tekst", "Antwoorden met bron en directe link", "Lokale indexering op de Jarvis-tier"],
  },
];

export function WhatItDoes() {
  return (
    <section id="what" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal max-w-4xl">
          <p className="mono-label text-accent">// Wat je ReadyClaw doet</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
            Drie skills die <span className="italic text-accent">90%</span> van de dagelijkse
            wrijving wegnemen.
          </h2>
        </div>

        <div className="mt-16 md:mt-20">
          {BLOCKS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.n}
                className="reveal grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="flex items-start gap-5 md:col-span-5">
                  <div className="font-display text-5xl leading-none text-accent md:text-6xl">
                    {b.n}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 text-foreground">
                      <Icon size={16} className="text-accent" />
                      <span className="mono-label text-ink-soft">{b.label}</span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.01em] md:text-4xl">
                      {b.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-ink-soft md:col-span-4">{b.body}</p>

                <ul className="space-y-3 md:col-span-3 md:border-l md:border-border md:pl-8">
                  {b.bullets.map((bu, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
                      <span className="font-mono text-accent">+</span>
                      <span className="text-foreground/85">{bu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
