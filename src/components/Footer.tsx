import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Building, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-primary-800" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-tertiary/80 to-primary-700/90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-32 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-20 w-32 h-32 bg-white rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Building className="text-white" size={28} />
                  <div className="text-2xl font-bold">SUMS</div>
                </div>
                <div className="text-lg font-medium text-white/90">REAL ESTATE</div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Building modern spaces and premium apartment complexes with quality construction 
                and smart living solutions in Rajshahi.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">Home</span>
                </Link>
                <Link to="/about" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">About Us</span>
                </Link>
                <Link to="/projects" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">Projects</span>
                </Link>
                <Link to="/interior" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">Interior</span>
                </Link>
                <Link to="/news" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">News</span>
                </Link>
                <Link to="/contact" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">Contact</span>
                </Link>
              </div>
            </div>

            {/* Project Types */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Our Projects</h3>
              <div className="space-y-3">
                <Link to="/projects?type=ongoing" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">Ongoing Projects</span>
                </Link>
                <Link to="/projects?type=completed" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">Completed Projects</span>
                </Link>
                <Link to="/projects?type=upcoming" className="block hover:text-white hover:translate-x-1 transition-all duration-300 text-sm text-white/80 group">
                  <span className="group-hover:text-white">Upcoming Projects</span>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all duration-300">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white/80 group-hover:text-white transition-colors">
                      Rajshahi, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all duration-300">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div className="text-sm">
                    <a 
                      href="tel:+880XXXXXXXXX"
                      className="text-white/80 group-hover:text-white transition-colors"
                    >
                      +880 XXX XXXXXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all duration-300">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div className="text-sm">
                    <a 
                      href="mailto:info@sumsrealestate.com"
                      className="text-white/80 group-hover:text-white transition-colors"
                    >
                      info@sumsrealestate.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-white/70 flex items-center space-x-2">
                <span>© 2024 SUMS REAL ESTATE (PVT.) LTD. All rights reserved.</span>
                <Heart size={12} className="text-white/50" />
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;