import arneIndiaTeam from "@/assets/arne-india-team.jpg";
import arneOxford from "@/assets/arne-oxford.jpg";

const experiences = [
  {
    image: arneIndiaTeam,
    title: "Ledelse i Indien",
    description: "CEO for EDF Renewables India – ledelse af vedvarende energiprojekter og teams på tværs af Indien.",
    alt: "Arne Berg Lorenzen med sit team i Indien",
  },
  {
    image: arneOxford,
    title: "Oxford Executive MBA",
    description: "Uddannet fra Saïd Business School, University of Oxford – world-class programme med exceptionelt globalt netværk.",
    alt: "Oxford Executive MBA graduation",
  },
];

const ExperienceGallery = () => {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="editorial-label text-accent mb-4 block">
            Baggrund
          </span>
          <h2 className="editorial-heading-lg text-foreground">
            International erfaring
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.title}
              className="group overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
