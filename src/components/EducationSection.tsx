import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const EducationSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].education.items;

  return (
    <section id="uddannelse" aria-labelledby="uddannelse-heading" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-10">
          <span className="editorial-label text-accent mb-3 block">{t('education.label')}</span>
          <h2 id="uddannelse-heading" className="editorial-heading-lg text-foreground">{t('education.headline')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((edu) => (
            <div key={edu.institution} className="card-warm flex flex-col">
              <div className="mb-4 text-4xl leading-none" aria-hidden="true">{edu.flag}</div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-snug">{edu.institution}</h3>
              <p className="text-sm font-medium text-accent mt-1 mb-3">{edu.degree}</p>
              <p className="editorial-body-sm text-muted-foreground mb-4 flex-1">{edu.description}</p>
              <div className="flex items-start gap-2 pt-3 border-t border-border">
                <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="editorial-body-sm font-medium text-foreground">{edu.takeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
