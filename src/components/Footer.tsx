import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/30 bg-muted/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif text-lg text-foreground">
              Arne Berg Lorenzen
            </span>
            <span className="editorial-body-sm text-muted-foreground">
              {t('footer.title')}
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:arne.lorenzen@yahoo.fr"
              className="editorial-body-sm editorial-link"
            >
              arne.lorenzen@yahoo.fr
            </a>
            <span className="text-border">|</span>
            <a 
              href="tel:+4577224848"
              className="editorial-body-sm editorial-link"
            >
              +45 77 22 48 48
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <span className="text-sm text-muted-foreground">
            © {currentYear} Arne Lorenzen. {t('footer.rights')}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
