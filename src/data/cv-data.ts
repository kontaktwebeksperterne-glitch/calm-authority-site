export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description?: string;
  subRoles?: { period: string; role: string; location: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  field?: string;
}

export const boardExperience: ExperienceItem[] = [
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

export const executiveExperience: ExperienceItem[] = [
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

export const education: EducationItem[] = [
  { institution: "University of Oxford", degree: "Master of Business Administration (Executive MBA)", location: "UK" },
  { institution: "University of Washington", degree: "Fulbright Scholarship", location: "Seattle, USA", field: "American Politics/International Relations" },
  { institution: "Aarhus University", degree: "Master's Degree", location: "Denmark", field: "Social Science/Philosophy" },
  { institution: "Aarhus University", degree: "Master's Degree", location: "Denmark", field: "Political Science incl. Economics & Law" },
];

export const languages = ["English", "French", "German", "Norwegian", "Swedish", "Danish"];
