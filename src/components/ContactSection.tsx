const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing border-t border-border/30">
      <div className="container-editorial">
        <span className="editorial-label text-muted-foreground mb-12 block">
          Contact
        </span>
        
        <div className="space-y-4">
          <a 
            href="mailto:contact@arnelorenzen.com" 
            className="editorial-body editorial-link block"
          >
            contact@arnelorenzen.com
          </a>
          <a 
            href="tel:+4512345678" 
            className="editorial-body editorial-link block"
          >
            +45 12 34 56 78
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
