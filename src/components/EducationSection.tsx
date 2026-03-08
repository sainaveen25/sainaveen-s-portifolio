import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "University of South Florida",
    degree: "Master of Science",
    major: "Computer System Analysis",
    location: "Tampa, FL",
  },
  {
    school: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    major: "Electronics & Communication Engineering",
    location: "Chennai, India",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Education"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-foreground">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors shadow-card"
            >
              <GraduationCap className="text-primary mb-4" size={28} />
              <h3 className="font-mono text-lg font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-primary font-mono text-sm mt-1">{edu.school}</p>
              <p className="text-sm text-muted-foreground mt-2">{edu.major}</p>
              <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
