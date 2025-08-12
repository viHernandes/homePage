import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis",
      description: "ROI comprovado em projetos de transformação digital"
    },
    {
      icon: Users,
      title: "Liderança Técnica",
      description: "Gestão de equipes multidisciplinares em TI e Analytics"
    },
    {
      icon: Zap,
      title: "Inovação Contínua",
      description: "Implementação de soluções cutting-edge em IA e ML"
    },
    {
      icon: Target,
      title: "Foco em Negócio",
      description: "Alinhamento estratégico entre tecnologia e objetivos corporativos"
    }
  ];

  return (
    <Section id="about" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
              Sobre Mim
            </Badge>
            <h2 className="mb-6">Expertise em Transformação Digital</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Supervisor de TI com mais de 8 anos de experiência em transformação digital, 
              especializado em análise de dados, machine learning e implementação de soluções 
              DevOps. Combino visão estratégica de negócio com expertise técnica para entregar 
              resultados excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-primary w-fit">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Experiência Profissional
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Lidero iniciativas de transformação digital que resultaram em:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      Redução de 40% no tempo de processamento de dados
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      Implementação de 15+ modelos de ML em produção
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      ROI de 300% em projetos de automação
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      Gestão de equipes de até 12 profissionais
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-primary">
                    Filosofia de Trabalho
                  </h4>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "Tecnologia é o meio, não o fim. Meu foco está em entregar 
                    soluções que geram impacto real no negócio, combinando inovação 
                    técnica com resultados mensuráveis e sustentáveis."
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}