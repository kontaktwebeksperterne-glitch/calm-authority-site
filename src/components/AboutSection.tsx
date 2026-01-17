const AboutSection = () => {
  return (
    <section id="about" className="section-spacing border-t border-border/30">
      <div className="container-editorial">
        <span className="editorial-label text-muted-foreground mb-8 block">
          About
        </span>
        
        <div className="max-w-2xl">
          <p className="editorial-body text-foreground mb-6">
            Arne Lorenzen is an independent management consultant and board advisor with extensive international experience.
          </p>
          <p className="editorial-body text-foreground mb-6">
            He has advised companies across multiple industries, served on advisory and supervisory boards in several countries, and taught at business schools in Asia.
          </p>
          <p className="editorial-body text-foreground">
            His work focuses on strategic clarity, governance, and long-term value creation, supporting leadership teams and boards in complex decision making environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
