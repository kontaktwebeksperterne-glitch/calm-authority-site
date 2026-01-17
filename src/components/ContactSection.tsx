import { Mail, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-spacing">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="editorial-label text-accent mb-4 block">
              Kontakt
            </span>
            
            <h2 className="editorial-heading-lg text-foreground mb-6">
              Tag en snak med mig
            </h2>
            
            <p className="editorial-body text-muted-foreground mb-10">
              Er du interesseret i at høre mere om, hvordan jeg kan bidrage til din virksomhed eller bestyrelse? Lad os tage en uforpligtende samtale.
            </p>
            
            <div className="space-y-6 mb-10">
              <a 
                href="mailto:contact@arnelorenzen.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">Email</span>
                  <span className="editorial-body text-foreground group-hover:text-accent transition-colors">
                    contact@arnelorenzen.com
                  </span>
                </div>
              </a>
              
              <a 
                href="tel:+4512345678"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground">Telefon</span>
                  <span className="editorial-body text-foreground group-hover:text-accent transition-colors">
                    +45 12 34 56 78
                  </span>
                </div>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+4512345678"
                className="btn-primary group"
              >
                Ring til mig
                <Phone className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@arnelorenzen.com"
                className="btn-secondary group"
              >
                Send en email
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
                    Arne Lorenzen
                  </h3>
                  <p className="editorial-body-sm text-muted-foreground">
                    Ledelsesrådgiver & Bestyrelsesmedlem
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="editorial-body-sm text-muted-foreground italic">
                    "Mit mål er at skabe klarhed og værdi i komplekse beslutningsprocesser."
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
