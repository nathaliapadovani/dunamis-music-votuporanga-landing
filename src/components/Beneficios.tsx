import { Card } from "@/components/ui/card";
import { Heart, User, Star, Clock, Shield, Sparkles } from "lucide-react";

const Beneficios = () => {
  const beneficios = [
    {
      icon: Heart,
      title: "Ambiente Acolhedor",
      description: "Na Dunamis, você se sente em casa. Aqui, todos são bem-vindos e respeitados no seu processo de aprendizado.",
      color: "text-red-400"
    },
    {
      icon: User,
      title: "Ensino Personalizado",
      description: "Nada de aulas genéricas. Cada aluno recebe atenção individual e trilha um caminho feito sob medida.",
      color: "text-blue-400"
    },
    {
      icon: Star,
      title: "Professores Experientes",
      description: "Mais de 17 anos de vivência musical e atuação em igrejas, bandas e palcos.",
      color: "text-yellow-400"
    },
    {
      icon: Clock,
      title: "Aulas Mais Longas",
      description: "Mais tempo de prática, mais progresso. Nossas aulas têm duração ideal para você realmente aprender.",
      color: "text-green-400"
    },
    {
      icon: Shield,
      title: "Aula Experimental Gratuita",
      description: "Conheça nossa metodologia sem compromisso. Primeira aula totalmente gratuita!",
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Para Todas as Idades",
      description: "Crianças, adultos e idosos. Aprender música estimula memória, criatividade, melhora coordenação motora, fortalece funções cerebrais, promove alegria, bem-estar e ainda facilita socialização e amizades.",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a{" "}
            <span className="text-primary">Dunamis?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais que uma escola de música, somos uma família que acredita no poder transformador da música
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer p-6"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors ${beneficio.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {beneficio.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para começar sua jornada musical?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende sua aula experimental gratuita e descubra o que a música pode fazer por você!
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("agendamento");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary-glow text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Agendar Aula Experimental
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;