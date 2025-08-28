import { useState } from 'react';
import { MessageCircle, Phone, Calendar, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnhancedFloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Main Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Expanded Options */}
        {isExpanded && (
          <>
            {/* Schedule Visit */}
            <Link
              to="/contact"
              className="group flex items-center space-x-3 bg-white premium-shadow hover:premium-shadow-lg rounded-full px-6 py-4 transform hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Calendar size={20} />
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">
                Schedule Visit
              </span>
            </Link>

            {/* Call Us */}
            <a
              href="tel:+880XXXXXXXXX"
              className="group flex items-center space-x-3 bg-white premium-shadow hover:premium-shadow-lg rounded-full px-6 py-4 transform hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">
                Call Now
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/880XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-white premium-shadow hover:premium-shadow-lg rounded-full px-6 py-4 transform hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">
                WhatsApp
              </span>
            </a>
          </>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={toggleExpanded}
          className={`group relative w-16 h-16 bg-gradient-to-br from-primary via-tertiary to-primary rounded-full flex items-center justify-center text-white premium-shadow hover:premium-shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse-glow ${
            isExpanded ? 'rotate-45' : ''
          }`}
          aria-label={isExpanded ? 'Close menu' : 'Open contact menu'}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-full animate-ping" />
          
          {isExpanded ? (
            <X size={24} className="relative z-10 group-hover:scale-110 transition-transform" />
          ) : (
            <div className="relative z-10 flex flex-col items-center">
              <Zap size={20} className="group-hover:scale-110 transition-transform animate-bounce" />
              <span className="text-[8px] font-bold tracking-wide mt-1">CONTACT</span>
            </div>
          )}
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
        </button>
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={toggleExpanded}
        />
      )}
    </>
  );
};

export default EnhancedFloatingButton;