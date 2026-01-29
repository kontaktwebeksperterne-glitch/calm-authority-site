import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
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
            onClick={handleLogoClick}
          >
            Arne Berg Lorenzen
          </span>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="editorial-body-sm editorial-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate("/cv")}
                  className={`editorial-body-sm editorial-link ${location.pathname === "/cv" ? "text-accent" : ""}`}
                >
                  CV
                </button>
              </li>
            </ul>
            <button
              onClick={() => handleNavigation("kontakt")}
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
                    onClick={() => handleNavigation(item.id)}
                    className="w-full text-left px-6 py-3 editorial-body-sm text-foreground hover:bg-accent/5 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/cv");
                  }}
                  className={`w-full text-left px-6 py-3 editorial-body-sm hover:bg-accent/5 transition-colors ${location.pathname === "/cv" ? "text-accent" : "text-foreground"}`}
                >
                  CV
                </button>
              </li>
              <li className="px-6 py-3">
                <button
                  onClick={() => handleNavigation("kontakt")}
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
