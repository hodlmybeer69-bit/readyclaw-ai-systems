import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Hero({ onOrder }: { onOrder: () => void }) {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-deep">
      {/* Full-bleed cinematic photograph */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/hero-desk.jpg"
          alt={h.imgAlt}
          width={2400}
          height={1500}
          fetchPriority="high"
          decoding="async"
          className="ken h-full w-full object-cover"
        />
        <div className="cine-wash" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-32 md:pb-24 md:pt-44">
        {/* status chip — the "it's already running" signal as an overlay detail */}
        <div className="rise d-1 mb-9 inline-flex items-center gap-3 spec-chip px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent dot-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.92_0.01_84)]">
            {h.chip}
          </span>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Headline column */}
          <div className="max-w-3xl">
            <h1 className="rise d-2 font-display text-[clamp(3.4rem,9vw,8rem)] leading-[0.92] tracking-[-0.02em] text-[oklch(0.985_0.01_84)]">
              {h.headline.line1}
              <br />
              <span className="italic text-accent">{h.headline.emphasis}</span>
              {h.headline.rest}
            </h1>

            <p className="rise d-3 mt-8 max-w-xl text-lg leading-relaxed text-[oklch(0.84_0.01_84)] md:text-xl">
              {h.body}
            </p>

            <div className="rise d-4 mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={onOrder}
                className="group inline-flex items-center gap-2.5 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-[oklch(0.98_0.01_84)] hover:text-ink-deep"
              >
                {h.ctaPackage}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#how"
                className="inline-flex items-center gap-2.5 border border-[oklch(0.99_0.01_84/0.3)] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-[oklch(0.95_0.01_84)] backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                {h.ctaHow}
              </a>
            </div>
          </div>

          {/* Overheard line — sits low-right on the photo */}
          <div className="rise d-5 hidden lg:block">
            <div className="border-l border-[oklch(0.99_0.01_84/0.25)] pl-6">
              <p className="font-display text-2xl italic leading-snug text-[oklch(0.95_0.01_84)]">
                {h.quote}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[oklch(0.66_0.01_84)]">
                {h.quoteCaption}
              </p>
            </div>
          </div>
        </div>

        {/* Stats — hairline grid on the dark wash */}
        <div className="rise d-6 mt-16 grid grid-cols-2 border-t border-[oklch(0.99_0.01_84/0.18)] md:mt-20 md:grid-cols-4">
          {h.stats.map((s, i) => (
            <div
              key={i}
              className={`px-1 py-6 md:px-6 ${i !== 0 ? "md:border-l md:border-[oklch(0.99_0.01_84/0.14)]" : ""} ${
                i < 2 ? "border-b border-[oklch(0.99_0.01_84/0.14)] md:border-b-0" : ""
              } ${i === 1 || i === 3 ? "border-l border-[oklch(0.99_0.01_84/0.14)]" : ""}`}
            >
              <div className="font-display text-3xl text-[oklch(0.98_0.01_84)] md:text-4xl">
                {s.v}
              </div>
              <div className="mono-label mt-2 text-[oklch(0.66_0.01_84)]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
