import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Layout, Cloud, Database, Lock, Wrench, TestTube, Workflow, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java (8, 11, 17, 21)", "J2EE", "Python", "SQL", "PL/SQL", "TypeScript", "JavaScript"],
    gradient: "text-gradient",
  },
  {
    title: "J2EE Technologies",
    icon: Workflow,
    skills: ["Multithreading", "JDBC", "Servlets", "JSP", "JMS", "Java Beans", "JSTL", "Struts", "JSF", "EJB", "JTA", "JNDI", "JPA"],
    gradient: "text-gradient-accent",
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    skills: ["Spring Boot 3.x", "Spring MVC", "Spring Security 6.x", "Spring Cloud", "Spring WebFlux", "Spring IOC", "Spring AOP", "Spring Data JPA", "Spring Batch", "Hibernate ORM"],
    gradient: "text-gradient",
  },
  {
    title: "Web Services",
    icon: Globe,
    skills: ["RESTful APIs", "SOAP", "GraphQL", "JMS", "SOA", "Microservices", "JAX-RS", "JAX-WS"],
    gradient: "text-gradient-warm",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React 18", "Redux Toolkit", "React Query", "Angular 14", "RxJS", "TypeScript", "HTML5", "CSS3/SCSS", "Tailwind CSS", "Bootstrap 5"],
    gradient: "text-gradient",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, Lambda, S3, RDS, EKS, SQS, SNS, API Gateway, CloudWatch, IAM)", "Azure DevOps", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "GitLab CI/CD"],
    gradient: "text-gradient-warm",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "MongoDB", "Redis", "Cassandra", "DynamoDB"],
    gradient: "text-gradient-accent",
  },
  {
    title: "Security",
    icon: Lock,
    skills: ["OAuth 2.0", "OIDC", "JWT", "Keycloak", "Spring Security 6.x", "SAML", "RBAC", "SSL/TLS"],
    gradient: "text-gradient",
  },
  {
    title: "Observability",
    icon: Wrench,
    skills: ["ELK Stack", "Prometheus", "Grafana", "Splunk", "AWS CloudWatch", "Instana APM", "Datadog"],
    gradient: "text-gradient-warm",
  },
  {
    title: "Testing & QA",
    icon: TestTube,
    skills: ["JUnit", "Mockito", "Cucumber (BDD)", "JMeter", "SonarQube", "Postman", "Swagger/OpenAPI", "REST Assured"],
    gradient: "text-gradient-accent",
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
              transition={{ duration: 0.5, delay: i * 0.06 }}
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
