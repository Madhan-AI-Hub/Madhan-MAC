import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Eye,
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="portfolio-section hero-gradient relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-animation absolute top-20 left-10 w-4 h-4 bg-accent rounded-full"></div>
        <div
          className="floating-animation absolute top-40 right-20 w-6 h-6 bg-accent rounded-full"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="floating-animation absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="floating-animation absolute bottom-20 right-10 w-5 h-5 bg-accent rounded-full"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-6 text-glow">
            MADHAN A C
          </h1>

          <div className="mb-8">
            <p className="text-2xl md:text-3xl neon-text font-semibold mb-4">
              B.Tech (AI & DS) | Aspiring Data Analyst & Web Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              An enthusiastic B.Tech student with a strong interest in data
              analytics and web development. Eager to apply my skills in Python,
              SQL, and web technologies to solve real-world problems and grow in
              a collaborative tech environment.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <a
              href="tel:8220939050"
              className="card-3d text-center p-4 transition-transform hover:scale-105"
            >
              <Phone className="w-6 h-6 mx-auto mb-2 text-accent" />
              <p className="text-sm font-medium">8220939050</p>
            </a>
            <a
              href="mailto:madhanac0711@gmail.com"
              className="card-3d text-center p-4 transition-transform hover:scale-105"
            >
              <Mail className="w-6 h-6 mx-auto mb-2 text-accent" />
              <p className="text-sm font-medium">madhanac0711@gmail.com</p>
            </a>
            <a
              href="https://github.com/Madhan-AI-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d text-center p-4 transition-transform hover:scale-105"
            >
              <Github className="w-6 h-6 mx-auto mb-2 text-accent" />
              <p className="text-sm font-medium">Madhan-AI-Hub</p>
            </a>
            <a
              href="https://www.google.com/maps?q=Erode,Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d text-center p-4 block hover:cursor-pointer"
            >
              <MapPin className="w-6 h-6 mx-auto mb-2 text-accent" />
              <p className="text-sm font-medium">Bhavani, Erode, TN</p>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              className="neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => handleScrollTo("projects")}
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <a
              href="https://www.linkedin.com/in/madhan-ac-15511628b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </a>
            <a
              href="/Madhan_MAC_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className="animate-bounce cursor-pointer"
            onClick={() => handleScrollTo("skills")}
          >
            <ArrowDown className="w-8 h-8 mx-auto text-accent" />
            <p className="text-sm mt-2 neon-text">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
