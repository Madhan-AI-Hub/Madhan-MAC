import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "Data Pattern",
    location: "CBE",
    role: "AI Model Builder Intern",
    duration: "Mar 2025 – Present",
    type: "Current",
    description: "Working on AI model development with focus on data scraping and model training support.",
    skills: ["AI/ML", "Data Scraping", "Model Training", "Python"],
    bgColor: "bg-accent/10"
  },
  {
    company: "Ether Infotech", 
    location: "CBE",
    role: "Android Developer Intern",
    duration: "Jan 2025",
    type: "Completed",
    description: "Developed Android applications with Firebase authentication, Firestore database integration, and Java module debugging.",
    skills: ["Android", "Firebase", "Firestore", "Java"],
    bgColor: "bg-foreground/5"
  },
  {
    company: "Crescent Infotech",
    location: "Erode", 
    role: "Python for Data Science",
    duration: "Jun 2024",
    type: "Completed",
    description: "Built comprehensive ML pipelines using data science libraries and visualization tools.",
    skills: ["Python", "Matplotlib", "NumPy", "Pandas", "ML"],
    bgColor: "bg-accent/5"
  }
];

const education = [
  {
    degree: "B.Tech – AI & DS",
    institution: "Excel Engineering College",
    duration: "2022–2026",
    grade: "CGPA: 7.6",
    type: "current"
  },
  {
    degree: "HSC",
    institution: "Adharsh Vidhyalaya",
    duration: "2021–2022", 
    grade: "74.3%",
    type: "completed"
  },
  {
    degree: "SSLC",
    institution: "Adharsh Vidhyalaya",
    duration: "2019–2020",
    grade: "81.8%", 
    type: "completed"
  }
];

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate timeline items with staggered delays
            [...experiences, ...education].forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 200);
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
    <section ref={sectionRef} className="portfolio-section bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-glow">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through internships and academic achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Internship Experience */}
          <div>
            <h3 className="text-3xl font-bold font-poppins mb-8 neon-text flex items-center">
              <Building className="w-8 h-8 mr-3" />
              Internship Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.company}
                    className={`relative transform transition-all duration-700 ${
                      visibleItems.includes(index)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                    
                    {/* Experience Card */}
                    <div className={`ml-16 card-3d ${exp.bgColor} hover:neon-border`}>
                      <div className="flex flex-wrap items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold neon-text">{exp.company}</h4>
                          <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                        </div>
                        <Badge 
                          variant={exp.type === 'Current' ? 'default' : 'outline'}
                          className={exp.type === 'Current' ? 'bg-accent text-accent-foreground' : 'neon-border'}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-foreground/90 mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold font-poppins mb-8 neon-text flex items-center">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className={`relative transform transition-all duration-700 ${
                      visibleItems.includes(experiences.length + index)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${(experiences.length + index) * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-background ${
                      edu.type === 'current' ? 'bg-accent' : 'bg-foreground/40'
                    }`}></div>
                    
                    {/* Education Card */}
                    <div className="ml-16 card-3d hover:neon-border">
                      <div className="flex flex-wrap items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold neon-text">{edu.degree}</h4>
                          <p className="text-lg font-semibold text-foreground">{edu.institution}</p>
                        </div>
                        <Badge 
                          variant={edu.type === 'current' ? 'default' : 'outline'}
                          className={edu.type === 'current' ? 'bg-accent text-accent-foreground' : 'neon-border'}
                        >
                          {edu.grade}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;