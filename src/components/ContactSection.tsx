import { Mail, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="section-spacing">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="editorial-label text-accent mb-4 block">
              {t('contact.label')}
            </span>
            
            <h2 className="editorial-heading-lg text-foreground mb-6">
              {t('contact.headline')}
            </h2>
            
            <p className="editorial-body text-muted-foreground mb-10">
              {t('contact.description')}
            </p>
            
            <div className="space-y-6 mb-10">
              <a 
                href="mailto:arne.lorenzen@yahoo.fr"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">{t('contact.email')}</span>
                  <span className="editorial-body text-foreground group-hover:text-accent transition-colors">
                    arne.lorenzen@yahoo.fr
                  </span>
                </div>
              </a>
              
              <a 
                href="tel:+4577224848"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">{t('contact.phoneDK')}</span>
                  <span className="editorial-body text-foreground group-hover:text-accent transition-colors">
                    +45 77 22 48 48
                  </span>
                </div>
              </a>

              <a 
                href="tel:+33745574856"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">{t('contact.phoneFR')}</span>
                  <span className="editorial-body text-foreground group-hover:text-accent transition-colors">
                    +33 7 45 57 48 56
                  </span>
                </div>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+4577224848"
                className="btn-primary group"
              >
                {t('contact.ctaCall')}
                <Phone className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="mailto:arne.lorenzen@yahoo.fr"
                className="btn-secondary group"
              >
                {t('contact.ctaEmail')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Decorative card */}
          <div className="hidden md:block">
            <div className="card-warm p-10 lg:p-12">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-serif text-accent">AL</span>
                </div>
                <div>
                  <h3 className="editorial-heading-md text-foreground mb-2">
                    {t('contact.cardTitle')}
                  </h3>
                  <p className="editorial-body-sm text-muted-foreground">
                    {t('contact.cardSubtitle')}
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="editorial-body-sm text-muted-foreground italic">
                    "{t('contact.cardQuote')}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
