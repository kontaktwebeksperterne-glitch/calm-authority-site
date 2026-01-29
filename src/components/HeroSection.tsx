import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          <span 
            className="editorial-label text-accent mb-6 block opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Independent Board Director · Advisory · Business School Lecturer
          </span>
          
          <h1 
            className="editorial-heading-xl text-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            International erfaring. Strategisk klarhed.
          </h1>
          
          <p 
            className="editorial-body text-muted-foreground max-w-lg mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Erfaren bestyrelsesmedlem og strategisk rådgiver med dyb ekspertise i vedvarende energi og infrastruktur på tværs af Europa og Asien.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <button 
              onClick={scrollToContact}
              className="btn-primary group"
            >
              Kontakt mig
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById("om")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary"
            >
              Læs mere
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-slow"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-px h-16 bg-foreground/20" />
      </div>
    </section>
  );
};

export default HeroSection;
