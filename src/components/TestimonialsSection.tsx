import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const items = translations[language].testimonials.items;

  return (
    <section id="anbefalinger" aria-labelledby="anbefalinger-heading" className="section-spacing testimonials-bg">
      <div className="container-wide">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 id="anbefalinger-heading" className="editorial-heading-lg text-foreground mb-4">{t('testimonials.headline')}</h2>
          <p className="editorial-body text-muted-foreground">{t('testimonials.subheadline')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <figure key={idx} className="card-testimonial flex flex-col h-full">
              <Quote className="w-9 h-9 text-accent/40 mb-4" />
              <blockquote className="editorial-body-sm text-foreground/90 italic flex-1">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-serif text-lg font-semibold text-foreground">{item.name}</div>
                <div className="text-sm text-accent mt-0.5 whitespace-pre-line">{item.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
