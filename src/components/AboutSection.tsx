import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Globe, Shield, TrendingUp } from "lucide-react";

const stats = [
  { value: "7+", label: "Years Experience", icon: Zap },
  { value: "20+", label: "APIs Delivered", icon: Globe },
  { value: "15+", label: "Services Migrated", icon: TrendingUp },
  { value: "95%", label: "Test Coverage", icon: Shield },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground leading-tight">
            Building software that<br />
            <span className="text-gradient">scales to millions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Full Stack Developer who thrives at the intersection of complex backend systems and 
              intuitive user experiences. With deep expertise across Java, Spring Boot, Microservices, 
              and modern frontend frameworks, I build enterprise applications that are not just functional — 
              they're resilient, performant, and built to last.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From architecting distributed banking systems at RBC Bank to leading cloud-native CRM 
              transformations at Infosys, I've consistently delivered solutions that reduce costs, 
              accelerate deployments, and empower teams. I'm passionate about clean architecture, 
              DevOps automation, and the craft of writing code that other developers enjoy working with.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Master's in Computer System Analysis from University of South Florida · B.Tech from SRM Institute · Based in Tampa, FL
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bento-card text-center group"
              >
                <stat.icon className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
