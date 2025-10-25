import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "9150351005"; // Replace with your actual WhatsApp number
  const message = "Hello! I'm interested in your tech services."; // Default message
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-float">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-glow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Tooltip */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800 dark:border-l-gray-200"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
