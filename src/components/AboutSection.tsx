import { User } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const AboutSection = () => {
  return (
    <section id="om" className="section-spacing">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={profilePlaceholder} 
                  alt="Arne Lorenzen"
                  className="w-full h-full object-cover"
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
              Arne Lorenzen
            </h2>
            
            <div className="space-y-6">
              <p className="editorial-body text-foreground">
                Arne Lorenzen er en uafhængig ledelseskonsulent og bestyrelsesrådgiver med omfattende international erfaring.
              </p>
              <p className="editorial-body text-muted-foreground">
                Han har rådgivet virksomheder på tværs af flere brancher, siddet i rådgivende og tilsynsråd i flere lande og undervist på handelshøjskoler i Asien.
              </p>
              <p className="editorial-body text-muted-foreground">
                Hans arbejde fokuserer på strategisk klarhed, governance og langsigtet værdiskabelse, med støtte til ledelsesteams og bestyrelser i komplekse beslutningsprocesser.
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
