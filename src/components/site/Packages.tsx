import { Plus } from "lucide-react";

type Tier = {
  id: "basic" | "custom" | "jarvis";
  label: string;
  headline: string;
  price: string;
  priceNote: string;
  hardware: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    id: "basic",
    label: "// Basic",
    tagline: "For 90% of small businesses",
    headline: "Net als een nieuwe iPhone — werkt direct.",
    price: "€899",
    priceNote: "eenmalig · incl. Mac mini · ex. btw",
    hardware: "Mac mini M4 · 16GB",
    features: [
      "Pre-configured Mac mini",
      "Email triage & morning briefing",
      "Calendar prep with context",
      "Document Q&A",
      "Cloud AI (jouw Claude/OpenAI key)",
      "5 dagen levering · 30-min onboarding",
    ],
    cta: "Bestel Basic",
  },
  {
    id: "custom",
    label: "// Custom",
    tagline: "Configured in a 5-min interview",
    headline: "Op maat, via een gesprek van 5 min.",
    price: "vanaf €1.199",
    priceNote: "eenmalig · ex. btw",
    hardware: "Mac mini M4 · 24-48GB",
    features: [
      "Alles van Basic, plus:",
      "5-min AI interview om je workflow te mappen",
      "2-4 skills afgestemd op jouw werk",
      "Cloud, lokaal of hybride",
      "Custom integraties (CRM, DMS, etc.)",
      "2 weken levering",
    ],
    cta: "Start interview",
    featured: true,
  },
  {
    id: "jarvis",
    label: "// Jarvis",
    tagline: "Top tier · 100% lokaal · AVG-defendable",
    headline: "Best of the best. Je persoonlijke AI.",
    price: "€2.499",
    priceNote: "eenmalig · incl. Mac mini Pro · ex. btw",
    hardware: "Mac mini M4 Pro · 48GB",
    features: [
      "Alles van Custom, plus:",
      "100% lokale AI (Qwen 2.5 14B via MLX)",
      "Geen data verlaat je apparaat",
      "Whisper voor voice/audio",
      "Voor advocaten, artsen, accountants",
      "Priority delivery (5-7 dagen)",
    ],
    cta: "Bestel Jarvis",
  },
];

export function Packages({ onOrder }: { onOrder: (tier: Tier["id"]) => void }) {
  return (
    <section id="packages" className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Packages</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-medium tracking-tight max-w-3xl">
          Three tiers. <em className="italic font-normal">One promise:</em> it works out of the box.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Pick what fits. Upgrade later if you outgrow it.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
          {tiers.map((t) => (
            <div
              key={t.id}
              className={`relative p-8 flex flex-col ${
                t.featured ? "bg-accent/5" : "bg-background"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 right-0 bg-accent text-primary-foreground font-mono text-[10px] uppercase tracking-wider px-3 py-1">
                  Most popular
                </div>
              )}
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {t.label}
              </div>
              <div className="mt-6 font-display text-5xl">{t.price}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {t.priceNote}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-lg italic">{t.tagline}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {t.hardware}
                </div>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Plus size={14} className="mt-1 text-accent shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onOrder(t.id)}
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${
                  t.featured
                    ? "bg-accent text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-accent hover:text-accent"
                }`}
              >
                {t.cta} →
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-muted-foreground">
          → All packages include lifetime hardware ownership. No subscriptions. 30-day money-back guarantee.
          Heb je al een Mac mini? Wij doen alles 100% remote — laat het weten bij je bestelling, dan trekken we de hardware-kosten af.
        </p>
      </div>
    </section>
  );
}
