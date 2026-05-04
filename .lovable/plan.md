## Iteration 2: Arnes feedback

### 1. Billeder
- Kopiér `user-uploads://nicholas-doherty-pONBhDyOFoM-unsplash.jpg` → `src/assets/hero-bg-offshore.jpg` og brug som nyt hero-baggrundsbillede (offshore vind).
- Kopiér `user-uploads://Arne_portrait_2_copy.png.jpg` → `src/assets/arne-portrait.jpg` og vis som portræt i venstre side af hero.

### 2. Hero/forside-layout
- To-kolonne-grid: portræt venstre (mindre, så hele billedet vises uden crop, max-h ca. 480px), tekst højre.
- Navn: **Arne Lorenzen** (fjern "Berg").
- Undertitel "Independent Board Director · Advisor · Business School Teacher" – lidt større font.
- Headline i 3 linjer: "International experience. / Strategic clarity. / Practical results."
- Ny sub-tekst: "Experienced board member and strategic advisor with deep expertise in international business, renewable energy and infrastructure across Europe and Asia."
- Generel teksten en tand mindre (skaler editorial-heading-xl/lg lidt ned).

### 3. Default sprog
- Skift `LanguageContext` initial state fra `'da'` til `'en'` (men behold localStorage-persistens).

### 4. Spacing
- Reducér `section-spacing` padding (fx `py-24` → `py-16`, `md:py-32` → `md:py-20`) i `index.css`.

### 5. Indholdsopdateringer (alle 4 sprog – primært EN; DA/DE/FR oversættes)
- **Background – International Experience**: 5 punkter (India / Northern Europe / Germany offshore / M&A / Oxford MBA) med Arnes nye tekster.
- **Focus Areas**: opdatér til 3 punkter (Board work, Strategic Advisory, Teaching) med fulde nye beskrivelser.
- **Ny sektion: My Experience Areas** (Leadership, Business development, Organizational design, Business and Markets).
- **About Me**: erstat med Arnes nye fulde tekst.
- **Ny sektion: Education** (Oxford / Washington / Aarhus) med beskrivelser og "→"-takeaway-linjer.
- **Testimonials**: overskrift "Trust and competence is the foundation of effective collaboration"; testimonial-kort erstattes med "Coming soon…" placeholders.
- **Contact**: fjern "uforpligtende"; ryk højre kort op og tilpas ift. ny tekst.

### 6. Fjern CV
- Fjern "CV"-link i `Header.tsx` (desktop + mobile).
- Fjern route `/cv` i `App.tsx` og slet `src/pages/CV.tsx`.
- Fjern "See full CV"-knap i `CareerHighlights`.

### 7. LinkedIn
- Tilføj LinkedIn-ikon-link (https://www.linkedin.com/in/arne-lorenzen-mba/) i Header (desktop) + Footer + Contact-sektion.

### 8. Slideshow (levende billeder)
- Ny `Slideshow.tsx`-komponent baseret på shadcn `Carousel` med autoplay (embla-carousel-autoplay) og soft fade/Ken Burns-zoom på hver slide.
- Foreløbigt placeholder med 2-3 eksisterende assets; klar til at tilføje Arnes kommende billeder.
- Placér mellem About og Focus Areas (eller hvor det passer redaktionelt).
- Tilføj subtil Ken Burns-animation (`@keyframes` scale 1.0 → 1.08 over 8s) til hero-baggrund og slideshow-billeder.

### 9. SEO (let setup)
- Opdatér `index.html`: engelsk title, meta description, lang="en", canonical link, OG image (`/og-image.jpg`), Twitter card, robots.
- Tilføj JSON-LD `Person` schema for Arne (navn, jobtitel, sameAs LinkedIn).
- Tilføj `public/robots.txt` (allow all + sitemap-link) og `public/sitemap.xml` med `/`.
- Installer `react-helmet-async` for per-side titles (ikke strengt nødvendigt med kun én side, men gør det fremtidssikret) – **alternativ**: bare statisk i index.html. Vælger statisk for simplicitet.

### 10. Analytics (besvares til Arne, ikke implementeret nu)
- Vil ikke implementere før du bekræfter valg (GA4 vs. Plausible). Nævnes i opsummering.

### Tekniske noter
- Kør `bun add embla-carousel-autoplay` til slideshow.
- Filer der ændres: `index.html`, `src/index.css`, `src/context/LanguageContext.tsx`, `src/translations/{en,da,de,fr}.ts`, `src/components/HeroSection.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/AboutSection.tsx`, `src/components/ServicesSection.tsx`, `src/components/CareerHighlights.tsx`, `src/components/TestimonialsSection.tsx`, `src/components/ContactSection.tsx`, `src/App.tsx`, `src/pages/Index.tsx`.
- Nye filer: `src/components/Slideshow.tsx`, `src/components/ExperienceAreas.tsx`, `src/components/EducationSection.tsx`, `public/robots.txt`, `public/sitemap.xml`, `src/assets/hero-bg-offshore.jpg`, `src/assets/arne-portrait.jpg`.
- Slettes: `src/pages/CV.tsx`.
