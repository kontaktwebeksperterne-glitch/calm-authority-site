import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import slideSigning from "@/assets/slide-india-signing.png";
import slideGreenClimate from "@/assets/slide-india-green-climate.png";
import slideOffshoreConference from "@/assets/slide-offshore-conference.png";
import slideMdiTeaching from "@/assets/slide-mdi-teaching.png";
import slideMdiShawl from "@/assets/slide-mdi-shawl.png";
import slideMdiCohort from "@/assets/slide-mdi-cohort.png";
import slideOxford from "@/assets/slide-oxford-graduation.png";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  { src: slideSigning, alt: "Arne signing an agreement with an Indian counterparty" },
  { src: slideGreenClimate, alt: "Arne at the Green Climate Company stand, Tamil Nadu" },
  { src: slideOffshoreConference, alt: "Arne speaking at the Offshore Wind Stakeholders Meet, Tamil Nadu" },
  { src: slideMdiTeaching, alt: "Arne lecturing at Management Development Institute, India" },
  { src: slideMdiShawl, alt: "Arne receiving a traditional shawl after a talk at MDI" },
  { src: slideMdiCohort, alt: "Arne with the MDI Murshidabad student cohort" },
  { src: slideOxford, alt: "Arne in academic gown, Oxford Saïd Business School" },
];

const Slideshow = () => {
  const { t } = useLanguage();
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  return (
    <section id="billeder" aria-labelledby="billeder-heading" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-10">
          <span className="editorial-label text-accent mb-4 block">{t('slideshow.label')}</span>
          <h2 id="billeder-heading" className="editorial-heading-lg text-foreground">{t('slideshow.headline')}</h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {slides.map((s, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0 relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl bg-muted">
                  <img
                    src={s.src}
                    aria-hidden="true"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
                  />
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="relative w-full h-full object-contain"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
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
