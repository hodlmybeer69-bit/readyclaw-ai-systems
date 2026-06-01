import { useI18n } from "@/i18n/I18nProvider";

export function ProductBand() {
  const { t } = useI18n();
  const p = t.product;

  return (
    <section className="relative isolate overflow-hidden bg-ink-deep text-[oklch(0.93_0.01_84)]">
      <div className="grid lg:grid-cols-2">
        {/* Image half — dramatic, framed product shot */}
        <div className="img-zoom tick-corners relative min-h-[60vw] overflow-hidden sm:min-h-[440px] lg:min-h-[640px]">
          <img
            src="/img/product-macmini.jpg"
            alt={p.imgAlt}
            width={1800}
            height={1200}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="cine-wash-soft" aria-hidden />
        </div>

        {/* Copy half */}
        <div className="relative flex flex-col justify-center px-6 py-20 md:px-14 lg:py-28">
          <p className="kicker-rule mono-label text-accent">{p.kicker}</p>
          <h2 className="mt-6 max-w-xl font-display text-[clamp(2.3rem,4.6vw,4rem)] leading-[1.03] tracking-[-0.015em] text-[oklch(0.98_0.01_84)]">
            {p.headline.before}
            <span className="italic text-accent">{p.headline.emphasis}</span>
            {p.headline.after}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[oklch(0.74_0.01_84)] md:text-lg">
            {p.body}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px border border-[oklch(0.99_0.01_84/0.12)] bg-[oklch(0.99_0.01_84/0.12)] sm:max-w-md">
            {p.specs.map((s) => (
              <div key={s.k} className="bg-ink-deep px-5 py-5">
                <dt className="mono-label text-[oklch(0.62_0.01_84)]">{s.k}</dt>
                <dd className="mt-1.5 font-display text-xl text-[oklch(0.96_0.01_84)]">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
