import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const ExperienceAreasSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].experienceAreas.items;
  const intro = translations[language].experienceAreas.intro;

  return (
    <section id="erfaring" aria-labelledby="erfaring-heading" className="section-spacing warm-gradient">
      <div className="container-wide">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="editorial-label text-accent mb-3 block">{t('experienceAreas.label')}</span>
          <h2 id="erfaring-heading" className="editorial-heading-lg text-foreground mb-4">{t('experienceAreas.headline')}</h2>
          <p className="editorial-body text-muted-foreground">{intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="card-warm">
              <h3 className="editorial-heading-md text-foreground mb-3">{item.title}</h3>
              <p className="editorial-body-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAreasSection;
