import { ArrowLeft, GraduationCap, Building2, Users, Languages, BookOpen, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description?: string;
  subRoles?: { period: string; role: string; location: string }[];
}

const boardExperience: ExperienceItem[] = [
  { period: "2025 -", role: "Member and Co-Chair Energy & Infrastructure", company: "Indo Danish Business Council", location: "Copenhagen/New Delhi" },
  { period: "2025 -", role: "Advisory Board Member", company: "Net Zero Think Pvt. Ltd.", location: "Bengaluru", description: "Sustainability & emissions reduction services" },
  { period: "2025 -", role: "Supervisory Board Member", company: "ENETO Aps.", location: "Copenhagen", description: "Renewable energy company, markets Denmark and Europe" },
  { period: "2024 -", role: "Member of Advisory Board", company: "Unlock Wellness Pvt. Ltd.", location: "New Delhi", description: "Personalized genetics-based nutritional programmes" },
  { period: "2024 - 2025", role: "Advisor", company: "Sostratus Energy Ltd.", location: "London", description: "Technology company: conversion kinetic to electrical energy" },
  { period: "2019 - 2024", role: "Member of CEO Council for Renewable Energy", company: "Federation of Indian Chambers of Commerce and Industry (FICCI)", location: "New Delhi" },
  { period: "2018", role: "Advisor", company: "Modvion AB", location: "Gothenburg", description: "Design and manufacturing of innovative wind turbine towers" },
  { period: "2016 - 2018", role: "Advisor", company: "Political Edge", location: "Bruxelles", description: "Political risk & strategy consulting start-up" },
  { period: "2016", role: "Supervisory Board Member", company: "WindEurope", location: "Bruxelles", description: "prev. European Wind Energy Association" },
  { period: "2012 - 2017", role: "Chairman of Supervisory Board", company: "Joint Venture Norway", location: "Oslo", description: "Development of wind power projects in Norway" },
  { period: "2008 - 2012", role: "Supervisory Board Member", company: "Ecolutions", location: "Frankfurt/Main", description: "Carbon projects in emerging markets & Europe" },
  { period: "2006 - 2009", role: "Supervisory Board Member (Conseil d'Administration)", company: "Theolia SA (now Futuren)", location: "Aix-en-Provence" },
];

const executiveExperience: ExperienceItem[] = [
  { period: "2021 - 2024", role: "CEO", company: "EDF Renewables India Pvt. Ltd.", location: "New Delhi" },
  { period: "2018 - 2021", role: "CEO", company: "SITAC Management & Development Pvt. Ltd.", location: "New Delhi", description: "JV of SITAC & EDF" },
  { period: "2010 - 2017", role: "CEO", company: "Nordisk Vindkraft AB", location: "Gothenburg", description: "now RES Renewable Norden AB" },
  { period: "2014 - 2017", role: "Managing Director", company: "RES Northern Europe, New & Emerging Markets", location: "Kings Langley", description: "as well as CEO Nordisk Vindkraft" },
  { period: "2006 - 2009", role: "COO / Executive Vice President", company: "Theolia SA (now FUTUREN SA)", location: "Aix-en-Provence" },
  { period: "2002 - 2005", role: "Executive Board Member (Vorstand Ausland & Vertrieb)", company: "PNE AG", location: "Cuxhaven" },
  { period: "2000 - 2002", role: "Engagement Manager", company: "Accenture", location: "Frankfurt/Main", description: "Strategy Practice; Energy & Resources Sector" },
  { 
    period: "1991 - 2000", 
    role: "Various Positions", 
    company: "Cargill Inc.", 
    location: "Multiple",
    subRoles: [
      { period: "1998 - 2000", role: "Trading Manager (Deutsche Cargill GmbH)", location: "Salzgitter" },
      { period: "1995 - 1998", role: "Director / Liaison officer (Agrograin Kft, JV in Hungary)", location: "Budapest" },
      { period: "1991 - 1995", role: "Commodity Trader (Cargill France SA, Deutsche Cargill GmbH)", location: "Hamburg/Paris" },
    ]
  },
];

const education = [
  { institution: "University of Oxford", degree: "Master of Business Administration (Executive MBA)", location: "UK" },
  { institution: "University of Washington", degree: "Fulbright Scholarship", location: "Seattle, USA", field: "American Politics/International Relations" },
  { institution: "Aarhus University", degree: "Master's Degree", location: "Denmark", field: "Social Science/Philosophy" },
  { institution: "Aarhus University", degree: "Master's Degree", location: "Denmark", field: "Political Science incl. Economics & Law" },
];

const languages = ["English", "French", "German", "Norwegian", "Swedish", "Danish"];

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
            Tilbage til forsiden
          </Link>
          
          <h1 className="editorial-heading-xl text-foreground mb-6">
            Curriculum Vitae
          </h1>
          <p className="editorial-body text-muted-foreground max-w-3xl">
            Internationalt erfaren bestyrelsesmedlem og strategisk rådgiver. Kombinerer strategisk og 
            forretningsudviklingsekspertise med stærke kompetencer inden for organisationsudvikling, 
            stakeholder management og risikostyring.
          </p>
        </section>

        {/* Board Experience */}
        <section className="container-editorial mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h2 className="editorial-heading-lg text-foreground">Bestyrelseserfaring</h2>
          </div>
          <p className="editorial-body-sm text-muted-foreground mb-8 max-w-2xl">
            Supervisory & Advisory Board Experience across Europe & India
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
            <h2 className="editorial-heading-lg text-foreground">Ledelseserfaring</h2>
          </div>
          <p className="editorial-body-sm text-muted-foreground mb-8 max-w-2xl">
            Executive Experience in infrastructure and renewable energy
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
            <h2 className="editorial-heading-lg text-foreground">Uddannelse</h2>
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
            <h2 className="editorial-heading-lg text-foreground">Undervisning</h2>
          </div>
          
          <div className="card-warm max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="editorial-label text-accent">2023 -</span>
            </div>
            <h3 className="editorial-heading-md text-foreground mb-1">Guest Lecturer</h3>
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
            <h2 className="editorial-heading-lg text-foreground">Sprog</h2>
          </div>
          <p className="editorial-body-sm text-muted-foreground mb-6">
            Fluent in all languages. Danish national.
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
