import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/config";
import { useI18n } from "@/i18n/I18nProvider";

export function Founder() {
  const { t } = useI18n();
  const f = t.founder;

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 md:grid-cols-12">
        {/* Real product-in-hand photograph (warm, no faces) */}
        <div className="reveal md:col-span-4">
          <div className="img-frame img-zoom tick-corners relative aspect-[4/5]">
            <img
              src="/img/founder-hand.jpg"
              alt={f.imgAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 z-[1] flex items-center justify-between bg-gradient-to-t from-ink-deep/85 to-transparent px-5 pb-4 pt-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[oklch(0.9_0.01_84)]">
                {f.nameTag}
              </span>
              <span className="mono-label text-accent">{f.roleTag}</span>
            </div>
          </div>
        </div>

        <div className="reveal md:col-span-8">
          <p className="kicker-rule mono-label text-accent">{f.kicker}</p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.9rem,3.6vw,3.2rem)] italic leading-[1.1] tracking-[-0.01em]">
            {f.quote}
          </h2>

          <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            {f.paragraphs.map((para, i) => (
              <p key={i} className={i === f.paragraphs.length - 1 ? "text-foreground" : undefined}>
                {para}
              </p>
            ))}
          </div>

          <p className="mt-7 font-display text-xl italic">{f.signature}</p>

          <a
            href={whatsappLink(f.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2.5 border border-foreground px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            {f.cta}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
