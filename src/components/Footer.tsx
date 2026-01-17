const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-editorial">
        <p className="editorial-body-sm text-muted-foreground">
          © {currentYear} Arne Lorenzen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
