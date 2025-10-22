import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Send, Star, Clock } from "lucide-react";

const Agendamento = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    idade: "",
    instrumento: "",
    mensagem: ""
  });

  const instrumentos = [
    "Violão",
    "Guitarra", 
    "Ukulele",
    "Contrabaixo",
    "Viola Caipira",
    "Técnica Vocal",
    "Bateria",
    "Teclado"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.whatsapp || !formData.idade || !formData.instrumento) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const mensagem = `
🎵 *AGENDAMENTO AULA EXPERIMENTAL GRATUITA* 🎵

*Nome:* ${formData.nome}
*Idade:* ${formData.idade} anos
*Instrumento de interesse:* ${formData.instrumento}
${formData.mensagem ? `*Mensagem:* ${formData.mensagem}` : ''}

Gostaria de agendar minha aula experimental gratuita! 🎸
    `.trim();

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5517997193056&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp para finalizar o agendamento!"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="agendamento" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Agende sua{" "}
            <span className="text-primary">Aula Experimental</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            100% Gratuita • Sem Compromisso • Vagas Limitadas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <Card className="bg-gradient-card border-border/50 p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Garanta seu horário!
              </h3>
              <p className="text-muted-foreground">
                Preencha os dados abaixo e entraremos em contato via WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground font-medium">
                  Nome Completo <span className="text-primary">*</span>
                </Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  required
                  className="bg-input border-border/50 focus:border-primary"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground font-medium">
                  WhatsApp <span className="text-primary">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(17) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                  required
                  className="bg-input border-border/50 focus:border-primary"
                />
              </div>

              {/* Idade */}
              <div className="space-y-2">
                <Label htmlFor="idade" className="text-foreground font-medium">
                  Idade <span className="text-primary">*</span>
                </Label>
                <Input
                  id="idade"
                  type="number"
                  placeholder="Sua idade"
                  value={formData.idade}
                  onChange={(e) => handleInputChange("idade", e.target.value)}
                  required
                  min="4"
                  max="99"
                  className="bg-input border-border/50 focus:border-primary"
                />
              </div>

              {/* Instrumento */}
              <div className="space-y-2">
                <Label htmlFor="instrumento" className="text-foreground font-medium">
                  Instrumento de Interesse <span className="text-primary">*</span>
                </Label>
                <Select value={formData.instrumento} onValueChange={(value) => handleInputChange("instrumento", value)}>
                  <SelectTrigger className="bg-input border-border/50 focus:border-primary">
                    <SelectValue placeholder="Escolha seu instrumento" />
                  </SelectTrigger>
                  <SelectContent>
                    {instrumentos.map((instrumento) => (
                      <SelectItem key={instrumento} value={instrumento}>
                        {instrumento}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-foreground font-medium">
                  Mensagem (Opcional)
                </Label>
                <Textarea
                  id="mensagem"
                  placeholder="Conte-nos mais sobre seus objetivos musicais..."
                  value={formData.mensagem}
                  onChange={(e) => handleInputChange("mensagem", e.target.value)}
                  rows={4}
                  className="bg-input border-border/50 focus:border-primary"
                />
              </div>

              {/* Botão Submit */}
              <Button 
                type="submit" 
                variant="cta" 
                size="lg"
                aria-label="Agendar Aula Experimental Gratuita"
                className="w-full px-6 py-3 flex items-center justify-center gap-2 max-[400px]:px-3 max-[400px]:h-10 max-[400px]:text-sm max-[400px]:gap-1 max-[400px]:whitespace-normal"
              >
                <Send className="h-5 w-5 mr-2 max-[400px]:h-4 max-[400px]:w-4 max-[400px]:mr-1" aria-hidden="true" />
                <span className="inline-block max-[400px]:hidden">Agendar Aula Experimental Gratuita</span>
                <span className="hidden max-[400px]:inline-block">Agendar Aula</span>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você será redirecionado para o WhatsApp para finalizar o agendamento
              </p>
            </form>
          </Card>

          {/* Informações e Benefícios */}
          <div className="space-y-6">
            {/* Por que agendar */}
            <Card className="bg-gradient-card border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Star className="h-5 w-5 text-primary mr-2" aria-hidden="true" />
                Por que agendar sua aula experimental?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conheça nossa metodologia personalizada</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experimente o instrumento sem compromisso</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Converse com nossos professores experientes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conheça nossa estrutura e ambiente acolhedor</span>
                </li>
              </ul>
            </Card>

            {/* Elementos de Confiança */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-border/50 p-4 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" aria-hidden="true" />
                <div className="text-lg font-bold text-foreground">17+</div>
                <div className="text-xs text-muted-foreground">Anos de Experiência</div>
              </Card>
              <Card className="bg-gradient-card border-border/50 p-4 text-center">
                <Star className="h-6 w-6 text-primary mx-auto mb-2" aria-hidden="true" />
                <div className="text-lg font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Aula Gratuita</div>
              </Card>
            </div>

            {/* Selos de Confiança */}
            <Card className="bg-gradient-accent border-primary/30 p-6">
              <h3 className="text-lg font-bold text-white mb-3 text-center">
                Garantias da Dunamis
              </h3>
              <div className="space-y-2 text-white/90 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>✓ Aula Experimental 100% Gratuita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>✓ Professores com Mais de 17 Anos de Experiência</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>✓ Método Personalizado para Cada Aluno</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>✓ Ambiente Acolhedor e Familiar</span>
                </div>
              </div>
            </Card>

            {/* Contato Direto */}
            <Card className="bg-gradient-card border-border/50 p-6 text-center">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Prefere ligar diretamente?
              </h3>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=5517997193056&text&type=phone_number&app_absent=0", "_blank")}
                className="w-full hover:border-primary hover:text-primary"
              >
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                (17) 99719-3056
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agendamento;