import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript"],
    color: "text-accent"
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "React.js", "Bootstrap"],
    color: "text-foreground"
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau"],
    color: "text-accent"
  },
  {
    title: "Database",
    skills: ["MySQL", "SQLite", "PostgreSQL"],
    color: "text-foreground"
  },
  {
    title: "Tools & Technologies",
    skills: ["VS Code", "Git", "GitHub", "Excel"],
    color: "text-accent"
  }
];

const softSkills = [
  "Communication",
  "Team Collaboration", 
  "Problem Solving",
  "Adaptability",
  "Time Management"
];

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skills with staggered delays
            skillCategories.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="portfolio-section bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-glow">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing solutions
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card-3d transform transition-all duration-700 ${
                visibleSkills.includes(categoryIndex) 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-10 rotate-12'
              }`}
              style={{ 
                transitionDelay: `${categoryIndex * 100}ms`,
                transformStyle: 'preserve-3d'
              }}
            >
              <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className={`neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 ${
                      visibleSkills.includes(categoryIndex) ? 'animate-fade-in-scale' : ''
                    }`}
                    style={{ 
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold font-poppins mb-8 neon-text">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {softSkills.map((skill, index) => (
              <div
                key={skill}
                className={`floating-animation px-6 py-3 bg-card border border-border rounded-full transition-all duration-500 hover:neon-border hover:scale-110 ${
                  visibleSkills.length > 0 ? 'animate-fade-in-scale' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${800 + (index * 100)}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <span className="font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-animation absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full opacity-30"></div>
          <div className="floating-animation absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full opacity-20" style={{ animationDelay: '3s' }}></div>
          <div className="floating-animation absolute top-1/2 right-1/3 w-1 h-1 bg-accent rounded-full opacity-40" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;