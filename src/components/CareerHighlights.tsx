import { ArrowRight, Users, Building2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { boardExperience, executiveExperience, education } from "@/data/cv-data";

const CareerHighlights = () => {
  const { t } = useLanguage();

  // Select top highlights
  const topBoards = boardExperience.slice(0, 4);
  const topExecutive = executiveExperience.slice(0, 4);
  const topEducation = education.slice(0, 3);

  return (
    <section id="karriere" className="section-spacing warm-gradient">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="editorial-label text-accent mb-4 block">
            {t('careerHighlights.label')}
          </span>
          <h2 className="editorial-heading-lg text-foreground">
            {t('careerHighlights.headline')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Board Experience */}
          <div className="card-warm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="editorial-heading-md text-foreground">
                {t('careerHighlights.boardTitle')}
              </h3>
            </div>
            <ul className="space-y-4">
              {topBoards.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <span className="editorial-label text-accent text-xs">{item.period}</span>
                    <p className="text-foreground font-medium text-sm">{item.role}</p>
                    <p className="text-muted-foreground text-sm">{item.company}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Executive Experience */}
          <div className="card-warm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="editorial-heading-md text-foreground">
                {t('careerHighlights.execTitle')}
              </h3>
            </div>
            <ul className="space-y-4">
              {topExecutive.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <span className="editorial-label text-accent text-xs">{item.period}</span>
                    <p className="text-foreground font-medium text-sm">{item.role}</p>
                    <p className="text-muted-foreground text-sm">{item.company}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education Row */}
        <div className="card-warm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <h3 className="editorial-heading-md text-foreground">
              {t('careerHighlights.eduTitle')}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {topEducation.map((edu, idx) => (
              <div 
                key={idx}
                className="flex-1 min-w-[200px] p-4 bg-background/50 rounded-lg border border-border/30"
              >
                <p className="font-medium text-foreground text-sm">{edu.institution}</p>
                <p className="text-muted-foreground text-xs">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/cv"
            className="btn-primary group inline-flex"
          >
            {t('careerHighlights.seeFullCV')}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;
