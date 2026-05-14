export function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground reveal">
          PRE-CONFIGURED · MAC MINI · LOKAAL OF CLOUD
        </p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.02] tracking-tight max-w-5xl reveal reveal-1">
          Jouw AI-medewerker.{" "}
          <em className="italic font-normal text-accent">Klaar.</em>{" "}
          Zonder gedoe.
          <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-accent ml-2 align-middle" />
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed reveal reveal-2">
          Geen maandenlang uitvogelen. Geen experimenteren met API-kosten. Wij leveren een
          Mac mini met je AI-systeem er compleet op — lokaal of in de cloud. Binnen een paar
          uur ben je klaar om te werken.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 reveal reveal-3">
          <a
            href="#packages"
            className="inline-flex items-center gap-2 bg-accent text-primary-foreground px-6 py-3 font-mono text-xs uppercase tracking-wider hover:opacity-90"
          >
            Kies je pakket <span>→</span>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-wider hover:border-foreground transition-colors"
          >
            Zo werkt het
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-border reveal reveal-4">
        {[
          { v: "~4 uur", l: "Klaar om te werken" },
          { v: "100% remote", l: "Setup, ook als je 'm al hebt" },
          { v: "€0/mo*", l: "Lokaal draaien, geen API" },
          { v: "3-6 mnd", l: "Leercurve die je overslaat" },
        ].map((s, i) => (
          <div
            key={i}
            className={`p-6 ${i < 2 ? "border-b md:border-b-0" : ""} ${
              i % 2 === 0 ? "border-r" : ""
            } md:border-r border-border last:border-r-0`}
          >
            <div className="font-display text-2xl md:text-3xl">{s.v}</div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
