import { Target, Users, Briefcase, GraduationCap, Globe, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Bestyrelsesarbejde",
    description: "Erfaring fra 12+ bestyrelser og advisory boards i Europa og Indien – med fokus på strategi, governance og værdiskabelse.",
  },
  {
    icon: Target,
    title: "Strategisk rådgivning",
    description: "Bygger bro mellem ledelse og bestyrelse. Sætter prioriteter og sikrer eksekvering med respekt for governance.",
  },
  {
    icon: Globe,
    title: "International erfaring",
    description: "30+ års erfaring på tværs af lande, virksomheder og kulturer. Komfortabel i at navigere kompleksitet og usikkerhed.",
  },
  {
    icon: GraduationCap,
    title: "Undervisning & foredrag",
    description: "Gæsteforelæser ved Management Development Institute i Indien inden for ledelse, strategi og organisationsudvikling.",
  },
];

const ServicesSection = () => {
  return (
    <section id="fokus" className="section-spacing warm-gradient">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="editorial-label text-accent mb-4 block">
            Fokusområder
          </span>
          <h2 className="editorial-heading-lg text-foreground max-w-2xl mx-auto">
            Ekspertise der skaber værdi
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-service opacity-0 animate-slide-up"
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
                <span className="text-sm font-medium">Læs mere</span>
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
