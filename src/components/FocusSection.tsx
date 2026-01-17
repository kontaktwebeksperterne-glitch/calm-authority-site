const focusAreas = [
  "Strategic advisory for companies",
  "Board and advisory board roles",
  "Executive and governance consulting",
  "Academic teaching and guest lecturing in Asia",
];

const FocusSection = () => {
  return (
    <section id="focus" className="section-spacing border-t border-border/30">
      <div className="container-editorial">
        <span className="editorial-label text-muted-foreground mb-12 block">
          Focus areas
        </span>
        
        <ul className="space-y-4">
          {focusAreas.map((area, index) => (
            <li 
              key={index}
              className="editorial-heading-md text-foreground"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FocusSection;
