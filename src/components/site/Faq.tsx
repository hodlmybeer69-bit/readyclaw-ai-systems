import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ITEMS = [
  { q: "Waarom €899 als ChatGPT €20/mo is?", a: "ChatGPT is een chat-venster. ReadyClaw is een werkend systeem dat email-triage, agenda-prep en document Q&A automatisch op de achtergrond afhandelt. Je koopt een werkende setup, geen abonnement." },
  { q: "Wat als ik dit zelf kan?", a: "Waarschijnlijk kun je dat. Het kost je 200+ uur leren plus doorlopend onderhoud. Wij hebben dat werk al gedaan. Je koopt tijd terug." },
  { q: "Is mijn data veilig?", a: "Op de Jarvis tier verlaat niets je apparaat — volledig lokale AI. Op Basic/Custom gaat data via je eigen Claude/OpenAI account, niet via ons. Wij zien je content nooit." },
  { q: "Wat als er iets stuk gaat?", a: "Apple-garantie op de hardware. Met Premium support sturen we binnen 24u een vervanging. Je data staat in versleutelde backup." },
  { q: "Wat als jullie failliet gaan?", a: "De Mac mini is van jou. De skills draaien lokaal of via je eigen accounts. Geen vendor lock-in. Worst case: je hebt een werkende Mac mini die je zelf kunt onderhouden." },
  { q: "Heb ik IT-skills nodig?", a: "Als je een iPhone kunt instellen, kun je dit. De 30-min onboarding-call doet alles samen." },
  { q: "Kan ik later upgraden of skills toevoegen?", a: "Ja. Basic → Custom is een remote upgrade. Skills toevoegen kost €150–€400 per stuk afhankelijk van complexiteit." },
  { q: "30 dagen geld-terug?", a: "Ja. Werkt het niet voor je? Stuur 'm terug, volledige refund. Geen kleine lettertjes." },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-12">
        <div className="reveal md:col-span-4">
          <p className="mono-label text-accent">// FAQ</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            Vragen, <span className="italic text-accent">beantwoord.</span>
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
