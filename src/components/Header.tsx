import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDunamis from "@/assets/logo-dunamis.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoDunamis} 
              alt="Dunamis Escola de Música" 
              className="h-10 w-auto"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">DUNAMIS</h1>
              <p className="text-xs text-muted-foreground">Escola de Música</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("cursos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => scrollToSection("agendamento")}
              className="hidden sm:flex"
            >
              <Phone className="h-4 w-4" />
              Aula Grátis
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground p-2"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("cursos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => scrollToSection("agendamento")}
              className="w-full sm:hidden"
            >
              <Phone className="h-4 w-4" />
              Aula Experimental Grátis
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;