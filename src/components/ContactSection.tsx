import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Contact"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          <a href="mailto:sainaveen7691@gmail.com" className="bg-background border border-border rounded-lg p-6 hover:border-primary/30 transition-colors shadow-card group">
            <Mail className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
            <p className="text-sm font-mono text-foreground">Email</p>
            <p className="text-xs text-muted-foreground mt-1">sainaveen7691@gmail.com</p>
          </a>
          <a href="tel:+13528427691" className="bg-background border border-border rounded-lg p-6 hover:border-primary/30 transition-colors shadow-card group">
            <Phone className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
            <p className="text-sm font-mono text-foreground">Phone</p>
            <p className="text-xs text-muted-foreground mt-1">+1 (352) 842-7691</p>
          </a>
          <div className="bg-background border border-border rounded-lg p-6 shadow-card">
            <MapPin className="text-primary mx-auto mb-3" size={24} />
            <p className="text-sm font-mono text-foreground">Location</p>
            <p className="text-xs text-muted-foreground mt-1">Tampa, FL</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="https://github.com/sainaveen25" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-mono text-sm px-5 py-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
            <Github size={16} /> GitHub
          </a>
          <a href="mailto:sainaveen7691@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-mono text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-glow">
            <Mail size={16} /> Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
