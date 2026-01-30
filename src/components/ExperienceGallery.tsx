import arneIndiaTeam from "@/assets/arne-india-team.jpg";
import arneOxford from "@/assets/arne-oxford.jpg";
import { useLanguage } from "@/context/LanguageContext";

const ExperienceGallery = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      image: arneIndiaTeam,
      title: t('experience.india.title'),
      description: t('experience.india.description'),
      alt: "Arne Berg Lorenzen with his team in India",
    },
    {
      image: arneOxford,
      title: t('experience.oxford.title'),
      description: t('experience.oxford.description'),
      alt: "Oxford Executive MBA graduation",
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="editorial-label text-accent mb-4 block">
            {t('experience.label')}
          </span>
          <h2 className="editorial-heading-lg text-foreground">
            {t('experience.headline')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.title}
              className="group overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.alt}
                  className="w-full h-auto max-h-[400px] object-contain bg-muted/20 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="editorial-heading-md text-foreground mb-2">
                  {exp.title}
                </h3>
                <p className="editorial-body-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGallery;
