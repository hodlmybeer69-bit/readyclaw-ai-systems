export function Founder() {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="aspect-square border border-accent bg-secondary flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              [ Robbie · founder ]
            </span>
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// From the founder</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl italic font-normal tracking-tight leading-tight">
            "I built this because I was tired of seeing smart people lose to AI."
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              Drie maanden geleden zat ik te worstelen met API-keys, n8n-workflows en prompt
              engineering — en ik ben technisch. Ik dacht: als dit voor mij al lastig is, hoe
              moet een gewone ondernemer dit ooit aan de praat krijgen?
            </p>
            <p>
              Antwoord: dat doen ze niet. Ze blijven hangen op ChatGPT en komen nooit verder.
              Ondertussen gaat AI gewoon door zonder hen.
            </p>
            <p>
              ReadyClaw is het antwoord dat ik wenste dat bestond. Een Mac mini, pre-configured.
              Plug in. Log in. Klaar. Geen abonnementen, geen consultants, geen leercurve.
            </p>
            <p>Klinkt als waar je op wachtte? Laten we praten.</p>
          </div>
          <p className="mt-6 font-display italic text-lg">— Robbie, Founder</p>
          <a
            href="mailto:hi@readyclaw.com?subject=15-min%20demo"
            className="mt-8 inline-flex items-center gap-2 bg-accent text-primary-foreground px-6 py-3 font-mono text-xs uppercase tracking-wider hover:opacity-90"
          >
            Boek een 15-min demo →
          </a>
        </div>
      </div>
    </section>
  );
}
