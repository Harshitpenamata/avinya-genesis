import logoLandscape from "@/assets/logo-landscape-light.png";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={logoLandscape} alt="Avinya Interactive" className="h-8 w-auto opacity-70" />
          <span className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="text-muted-foreground hover:text-primary text-xs font-body tracking-[0.15em] uppercase transition-colors">
            Services
          </a>
          <a href="#team" className="text-muted-foreground hover:text-primary text-xs font-body tracking-[0.15em] uppercase transition-colors">
            Team
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary text-xs font-body tracking-[0.15em] uppercase transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
