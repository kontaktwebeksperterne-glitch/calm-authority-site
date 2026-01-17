const stats = [
  { number: "25+", label: "Års erfaring" },
  { number: "50+", label: "Virksomheder rådgivet" },
  { number: "10+", label: "Lande" },
  { number: "5+", label: "Bestyrelsesroller" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 stats-gradient">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="card-stat opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-2">
                {stat.number}
              </span>
              <span className="editorial-body-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
