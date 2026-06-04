import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "What is an AI receptionist?",
    a: "An AI receptionist is software that answers your phone with a natural-sounding voice, understands what the caller needs, and takes action — booking appointments, answering FAQs, capturing leads or transferring urgent calls. ReadyClaw is an AI receptionist built for local US businesses.",
  },
  {
    q: "How is this different from a traditional 24/7 answering service?",
    a: "A traditional answering service uses human agents who read from a script, cost per minute, and still put callers on hold at busy times. ReadyClaw is a 24/7 answering service powered by an AI voice agent: it answers instantly, every time, with flat pricing and no hold music.",
  },
  {
    q: "Can the AI voice agent book appointments?",
    a: "Yes. The AI voice agent checks your availability live on the call and books the appointment straight into your calendar, then texts or emails you the details so nothing is missed.",
  },
  {
    q: "Is this a good virtual receptionist for a small business?",
    a: "That's exactly who it's for. ReadyClaw is a virtual receptionist for small business owners who can't afford to miss calls but don't want the cost of a full-time front desk — dental offices, law firms, home services, salons and more.",
  },
  {
    q: "What happens to calls after hours?",
    a: "ReadyClaw runs 24/7. Nights, weekends and holidays, every call is answered the same way it would be at noon on a Tuesday — so after-hours leads become booked appointments instead of voicemails.",
  },
  {
    q: "Can I keep my current phone number?",
    a: "Yes. You keep your existing number and simply forward calls to ReadyClaw — all calls, only missed calls, or only after hours. Nothing about your number changes.",
  },
];

export function UsFaq() {
  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-12">
        <div className="reveal md:col-span-4">
          <p className="kicker-rule mono-label text-accent">FAQ</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            AI receptionist, <span className="italic text-accent">answered.</span>
          </h2>
        </div>

        <div className="reveal md:col-span-8">
          <Accordion type="single" collapsible className="border-t border-border">
            {ITEMS.map((it, i) => (
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
