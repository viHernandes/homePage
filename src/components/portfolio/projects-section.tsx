import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, TrendingUp, DollarSign, Clock, Users } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Precificação Inteligente",
      category: "Machine Learning",
      description: "Modelo preditivo para otimização de preços usando algoritmos de ML avançados.",
      context: "Empresa precisava de precificação dinâmica para aumentar competitividade no mercado",
      solution: "Implementação de ensemble de modelos (Random Forest + XGBoost) com Python e MLflow",
      impact: [
        { icon: TrendingUp, label: "Aumento de margem", value: "23%" },
        { icon: DollarSign, label: "ROI anual", value: "450%" },
        { icon: Clock, label: "Redução de tempo", value: "80%" }
      ],
      technologies: ["Python", "Scikit-learn", "MLflow", "Azure ML", "Power BI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Pipeline ETL para Big Data",
      category: "Data Engineering",
      description: "Arquitetura completa de dados para processar 10TB+ diários em tempo real.",
      context: "Volume crescente de dados exigia processamento escalável e confiável",
      solution: "Pipeline distribuído com Apache Spark, Kafka e Delta Lake no Azure",
      impact: [
        { icon: Clock, label: "Redução latência", value: "90%" },
        { icon: TrendingUp, label: "Throughput", value: "500%" },
        { icon: DollarSign, label: "Economia anual", value: "R$ 2M" }
      ],
      technologies: ["Apache Spark", "Kafka", "Azure", "Delta Lake", "Python"],
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Executivo Inteligente",
      category: "Business Intelligence",
      description: "Plataforma analítica em tempo real para tomada de decisão estratégica.",
      context: "Diretoria precisava de insights consolidados e visualizações interativas",
      solution: "Dashboard responsivo com Power BI, APIs customizadas e alertas automáticos",
      impact: [
        { icon: Users, label: "Usuários ativos", value: "150+" },
        { icon: Clock, label: "Tempo decisão", value: "-60%" },
        { icon: TrendingUp, label: "Precisão KPIs", value: "98%" }
      ],
      technologies: ["Power BI", "REST API", "SQL Server", "Azure Functions"],
      github: "#",
      demo: "#"
    },
    {
      title: "Automação RPA Corporativa",
      category: "Process Automation",
      description: "Bots inteligentes para automatizar processos repetitivos e reduzir erros.",
      context: "Processos manuais consumiam 40+ horas semanais da equipe comercial",
      solution: "Implementação de RPA com Python e Power Automate para mais de 100 clientes/fornecedores",
      impact: [
        { icon: Clock, label: "Horas economizadas", value: "600/mês" },
        { icon: TrendingUp, label: "Redução erros", value: "95%" },
        { icon: DollarSign, label: "Economia anual", value: "R$ 800K" }
      ],
      technologies: ["Python","Selenium", "OCR", "Power Automate"],
      github: "#",
      demo: "#"
    },
    {
      title: "Plataforma DevOps Completa",
      category: "DevOps & Infrastructure",
      description: "Implementação de CI/CD e infraestrutura como código para desenvolvimento ágil.",
      context: "Deploy manual causava delays e instabilidade nos releases",
      solution: "Pipeline automatizado com GitLab CI, Docker, Kubernetes e monitoramento",
      impact: [
        { icon: Clock, label: "Deploy time", value: "-85%" },
        { icon: TrendingUp, label: "Uptime", value: "99.9%" },
        { icon: Users, label: "Dev productivity", value: "+40%" }
      ],
      technologies: ["GitLab CI", "Docker", "Kubernetes", "Terraform", "Prometheus"],
      github: "#",
      demo: "#"
    },
    {
      title: "Sistema de Gestão Ágil",
      category: "Project Management",
      description: "Customização avançada do Jira para metodologias ágeis e métricas de performance.",
      context: "Equipes precisavam de visibilidade e métricas para otimizar entregas",
      solution: "Configuração personalizada com automações, dashboards e relatórios avançados",
      impact: [
        { icon: TrendingUp, label: "Velocity", value: "+35%" },
        { icon: Clock, label: "Lead time", value: "-45%" },
        { icon: Users, label: "Team satisfaction", value: "4.8/5" }
      ],
      technologies: ["Jira", "Confluence", "Python", "REST API", "Power BI"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <Section id="projects" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
              Projetos & Cases
            </Badge>
            <h2 className="mb-6">Resultados Comprovados</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cases reais com impacto mensurável no negócio. Cada projeto combina 
              inovação técnica com resultados estratégicos concretos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2 border-primary/50">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Context & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Contexto</h5>
                      <p className="text-sm text-muted-foreground">{project.context}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-1">Solução</h5>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="bg-gradient-secondary p-4 rounded-lg">
                    <h5 className="font-semibold mb-3 text-primary">Impacto Alcançado</h5>
                    <div className="grid grid-cols-3 gap-4">
                      {project.impact.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="flex justify-center mb-1">
                            <metric.icon className="h-4 w-4 text-accent" />
                          </div>
                          <div className="text-lg font-bold text-accent">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold mb-2 text-sm">Tecnologias</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}