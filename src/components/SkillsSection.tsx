import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java (8,11,17,21)", "Python", "SQL", "PL/SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Hibernate", "JPA", "Microservices", "REST APIs", "GraphQL"],
  },
  {
    title: "Frontend",
    skills: ["React 18", "Angular 14", "Redux Toolkit", "RxJS", "HTML5", "CSS3/SCSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3, RDS, EKS)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "DynamoDB", "Cassandra"],
  },
  {
    title: "Tools & Security",
    skills: ["Kafka", "ELK Stack", "Grafana", "OAuth 2.0", "JWT", "SonarQube", "JUnit", "Mockito"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Tech Stack"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/30 transition-all shadow-card"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4">{`> ${cat.title}`}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
