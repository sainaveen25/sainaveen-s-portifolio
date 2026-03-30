import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Globe, Shield, TrendingUp } from "lucide-react";
import TiltCard from "./TiltCard";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "7+", label: "Years Experience", icon: Zap },
  { value: "20+", label: "APIs Built", icon: Globe },
  { value: "15+", label: "Services Migrated", icon: TrendingUp },
  { value: "95%", label: "Test Coverage", icon: Shield },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 relative" ref={ref}>
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 w-px h-20 bg-gradient-to-b from-transparent to-primary/20" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm font-mono tracking-wider uppercase"
          >
            About
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-foreground leading-tight">
            Software that works<br />
            <span className="text-gradient">at any scale</span>
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
              I'm a full stack developer who enjoys working across the entire stack — from setting up
              databases and writing APIs to building the UI that people actually use. Most of my work
              has been with Java and Spring Boot on the backend, and React or Angular on the frontend.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the past 7 years, I've worked at places like RBC Bank and Infosys, where I helped
              move older systems to modern setups, built APIs that handle real traffic, and set up
              cloud infrastructure on AWS. I care about writing clean code and making sure things
              actually work in production, not just in demos.
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
              <TiltCard
                key={i}
                className="bento-card text-center group"
              >
                <stat.icon className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                <p className="text-3xl font-bold text-gradient">
                  <AnimatedCounter target={stat.value} />
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
