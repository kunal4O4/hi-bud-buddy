import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Work Experience
          </h2>
          
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-foreground mb-2">
                    Full Stack Developer Intern
                  </CardTitle>
                  <p className="text-lg text-primary font-semibold mb-2">
                    Mangosorange Group
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>July 2025 - Present</span>
                  </div>
                </div>
                <Badge variant="outline" className="border-success text-success">
                  Current
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Contributed to several projects including the company's live website. 
                Gained hands-on experience with full-stack development, working on both 
                frontend user interfaces and backend functionality to deliver complete 
                web solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;