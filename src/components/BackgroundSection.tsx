import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const BackgroundSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].background.items;

  return (
    <section id="baggrund" aria-labelledby="baggrund-heading" className="section-spacing warm-gradient">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="editorial-label text-accent mb-4 block">{t('background.label')}</span>
          <h2 id="baggrund-heading" className="editorial-heading-lg text-foreground">{t('background.headline')}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2" />
          <ul className="space-y-8">
            {items.map((item, i) => (
              <li key={i} className="relative pl-12 md:pl-0">
                <div className="absolute left-4 md:left-1/2 top-3 w-3 h-3 rounded-full bg-accent -translate-x-1/2 ring-4 ring-background" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="card-warm">
                    <h3 className="editorial-heading-md text-foreground mb-2">{item.title}</h3>
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
