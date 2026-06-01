import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/i18n/I18nProvider";

export function Faq() {
  const { t } = useI18n();
  const f = t.faq;

  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-12">
        <div className="reveal md:col-span-4">
          <p className="kicker-rule mono-label text-accent">{f.kicker}</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            {f.headline.before}
            <span className="italic text-accent">{f.headline.emphasis}</span>
            {f.headline.after}
          </h2>
        </div>

        <div className="reveal md:col-span-8">
          <Accordion type="single" collapsible className="border-t border-border">
            {f.items.map((it, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-display text-xl tracking-[-0.01em] hover:text-accent hover:no-underline md:text-2xl">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-ink-soft">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
