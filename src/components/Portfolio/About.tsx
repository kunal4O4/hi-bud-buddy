import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="animate-slide-in-left">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Hello, I am <span className="text-primary font-semibold">Kunal Goswami</span>, 
                  currently pursuing a Bachelor of Computer Applications. I have three months of experience 
                  as a Full Stack Web Development Intern at Mangosorange Group.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm passionate about creating modern, responsive web applications that provide 
                  excellent user experiences. My journey in web development has equipped me with 
                  skills across the full stack, from crafting intuitive frontends to building 
                  robust backend solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;