import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-editorial py-6 md:py-8">
        <div className="flex items-center justify-between">
          <span
            className="editorial-label text-foreground cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Arne Lorenzen
          </span>
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="editorial-body-sm editorial-link"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("focus")}
                className="editorial-body-sm editorial-link"
              >
                Focus
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="editorial-body-sm editorial-link"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
