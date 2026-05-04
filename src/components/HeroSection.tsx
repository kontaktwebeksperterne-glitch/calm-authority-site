import { ArrowRight, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg-offshore.jpg";
import arnePortrait from "@/assets/arne-portrait.jpg";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Background image with subtle Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </div>
      <div className="absolute inset-0 hero-overlay" />

      <div className="container-wide relative z-10 w-full">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <div
            className="opacity-0 animate-fade-in mx-auto md:mx-0"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-card">
                <img
                  src={arnePortrait}
                  alt="Arne Lorenzen — Independent Board Director"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span
              className="block text-base md:text-lg font-medium text-accent mb-5 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {t('hero.label')}
            </span>

            <h1
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-foreground mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.35s" }}
            >
              <span className="block">{t('hero.headline1')}</span>
              <span className="block">{t('hero.headline2')}</span>
              <span className="block">{t('hero.headline3')}</span>
            </h1>

            <p
              className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-xl mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {t('hero.subheadline')}
            </p>

            <div
              className="flex flex-wrap gap-4 items-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.65s" }}
            >
              <button onClick={scrollToContact} className="btn-primary group">
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("om")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary"
              >
                {t('hero.ctaSecondary')}
              </button>
              <a
                href="https://www.linkedin.com/in/arne-lorenzen-mba/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border-2 border-foreground/80 text-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
