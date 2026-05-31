import { Plus, ArrowRight } from "lucide-react";
import type { TierId } from "@/App";

type Tier = {
  id: TierId;
  label: string;
  tagline: string;
  price: string;
  priceNote: string;
  hardware: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    id: "basic",
    label: "Basic",
    tagline: "Voor 90% van de kleine bedrijven",
    price: "€899",
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
  {
    id: "custom",
    label: "Custom",
    tagline: "Geconfigureerd in een gesprek van 5 min",
    price: "vanaf €1.199",
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
    featured: true,
  },
  {
    id: "jarvis",
    label: "Jarvis",
    tagline: "Top tier · 100% lokaal · AVG-defendable",
    price: "€2.499",
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
];

export function Packages({ onOrder }: { onOrder: (tier: TierId) => void }) {
  return (
    <section id="packages" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal max-w-3xl">
          <p className="mono-label text-accent">// Pakketten</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
            Drie tiers. <span className="italic">Eén belofte:</span> het werkt uit de doos.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Kies wat past. Upgrade later als je eroverheen groeit.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-5 lg:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.id}
                className={`reveal flex flex-col p-8 transition-transform ${
                  featured
                    ? "bg-ink-deep text-[oklch(0.93_0.01_84)] lg:-mt-6 lg:mb-6 lg:shadow-[0_40px_80px_-30px_oklch(0.2_0.014_62/0.5)]"
                    : "border border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`mono-label ${featured ? "text-[oklch(0.7_0.01_84)]" : "text-ink-soft"}`}
                  >
                    // {t.label}
                  </span>
                  {featured && (
                    <span className="bg-accent px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-foreground">
                      Meest gekozen
                    </span>
                  )}
                </div>

                <div
                  className={`mt-7 font-display text-5xl tracking-[-0.01em] md:text-6xl ${
                    featured ? "text-[oklch(0.99_0.01_84)]" : ""
                  }`}
                >
                  {t.price}
                </div>
                <div
                  className={`mono-label mt-2 ${featured ? "text-[oklch(0.62_0.01_84)]" : "text-ink-soft"}`}
                >
                  {t.priceNote}
                </div>

                <div
                  className={`mt-6 border-t pt-6 ${featured ? "border-[oklch(0.99_0.01_84/0.12)]" : "border-border"}`}
                >
                  <div className="font-display text-lg italic">{t.tagline}</div>
                  <div
                    className={`mono-label mt-2 ${featured ? "text-accent" : "text-accent"}`}
                  >
                    {t.hardware}
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
                      <Plus size={14} className="mt-0.5 shrink-0 text-accent" />
                      <span className={featured ? "text-[oklch(0.85_0.01_84)]" : "text-foreground/90"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOrder(t.id)}
                  className={`group mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition-all ${
                    featured
                      ? "bg-accent text-accent-foreground hover:bg-[oklch(0.97_0.01_84)] hover:text-ink-deep"
                      : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {t.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-10 max-w-3xl font-mono text-xs leading-relaxed text-ink-soft">
          → Alle pakketten zijn inclusief lifetime hardware-eigendom. Geen abonnementen. 30 dagen
          geld-terug-garantie. Heb je al een Mac mini? Wij doen alles 100% remote — laat het weten
          bij je bestelling, dan trekken we de hardware-kosten af.
        </p>
      </div>
    </section>
  );
}
