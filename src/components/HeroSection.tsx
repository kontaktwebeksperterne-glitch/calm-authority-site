const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-accent overflow-hidden">
      <div className="geometric-accent" aria-hidden="true" />
      
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl">
          <h1 
            className="editorial-heading-xl text-foreground mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Global management advisor and board member
          </h1>
          <p 
            className="editorial-body text-muted-foreground max-w-xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Independent consultant with international board experience and academic teaching background.
          </p>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-slow"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-px h-12 bg-foreground/20" />
      </div>
    </section>
  );
};

export default HeroSection;
