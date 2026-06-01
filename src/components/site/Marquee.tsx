import { useI18n } from "@/i18n/I18nProvider";

function Row({ items }: { items: string[] }) {
  return (
    <div className="marquee-track">
      {items.map((t, i) => (
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
  const { t } = useI18n();
  return (
    <div className="overflow-hidden border-y border-foreground bg-foreground py-3.5">
      <div className="flex">
        <Row items={t.marquee} />
        <Row items={t.marquee} />
      </div>
    </div>
  );
}
