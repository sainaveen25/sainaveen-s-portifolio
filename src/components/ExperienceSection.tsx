import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const experiences = [
  {
    company: "RBC Bank",
    role: "Java Full Stack Developer",
    period: "Nov 2024 – Present",
    location: "Remote (Contract)",
    highlights: [
      "Built secure banking APIs using Java 17 and Spring Boot that handle day-to-day financial transactions",
      "Moved 15+ older services to a modern Spring Boot setup, which made things about 25% faster",
      "Set up Docker and Kubernetes for deployments — releases now take 30% less time",
      "Built frontend dashboards with React 18 and Angular 15 using TypeScript",
      "Set up Kafka messaging to handle 500K+ daily transaction events across the system",
      "Added authentication with Spring Security, JWT, and OAuth2 to meet banking compliance requirements",
      "Tuned PostgreSQL and Oracle queries to cut response times by 40% on high-traffic pages",
      "Managed CI/CD pipelines with Jenkins and GitHub Actions, cutting production issues by 45%",
      "Used AWS Lambda, S3, and EKS to bring down infrastructure costs by about 22%",
      "Wrote Terraform configs to keep dev and prod environments consistent",
    ],
    tech: ["Java 17", "Spring Boot", "React 18", "Angular 15", "Kafka", "AWS EKS", "PostgreSQL", "MongoDB", "Docker", "K8s", "Terraform"],
    accent: "primary",
  },
  {
    company: "Infosys",
    role: "Sr Software Engineer",
    period: "Jul 2021 – Aug 2023",
    location: "India",
    highlights: [
      "Led the effort to break down a large CRM app into smaller, independent services using Java 11 and Spring Boot",
      "Built 20+ REST APIs that serve 50K users daily, with proper authentication and role-based access",
      "Made the Angular dashboard load 35% faster by using better data-fetching patterns with RxJS",
      "Helped move the system to AWS, reaching 99.99% uptime for the most important services",
      "Automated deployments with Jenkins and GitLab CI — cut manual work in half",
      "Used Kafka for real-time notifications and keeping data in sync across services",
      "Built monitoring dashboards with ELK Stack and CloudWatch to catch issues faster",
      "Managed containerized apps on AWS ECS with CloudFormation for infrastructure setup",
    ],
    tech: ["Java 11", "Spring Boot", "Angular 8", "RxJS", "PostgreSQL", "Kafka", "AWS ECS", "Docker", "Jenkins", "ELK Stack"],
    accent: "accent",
  },
  {
    company: "Accellor Software",
    role: "Java Developer",
    period: "Jul 2018 – Jul 2021",
    location: "India",
    highlights: [
      "Built backend features using Core Java, JSP, and Servlets for order tracking and inventory management",
      "Developed REST and SOAP APIs with 99% data accuracy for shipment tracking integrations",
      "Set up CI/CD with Jenkins and Docker, making releases 30% faster",
      "Designed and optimized MySQL database schemas, improving data retrieval by 25%",
      "Used Multithreading and Spring MVC to handle web requests more efficiently",
      "Wrote JUnit tests to cover 80% of the main application code",
    ],
    tech: ["Java 8", "Spring MVC", "Hibernate", "MySQL", "REST APIs", "SOAP", "Jenkins", "Docker", "JUnit", "Apache Tomcat"],
    accent: "primary",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className={`hidden md:block absolute left-[29px] top-8 w-3 h-3 rounded-full ${
                    exp.accent === "accent" ? "bg-accent" : "bg-primary"
                  } ring-4 ring-background z-10`}
                />

                <TiltCard className="bento-card group relative overflow-hidden hover:shadow-glow transition-shadow duration-500">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${exp.accent === 'accent' ? 'bg-accent' : 'bg-primary'} opacity-60 rounded-l-2xl`} />

                  <div className="pl-4">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-medium mt-0.5">{exp.company} <span className="text-muted-foreground font-normal">· {exp.location}</span></p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg font-mono shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: i * 0.15 + j * 0.03 }}
                          className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed"
                        >
                          <span className="text-primary mt-1 shrink-0 text-xs">●</span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs font-mono bg-secondary/80 text-secondary-foreground px-2.5 py-1 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
