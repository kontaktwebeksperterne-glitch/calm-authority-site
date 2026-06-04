import arneHeadshot from "@/assets/arne-about-portrait.jpg";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="om" aria-labelledby="om-heading" className="py-10 md:py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-8 lg:gap-12 items-start">
          <div className="order-2 md:order-1 max-w-sm w-full mx-auto md:mx-0">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={arneHeadshot}
                  alt="Portrait of Arne Lorenzen"
                  className="w-full h-full object-cover object-top"
                  width="600"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-5 -left-5 w-20 h-20 border-2 border-accent/20 rounded-2xl -z-10" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="editorial-label text-accent mb-3 block">{t('about.label')}</span>
            <h2 id="om-heading" className="editorial-heading-lg text-foreground mb-5">{t('about.heading')}</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="editorial-body-sm text-foreground">{t('about.bio1')}</p>
              <p className="editorial-body-sm text-muted-foreground">{t('about.bio2')}</p>
              <p className="editorial-body-sm text-muted-foreground">{t('about.bio3')}</p>
              <p className="editorial-body-sm text-muted-foreground">{t('about.bio4')}</p>
              <p className="editorial-body-sm text-muted-foreground">{t('about.bio5')}</p>
            </div>
            <button
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary mt-6"
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
