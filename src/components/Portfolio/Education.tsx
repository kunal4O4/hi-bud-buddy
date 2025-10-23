import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Education
          </h2>
          
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-foreground mb-2">
                    Bachelor of Computer Applications
                  </CardTitle>
                  <p className="text-lg text-primary font-semibold mb-2">
                    Chaudhary Charan Singh University, Meerut
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2023 - Present</span>
                  </div>
                </div>
                <Badge variant="outline" className="border-success text-success">
                  In Progress
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a comprehensive degree program focusing on computer 
                applications, software development, and modern technologies. Building 
                a strong foundation in programming, data structures, algorithms, and 
                software engineering principles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;