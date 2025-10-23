import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          
          <Card className="shadow-glow bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 text-white/90">
                  <Mail className="w-5 h-5" />
                  <span className="text-lg">kunalgoswami.2806@gmail.com</span>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="hover:bg-white hover:text-primary transition-colors"
                  asChild
                >
                  <a 
                    href="mailto:kunalgoswami.2806@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;