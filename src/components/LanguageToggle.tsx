import { useLanguage } from "@/context/LanguageContext";
import { Language, languageCodes } from "@/translations";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['en', 'da', 'de', 'fr', 'it'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-foreground hover:text-accent transition-colors rounded-md hover:bg-accent/5"
        aria-label="Select language"
      >
        <span className="uppercase">{languageCodes[language]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[80px] z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                language === lang
                  ? 'bg-accent/10 text-accent'
                  : 'text-foreground hover:bg-accent/5 hover:text-accent'
              }`}
            >
              {languageCodes[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
