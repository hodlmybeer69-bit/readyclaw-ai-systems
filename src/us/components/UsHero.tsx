import { CtaButtons } from "./CtaButtons";
import { CallCard } from "./CallCard";

const STATS = [
  { v: "62%", l: "Of calls to small businesses go unanswered" },
  { v: "24/7", l: "Always on — nights, weekends, holidays" },
  { v: "< 1 ring", l: "Answer time, every time" },
  { v: "$0", l: "Per-call fees — flat pricing" },
];

export function UsHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-deep">
      <div className="absolute inset-0 -z-10 glow-warm" aria-hidden />
      <div className="absolute inset-0 -z-10 opacity-[0.4] [background:radial-gradient(circle_at_1px_1px,oklch(0.99_0.01_84/0.07)_1px,transparent_0)] [background-size:34px_34px]" aria-hidden />

      <div className="relative mx-auto max-w-[1240px] px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="rise d-1 mb-9 inline-flex items-center gap-3 spec-chip px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent dot-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.92_0.01_84)]">
            AI receptionist · 24/7 answering service · United States
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div className="max-w-2xl">
            <h1 className="rise d-2 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.94] tracking-[-0.02em] text-[oklch(0.985_0.01_84)]">
              Stop losing customers to{" "}
              <span className="italic text-accent">missed calls.</span>
            </h1>

            <p className="rise d-3 mt-7 max-w-xl text-lg leading-relaxed text-[oklch(0.84_0.01_84)] md:text-xl">
              ReadyClaw is your <strong className="font-semibold text-[oklch(0.95_0.01_84)]">AI receptionist</strong> — a
              24/7 answering service that picks up every call, books appointments and captures
              the lead, even when you're with a customer, closed, or asleep.
            </p>

            <div className="rise d-4 mt-9">
              <CtaButtons tone="dark" />
            </div>

            <p className="rise d-5 mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[oklch(0.62_0.01_84)]">
              No per-call fees · Live in days · Keep your current number
            </p>
          </div>

          <div className="rise d-4 flex justify-center lg:justify-end">
            <CallCard />
          </div>
        </div>

        <div className="rise d-6 mt-16 grid grid-cols-2 border-t border-[oklch(0.99_0.01_84/0.18)] md:mt-20 md:grid-cols-4">
          {STATS.map((s, i) => (
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
