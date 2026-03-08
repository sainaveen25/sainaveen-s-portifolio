import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "RBC Bank",
    role: "Java Full Stack Developer",
    period: "Nov 2024 – Present",
    location: "Remote (Contract)",
    highlights: [
      "Architected scalable banking microservices using Java 17, Spring Boot & Hibernate JPA",
      "Migrated 15+ legacy services to modern Spring Boot, enhancing throughput by 25%",
      "Directed React 18 & Angular 15 frontend for high-traffic banking platforms",
      "Established Kafka event-driven patterns processing 500K+ daily transaction events",
      "Managed CI/CD via Jenkins & GitHub Actions, cutting production failures by 45%",
      "Leveraged AWS Lambda & S3, reducing infrastructure costs by 22%",
    ],
    tech: ["Java 17", "Spring Boot", "React 18", "Angular 15", "Kafka", "AWS", "PostgreSQL", "MongoDB", "Docker", "K8s"],
  },
  {
    company: "Infosys",
    role: "Sr Software Engineer",
    period: "Jul 2021 – Aug 2023",
    location: "India",
    highlights: [
      "Led CRM monolith-to-microservices transformation with Java 11 & Spring Boot 2.x",
      "Delivered 20+ RESTful APIs supporting 50K daily active users",
      "Improved Angular dashboard load times by 35% with reactive patterns",
      "Achieved 99.99% availability for mission-critical AWS applications",
      "Automated CI/CD with Jenkins & GitLab CI, reducing manual deployment by 50%",
    ],
    tech: ["Java 11", "Spring Boot", "Angular 8", "PostgreSQL", "Kafka", "AWS", "Docker", "Jenkins"],
  },
  {
    company: "Accellor Software",
    role: "Java Developer",
    period: "Jul 2018 – Jul 2021",
    location: "India",
    highlights: [
      "Built backend modules for automated order tracking & inventory management",
      "Developed REST/SOAP APIs with 99% data accuracy for shipment tracking",
      "Implemented CI/CD with Jenkins & Docker, reducing release cycles by 30%",
      "Optimized MySQL schemas, improving data retrieval by 25%",
    ],
    tech: ["Java 8", "Spring MVC", "Hibernate", "MySQL", "REST APIs", "Jenkins", "Docker"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Career"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors shadow-card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-mono text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-md">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
