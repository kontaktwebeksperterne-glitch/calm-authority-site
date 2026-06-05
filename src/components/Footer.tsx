import { Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30 bg-muted/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif text-lg text-foreground">Arne Lorenzen</span>
            <span className="editorial-body-sm text-muted-foreground">{t('footer.title')}</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:arne@arnelorenzen.com" aria-label="Email" className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground hover:bg-accent/10 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+4577224848" aria-label="Phone" className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground hover:bg-accent/10 hover:text-accent transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/arne-lorenzen-mba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground hover:bg-accent/10 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <span className="text-sm text-muted-foreground">© {currentYear} Arne Lorenzen. {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
