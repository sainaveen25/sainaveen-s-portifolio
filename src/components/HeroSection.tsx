import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[130px]"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-primary font-medium">Available for opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
            <span className="text-foreground">Sai</span>
            <br />
            <span className="text-gradient">Naveen</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Full Stack Developer crafting enterprise-grade applications with{" "}
            <span className="text-foreground font-medium">7+ years</span> of expertise in
            Java, Spring Boot, React & Cloud Architecture.
          </p>

          <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span>Tampa, FL</span>
            <span className="mx-2 text-border">·</span>
            <span>Open to Relocation</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="group relative bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:shadow-glow transition-all duration-300 text-sm"
          >
            Let's Work Together
          </a>
          <a
            href="#projects"
            className="group border border-border text-foreground font-semibold px-8 py-3.5 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-sm"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-5"
        >
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
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icon size={18} />
              <span className="text-sm hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
