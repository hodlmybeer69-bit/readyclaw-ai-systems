import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { I18nProvider } from "@/i18n/I18nProvider";
import { useDocumentHead } from "@/i18n/useDocumentHead";
import { dictionaries, getLocaleFromPath } from "@/i18n";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ProductBand } from "@/components/site/ProductBand";
import { WhatItDoes } from "@/components/site/WhatItDoes";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Packages } from "@/components/site/Packages";
import { Support } from "@/components/site/Support";
import { Founder } from "@/components/site/Founder";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { OrderModal } from "@/components/site/OrderModal";

export type TierId = "basic" | "custom" | "jarvis";

// Locale is derived once from the URL the page is served at. The prerender
// navigates to /, /es/, /nl/, /de/ and the browser hydrates the same path, so
// the rendered language always matches the URL on both sides.
const locale = getLocaleFromPath(
  typeof window !== "undefined" ? window.location.pathname : "/",
);

export function App() {
  const [tier, setTier] = useState<TierId | null>(null);
  const dictionary = dictionaries[locale];
  useReveal();
  useDocumentHead(locale, dictionary);

  return (
    <I18nProvider locale={locale} dictionary={dictionary}>
      <div className="relative min-h-screen bg-background text-foreground">
        <div className="grain" aria-hidden />
        <Nav onOrder={() => setTier("custom")} />
        <main>
          <Hero onOrder={() => setTier("custom")} />
          <Marquee />
          <ProductBand />
          <WhatItDoes />
          <HowItWorks />
          <Packages onOrder={setTier} />
          <Support />
          <Founder />
          <Faq />
          <FinalCta onOrder={() => setTier("custom")} />
        </main>
        <Footer />
        <OrderModal tier={tier} onOpenChange={(open) => !open && setTier(null)} />
      </div>
    </I18nProvider>
  );
}
