import { Users, Target, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const icons = [Users, Target, GraduationCap];

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].services.items;

  return (
    <section id="fokus" aria-labelledby="fokus-heading" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="editorial-label text-accent mb-4 block">{t('services.label')}</span>
          <h2 id="fokus-heading" className="editorial-heading-lg text-foreground max-w-2xl mx-auto">{t('services.headline')}</h2>
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
