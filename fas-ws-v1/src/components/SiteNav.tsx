import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-sebastian.png";

const links = [
  { href: "#warum", label: "Warum" },
  { href: "#formate", label: "Formate" },
  { href: "#begleitung", label: "Begleitung" },
  { href: "#sebastian", label: "Sebastian" },
  { href: "#kontakt", label: "Kontakt" },
];

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/88 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-24 md:h-32 flex items-center justify-between">
        <a href="https://sebastian-deichmann.de" className="flex items-center gap-3" aria-label="Sebastian Deichmann">
          <img src={logo} alt="Sebastian Deichmann" className="h-20 md:h-28 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-ink-soft hover:text-teal-deep transition-colors duration-300 tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-card"
        >
          Workshop anfragen
        </a>

        <button className="md:hidden text-ink p-2" aria-label="Menü öffnen" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/60">
          <ul className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block text-base text-ink-soft hover:text-teal-deep">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#kontakt" onClick={() => setOpen(false)} className="block text-base text-teal-deep">
                Workshop anfragen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
