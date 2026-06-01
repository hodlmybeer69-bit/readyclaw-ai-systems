import { useI18n } from "@/i18n/I18nProvider";
import { LOCALES, localePath } from "@/i18n";

/**
 * Language switcher shown in the header. Each entry is a real link to that
 * locale's prerendered page (EN at "/", others at "/<locale>/"), so switching
 * loads the statically-rendered translation directly — no client routing.
 *
 * `inactiveClass` lets the Nav match the switcher to its current colour state
 * (light text over the dark hero, ink text once scrolled).
 */
export function LanguageSwitcher({
  inactiveClass,
  layout = "inline",
}: {
  inactiveClass: string;
  layout?: "inline" | "stack";
}) {
  const { locale, t } = useI18n();

  return (
    <div
      aria-label={t.nav.languageAria}
      className={
        layout === "inline"
          ? "flex items-center gap-2.5"
          : "flex flex-wrap items-center gap-x-4 gap-y-2"
      }
    >
      {LOCALES.map((l) => {
        const isActive = l === locale;
        return (
          <a
            key={l}
            href={localePath(l)}
            hrefLang={l}
            aria-current={isActive ? "true" : undefined}
            title={t.languageNames[l]}
            className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
              isActive ? "text-accent" : inactiveClass
            }`}
          >
            {l}
          </a>
        );
      })}
    </div>
  );
}
