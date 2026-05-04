import { GraduationCap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const EducationSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].education.items;

  return (
    <section id="uddannelse" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="editorial-label text-accent mb-4 block">{t('education.label')}</span>
          <h2 className="editorial-heading-lg text-foreground">{t('education.headline')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((edu) => (
            <div key={edu.institution} className="card-warm flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="editorial-heading-md text-foreground mb-3">{edu.institution}</h3>
              <p className="editorial-body-sm text-muted-foreground mb-4 flex-1">{edu.description}</p>
              <div className="flex items-start gap-2 pt-3 border-t border-border">
                <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="editorial-body-sm text-foreground italic">{edu.takeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
