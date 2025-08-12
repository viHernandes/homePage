import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Database, Brain, Code, Settings, BarChart3, Cloud } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    
    {
      icon: Database,
      title: "Análise de Dados",
      skills: [
        { name: "SQL", level: 95 },
        { name: "Python", level: 95 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 }
      ]
    },
    
    {
      icon: Code,
      title: "Desenvolvimento",
      skills: [
        { name: "Python", level: 95 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "SQL", level: 95 }
      ]
    },
    {
      icon: BarChart3,
      title: "Visualização",
      skills: [
        { name: "Power BI", level: 100 },
        { name: "DAX", level: 80 },
        { name: "Linguagem M", level: 85 },
        { name: "Tableau", level: 60 }
      ]
    },
    {
      icon: Settings,
      title: "DevOps & Infraestrutura",
      skills: [
        { name: "VMs", level: 85 },
        { name: "CI/CD", level: 90 },
        { name: "Git", level: 95 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Big Data",
      skills: [
        { name: "Azure", level: 90 },
        { name: "Spark", level: 75 }
      ]
    },
    {
      icon: Code,
      title: "Gestão & Metodologias",
      skills: [
        { name: "Jira Scrum Project", level: 95 },
        { name: "Scrum/Agile", level: 90 },
        { name: "Jira Service", level: 85 },
        { name: "Lean Six Sigma", level: 80 }
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning & IA",
      skills: [
        { name: "Python", level: 95 },
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 }
      ]
    }
  ];

  const certifications = [
    "Microsoft Azure AI Fundamentals",
    "Desenvolvimento WEB - CoderHouse",
    "Anhembi Honors",
    "Pós Graduação - Gestão de Projetos em Inovação e Sustentabilidade - CEFSA",
    "Data Science - USP",
    "Engenharia de Produção - UAM",
    "Eletrônica - ETEC"
  ];

  return (
    <Section id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
              Competências
            </Badge>
            <h2 className="mb-6">Stack Tecnológico & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Domínio em tecnologias modernas para entregar soluções completas 
              de transformação digital, desde análise de dados até implementação em produção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <category.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2" 
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">
                Cursos, Certificações & Especializações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="p-3 justify-center text-center border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>


          
        </div>
      </div>
    </Section>
  );
}