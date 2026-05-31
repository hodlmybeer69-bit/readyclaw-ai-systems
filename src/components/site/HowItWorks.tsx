const STEPS = [
  { n: "01", t: "Bestel", d: "Kies een pakket of doe het interview van 5 min. Betaal via Stripe." },
  { n: "02", t: "Wij configureren", d: "4 uur setup per apparaat. Skills geïnstalleerd, accounts gekoppeld, getest." },
  { n: "03", t: "Levering", d: "PostNL/DHL met track & trace. Je krijgt een Mac mini, een welkomstkaart en een setup-link." },
  { n: "04", t: "Plug in & go", d: "30-min Zoom met Robbie. We doen de eerste login samen. Dag 1: het werkt." },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-ink-deep py-24 text-[oklch(0.93_0.01_84)] md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mono-label text-accent">// Hoe het werkt</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.015em] text-[oklch(0.97_0.01_84)]">
              Van bestelling naar <span className="italic text-accent">werkende AI</span> in 5
              dagen.
            </h2>
          </div>
          <p className="mono-label shrink-0 text-[oklch(0.62_0.01_84)]">Geen IT-team nodig</p>
        </div>

        <div className="mt-16 grid gap-px bg-[oklch(0.99_0.01_84/0.12)] md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="reveal bg-ink-deep pt-8">
              <div className="h-px w-full bg-accent" />
              <div className="pt-6">
                <div className="font-display text-5xl text-accent">{s.n}</div>
                <div className="mono-label mt-4 text-[oklch(0.93_0.01_84)]">{s.t}</div>
                <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-[oklch(0.7_0.01_84)]">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
