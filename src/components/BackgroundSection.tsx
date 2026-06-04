import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const BackgroundSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].background.items;

  return (
    <section id="baggrund" aria-labelledby="baggrund-heading" className="section-spacing warm-gradient">
      <div className="container-wide">
        <div className="text-center mb-10">
          <span className="editorial-label text-accent mb-3 block">{t('background.label')}</span>
          <h2 id="baggrund-heading" className="editorial-heading-lg text-foreground">{t('background.headline')}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2" />
          <ul className="space-y-3 md:-space-y-2">
            {items.map((item, i) => (
              <li key={i} className="relative pl-12 md:pl-0">
                <div className="absolute left-4 md:left-1/2 top-4 w-3 h-3 rounded-full bg-accent -translate-x-1/2 ring-4 ring-[hsl(var(--cream))] z-10" />
                <div className={`md:w-[54%] ${i % 2 === 0 ? "md:pr-6 md:-mr-[4%]" : "md:ml-auto md:pl-6 md:-ml-[4%]"}`}>
                  <div className="card-warm py-5 md:py-6">
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground leading-snug">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-sm font-medium text-accent mt-1 mb-2">{item.subtitle}</p>
                    )}
                    <p className="editorial-body-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
