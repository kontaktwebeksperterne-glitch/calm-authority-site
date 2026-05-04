import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroBg from "@/assets/hero-bg-offshore.jpg";
import indiaTeam from "@/assets/arne-india-team.jpg";
import oxford from "@/assets/arne-oxford.jpg";
import team from "@/assets/arne-team.jpg";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  { src: heroBg, alt: "Offshore wind farm" },
  { src: indiaTeam, alt: "Arne with team in India" },
  { src: oxford, alt: "Oxford Saïd Business School" },
  { src: team, alt: "Leadership team" },
];

const Slideshow = () => {
  const { t } = useLanguage();
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <section className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-10">
          <span className="editorial-label text-accent mb-4 block">{t('slideshow.label')}</span>
          <h2 className="editorial-heading-lg text-foreground">{t('slideshow.headline')}</h2>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 relative">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-cover animate-ken-burns"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
