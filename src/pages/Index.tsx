import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import Cursos from "@/components/Cursos";
import Localizacao from "@/components/Localizacao";
import Agendamento from "@/components/Agendamento";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <Beneficios />
  <Cursos />
        <Localizacao />
        <Agendamento />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
