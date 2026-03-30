import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = navLinks.map((l) => l.href.slice(1));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 150) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [onScroll]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMobileNavClick = (sectionId: string) => {
    // Close menu first
    setMobileOpen(false);

    // Delay scroll to let the menu close fully, avoids animation conflicts
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 70;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  const handleDesktopNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-slide-down ${
          scrolled ? "glass border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileOpen(false);
            }}
            className="text-lg font-bold text-gradient tracking-tight z-50"
          >
            SN.
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleDesktopNavClick(e, link.href.slice(1))}
                  className={`relative text-sm px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2 z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay menu — no AnimatePresence, simpler and more reliable */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 px-6">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleMobileNavClick(link.href.slice(1))}
              className={`text-2xl font-semibold py-3 px-6 rounded-xl transition-all duration-300 w-full max-w-xs text-center ${
                activeSection === link.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Social links in mobile menu */}
          <div
            className="flex items-center gap-6 mt-8 pt-6 border-t border-border/30"
            style={{
              transitionDelay: mobileOpen ? "350ms" : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transition: "all 300ms ease",
            }}
          >
            <a
              href="https://github.com/sainaveen25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/s-sainaveen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sainaveen7691@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
