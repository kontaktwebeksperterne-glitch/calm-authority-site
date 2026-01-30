

## Multi-Language Support + CV Integration + Image Improvements

### Overview
Three major changes to implement:
1. Add multi-language support (Danish, English, German, French) with a toggle switch
2. Move compressed CV timeline to the main page
3. Fix the ExperienceGallery images to show full quality and complete images

---

### Part 1: Multi-Language Support

**Architecture:**
Create a React Context-based i18n (internationalization) system with a language toggle.

**New files to create:**

| File | Purpose |
|------|---------|
| `src/context/LanguageContext.tsx` | React Context for managing current language state |
| `src/translations/da.ts` | Danish translations (current text) |
| `src/translations/en.ts` | English translations |
| `src/translations/de.ts` | German translations |
| `src/translations/fr.ts` | French translations |
| `src/translations/index.ts` | Export all translations |
| `src/components/LanguageToggle.tsx` | Dropdown/toggle to switch languages |

**Translation structure example:**
```text
translations = {
  nav: { about, focus, recommendations, cv, contact },
  hero: { label, headline, subheadline, ctaPrimary, ctaSecondary },
  about: { label, name, bio1, bio2, bio3, languages, cta },
  stats: { experience, boardRoles, languages, countries },
  services: { label, headline, items: [...] },
  testimonials: { label, headline, subheadline, items: [...] },
  contact: { label, headline, description, email, phone, ctaCall, ctaEmail },
  footer: { title, rights },
  cv: { backLink, title, description, boardTitle, execTitle, eduTitle, teachTitle, langTitle }
}
```

**Language Toggle Design:**
- Positioned in the Header (next to navigation)
- Dropdown with flag icons or language codes: DA | EN | DE | FR
- Stores selected language in localStorage for persistence
- Updates `<html lang="">` attribute dynamically

**Components to update:**
- `Header.tsx` - Add LanguageToggle, translate nav items
- `HeroSection.tsx` - All text
- `StatsSection.tsx` - All text
- `AboutSection.tsx` - All text
- `ExperienceGallery.tsx` - All text
- `ServicesSection.tsx` - All text
- `TestimonialsSection.tsx` - All text
- `ContactSection.tsx` - All text
- `Footer.tsx` - All text
- `CV.tsx` - All text and section titles
- `App.tsx` - Wrap with LanguageProvider
- `index.html` - Dynamic lang attribute

---

### Part 2: Compressed CV on Main Page

**Approach:**
Create a new "Career Highlights" section that shows a condensed version of the CV data on the main page.

**New component:**
`src/components/CareerHighlights.tsx`

**Design (compact timeline):**
- Shows 3-4 most notable board positions
- Shows 3-4 most notable executive roles
- Education highlights in a horizontal row
- "See Full CV" button linking to `/cv`

**Layout concept:**
```text
┌─────────────────────────────────────────────────┐
│  KARRIERE (label)                               │
│  Highlights fra min karriere (heading)          │
│                                                 │
│  ┌─────────────────┐  ┌─────────────────┐      │
│  │ BESTYRELSER     │  │ LEDELSE         │      │
│  │ • IDBC 2025     │  │ • EDF 2021-24   │      │
│  │ • NetZero 2025  │  │ • SITAC 2018-21 │      │
│  │ • WindEurope    │  │ • Nordisk Vind. │      │
│  │ • JV Norway     │  │ • Theolia       │      │
│  └─────────────────┘  └─────────────────┘      │
│                                                 │
│  UDDANNELSE: Oxford | Fulbright | Aarhus       │
│                                                 │
│           [Se komplet CV →]                     │
└─────────────────────────────────────────────────┘
```

**Integration:**
- Add to `Index.tsx` after ServicesSection or ExperienceGallery
- Uses same data arrays from CV.tsx (extract to shared file)

**Shared data file:**
`src/data/cv-data.ts` - Contains boardExperience, executiveExperience, education arrays

---

### Part 3: Image Quality Improvements

**Issue identified:**
The images in ExperienceGallery use `aspect-[16/9]` which crops them. The original photos are being cut off.

**Solution:**
1. Change aspect ratio to match original photo proportions (likely 4:3 or 3:2)
2. Remove object-cover cropping, use object-contain or natural aspect
3. Add higher quality image settings

**Changes to `ExperienceGallery.tsx`:**
```text
Current:
- aspect-[16/9] → crops images
- object-cover object-center → forces cropping

Fix:
- aspect-[4/3] or remove fixed aspect
- object-contain or let images show naturally
- Add max-height constraint instead
- Ensure full images are visible
```

**Alternative approach:**
Use a different layout that doesn't constrain height - let images show at natural proportions within a max-width container.

---

### Implementation Order

1. **Extract CV data** to shared file (needed for both CV page and highlights)
2. **Create language system** (context, translations, toggle)
3. **Update all components** with translations
4. **Create CareerHighlights** component
5. **Fix ExperienceGallery** images
6. **Test all languages** and responsive layouts

---

### Files Summary

| Action | File |
|--------|------|
| Create | `src/context/LanguageContext.tsx` |
| Create | `src/translations/da.ts` |
| Create | `src/translations/en.ts` |
| Create | `src/translations/de.ts` |
| Create | `src/translations/fr.ts` |
| Create | `src/translations/index.ts` |
| Create | `src/components/LanguageToggle.tsx` |
| Create | `src/components/CareerHighlights.tsx` |
| Create | `src/data/cv-data.ts` |
| Update | `src/App.tsx` |
| Update | `src/components/Header.tsx` |
| Update | `src/components/HeroSection.tsx` |
| Update | `src/components/StatsSection.tsx` |
| Update | `src/components/AboutSection.tsx` |
| Update | `src/components/ExperienceGallery.tsx` |
| Update | `src/components/ServicesSection.tsx` |
| Update | `src/components/TestimonialsSection.tsx` |
| Update | `src/components/ContactSection.tsx` |
| Update | `src/components/Footer.tsx` |
| Update | `src/pages/Index.tsx` |
| Update | `src/pages/CV.tsx` |
| Update | `index.html` |

---

### Technical Details

**LanguageContext implementation:**
- `useLanguage()` hook returns `{ language, setLanguage, t }` where `t` is translation function
- Persists language choice to localStorage
- Updates document lang attribute on change

**Translation function usage:**
```typescript
const { t } = useLanguage();
// Usage: t('hero.headline') → "International erfaring. Strategisk klarhed."
```

**Image fix specifics:**
- Remove `aspect-[16/9]`
- Use `aspect-auto` or natural image dimensions
- Add `max-h-[400px]` to prevent overly tall images
- Keep `object-cover` but adjust `object-position` if needed
- Consider different crops for the specific photos (India team vs Oxford)

