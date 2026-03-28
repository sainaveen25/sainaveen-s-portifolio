import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border relative">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm font-bold text-gradient tracking-tight">SN.</p>
      <div className="flex items-center gap-5">
        {[
          { icon: Github, href: "https://github.com/sainaveen25" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/s-sainaveen" },
          { icon: Mail, href: "mailto:sainaveen7691@gmail.com" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sai Naveen
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
        >
          <ArrowUp size={14} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
