import { Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const ExperienceAreasSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].experienceAreas.items;
  const intro = translations[language].experienceAreas.intro;
  const india = translations[language].experienceAreas.india;

  return (
    <section id="erfaring" aria-labelledby="erfaring-heading" className="section-spacing warm-gradient">
      <div className="container-wide">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 id="erfaring-heading" className="editorial-heading-lg text-foreground mb-4">{t('experienceAreas.headline')}</h2>
          <p className="editorial-body text-foreground/85">{intro}</p>
        </div>

        <div className="mb-8 lg:mb-10 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-card to-card shadow-md p-6 md:p-8">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full" />
            <div className="relative flex flex-col md:flex-row gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                  <Globe2 className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight">{india.title}</h3>
                <p className="editorial-body-sm text-foreground/90">{india.p1}</p>
                <p className="editorial-body-sm text-foreground/90">{india.p2}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="card-warm">
              <h3 className="editorial-heading-md text-foreground mb-3">{item.title}</h3>
              <p className="editorial-body-sm text-foreground/85">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAreasSection;
