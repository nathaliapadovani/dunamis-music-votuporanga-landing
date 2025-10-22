import { Card } from "@/components/ui/card";
import { Star, Guitar, Drum, Music } from "lucide-react";
import professorVinicius from "@/assets/professor-vinicius.jpg";
import professorPedro from "@/assets/professor-pedro.jpg";

const Professores = () => {
  const professores = [
    {
      nome: "Vinícius Felipe",
      titulo: "Fundador e Professor",
      experiencia: "18 anos de experiência",
      instrumentos: ["Guitarra", "Contrabaixo", "Teclado", "Violão"],
      descricao: "Vinícius Felipe é professor de guitarra, contrabaixo, teclado e violão, além de fundador da Escola de Música Dunamis. Tocando há 18 anos, desde a primeira vez que pegou um instrumento, nunca mais soltou! A música se tornou sua paixão e missão, e hoje ele compartilha esse amor com seus alunos. Vinícius busca não apenas ensinar técnicas, mas também inspirar cada aluno a desenvolver sua musicalidade de forma prática e envolvente.",
      foto: professorVinicius,
      especialidade: "Múltiplos Instrumentos",
      destaque: "Fundador"
    },
    {
      nome: "Pedro Abrante",
      titulo: "Professor de Viola Caipira",
      experiencia: "9+ anos de experiência",
      instrumentos: ["Viola Caipira", "Violão"],
      descricao: "Pedro Abrante é violeiro e professor de viola caipira, com mais de 9 anos de experiência. Apaixonado pelo instrumento, busca constantemente novas formas de ensino, tornando a aprendizagem mais acessível e cativante. Seu objetivo é levar a sonoridade da viola cada vez mais longe, preservando e inovando essa tradição.",
      foto: professorPedro,
      especialidade: "Viola Caipira",
      destaque: "Especialista"
    },
  ];

  return (
    <section id="professores" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos{" "}
            <span className="text-primary">Professores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais que vão te guiar na sua jornada musical
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {professores.map((professor, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              {/* Foto do Professor */}
              <div className="relative overflow-hidden">
                <img 
                  src={professor.foto} 
                  alt={professor.nome}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={720}
                  height={384}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {professor.destaque}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">{professor.nome}</h3>
                  <p className="text-primary-glow">{professor.titulo}</p>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 space-y-4">
                {/* Experiência */}
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{professor.experiencia}</span>
                </div>

                {/* Instrumentos */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Music className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Especialidade:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {professor.instrumentos.map((instrumento, idx) => (
                      <span 
                        key={idx}
                        className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {instrumento}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {professor.descricao}
                </p>

                {/* Badge Especialidade */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Especialidade</span>
                    <span className="text-sm font-semibold text-primary">{professor.especialidade}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mais professores */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-card border-primary/30 p-6 max-w-2xl mx-auto">
            <Star className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              E muito mais professores especializados em diversos instrumentos!
            </h3>
            <p className="text-muted-foreground">
              Nossa equipe está pronta para te ajudar a alcançar seus objetivos musicais.
            </p>
          </Card>
        </div>

        {/* Seção de destaque */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Mais de 17 Anos de Experiência
              </h3>
              <Star className="h-6 w-6 text-primary" />
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Nossos professores têm vivência musical sólida e atuação em igrejas, bandas e palcos. 
              Eles não apenas ensinam técnicas, mas inspiram e orientam cada aluno em sua jornada musical única.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Guitar className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Experiência Real</h4>
                <p className="text-sm text-muted-foreground">Palcos, igrejas e estúdios</p>
              </div>
              <div className="space-y-2">
                <Drum className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Paixão Genuína</h4>
                <p className="text-sm text-muted-foreground">Amor pela música e ensino</p>
              </div>
              <div className="space-y-2">
                <Music className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Método Personalizado</h4>
                <p className="text-sm text-muted-foreground">Cada aluno é único</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professores;