const ITEMS = [
  "Geen abonnement",
  "30 dagen geld-terug",
  "Lifetime hardware-eigendom",
  "100% lokaal op Jarvis",
  "AVG-defendable",
  "Geen vendor lock-in",
  "30-min onboarding",
  "Geen leercurve",
];

function Row() {
  return (
    <div className="marquee-track">
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-background/85">
            {t}
          </span>
          <span className="text-accent">◆</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-foreground bg-foreground py-3.5">
      <div className="flex">
        <Row />
        <Row />
      </div>
    </div>
  );
}
