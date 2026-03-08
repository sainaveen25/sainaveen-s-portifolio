import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm font-bold text-gradient tracking-tight">SN.</p>
      <div className="flex items-center gap-5">
        <a href="https://github.com/sainaveen25" target="_blank" rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <Github size={16} />
        </a>
        <a href="https://www.linkedin.com/in/s-sainaveen" target="_blank" rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <Linkedin size={16} />
        </a>
        <a href="mailto:sainaveen7691@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <Mail size={16} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sai Naveen
      </p>
    </div>
  </footer>
);

export default Footer;
