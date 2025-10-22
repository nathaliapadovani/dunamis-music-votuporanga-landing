import { Button } from "@/components/ui/button";
import { Play, Star, Users } from "lucide-react";

const Hero = () => {
  const scrollToAgendamento = () => {
    const element = document.getElementById("agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
      role="region"
      aria-label="Seção principal - Hero"
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge (hidden on extra-small / smartphones) */}
            <div className="hidden sm:inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 text-sm text-primary-glow">
              <Star className="h-4 w-4" aria-hidden="true" />
              <span>Professores com mais de 17 anos de experiência</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Descubra seu{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Talento Musical
            </span>
            <br />
            na Melhor Escola de{" "}
            <span className="text-primary">Votuporanga</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aula Experimental Gratuita - Método Personalizado para Cada Aluno
          </p>

          {/* Social Proof Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 py-6">
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm">17+ Anos Experiência</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Play className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm">8 Instrumentos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 w-full">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToAgendamento}
              className="group w-full sm:w-auto"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Quero Minha Aula Experimental!
            </Button>
            
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={() => {
                const element = document.getElementById("cursos");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto"
            >
              Conhecer os Cursos
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-gray-400">✓ Aula Experimental 100% Gratuita</p>
            <p className="text-sm text-gray-400">✓ Sem Taxa de Matrícula</p>
            <p className="text-sm text-gray-400 hidden sm:block">✓ Professores com Mais de 17 Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;