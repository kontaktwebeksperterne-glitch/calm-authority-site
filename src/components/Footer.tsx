const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/30 bg-muted/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif text-lg text-foreground">
              Arne Lorenzen
            </span>
            <span className="editorial-body-sm text-muted-foreground">
              Ledelsesrådgiver & Bestyrelsesmedlem
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contact@arnelorenzen.com"
              className="editorial-body-sm editorial-link"
            >
              contact@arnelorenzen.com
            </a>
            <span className="text-border">|</span>
            <a 
              href="tel:+4512345678"
              className="editorial-body-sm editorial-link"
            >
              +45 12 34 56 78
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <span className="text-sm text-muted-foreground">
            © {currentYear} Arne Lorenzen. Alle rettigheder forbeholdes.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;