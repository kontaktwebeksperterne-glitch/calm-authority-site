import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

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
            {t('hero.label')}
          </span>
          
          <h1 
            className="editorial-heading-xl text-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {t('hero.headline')}
          </h1>
          
          <p 
            className="editorial-body text-muted-foreground max-w-lg mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {t('hero.subheadline')}
          </p>
          
          <div 
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <button 
              onClick={scrollToContact}
              className="btn-primary group"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById("om")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary"
            >
              {t('hero.ctaSecondary')}
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
