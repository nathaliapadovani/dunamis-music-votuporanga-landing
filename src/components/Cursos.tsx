import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Guitar, 
  Piano, 
  Drum, 
  Mic,
  Music,
  Zap
} from "lucide-react";

const Cursos = () => {
  const cursos = [
    {
      icon: Guitar,
      title: "Violão",
      description: "Do básico ao avançado, aprenda acordes, ritmos e suas músicas favoritas",
      destaque: "Mais Popular",
      color: "text-orange-400"
    },
    {
      icon: Zap,
      title: "Guitarra",
      description: "Domine solos, riffs e técnicas de guitarra rock, pop e worship",
      destaque: "",
      color: "text-red-400"
    },
    {
      icon: Guitar,
      title: "Ukulele",
      description: "Instrumento divertido e fácil de aprender, ideal para começar na música",
      destaque: "",
      color: "text-green-400"
    },
    {
      icon: Guitar,
      title: "Contrabaixo",
      description: "A base da música! Aprenda a dar groove e sustentação às músicas",
      destaque: "",
      color: "text-purple-400"
    },
    {
      icon: Guitar,
      title: "Viola Caipira",
      description: "Tradição brasileira com o Professor Pedro, especialista há mais de 9 anos",
      destaque: "Especialista",
      color: "text-yellow-400"
    },
    {
      icon: Mic,
      title: "Técnica Vocal",
      description: "Desenvolva sua voz, respiração e interpretação com técnicas profissionais",
      destaque: "",
      color: "text-pink-400"
    },
    {
      icon: Drum,
      title: "Bateria",
      description: "Ritmo na veia! Aprenda com quem toca desde os 4 anos de idade",
      destaque: "Experiência Única",
      color: "text-blue-400"
    },
    {
      icon: Piano,
      title: "Teclado",
      description: "Piano e teclado, dos clássicos aos modernos estilos musicais",
      destaque: "",
      color: "text-indigo-400"
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos{" "}
            <span className="text-primary">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha seu instrumento e comece a transformar sua vida através da música
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cursos.map((curso, index) => {
            const IconComponent = curso.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer relative overflow-hidden"
              >
                {/* Badge de destaque */}
                {curso.destaque && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {curso.destaque}
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div className={`p-3 rounded-lg bg-muted/50 group-hover:bg-primary/20 transition-colors w-fit ${curso.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {curso.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {curso.description}
                  </p>

                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-primary group-hover:text-primary"
                    onClick={() => {
                      const element = document.getElementById("agendamento");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Music className="h-4 w-4 mr-2" />
                    Experimentar
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Informações adicionais */}
        <div className="text-center mt-16 space-y-8">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Metodologia Personalizada
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">1º</div>
                <h4 className="font-semibold text-foreground">Aula Experimental</h4>
                <p className="text-sm text-muted-foreground">Conhecemos você e seus objetivos</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2º</div>
                <h4 className="font-semibold text-foreground">Plano Personalizado</h4>
                <p className="text-sm text-muted-foreground">Criamos um método único para você</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3º</div>
                <h4 className="font-semibold text-foreground">Acompanhamento</h4>
                <p className="text-sm text-muted-foreground">Evoluímos juntos no seu ritmo</p>
              </div>
            </div>
          </div>

          <Button 
            variant="cta" 
            size="xl"
            onClick={() => {
              const element = document.getElementById("agendamento");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Escolher Meu Instrumento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cursos;