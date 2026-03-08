import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Banking Microservices Platform",
    description:
      "Enterprise-grade banking microservices architecture handling 500K+ daily transactions with event-driven messaging, real-time processing, and high-availability deployment on AWS EKS.",
    tech: ["Java 17", "Spring Boot", "Kafka", "AWS EKS", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/sainaveen25",
    featured: true,
  },
  {
    title: "E-Commerce Full Stack Application",
    description:
      "Scalable e-commerce platform with product catalog, order management, payment integration, and real-time inventory tracking built with microservices architecture.",
    tech: ["Java 11", "Spring Boot", "React 18", "PostgreSQL", "Redis", "REST APIs", "Docker"],
    github: "https://github.com/sainaveen25",
    featured: true,
  },
  {
    title: "CRM Modernization Suite",
    description:
      "Monolith-to-microservices CRM transformation delivering 20+ RESTful APIs for 50K daily active users with 99.99% availability and optimized Angular dashboards.",
    tech: ["Java 11", "Spring Boot", "Angular 8", "AWS", "PostgreSQL", "Redis", "Kafka"],
    featured: false,
  },
  {
    title: "CI/CD & Deployment Automation",
    description:
      "End-to-end CI/CD pipelines with automated testing, containerized deployments, and infrastructure-as-code achieving 45% reduction in production failures.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "SonarQube"],
    featured: false,
  },
  {
    title: "Real-Time Data Pipeline",
    description:
      "High-volume data processing pipeline using Apache Kafka for notification streams and data synchronization across distributed banking systems.",
    tech: ["Apache Kafka", "Spring Cloud", "AWS Lambda", "ELK Stack", "Docker"],
    featured: false,
  },
  {
    title: "Task Management App",
    description:
      "Full-stack task management application with role-based access control, JWT authentication, and responsive UI for team collaboration.",
    tech: ["NestJS", "Angular", "TypeORM", "JWT", "RBAC", "TypeScript"],
    github: "https://github.com/sainaveen25/Full-stack-Task-management-application",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.a
              key={i}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-lg">Featured</span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" size={18} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono bg-secondary/80 text-secondary-foreground px-2.5 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Other projects - compact grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bento-card group flex flex-col"
            >
              <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] font-mono text-muted-foreground">+{project.tech.length - 3}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sainaveen25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <Github size={16} />
            View all projects on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
