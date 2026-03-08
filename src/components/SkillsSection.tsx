import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Layout, Cloud, Database, Lock } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java (8,11,17,21)", "Python", "SQL", "PL/SQL", "TypeScript", "JavaScript"],
    gradient: "text-gradient",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Hibernate", "JPA", "Microservices", "REST APIs", "GraphQL"],
    gradient: "text-gradient-accent",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React 18", "Angular 14", "Redux Toolkit", "RxJS", "HTML5", "CSS3/SCSS", "Tailwind CSS", "Bootstrap"],
    gradient: "text-gradient",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, Lambda, S3, RDS, EKS)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD"],
    gradient: "text-gradient-warm",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "DynamoDB", "Cassandra"],
    gradient: "text-gradient-accent",
  },
  {
    title: "Tools & Security",
    icon: Lock,
    skills: ["Kafka", "ELK Stack", "Grafana", "OAuth 2.0", "JWT", "SonarQube", "JUnit", "Mockito"],
    gradient: "text-gradient-warm",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bento-card group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <cat.icon className="text-primary" size={18} />
                </div>
                <h3 className={`text-base font-semibold ${cat.gradient}`}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-300"
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
