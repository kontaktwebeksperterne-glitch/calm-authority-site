import { Users, Target, GraduationCap, Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const icons = [Users, Target, GraduationCap];

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].services.items;
  const india = translations[language].services.india;

  return (
    <section id="fokus" aria-labelledby="fokus-heading" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-10">
          <span className="editorial-label text-accent mb-3 block">{t('services.label')}</span>
          <h2 id="fokus-heading" className="editorial-heading-lg text-foreground max-w-2xl mx-auto">{t('services.headline')}</h2>
        </div>

        <div className="mb-8 lg:mb-10 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card shadow-md p-6 md:p-10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full" />
            <div className="relative flex flex-col md:flex-row gap-5 md:gap-7">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                  <Globe2 className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3 tracking-tight">{india.title}</h3>
                <p className="editorial-body text-foreground/85">{india.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={service.title} className="card-service group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="editorial-heading-md text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="editorial-body-sm text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
