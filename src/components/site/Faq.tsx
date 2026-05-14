import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  { q: "Waarom €899 als ChatGPT €20/mo is?", a: "ChatGPT is een chat-venster. ReadyClaw is een werkend systeem dat email-triage, agenda-prep en document Q&A automatisch op de achtergrond afhandelt. Je koopt een werkende setup, geen abonnement." },
  { q: "Wat als ik dit zelf kan?", a: "Waarschijnlijk kun je dat. Het kost je 200+ uur leren plus doorlopend onderhoud. Wij hebben dat werk al gedaan. Je koopt tijd terug." },
  { q: "Is mijn data veilig?", a: "Op de Jarvis tier verlaat niets je apparaat — volledig lokale AI. Op Basic/Custom gaat data via je eigen Claude/OpenAI account, niet via ons. Wij zien je content nooit." },
  { q: "Wat als er iets stuk gaat?", a: "Apple-garantie op de hardware. Met Premium support sturen we binnen 24u een vervanging. Je data staat in versleutelde backup." },
  { q: "Wat als jullie failliet gaan?", a: "De Mac mini is van jou. De skills draaien lokaal of via je eigen accounts. Geen vendor lock-in. Worst case: je hebt een werkende Mac mini die je zelf kunt onderhouden." },
  { q: "Heb ik IT-skills nodig?", a: "Als je een iPhone kunt instellen, kun je dit. De 30-min onboarding-call doet alles samen." },
  { q: "Kan ik later upgraden of skills toevoegen?", a: "Ja. Basic → Custom is een remote upgrade. Skills toevoegen kost €150-€400 per stuk afhankelijk van complexiteit." },
  { q: "30 dagen geld-terug?", a: "Ja. Werkt het niet voor je? Stuur 'm terug, volledige refund. Geen kleine lettertjes." },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// FAQ</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-medium tracking-tight">
          Questions, <em className="italic font-normal">answered.</em>
        </h2>
        <Accordion type="single" collapsible className="mt-12 border-t border-border">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left font-display text-xl md:text-2xl hover:no-underline hover:text-accent">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
