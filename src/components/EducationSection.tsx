import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";

const education = [
  {
    school: "University of South Florida",
    degree: "Master of Science",
    major: "Computer System Analysis",
    location: "Tampa, FL",
    gradient: "text-gradient",
  },
  {
    school: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    major: "Electronics & Communication Engineering",
    location: "Chennai, India",
    gradient: "text-gradient-accent",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
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
            >
              <TiltCard className="bento-card group h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="text-primary" size={22} />
                </div>
                <h3 className={`text-2xl font-bold ${edu.gradient}`}>{edu.degree}</h3>
                <p className="text-foreground font-medium mt-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground mt-2">{edu.major}</p>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                  <MapPin size={12} />
                  {edu.location}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
