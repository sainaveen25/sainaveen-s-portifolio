import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 text-foreground mb-5">
            Let's build<br />
            <span className="text-gradient">something great</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-14 text-lg">
            Currently open to new opportunities. Whether you have a project in mind or just want to connect — let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-14"
        >
          <a href="mailto:sainaveen7691@gmail.com" className="bento-card group text-center">
            <Mail className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" size={22} />
            <p className="text-sm font-medium text-foreground">Email</p>
            <p className="text-xs text-muted-foreground mt-1">sainaveen7691@gmail.com</p>
          </a>
          <a href="tel:+13528427691" className="bento-card group text-center">
            <Phone className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" size={22} />
            <p className="text-sm font-medium text-foreground">Phone</p>
            <p className="text-xs text-muted-foreground mt-1">+1 (352) 842-7691</p>
          </a>
          <div className="bento-card text-center">
            <MapPin className="text-primary mx-auto mb-3" size={22} />
            <p className="text-sm font-medium text-foreground">Location</p>
            <p className="text-xs text-muted-foreground mt-1">Tampa, FL</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="mailto:sainaveen7691@gmail.com"
            className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-xl hover:shadow-glow transition-all duration-300">
            <Mail size={16} /> Say Hello
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href="https://github.com/sainaveen25" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground font-semibold text-sm px-6 py-3.5 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/s-sainaveen" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground font-semibold text-sm px-6 py-3.5 rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-300">
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
