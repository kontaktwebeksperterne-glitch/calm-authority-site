import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slideSpeechBis from "@/assets/arne-speech-bis.png";
import slideTalkingColleagues from "@/assets/arne-talking-colleagues.png";
import slideSigning from "@/assets/slide-india-signing.png";
import slideGreenClimate from "@/assets/slide-india-green-climate.png";
import slideOffshoreConference from "@/assets/slide-offshore-conference.png";
import slideMdiTeaching from "@/assets/slide-mdi-teaching.png";
import slideMdiShawl from "@/assets/slide-mdi-shawl.png";
import slideMdiCohort from "@/assets/slide-mdi-cohort.png";
import slideOxford from "@/assets/slide-oxford-graduation.png";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  { src: slideSpeechBis, alt: "Arne giving a keynote at the BIS conference" },
  { src: slideTalkingColleagues, alt: "Arne discussing with colleagues on an industrial site visit" },
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
  }, [emblaApi]);

  return (
    <section id="billeder" aria-labelledby="billeder-heading" className="section-spacing">
      <div className="container-wide">
        <div className="text-center mb-8">
          <span className="editorial-label text-accent mb-3 block">{t('slideshow.label')}</span>
          <h2 id="billeder-heading" className="editorial-heading-lg text-foreground">{t('slideshow.headline')}</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6 items-stretch">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-card h-full">
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="block w-full h-auto object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            disabled={!canPrev}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background/95 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            disabled={!canNext}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background/95 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
