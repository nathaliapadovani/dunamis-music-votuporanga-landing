import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Aparece após 2 segundos

    return () => clearTimeout(timer);
  }, []);

  const abrirWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5517997193056&text&type=phone_number&app_absent=0', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={abrirWhatsApp}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>

      {/* Indicador de mensagem */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
    </div>
  );
};

export default WhatsAppFloat;