import { useState } from "react";
import { Plus } from "lucide-react";

const TIERS = [
  { id: "free", name: "Free", monthly: 0, features: ["Email-support 48u", "Online docs", "Skill-updates", "Self-serve"] },
  { id: "basic", name: "Basic", monthly: 19.95, features: ["Email-support 24u op werkdagen", "Telefoon 9–17", "Remote troubleshooting", "Skill-tweaks inbegrepen"] },
  { id: "premium", name: "Premium", monthly: 99.95, features: ["24/7 menselijke support", "4u response, weekenden inbegrepen", "Hardware-swap binnen 24u", "Maandelijks review-gesprek"] },
];

const fmt = (n: number) => (n === 0 ? "€0" : "€" + n.toFixed(2).replace(".", ","));

export function Support() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="support" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mono-label text-accent">// Support</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
              Optioneel. <span className="italic text-accent">Niet verplicht.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Je bent eigenaar van de hardware. Kies support als je een vangnet wil. 2 maanden
              gratis bij jaarbetaling.
            </p>
          </div>

          <div className="inline-flex shrink-0 self-start border border-line-strong font-mono text-[11px] uppercase tracking-[0.16em]">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2.5 transition-colors ${!yearly ? "bg-foreground text-background" : "text-ink-soft"}`}
            >
              Maandelijks
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2.5 transition-colors ${yearly ? "bg-foreground text-background" : "text-ink-soft"}`}
            >
              Jaarlijks <span className="ml-1 text-accent">-17%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {TIERS.map((t) => {
            const price = yearly ? t.monthly * 10 : t.monthly;
            return (
              <div key={t.id} className="reveal bg-card p-8">
                <div className="mono-label text-ink-soft">// {t.name}</div>
                <div className="mt-4 font-display text-4xl tracking-[-0.01em]">
                  {fmt(price)}
                  <span className="font-sans text-base text-ink-soft">
                    {price === 0 ? "" : yearly ? " /jaar" : " /maand"}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
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
