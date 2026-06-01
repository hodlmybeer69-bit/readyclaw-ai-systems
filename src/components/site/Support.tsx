import { useState } from "react";
import { Plus } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

// Support pricing (monthly, EUR) is structural and stays in the component,
// paired with the localized tier copy by index.
const MONTHLY = [0, 19.95, 99.95];

const fmt = (n: number) => (n === 0 ? "€0" : "€" + n.toFixed(2).replace(".", ","));

export function Support() {
  const { t } = useI18n();
  const s = t.support;
  const [yearly, setYearly] = useState(false);

  return (
    <section id="support" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="kicker-rule mono-label text-accent">{s.kicker}</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
              {s.headline.before}
              <span className="italic text-accent">{s.headline.emphasis}</span>
              {s.headline.after}
            </h2>
            <p className="mt-5 text-lg text-ink-soft">{s.body}</p>
          </div>

          <div className="inline-flex shrink-0 self-start border border-line-strong font-mono text-[11px] uppercase tracking-[0.16em]">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2.5 transition-colors ${!yearly ? "bg-foreground text-background" : "text-ink-soft"}`}
            >
              {s.monthly}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2.5 transition-colors ${yearly ? "bg-foreground text-background" : "text-ink-soft"}`}
            >
              {s.yearly} <span className="ml-1 text-accent">{s.yearlyBadge}</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {s.tiers.map((tier, i) => {
            const monthly = MONTHLY[i] ?? 0;
            const price = yearly ? monthly * 10 : monthly;
            return (
              <div key={tier.id} className="reveal bg-card p-8">
                <div className="mono-label text-ink-soft">// {tier.name}</div>
                <div className="mt-4 font-display text-4xl tracking-[-0.01em]">
                  {fmt(price)}
                  <span className="font-sans text-base text-ink-soft">
                    {price === 0 ? "" : yearly ? s.perYear : s.perMonth}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-snug">
                      <Plus size={14} className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-foreground/90">{f}</span>
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
