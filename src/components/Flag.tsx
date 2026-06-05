type FlagCode = "uk" | "us" | "dk";

interface FlagProps {
  code: FlagCode;
  className?: string;
  title?: string;
}

// Small, inline SVG flags so rendering is consistent across systems
// (emoji regional-indicator fallbacks can show as "GB" / "US" / "DK" on some
// older renderers — these SVGs avoid that).
const Flag = ({ code, className = "w-10 h-auto rounded-sm shadow-sm ring-1 ring-black/10", title }: FlagProps) => {
  switch (code) {
    case "uk":
      return (
        <svg
          viewBox="0 0 60 30"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={title || "United Kingdom flag"}
        >
          <clipPath id="uk-clip-t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-clip-t)" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      );
    case "us":
      return (
        <svg
          viewBox="0 0 60 30"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={title || "United States flag"}
        >
          <rect width="60" height="30" fill="#fff" />
          {[0, 2, 4, 6, 8, 10, 12].map((i) => (
            <rect key={i} y={(i * 30) / 13} width="60" height={30 / 13} fill="#B22234" />
          ))}
          <rect width="24" height={(30 * 7) / 13} fill="#3C3B6E" />
        </svg>
      );
    case "dk":
      return (
        <svg
          viewBox="0 0 60 30"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={title || "Denmark flag"}
        >
          <rect width="60" height="30" fill="#C8102E" />
          <rect x="0" y="13" width="60" height="4" fill="#fff" />
          <rect x="17" y="0" width="4" height="30" fill="#fff" />
        </svg>
      );
  }
};

export default Flag;
