import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import RotatingTechStack from "./RotatingTechStack";

const HeroSection = () => {
  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("mailto:sainaveen7691@gmail.com", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Video background — optimized with preload metadata + reduced brightness */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3) saturate(1.2)" }}
        >
          <source src={`${import.meta.env.BASE_URL}videos/hero-bg.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* CSS animated orbs — hidden on small screens for performance */}
      <div className="hidden sm:block absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] z-[1] orb-pulse" />
      <div className="hidden sm:block absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[130px] z-[1] orb-pulse-alt" />

      <div className="max-w-5xl mx-auto text-center relative z-10 pt-16 sm:pt-0">
        <div className="hero-fade-in">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8 hero-fade-in-delay-1">
            <span className="w-2 h-2 rounded-full bg-primary pulse-glow" />
            <span className="text-xs sm:text-sm text-primary font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-4 sm:mb-6">
            <span className="text-foreground inline-block hero-slide-right">
              Sai
            </span>
            <br />
            <span className="text-gradient inline-block hero-slide-left">
              Naveen
            </span>
          </h1>

          {/* Single 3D Rotating Line */}
          <div className="mb-6 sm:mb-8 hero-fade-in-delay-2">
            <RotatingTechStack />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed font-light px-2">
            I build the backend systems and web apps that keep businesses running.
            Banking platforms, cloud migrations, internal tools — if it needs to be{" "}
            <span className="text-foreground font-medium">reliable and fast</span>, I've probably built something like it.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed">
            <span className="text-foreground font-medium">7+ years</span> working with Java, Spring Boot, React, and AWS.
            Currently based in Tampa, FL.
          </p>

          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span>Tampa, FL</span>
            <span className="mx-2 text-border">·</span>
            <span>Open to Relocation</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 hero-fade-in-delay-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:shadow-glow transition-all duration-300 text-sm overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Sparkles size={16} />
            Let's Work Together
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group border border-border text-foreground font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:border-primary/40 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300 text-sm"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 hero-fade-in-delay-4">
          {[
            { icon: Github, href: "https://github.com/sainaveen25", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/s-sainaveen", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sainaveen7691@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={label === "Email" ? handleMailClick : undefined}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icon size={18} />
              <span className="text-sm hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors z-10 hero-fade-in-delay-4"
      >
        <div className="scroll-bounce">
          <ArrowDown size={20} />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
