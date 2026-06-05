import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";
import arneAvatar from "@/assets/arne-avatar.png";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="kontakt" aria-labelledby="kontakt-heading" className="py-10 md:py-14">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="editorial-label text-accent mb-3 block">{t('contact.label')}</span>
            <h2 id="kontakt-heading" className="editorial-heading-lg text-foreground mb-4">{t('contact.headline')}</h2>
            <p className="editorial-body text-muted-foreground mb-6">{t('contact.description')}</p>

            <div className="space-y-3 mb-6">
              <a href="mailto:arne@arnelorenzen.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">{t('contact.email')}</span>
                  <span className="editorial-body-sm text-foreground group-hover:text-accent transition-colors">arne@arnelorenzen.com</span>
                </div>
              </a>

              <a href="tel:+33745574856" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">{t('contact.phoneFR')}</span>
                  <span className="editorial-body-sm text-foreground group-hover:text-accent transition-colors">+33 7 45 57 48 56</span>
                </div>
              </a>

              <a href="tel:+4577224848" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">{t('contact.phoneDK')}</span>
                  <span className="editorial-body-sm text-foreground group-hover:text-accent transition-colors">+45 77 22 48 48</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/arne-lorenzen-mba/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">{t('contact.linkedin')}</span>
                  <span className="editorial-body-sm text-foreground group-hover:text-accent transition-colors">arne-lorenzen-mba</span>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="tel:+33745574856" className="btn-primary group">
                {t('contact.ctaCallFR')}
                <Phone className="ml-2 w-4 h-4" />
              </a>
              <a href="tel:+4577224848" className="btn-primary group">
                {t('contact.ctaCallDK')}
                <Phone className="ml-2 w-4 h-4" />
              </a>
              <a href="mailto:arne@arnelorenzen.com" className="btn-secondary group">
                {t('contact.ctaEmail')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="card-warm p-8 lg:p-10">
              <div className="space-y-5">
                <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden ring-2 ring-accent/30 shadow-lg">
                  <img
                    src={arneAvatar}
                    alt="Arne Lorenzen"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-1">{t('contact.cardTitle')}</h3>
                  <p className="text-sm font-medium text-accent">{t('contact.cardSubtitle')}</p>
                  <p className="editorial-body-sm text-muted-foreground mt-2">{t('contact.cardSubtitleLine2')}</p>
                </div>
                <div className="pt-4 border-t border-border space-y-3">
                  <p className="editorial-body-sm font-semibold text-[hsl(220,70%,22%)]">"{t('contact.cardMotto')}"</p>
                  <p className="editorial-body-sm text-muted-foreground italic">{t('contact.cardStatement')}</p>
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
