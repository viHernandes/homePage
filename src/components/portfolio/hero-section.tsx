import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  return (
    <Section variant="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Perfil Profissional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Transformação Digital
              <br />
              <span className="text-foreground">com Dados & IA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
       Supervisor de TI especializado em Machine Learning, Analytics e DevOps, 
       com experiência no desenvolvimento de soluções completas, incluindo sistemas com SSO e 
       integração de múltiplas plataformas. 
       Transformo dados em insights estratégicos para impulsionar decisões e resultados de negócio.


            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick = {() => window.open('mailto:victor.hernandes.s@hotmail.com','_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open('/cv-completo.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/victorhernandes/', '_blank')}
              >
                <Linkedin className="h-6 w-6" />
                
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                                onClick={() => window.open('https://github.com/viHernandes', '_blank')}
              >
                <Github className="h-6 w-6" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                onClick = {() => window.open('mailto:victor.hernandes.s@hotmail.com','_blank')}
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </Section>
  );
}