import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="anbefalinger" aria-labelledby="anbefalinger-heading" className="section-spacing testimonials-bg">
      <div className="container-wide">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="editorial-label text-accent mb-4 block">{t('testimonials.label')}</span>
          <h2 id="anbefalinger-heading" className="editorial-heading-lg text-foreground mb-4">{t('testimonials.headline')}</h2>
          <p className="editorial-body text-muted-foreground">{t('testimonials.subheadline')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {[0, 1, 2].map((i) => (
            <div key={i} className="card-testimonial flex flex-col items-center text-center py-12 border-dashed">
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <p className="editorial-body-sm text-muted-foreground italic">
                {t('testimonials.comingSoon')}…
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
