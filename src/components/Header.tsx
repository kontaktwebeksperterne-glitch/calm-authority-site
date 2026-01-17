import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "om", label: "Om mig" },
    { id: "fokus", label: "Fokus" },
    { id: "anbefalinger", label: "Anbefalinger" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide py-4 md:py-6">
        <div className="flex items-center justify-between">
          <span
            className="text-lg font-serif text-foreground cursor-pointer hover:text-accent transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Arne Lorenzen
          </span>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="editorial-body-sm editorial-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="btn-nav"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-6 py-3 editorial-body-sm text-foreground hover:bg-accent/5 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="px-6 py-3">
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="btn-primary w-full"
                >
                  Kontakt
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
