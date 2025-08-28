import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '+880XXXXXXXXX';
    const message = 'Hello! I am interested in your premium real estate projects.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    // Replace with actual phone number
    window.location.href = 'tel:+880XXXXXXXXX';
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 group"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          filter: 'drop-shadow(0 4px 15px rgba(37, 211, 102, 0.4))'
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white group-hover:animate-bounce" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCallClick}
        className="w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 group"
        style={{
          filter: 'drop-shadow(0 4px 15px rgba(245, 197, 24, 0.4))'
        }}
        aria-label="Call us now"
      >
        <Phone className="h-6 w-6 text-secondary-foreground group-hover:animate-pulse" />
      </Button>

      {/* Floating Quick Contact Card - Shows on Hover */}
      <div className="absolute right-16 bottom-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl border border-white/20 min-w-[200px]">
          <p className="text-sm font-semibold text-gray-800 mb-2">Quick Contact</p>
          <div className="space-y-2">
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors w-full text-left"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </button>
            <button 
              onClick={handleCallClick}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-secondary transition-colors w-full text-left"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;