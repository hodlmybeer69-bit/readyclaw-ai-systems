const STEPS = [
  {
    n: "01",
    title: "We build your AI voice agent",
    body: "We train it on your business — hours, services, pricing, booking rules and the way you greet callers. No work on your end.",
  },
  {
    n: "02",
    title: "Forward your number",
    body: "Point your existing line to ReadyClaw — for missed calls only, after hours, or every call. You keep your number.",
  },
  {
    n: "03",
    title: "It answers every call",
    body: "From day one the AI receptionist picks up, books, and sends you each lead. You review a clean log whenever you want.",
  },
];

export function UsHowItWorks() {
  return (
    <section id="how" className="border-y border-border bg-ink-deep py-24 text-[oklch(0.95_0.01_84)] md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal max-w-3xl">
          <p className="kicker-rule mono-label text-accent">How it works</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.015em] text-[oklch(0.985_0.01_84)]">
            Live in <span className="italic text-accent">days</span>, not months.
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-px overflow-hidden border border-[oklch(0.99_0.01_84/0.14)] bg-[oklch(0.99_0.01_84/0.14)] md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-ink-deep p-8">
              <div className="font-mono text-sm tracking-[0.16em] text-accent">{s.n}</div>
              <h3 className="mt-6 font-display text-2xl tracking-[-0.01em] text-[oklch(0.98_0.01_84)]">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[oklch(0.78_0.01_84)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
