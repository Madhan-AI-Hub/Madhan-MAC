import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Health Portal",
    subtitle: "Employee Health Management System",
    description:
      "A comprehensive health management system with role-based access control, REST APIs, and interactive dashboards for employee health tracking and management.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    features: [
      "Role-based access control",
      "REST API architecture",
      "Interactive dashboards",
      "Employee health tracking",
    ],
    demoLink: "https://ehms-portal.onrender.com/",
    githubLink: "https://github.com/karthi-AI-hub/EHMS",
    gradient: "from-accent/20 to-transparent",
  },
  {
    title: "Vishnu Oil Mills",
    subtitle: "E-Commerce Website",
    description:
      "Modern e-commerce platform with comprehensive product catalog, admin panel, order tracking system, and seamless user experience deployed on Vercel.",
    tech: ["React.js (Vite)", "Node.js", "Supabase", "Vercel"],
    features: [
      "Product catalog management",
      "Admin control panel",
      "Order tracking system",
      "Responsive design",
    ],
    demoLink: "https://vishnu-organic-oils.vercel.app/",
    githubLink: "https://github.com/Madhan-AI-Hub/Vishnu_Organic_Oils",
    gradient: "from-foreground/10 to-transparent",
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate projects with rolling effect
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, index]);
              }, index * 400);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="portfolio-section relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for building innovative web solutions
          </p>
        </div>

        {/* 3D Rolling Card Stack */}
        <div className="relative perspective-1000">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center min-h-[600px]">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`relative w-full max-w-lg transform transition-all duration-1000 ${
                  visibleProjects.includes(index)
                    ? "opacity-100 translate-x-0 rotate-y-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-full rotate-y-90"
                    : "opacity-0 translate-x-full rotate-y-90"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transitionDelay: `${index * 200}ms`,
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`card-3d h-full bg-gradient-to-br ${
                    project.gradient
                  } border-2 transition-all duration-500 ${
                    hoveredProject === index
                      ? "neon-border scale-105 rotate-y-5 rotate-x-3"
                      : "border-border"
                  }`}
                >
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-poppins mb-2 neon-text">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Description */}
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 neon-text">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 neon-text">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="neon-border text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-sm font-medium border rounded-md py-2 px-4 neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-center flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-sm font-medium border rounded-md py-2 px-4 neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-center flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>

                {/* 3D Shadow Effect */}
                <div
                  className={`absolute inset-0 bg-accent/5 rounded-xl -z-10 transition-all duration-500 ${
                    hoveredProject === index
                      ? "translate-x-2 translate-y-2 opacity-50"
                      : "translate-x-1 translate-y-1 opacity-20"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="floating-animation absolute top-1/4 left-10 text-accent font-mono text-xs">
            &lt;/&gt;
          </div>
          <div
            className="floating-animation absolute bottom-1/4 right-10 text-accent font-mono text-xs"
            style={{ animationDelay: "2s" }}
          >
            {}
          </div>
          <div
            className="floating-animation absolute top-1/2 left-1/4 text-accent font-mono text-xs"
            style={{ animationDelay: "4s" }}
          >
            [ ]
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
