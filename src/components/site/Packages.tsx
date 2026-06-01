import { Plus, ArrowRight } from "lucide-react";
import type { TierId } from "@/App";
import { useI18n } from "@/i18n/I18nProvider";

// Structural, NON-translated tier facts: id, brand label, the protected price
// AMOUNT, and which tier is featured. Only the surrounding copy is localized.
type TierMeta = {
  id: TierId;
  label: string;
  /** Protected price amount — never translated. Custom shows a localized "from" word in front. */
  price: string;
  fromPrice?: boolean;
  featured?: boolean;
};

const TIER_META: TierMeta[] = [
  { id: "basic", label: "Basic", price: "€899" },
  { id: "custom", label: "Custom", price: "€1.199", fromPrice: true, featured: true },
  { id: "jarvis", label: "Jarvis", price: "€2.499" },
];

export function Packages({ onOrder }: { onOrder: (tier: TierId) => void }) {
  const { t } = useI18n();
  const p = t.packages;

  return (
    <section id="packages" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal max-w-3xl">
          <p className="kicker-rule mono-label text-accent">{p.kicker}</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
            {p.headline.before}
            <span className="italic">{p.headline.emphasis}</span>
            {p.headline.after}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{p.body}</p>
        </div>

        <div className="mt-16 grid items-start gap-5 lg:grid-cols-3">
          {TIER_META.map((meta) => {
            const copy = p.tiers[meta.id];
            const featured = meta.featured;
            const priceDisplay = meta.fromPrice ? `${p.fromPrice} ${meta.price}` : meta.price;
            return (
              <div
                key={meta.id}
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
                    // {meta.label}
                  </span>
                  {featured && (
                    <span className="bg-accent px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-foreground">
                      {p.mostChosen}
                    </span>
                  )}
                </div>

                <div
                  className={`mt-7 font-display text-5xl tracking-[-0.01em] md:text-6xl ${
                    featured ? "text-[oklch(0.99_0.01_84)]" : ""
                  }`}
                >
                  {priceDisplay}
                </div>
                <div
                  className={`mono-label mt-2 ${featured ? "text-[oklch(0.62_0.01_84)]" : "text-ink-soft"}`}
                >
                  {copy.priceNote}
                </div>

                <div
                  className={`mt-6 border-t pt-6 ${featured ? "border-[oklch(0.99_0.01_84/0.12)]" : "border-border"}`}
                >
                  <div className="font-display text-lg italic">{copy.tagline}</div>
                  <div className={`mono-label mt-2 ${featured ? "text-accent" : "text-accent"}`}>
                    {copy.hardware}
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {copy.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
                      <Plus size={14} className="mt-0.5 shrink-0 text-accent" />
                      <span className={featured ? "text-[oklch(0.85_0.01_84)]" : "text-foreground/90"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOrder(meta.id)}
                  className={`group mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition-all ${
                    featured
                      ? "bg-accent text-accent-foreground hover:bg-[oklch(0.97_0.01_84)] hover:text-ink-deep"
                      : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {copy.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-10 max-w-3xl font-mono text-xs leading-relaxed text-ink-soft">
          {p.footnote}
        </p>
      </div>
    </section>
  );
}
