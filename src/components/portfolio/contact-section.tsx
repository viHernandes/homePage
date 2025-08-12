import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Send,
  Calendar
} from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@exemplo.com",
      link: "mailto:contato@exemplo.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      link: "#"
    },
    {
      icon: Calendar,
      label: "Disponibilidade",
      value: "Aberto a novas oportunidades",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/exemplo",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/exemplo",
      color: "hover:text-gray-300"
    },
    {
      icon: Mail,
      label: "E-mail",
      url: "mailto:contato@exemplo.com",
      color: "hover:text-green-500"
    }
  ];

  return (
    <Section id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
              Contato
            </Badge>
            <h2 className="mb-6">Vamos Conversar?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estou sempre aberto a discutir novos projetos, oportunidades de colaboração 
              ou apenas trocar ideias sobre tecnologia e inovação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border/50">
                  <h4 className="text-lg font-semibold mb-4 text-primary">
                    Redes Sociais
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`border-primary/50 hover:border-primary ${social.color} transition-all duration-300`}
                      >
                        <social.icon className="h-5 w-5" />
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                    onClick={() => window.open('/cv-completo.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV Completo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome</label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-mail</label>
                      <Input 
                        type="email"
                        placeholder="seu@email.com"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assunto</label>
                    <Input 
                      placeholder="Sobre o que gostaria de conversar?"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem</label>
                    <Textarea 
                      placeholder="Descreva seu projeto, ideia ou oportunidade..."
                      rows={6}
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="border-border/50 bg-gradient-hero backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Pronto para Transformar Dados em Resultados?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Vamos explorar como posso ajudar sua empresa a alcançar seus objetivos 
                  através de soluções inovadoras em dados, IA e transformação digital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Reunião
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Conectar no LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}