import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) window.scrollTo({ top: 0, behavior: "smooth" });
    else navigate("/");
  };

  const navItems = [
    { id: "om", label: t('nav.about') },
    { id: "baggrund", label: t('nav.background') },
    { id: "erfaring", label: t('nav.expertise') },
    { id: "fokus", label: t('nav.engagement') },
    { id: "uddannelse", label: t('nav.education') },
    { id: "anbefalinger", label: t('nav.recommendations') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-wide py-4 md:py-5">
        <div className="flex items-center justify-between">
          <span className="text-xl md:text-2xl font-serif font-bold text-foreground cursor-pointer hover:text-accent transition-colors tracking-tight" onClick={handleLogoClick}>
            Arne Lorenzen
          </span>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNavigation(item.id)} className="editorial-body-sm editorial-link">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="https://www.linkedin.com/in/arne-lorenzen-mba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <LanguageToggle />
            <button onClick={() => handleNavigation("kontakt")} className="btn-nav">
              {t('nav.contact')}
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNavigation(item.id)} className="w-full text-left px-6 py-3 editorial-body-sm text-foreground hover:bg-accent/5 transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/in/arne-lorenzen-mba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2 px-6 py-3 editorial-body-sm text-foreground hover:bg-accent/5 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li className="px-6 py-3">
                <button onClick={() => handleNavigation("kontakt")} className="btn-primary w-full">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
