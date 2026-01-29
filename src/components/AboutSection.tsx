import arneHeadshot from "@/assets/arne-headshot.jpg";

const AboutSection = () => {
  return (
    <section id="om" className="section-spacing">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={arneHeadshot} 
                  alt="Arne Berg Lorenzen"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <span className="editorial-label text-accent mb-4 block">
              Om mig
            </span>
            
            <h2 className="editorial-heading-lg text-foreground mb-8">
              Arne Berg Lorenzen
            </h2>
            
            <div className="space-y-6">
              <p className="editorial-body text-foreground">
                Internationalt erfaren bestyrelsesmedlem og strategisk rådgiver med dyb ekspertise inden for vedvarende energi, infrastruktur og organisationsudvikling.
              </p>
              <p className="editorial-body text-muted-foreground">
                Med erfaring fra bestyrelser og advisory boards i Europa og Indien, bidrager jeg med strategisk overblik, governance og værdiskabelse. Min baggrund omfatter ledende roller som CEO og COO i internationale energivirksomheder.
              </p>
              <p className="editorial-body text-muted-foreground">
                Uddannet fra Oxford (Executive MBA), Aarhus Universitet og Fulbright-stipendiat ved University of Washington. Gæsteforelæser ved Management Development Institute i Indien.
              </p>
              <p className="editorial-body-sm text-muted-foreground italic">
                Flydende i dansk, engelsk, fransk, tysk, norsk og svensk.
              </p>
            </div>
            
            <button 
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary mt-8"
            >
              Tag kontakt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
