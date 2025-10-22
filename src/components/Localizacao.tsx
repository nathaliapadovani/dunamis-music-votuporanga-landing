import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Localizacao = () => {
  const endereco = "Rua Alagoas, 3795 - Patrimônio Velho - Votuporanga - SP, Brasil 15502-240";
  
  const abrirMaps = () => {
    window.open('https://www.google.com/maps/place/R.+Alagoas,+3795+-+Patrimonio+Velho,+Votuporanga+-+SP,+15502-240/@-20.4202905,-49.9708811,17z/data=!3m1!4b1!4m6!3m5!1s0x94bd5924713f2901:0x3c6ad6e66e1a0355!8m2!3d-20.4202905!4d-49.9708811!16s%2Fg%2F11c4tz21mw', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa{" "}
            <span className="text-primary">Localização</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos em Votuporanga-SP, no coração do interior paulista, prontos para receber você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mapa */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
              <div className="relative h-80 bg-muted/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.5891234567!2d-49.9708811!3d-20.4202905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bd5924713f2901%3A0x3c6ad6e66e1a0355!2sR.%20Alagoas%2C%203795%20-%20Patrimonio%20Velho%2C%20Votuporanga%20-%20SP%2C%2015502-240!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  className="rounded-lg border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Escola de Música Dunamis"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-lg"
                     onClick={abrirMaps}>
                  <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
                    <Navigation className="h-4 w-4" />
                    <span>Ver no Google Maps</span>
                  </div>
                </div>
              </div>
            </Card>

            <Button 
              variant="outline" 
              size="lg"
              onClick={abrirMaps}
              className="w-full hover:border-primary hover:text-primary"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Abrir no Google Maps
            </Button>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            {/* Endereço */}
            <Card className="bg-gradient-card border-border/50 p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Endereço</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {endereco}
                  </p>
                </div>
              </div>
            </Card>

            {/* Horário */}
            <Card className="bg-gradient-card border-border/50 p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Horário de Funcionamento</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 12h</p>
                  </div>
                  <p className="text-sm text-primary font-medium">Aulas agendadas conforme disponibilidade</p>
                </div>
              </div>
            </Card>

            {/* Contato */}
            <Card className="bg-gradient-card border-border/50 p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Contato</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="font-medium">WhatsApp:</span> (17) 99719-3056
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Instagram:</span> @dunamis.me
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Facebook:</span> /dunamis.me
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Venha nos conhecer
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa porta está sempre aberta para receber novos talentos. 
              Agende sua visita e conheça nossa estrutura.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => {
                const element = document.getElementById("agendamento");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Agendar Visita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;