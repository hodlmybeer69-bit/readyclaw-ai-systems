import { useState } from "react";

const tiers = [
  { id: "free", name: "Free", monthly: 0, features: ["Email support 48u", "Online docs", "Skill updates", "Self-serve"] },
  { id: "basic", name: "Basic", monthly: 19.95, features: ["Email support 24u op werkdagen", "Telefoon 9-17", "Remote troubleshooting", "Skill tweaks inbegrepen"] },
  { id: "premium", name: "Premium", monthly: 99.95, features: ["24/7 menselijke support", "4u response, weekenden inbegrepen", "Hardware swap binnen 24u", "Maandelijks review-gesprek"] },
];

const fmt = (n: number) =>
  n === 0 ? "€0" : "€" + n.toFixed(2).replace(".", ",");

export function Support() {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="support" className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// Support</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-medium tracking-tight">
              Optional. <em className="italic font-normal">Not required.</em>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Je bent eigenaar van de hardware. Kies support als je een vangnet wil.
              2 maanden gratis bij jaar.
            </p>
          </div>
          <div className="inline-flex border border-border font-mono text-xs uppercase tracking-wider self-start">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 ${!yearly ? "bg-accent text-primary-foreground" : "text-muted-foreground"}`}
            >
              Maandelijks
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 ${yearly ? "bg-accent text-primary-foreground" : "text-muted-foreground"}`}
            >
              Jaarlijks <span className="ml-1 opacity-70">-17%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border border border-border">
          {tiers.map((t) => {
            const price = yearly ? t.monthly * 10 : t.monthly;
            return (
              <div key={t.id} className="bg-background p-8">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  // {t.name}
                </div>
                <div className="mt-4 font-display text-4xl">
                  {fmt(price)}
                  <span className="text-base font-sans text-muted-foreground">
                    {price === 0 ? "" : yearly ? "/jaar" : "/maand"}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="text-accent font-mono">+</span>
                      <span>{f}</span>
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
