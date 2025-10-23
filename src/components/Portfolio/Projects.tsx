import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Temp-Chat",
      description: "Lightweight, privacy-first real-time chat app with no login, no storage, and messages that vanish on disconnect, powered by WebSockets.",
      technologies: ["WebSockets", "Real-time", "Privacy-focused"],
      github: "https://github.com/Kunal2806/Chat",
      color: "accent"
    },
    {
      title: "Todo App", 
      description: "Advanced task management website with secure login, seamless task control, real-time updates, and a clean, user-friendly interface.",
      technologies: ["Task Management", "Secure Login", "Real-time Updates"],
      github: "https://github.com/Kunal2806/ToDo",
      color: "primary"
    },
    {
      title: "Portfolio Website",
      description: "Personal developer portfolio with interactive project showcases, skills and background highlights, and easy contact links.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: null,
      color: "success"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="shadow-soft hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    
                    {!project.github && (
                      <Badge variant="outline" className="text-muted-foreground">
                        Private Repository
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;