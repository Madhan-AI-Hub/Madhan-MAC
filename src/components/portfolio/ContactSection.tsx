import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon!",
      duration: 5000,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="portfolio-section relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-glow">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-poppins mb-8 neon-text">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="card-3d flex items-center space-x-4 hover:neon-border transition-all duration-300">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">8220939050</p>
                </div>
              </div>

              <div className="card-3d flex items-center space-x-4 hover:neon-border transition-all duration-300">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">
                    madhanac0711@gmail.com
                  </p>
                </div>
              </div>

              <div className="card-3d flex items-center space-x-4 hover:neon-border transition-all duration-300">
                <div className="p-3 bg-accent/20 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">
                    Bhavani, Erode, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold mb-6 neon-text">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Madhan-AI-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                  >
                    <span className="flex items-center">
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      GitHub
                    </span>
                  </Button>
                </a>

                <a
                  href="https://linkedin.com/in/madhan-ac-15511628b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                  >
                    <span className="flex items-center">
                      <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      LinkedIn
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-3d">
            <h3 className="text-2xl font-bold font-poppins mb-6 neon-text">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="neon-border focus:ring-accent focus:border-accent transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="neon-border focus:ring-accent focus:border-accent transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="neon-border focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full neon-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="floating-animation absolute top-20 left-10 w-3 h-3 bg-accent rounded-full"></div>
          <div
            className="floating-animation absolute bottom-20 right-20 w-4 h-4 bg-accent rounded-full"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="floating-animation absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
