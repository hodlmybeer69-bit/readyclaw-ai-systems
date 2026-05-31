import { ArrowRight } from "lucide-react";

const STATS = [
  { v: "~4 uur", l: "Klaar om te werken" },
  { v: "100%", l: "Remote setup" },
  { v: "€0/mo", l: "Lokaal — geen API-kosten" },
  { v: "3–6 mnd", l: "Leercurve die je overslaat" },
];

const BOOT = [
  "macOS — pre-configured",
  "skills geïnstalleerd",
  "accounts gekoppeld",
  "getest & klaar",
];

export function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow-warm absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[1240px] px-6 pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="grid items-end gap-14 lg:grid-cols-[1.35fr_1fr]">
          {/* Left — editorial headline */}
          <div>
            <p className="mono-label rise d-1 text-ink-soft">
              Pre-configured · Mac mini · Lokaal of cloud
            </p>

            <h1 className="rise d-2 mt-7 font-display text-[clamp(3.2rem,8vw,7.2rem)] leading-[0.94] tracking-[-0.02em]">
              Jouw AI-medewerker.
              <br />
              <span className="italic text-accent">Klaar.</span> Zonder gedoe.
            </h1>

            <p className="rise d-3 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Geen maandenlang uitvogelen. Geen experimenteren met API-kosten. Wij leveren een Mac
              mini met je AI-systeem er compleet op — lokaal of in de cloud. Binnen een paar uur ben
              je klaar om te werken.
            </p>

            <div className="rise d-4 mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={onOrder}
                className="group inline-flex items-center gap-2.5 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Kies je pakket
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#how"
                className="inline-flex items-center gap-2.5 border border-line-strong px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-foreground"
              >
                Zo werkt het
              </a>
            </div>
          </div>

          {/* Right — device / boot panel */}
          <div className="rise d-5 relative">
            <div className="relative mx-auto max-w-sm">
              {/* the slab */}
              <div className="relative rounded-md bg-ink-deep p-6 shadow-[0_30px_60px_-20px_oklch(0.2_0.014_62/0.45)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.72_0.01_84)]">
                    readyclaw://boot
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent dot-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      online
                    </span>
                  </span>
                </div>
                <div className="mt-5 space-y-2.5">
                  {BOOT.map((line, i) => (
                    <div key={i} className="flex items-center gap-3 font-mono text-[13px] text-[oklch(0.82_0.01_84)]">
                      <span className="text-accent">✓</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-[oklch(0.99_0.01_84/0.1)] pt-5">
                  <div className="font-display text-3xl italic text-[oklch(0.97_0.01_84)]">
                    "Goedemorgen. 3 dingen vragen aandacht."
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[oklch(0.62_0.01_84)]">
                    — je ochtendbriefing, automatisch
                  </div>
                </div>
              </div>
              {/* plinth shadow */}
              <div className="mx-auto mt-1 h-2 w-[82%] rounded-full bg-foreground/10 blur-md" aria-hidden />
              <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Mac mini M4 · jouw apparaat, voorgeladen
              </div>
            </div>
          </div>
        </div>

        {/* Stats hairline grid */}
        <div className="rise d-6 mt-20 grid grid-cols-2 border-t border-line-strong md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`px-1 py-6 md:px-6 ${i !== 0 ? "md:border-l md:border-border" : ""} ${
                i < 2 ? "border-b border-border md:border-b-0" : ""
              } ${i === 1 ? "border-l border-border md:border-l" : ""} ${i === 3 ? "border-l border-border md:border-l" : ""}`}
            >
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="mono-label mt-2 text-ink-soft">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
