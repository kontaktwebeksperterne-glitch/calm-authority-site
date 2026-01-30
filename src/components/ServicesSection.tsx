import { Target, Users, Globe, GraduationCap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Users, Target, Globe, GraduationCap];

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: icons[0], ...((t('services.items') as unknown as { title: string; description: string }[])[0]) },
    { icon: icons[1], ...((t('services.items') as unknown as { title: string; description: string }[])[1]) },
    { icon: icons[2], ...((t('services.items') as unknown as { title: string; description: string }[])[2]) },
    { icon: icons[3], ...((t('services.items') as unknown as { title: string; description: string }[])[3]) },
  ];

  return (
    <section id="fokus" className="section-spacing warm-gradient">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="editorial-label text-accent mb-4 block">
            {t('services.label')}
          </span>
          <h2 className="editorial-heading-lg text-foreground max-w-2xl mx-auto">
            {t('services.headline')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-service opacity-0 animate-slide-up group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="editorial-heading-md text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="editorial-body-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">{t('services.readMore')}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
