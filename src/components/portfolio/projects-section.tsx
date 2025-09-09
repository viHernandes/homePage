import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import imgPricing1 from "../../assets/images/pricing1.png";
import imgPricing2 from "../../assets/images/pricing2.png";
import videoSimulacao1 from "../../assets/images/sim_3d_csn.mp4";
import videoSimulacao2 from "../../assets/images/vm_csn.mp4";
import fornecedoresLogs from "../../assets/images/fornecedorlog.png";
import sistemaLog from "../../assets/images/sistema_log.mp4";
import sistemaCRM from "../../assets/images/CRM_VIDEO_EXEMPLO.mp4";
import sistemaForecast from "../../assets/images/forecaster.mp4";


export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Precificação Inteligente",
      category: "Machine Learning",
      description: "Modelo preditivo para otimização de preços usando algoritmos de ML avançados.",
      context: "Empresa precisava de precificação dinâmica para aumentar competitividade no mercado - Toda precificação era manual.",
      solution: "Implementação de modelos de machine learning para trazer o preço ótimo (Random Forest + Regressão Linear) com Python e MLflow (acompanhamento)",
      impact: [
        { icon: TrendingUp, label: "Aumento de margem", value: "5%" },
        { icon: DollarSign, label: "ROI anual", value:  "200%" },
        { icon: Clock, label: "Redução de tempo operacional", value: "40%" }
      ],
      technologies: ["Python", "Scikit-learn", "MLflow", "Power BI"],
      github: "#",
      demoImages: [
       { type: "image", src: imgPricing1 },
    { type: "image", src: imgPricing2 }


      ]
    },

{
      title: "CRM Inteligente - Customer Relationship Management",
      category: "Process Automation & AI",
      description: "CRM desenvolvido para otimizar a performance de vendas, monitorar clientes e fornecedores, e sugerir ações estratégicas utilizando inteligência artificial.",
      context: "O crescimento exponencial de dados e a necessidade de uma abordagem proativa com vendedores exigiam uma ferramenta capaz de priorizar ações de vendas, prever oportunidades e recomendar produtos de forma inteligente.",
      solution: "Sistema completo desenvolvido em Python com Flask, que processa diariamente os dados, utiliza modelos de machine learning para prever onde o vendedor deve atuar e gera prompts automáticos de recomendação de produtos.",
      impact: [
       { icon: TrendingUp, label: "Aumento de margem", value: "3%" },
  { icon: DollarSign, label: "ROI anual", value: "15%" },
  { icon: Clock, label: "Redução de tempo operacional", value: "20%" },
  { icon: Clock, label: "Eficiência em vendas", value: "Previsão de ações automatizada" }
      ],
      technologies: ["Python", "Flask", "Scikit-learn", "MLflow", "Power BI", "IA Generativa"],
      github: "#",
      demoImages: [
  
       {type:'video',src : sistemaCRM}


      ]
    },



    {
      title: "Sistema de Gestão de Automações",
      category: "Process Automation",
      description: "Ferramenta para monitoramento de jobs críticos que controlam fornecedores, clientes, entregas e processos internos, garantindo visibilidade e proatividade.",
      context: "O volume crescente de dados exigia um processamento escalável, confiável e capaz de alertar antecipadamente sobre possíveis falhas.",
      solution: "Ferramenta desenvolvida em Python com Flask que executa jobs diários, analisa o banco de dados e realiza os disparos necessários automaticamente",
      impact: [
        { icon: TrendingUp, label: "Aumento de margem", value: "5%" },
        { icon: DollarSign, label: "ROI anual", value: "100%" },
        { icon: Clock, label: "Redução de tempo operacional", value: "40%" }
      ],
      technologies: ["Python", "Scikit-learn", "MLflow", "Power BI"],
      github: "#",
      demoImages: [
       { type: "image", src: fornecedoresLogs },
       {type:'video',src : sistemaLog}


      ]
    },

    {
      title: "Dashboard Executivo Inteligente",
      category: "Business Intelligence",
      description: "Plataforma analítica em tempo real para tomada de decisão estratégica.",
      context: "Diretoria precisava de insights consolidados e visualizações interativas",
      solution: "Dashboard responsivo com Power BI, APIs customizadas e alertas automáticos - Botões de direcionamento de e-mails automáticos",
      impact: [
        { icon: Users, label: "Usuários ativos", value: "150+" },
        { icon: Clock, label: "Tempo decisão", value: "-60%" },
        { icon: TrendingUp, label: "Precisão KPIs", value: "98%" }
      ],
      technologies: ["Power BI", "REST API", "SQL Server", "DAX"],
      github: "#",
      demoImages: ["#"]
    },
    {
      title: "Automação RPA Corporativa",
      category: "Process Automation",
      description: "Bots inteligentes para automatizar processos repetitivos e reduzir erros.",
      context: "Processos manuais consumiam 40+ horas semanais da equipe comercial",
      solution: "Implementação de RPA com Python e Power Automate para mais de 100 clientes/fornecedores",
      impact: [
        { icon: Clock, label: "Horas economizadas", value: "600/mês" },
        { icon: TrendingUp, label: "Redução erros", value: "90%" },
        { icon: DollarSign, label: "Economia anual", value: "R$ 800K" }
      ],
      technologies: ["Python","Selenium", "OCR", "Power Automate"],
      github: "#",
       demoImages: ["#"]
    },
    {
      title: "Inteligência de Monitoramento de Consumo - Forecaster",
      category: "Customer Insights & Process Automation",
      description: "Sistema inteligente que detecta padrões de consumo e alerta a equipe comercial para ações proativas.",
      context: "Clientes apresentavam variações de consumo sem visibilidade antecipada, impactando o faturamento e a retenção.",
      solution: "Desenvolvimento de um modelo preditivo integrado ao CRM, capaz de identificar picos e quedas de consumo e enviar alertas automáticos aos vendedores.",
      impact: [
        { icon: Clock, label: "Alertas proativos", value: "100% dos clientes monitorados - CNPJS" },
        { icon: TrendingUp, label: "Aumento de retenção", value: "+8%" }
      ],
      technologies: ["Python", "Machine Learning", "Flask","Pandas"],
      github: "#",
      demoImages: [
          {
            type: 'media', src : sistemaForecast

          }


      ]
    },
    {
      title: "Estudos de Operações e Hora-Homem de Utilização",
      category: "Process Automation",
      description: "Análise de processos repetitivos utilizando dados estatísticos para identificar a forma mais eficiente de execução e otimizar recursos.",
      context: "Processos repetitivos e dados estatísticos que dizem qual é a melhor forma de atuar em um processo.",
      solution: "Implementação de uma loja in-company com foco em reduzir atrasos e aumentar a eficiência operacional. O estudo foi realizado utilizando uma ferramenta de simulação 3D combinada com análises estatísticas, considerando dados de chegada, filas e tempos de operação.",
      impact: [
        { icon: Clock, label: "Horas economizadas", value: "600/mês" },
        { icon: TrendingUp, label: "Redução erros", value: "90%" },
        { icon: DollarSign, label: "Economia anual", value: "R$ 800K" }
      ],
      technologies: ["Python","Selenium", "OCR", "Power Automate"],
      github: "#",
       demoImages: [
      { type: "video", src: videoSimulacao1 },
      { type: "video", src: videoSimulacao2 }


       ]
    },

    {
      title: "Sistema de Gestão Ágil com DevOps",
      category: "Project Management",
      description: "Customização avançada do Jira para metodologias ágeis e métricas de performance.",
      context: "Equipes precisavam de visibilidade e métricas para otimizar entregas",
      solution: "Configuração personalizada com automações, dashboards e relatórios avançados - Conexões com APIs do Jira",
      impact: [
        { icon: TrendingUp, label: "Velocidade", value: "+50%" },
        { icon: Clock, label: "Lead time", value: "-45%" },
        { icon: Users, label: "Satisfação de Equipe", value: "4.8/5" }
      ],
      technologies: ["Jira",  "Python", "REST API", "Power BI"],
      github: "#",
     demoImages: ["#"]
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
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-up overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
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
                  {/* Contexto e Solução */}
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

                  {/* Impacto */}
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

                  {/* Tecnologias */}
                  <div>
                    <h5 className="font-semibold mb-2 text-sm">Tecnologias</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10">
                      <Github className="mr-2 h-4 w-4" /> Código
                    </Button>

                    {/* Botão Demo com Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="flex-1 bg-gradient-primary hover:shadow-glow">
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {project.demoImages.map((item, i) => (
  item.type === "image" ? (
    <img
      key={i}
      src={item.src}
      alt={`Demo ${i + 1}`}
      className="rounded-lg shadow w-full"
    />
  ) : (
    <video
      key={i}
      src={item.src}
      controls
      className="rounded-lg shadow w-full"
    />
  )
))}
                        </div>
                      </DialogContent>
                    </Dialog>
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
