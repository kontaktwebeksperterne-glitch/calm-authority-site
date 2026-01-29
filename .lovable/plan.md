

## CV Side: Komplet Karriere- og Bestyrelseoversigt

### Overblik
Opret en dedikeret CV-side (/cv) med al Arnes professionelle erfaring, opdelt i overskuelige sektioner. Siden vil matche det eksisterende design og linkes fra navigationen.

---

### Ny Side: /cv

**Sidelayout med sektioner:**

1. **Hero/Header**
   - Arnes navn og titel
   - Kort professionel opsummering (fra CV'et)
   - Link tilbage til forsiden

2. **Bestyrelseserfaring** (Supervisory & Advisory Board Experience)
   - Tidslinje-layout med alle 13 bestyrelsesroller
   - Inkluderer: årstal, rolle, virksomhed, lokation, kort beskrivelse
   - Fra Indo Danish Business Council (2025) til Theolia SA (2006-2009)

3. **Ledelsesfaring** (Executive Experience)
   - Tidslinje med alle 10 CEO/ledelsesroller
   - Fra EDF Renewables India (2021-2024) til Cargill Inc. (1991-2000)
   - Inkluderer underpositioner hos Cargill

4. **Uddannelse** (Education)
   - 4 uddannelser med ikoner
   - Oxford Executive MBA
   - Fulbright Scholarship (University of Washington)
   - 2x Aarhus University master-grader

5. **Undervisning** (Teaching)
   - Guest Lecturer ved MDI Delhi/Kolkata

6. **Sprog** (Languages)
   - Flydende i 6 sprog: Engelsk, Fransk, Tysk, Norsk, Svensk, Dansk

---

### Navigation Opdatering

- Tilføj "CV" link i Header navigationen
- Header skal virke på begge sider (scroll på Index, link til /cv)
- Tilføj "Tilbage til forside" på CV-siden

---

### Filer der oprettes/opdateres

| Fil | Handling |
|-----|----------|
| `src/pages/CV.tsx` | Ny side med CV-indhold |
| `src/App.tsx` | Tilføj /cv route |
| `src/components/Header.tsx` | Opdater navigation til at virke på begge sider |

---

### Tekniske Detaljer

**CV.tsx komponenter:**
- Genbruger eksisterende CSS-klasser (editorial-heading, card-warm, etc.)
- Tidslinje-styling for erfaring
- Kort-baseret layout for uddannelse og sprog
- Responsivt design (mobil-venligt)

**Header.tsx ændringer:**
- Brug `useLocation` fra react-router-dom
- På forsiden: scroll-to-section
- På CV-siden: naviger til forside med hash-fragment
- Tilføj "CV" til navigation items

**Tidslinje-design:**
```text
+------------------+
| 2025 -           |
| [Rolle]          |
| Virksomhed       |
| Lokation         |
| Beskrivelse      |
+------------------+
        |
        v
+------------------+
| 2024 - 2025      |
| [Rolle]          |
| ...              |
+------------------+
```

