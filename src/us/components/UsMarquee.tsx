const ITEMS = [
  "Never miss a call",
  "Books appointments",
  "Captures every lead",
  "Answers FAQs",
  "Routes urgent calls",
  "Texts callers back",
  "Bilingual EN / ES",
  "No per-call fees",
  "Keep your number",
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

export function UsMarquee() {
  return (
    <div className="overflow-hidden border-y border-foreground bg-foreground py-3.5">
      <div className="flex">
        <Row />
        <Row />
      </div>
    </div>
  );
}
