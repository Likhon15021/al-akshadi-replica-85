import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const FloatingButton = () => {
  return (
    <Link 
      to="/contact" 
      className="float-btn text-white px-8 py-10 rounded-l-2xl shimmer-effect group overflow-hidden"
    >
      <div className="flex items-center space-x-3 relative z-10">
        <Calendar size={20} className="group-hover:scale-110 transition-transform animate-pulse" />
        <span className="text-sm font-bold tracking-widest">
          PLAN YOUR VISIT
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent group-hover:from-primary/30 transition-all duration-300" />
    </Link>
  );
};

export default FloatingButton;