import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "20+", label: "APIs Delivered" },
  { value: "15+", label: "Services Migrated" },
  { value: "95%", label: "Test Coverage" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// About Me"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8 text-foreground">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Skilled Full Stack Developer with deep expertise in Java technologies, Spring Boot, 
              Microservices, and modern frontend frameworks. I specialize in designing scalable, 
              secure enterprise applications for industries including banking and CRM.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From architecting distributed systems at RBC Bank to leading cloud migrations at 
              Infosys, I bring a track record of improving performance, reducing costs, and 
              mentoring teams. I'm passionate about clean code, DevOps automation, and 
              leveraging cloud-native technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Master's degree from University of South Florida (Computer System Analysis) and 
              B.Tech from SRM Institute (ECE). Currently based in Tampa, FL and open to new opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors shadow-card"
              >
                <p className="text-3xl font-bold font-mono text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
