import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Full-Stack Task Management App",
    description:
      "A secure, full-stack task management application built with NestJS, Angular, and TypeORM. Features role-based access control (RBAC), JWT authentication, and a modern responsive UI.",
    tech: ["NestJS", "Angular", "TypeORM", "JWT", "RBAC", "TypeScript"],
    github: "https://github.com/sainaveen25/Full-stack-Task-management-application",
    featured: true,
  },
  {
    title: "Electric Vehicles Website",
    description:
      "An interactive website showcasing electric vehicles with modern design, responsive layouts, and dynamic content presentation for the automotive industry.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/sainaveen25/-Electric-Vehicles-website",
    featured: true,
  },
  {
    title: "Banking Microservices Platform",
    description:
      "Enterprise-grade banking microservices architecture handling 500K+ daily transactions. Built with Spring Boot, Kafka event-driven messaging, and deployed on AWS EKS.",
    tech: ["Java 17", "Spring Boot", "Kafka", "AWS EKS", "PostgreSQL", "Docker"],
    featured: false,
  },
  {
    title: "CRM Modernization Suite",
    description:
      "Led the transformation of monolithic CRM systems into distributed microservices. Delivered 20+ RESTful APIs supporting 50K daily active users with 99.99% availability.",
    tech: ["Java 11", "Spring Boot", "Angular 8", "AWS", "PostgreSQL", "Redis"],
    featured: false,
  },
  {
    title: "Real-Time Data Pipeline",
    description:
      "Engineered real-time data processing pipeline using Apache Kafka for high-volume notification streams and data synchronization across distributed systems.",
    tech: ["Apache Kafka", "Spring Cloud", "Docker", "ELK Stack", "AWS Lambda"],
    featured: false,
  },
  {
    title: "CI/CD Automation Framework",
    description:
      "Built comprehensive CI/CD pipelines with Jenkins and GitHub Actions, achieving 45% reduction in production failures through automated testing and deployment.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "K8s", "Terraform", "SonarQube"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Portfolio"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background border border-border rounded-lg p-6 hover:border-primary/30 transition-all shadow-card hover:shadow-glow flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-mono text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/sainaveen25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
          >
            <Github size={16} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
