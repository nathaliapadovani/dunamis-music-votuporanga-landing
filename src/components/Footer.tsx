import { Facebook, Instagram, Phone, MapPin, Clock, Music } from "lucide-react";
import logoDunamis from "@/assets/logo-dunamis.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dunamis-black border-t border-border/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoDunamis} 
                  alt="Dunamis Escola de Música" 
                  className="h-12 w-auto"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">DUNAMIS</h3>
                  <p className="text-primary text-sm">Escola de Música</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mais que uma escola de música, somos uma família que acredita no poder transformador da música. 
                Venha descobrir seu talento conosco!
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/dunamis.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Instagram da Dunamis"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.facebook.com/dunamis.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Facebook da Dunamis"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5517997193056&text=Olá! Gostaria de saber mais sobre as aulas de música.&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="WhatsApp da Dunamis"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Navegação</h4>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection("cursos")}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cursos
                </button>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Localização
                </button>
                <button 
                  onClick={() => scrollToSection("agendamento")}
                  className="block text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                >
                  Aula Experimental
                </button>
              </nav>
            </div>

            {/* Cursos */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Nossos Cursos</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Music className="h-3 w-3 text-primary" aria-hidden="true" />
                  <span>Violão</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Music className="h-3 w-3 text-primary" />
                  <span>Guitarra</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Music className="h-3 w-3 text-primary" />
                  <span>Bateria</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Music className="h-3 w-3 text-primary" />
                  <span>Teclado</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Music className="h-3 w-3 text-primary" />
                  <span>Viola Caipira</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Music className="h-3 w-3 text-primary" />
                  <span>E mais...</span>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Contato</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Rua Alagoas, 3795<br />Patrimônio Velho<br />Votuporanga - SP</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>(17) 99719-3056</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-400">
                  <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Segunda à sexta: 9h às 18h<br />Sábado: 9h às 12h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Escola de Música Dunamis. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>Feito com ❤️ em Votuporanga</span>
              <span>•</span>
              <span>Transformando vidas através da música</span>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicSchool",
          "name": "Escola de Música Dunamis",
          "description": "A melhor escola de música de Votuporanga! Aulas de violão, guitarra, bateria, teclado e mais. Aula experimental gratuita.",
          "url": "https://dunamis-votuporanga.com",
          "telephone": "+5517997193056",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Alagoas, 3795",
            "addressLocality": "Votuporanga",
            "addressRegion": "SP",
            "postalCode": "15500-000",
            "addressCountry": "BR"
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 09:00-12:00"
          ],
          "sameAs": [
            "https://www.instagram.com/dunamis.me",
            "https://www.facebook.com/dunamis.me"
          ],
          "offers": {
            "@type": "Offer",
            "name": "Aula Experimental Gratuita",
            "price": "0",
            "priceCurrency": "BRL"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;