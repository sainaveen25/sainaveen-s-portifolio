import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(170 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(170 80% 50%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />
      
      {/* Floating orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            // Full Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 leading-tight">
            <span className="text-foreground">Sai </span>
            <span className="text-gradient">Naveen</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            7+ years building enterprise-grade applications with Java, Spring Boot, 
            React & Cloud technologies. Passionate about scalable microservices and clean architecture.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
            <MapPin size={14} className="text-primary" />
            <span>Tampa, FL — Open to Relocation</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground font-mono text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border border-primary/30 text-primary font-mono text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a href="https://github.com/sainaveen25" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="mailto:sainaveen7691@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
