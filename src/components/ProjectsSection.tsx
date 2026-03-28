import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight, Building2, ShoppingCart, Users, Rocket, Database, CheckSquare, Zap } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Banking Microservices Platform",
    description:
      "Architected and deployed enterprise-grade banking microservices handling 500K+ daily transactions with event-driven Kafka messaging, containerized deployments on AWS EKS, and zero-downtime releases through Terraform IaC.",
    tech: ["Java 17", "Spring Boot", "Kafka", "AWS EKS", "PostgreSQL", "Docker", "Kubernetes", "Terraform", "React 18"],
    icon: Building2,
    github: "https://github.com/sainaveen25",
    featured: true,
  },
  {
    title: "E-Commerce Full Stack Application",
    description:
      "Scalable e-commerce platform with product catalog, order management, payment processing, and real-time inventory tracking — built with microservices architecture, Redis caching, and React 18 frontend with Redux state management.",
    tech: ["Java 11", "Spring Boot", "React 18", "Redux Toolkit", "PostgreSQL", "Redis", "REST APIs", "Docker", "AWS"],
    icon: ShoppingCart,
    github: "https://github.com/sainaveen25",
    featured: true,
  },
  {
    title: "CRM Modernization Suite",
    description:
      "Led monolith-to-microservices transformation of enterprise CRM supporting 50K daily active users. Delivered 20+ RESTful APIs, reactive Angular dashboards with 35% faster load times, and 99.99% system availability on AWS.",
    tech: ["Java 11", "Spring Boot", "Angular 8", "RxJS", "PostgreSQL", "Kafka", "AWS ECS", "Jenkins"],
    icon: Users,
    featured: false,
  },
  {
    title: "CI/CD & Deployment Automation",
    description:
      "End-to-end CI/CD pipelines with Jenkins, GitHub Actions, Docker containerization, and Kubernetes orchestration — achieving 45% fewer production failures and 30% faster release cycles through infrastructure-as-code.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "SonarQube", "AWS CloudFormation"],
    icon: Rocket,
    featured: false,
  },
  {
    title: "Real-Time Data Pipeline",
    description:
      "High-volume event streaming pipeline using Apache Kafka for real-time transaction processing, notification delivery, and data synchronization across distributed banking systems with ELK Stack monitoring.",
    tech: ["Apache Kafka", "Spring Cloud", "AWS Lambda", "ELK Stack", "Prometheus", "Grafana"],
    icon: Database,
    featured: false,
  },
  {
    title: "Task Management App",
    description:
      "Full-stack task management application with role-based access control (RBAC), JWT authentication, responsive Angular UI, and NestJS backend with TypeORM for team collaboration.",
    tech: ["NestJS", "Angular", "TypeORM", "JWT", "RBAC", "TypeScript"],
    icon: CheckSquare,
    github: "https://github.com/sainaveen25/Full-stack-Task-management-application",
    featured: false,
  },
  {
    title: "Electric Vehicles Website",
    description:
      "Interactive web application showcasing electric vehicle data with clean UI, responsive layouts, and dynamic content rendering for an engaging user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    icon: Zap,
    github: "https://github.com/sainaveen25/-Electric-Vehicles-website",
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard
                as="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card group cursor-pointer block h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <project.icon className="text-primary" size={16} />
                      </div>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-lg">Featured</span>
                    </div>
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
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <TiltCard className="bento-card group flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="text-primary" size={14} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-secondary/60 text-secondary-foreground px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] font-mono text-muted-foreground">+{project.tech.length - 4}</span>
                  )}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mt-auto"
                  >
                    <Github size={12} />
                    View on GitHub
                    <ArrowUpRight size={10} />
                  </a>
                )}
              </TiltCard>
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
