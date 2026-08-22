const INDUSTRIES = [
  "Dental & medical offices",
  "Law firms",
  "Home services (HVAC, plumbing, electrical)",
  "Salons & spas",
  "Real estate",
  "Auto repair shops",
  "Veterinary clinics",
  "Contractors & trades",
];

export function UsIndustries() {
  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-12">
        <div className="reveal md:col-span-5">
          <p className="kicker-rule mono-label text-accent">Who it's for</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            The virtual receptionist for{" "}
            <span className="italic text-accent">small business.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            If your phone is your front door, ReadyClaw makes sure it's never left unanswered.
            Built for local US businesses that live and die by the call.
          </p>
        </div>

        <div className="reveal md:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {INDUSTRIES.map((name) => (
              <li
                key={name}
                className="flex items-center gap-3 bg-card px-5 py-5 text-[15px] transition-colors hover:bg-paper-2"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
