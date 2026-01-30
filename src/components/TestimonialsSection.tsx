import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = t('testimonials.items') as unknown as { quote: string; name: string; title: string; company: string }[];

  return (
    <section id="anbefalinger" className="section-spacing testimonials-bg">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="editorial-label text-accent mb-4 block">
            {t('testimonials.label')}
          </span>
          <h2 className="editorial-heading-lg text-foreground mb-4">
            {t('testimonials.headline')}
          </h2>
          <p className="editorial-body text-muted-foreground max-w-xl mx-auto">
            {t('testimonials.subheadline')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="card-testimonial opacity-0 animate-slide-up relative"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              
              <blockquote className="editorial-body text-foreground mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="editorial-body-sm text-muted-foreground">
                  {testimonial.title}
                </p>
                <p className="text-sm text-accent">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
