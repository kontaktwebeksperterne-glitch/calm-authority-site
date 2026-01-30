import { ArrowLeft, GraduationCap, Building2, Users, Languages, BookOpen, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { boardExperience, executiveExperience, education, languages, ExperienceItem } from "@/data/cv-data";

const TimelineItem = ({ item, isLast }: { item: ExperienceItem; isLast: boolean }) => (
  <div className="relative pl-8 pb-8">
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
    )}
    {/* Timeline dot */}
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-accent" />
    </div>
    
    <div className="card-warm">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="editorial-label text-accent">{item.period}</span>
        <span className="flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="w-3 h-3" />
          {item.location}
        </span>
      </div>
      <h3 className="editorial-heading-md text-foreground mb-1">{item.role}</h3>
      <p className="font-medium text-foreground/80 mb-1">{item.company}</p>
      {item.description && (
        <p className="editorial-body-sm text-muted-foreground">{item.description}</p>
      )}
      {item.subRoles && (
        <div className="mt-4 space-y-3 pl-4 border-l-2 border-border">
          {item.subRoles.map((sub, idx) => (
            <div key={idx}>
              <span className="editorial-label text-accent/80 text-xs">{sub.period}</span>
              <p className="text-sm text-foreground/80">{sub.role}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {sub.location}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const CV = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container-editorial mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 editorial-body-sm text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('cv.backLink')}
          </Link>
          
          <h1 className="editorial-heading-xl text-foreground mb-6">
            {t('cv.title')}
          </h1>
          <p className="editorial-body text-muted-foreground max-w-3xl">
            {t('cv.description')}
          </p>
        </section>

        {/* Board Experience */}
        <section className="container-editorial mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h2 className="editorial-heading-lg text-foreground">{t('cv.boardTitle')}</h2>
          </div>
          <p className="editorial-body-sm text-muted-foreground mb-8 max-w-2xl">
            {t('cv.boardSubtitle')}
          </p>
          
          <div className="max-w-3xl">
            {boardExperience.map((item, idx) => (
              <TimelineItem key={idx} item={item} isLast={idx === boardExperience.length - 1} />
            ))}
          </div>
        </section>

        {/* Executive Experience */}
        <section className="container-editorial mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Building2 className="w-6 h-6 text-accent" />
            </div>
            <h2 className="editorial-heading-lg text-foreground">{t('cv.execTitle')}</h2>
          </div>
          <p className="editorial-body-sm text-muted-foreground mb-8 max-w-2xl">
            {t('cv.execSubtitle')}
          </p>
          
          <div className="max-w-3xl">
            {executiveExperience.map((item, idx) => (
              <TimelineItem key={idx} item={item} isLast={idx === executiveExperience.length - 1} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="container-editorial mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <h2 className="editorial-heading-lg text-foreground">{t('cv.eduTitle')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {education.map((edu, idx) => (
              <div key={idx} className="card-warm">
                <h3 className="editorial-heading-md text-foreground mb-2">{edu.institution}</h3>
                <p className="font-medium text-foreground/80 mb-1">{edu.degree}</p>
                {edu.field && (
                  <p className="editorial-body-sm text-muted-foreground mb-2">{edu.field}</p>
                )}
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching */}
        <section className="container-editorial mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h2 className="editorial-heading-lg text-foreground">{t('cv.teachTitle')}</h2>
          </div>
          
          <div className="card-warm max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="editorial-label text-accent">2023 -</span>
            </div>
            <h3 className="editorial-heading-md text-foreground mb-1">{t('cv.guestLecturer')}</h3>
            <p className="font-medium text-foreground/80">Management Development Institute (MDI)</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" />
              Delhi/Kolkata
            </p>
          </div>
        </section>

        {/* Languages */}
        <section className="container-editorial">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Languages className="w-6 h-6 text-accent" />
            </div>
            <h2 className="editorial-heading-lg text-foreground">{t('cv.langTitle')}</h2>
          </div>
          <p className="editorial-body-sm text-muted-foreground mb-6">
            {t('cv.langSubtitle')}
          </p>
          
          <div className="flex flex-wrap gap-3 max-w-2xl">
            {languages.map((lang, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full editorial-body-sm font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CV;
