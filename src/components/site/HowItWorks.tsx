const steps = [
  { n: "01", t: "Order", d: "Pick a package or do the 5-min interview. Pay via Stripe." },
  { n: "02", t: "We configure", d: "4 hours of setup per device. Skills installed, accounts connected, tested." },
  { n: "03", t: "Delivery", d: "PostNL/DHL with tracking. You receive a Mac mini, a welcome card, and a setup link." },
  { n: "04", t: "Plug in & go", d: "30-min Zoom with Robbie. We do first login together. Day 1: it works." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// How it works</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
          From order to <em className="italic font-normal">working AI</em> in 5 days.
        </h2>

        <div className="mt-16 grid md:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 border-t-2 border-t-accent">
              <div className="font-display text-5xl text-accent">{s.n}</div>
              <div className="mt-4 font-mono text-xs uppercase tracking-wider">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
