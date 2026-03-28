import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import TypeWriter from "./TypeWriter";

const HeroSection = () => {
  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("mailto:sainaveen7691@gmail.com", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3) saturate(1.2)" }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
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

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] z-[1]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[130px] z-[1]"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-primary font-medium">Available for opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-foreground inline-block"
            >
              Sai
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gradient inline-block"
            >
              Naveen
            </motion.span>
          </h1>

          {/* Typewriter role */}
          <div className="text-xl md:text-2xl font-mono text-primary/80 mb-6 h-8">
            <TypeWriter
              words={[
                "Full Stack Developer",
                "Java & Spring Boot Expert",
                "Cloud Architect",
                "Microservices Engineer",
                "React Developer",
              ]}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            I don't just write code — I engineer systems that power{" "}
            <span className="text-foreground font-medium">real-world enterprises</span>.
            From banking platforms handling half a million daily transactions to cloud-native
            architectures that never sleep.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            <span className="text-foreground font-medium">7+ years</span> deep in Java, Spring Boot, React & AWS —
            turning complex problems into elegant, scalable solutions.
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
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:shadow-glow transition-all duration-300 text-sm overflow-hidden"
          >
            {/* Shimmer effect */}
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
            className="group border border-border text-foreground font-semibold px-8 py-3.5 rounded-xl hover:border-primary/40 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300 text-sm"
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
              onClick={label === "Email" ? handleMailClick : undefined}
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
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors z-10"
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
