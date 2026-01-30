import arneHeadshot from "@/assets/arne-headshot.jpg";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

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
              {t('about.label')}
            </span>
            
            <h2 className="editorial-heading-lg text-foreground mb-8">
              {t('about.name')}
            </h2>
            
            <div className="space-y-6">
              <p className="editorial-body text-foreground">
                {t('about.bio1')}
              </p>
              <p className="editorial-body text-muted-foreground">
                {t('about.bio2')}
              </p>
              <p className="editorial-body text-muted-foreground">
                {t('about.bio3')}
              </p>
              <p className="editorial-body-sm text-muted-foreground italic">
                {t('about.languages')}
              </p>
            </div>
            
            <button 
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary mt-8"
            >
              {t('about.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
