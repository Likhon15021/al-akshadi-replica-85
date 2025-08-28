import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MinimalFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-20 w-32 h-32 border border-white/20 rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-24 h-24 border border-white/10 rounded-lg rotate-45"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-white"
      >
        <div className="container mx-auto px-4 py-16">
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
            
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold font-raleway bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    SUMS
                  </div>
                  <div className="text-sm font-medium text-gray-400 font-inter tracking-widest">
                    REAL ESTATE
                  </div>
                </motion.div>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md font-inter">
                Building modern spaces and premium apartment complexes with quality construction 
                and smart living solutions in Rajshahi.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors duration-300 border border-white/10 hover:border-white/20"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-lg font-semibold font-raleway text-white/90">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Interior', path: '/interior' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <motion.div key={link.path} whileHover={{ x: 4 }}>
                    <Link 
                      to={link.path} 
                      className="block text-gray-400 hover:text-white transition-colors duration-300 font-inter text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-lg font-semibold font-raleway text-white/90">Contact</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Rajshahi, Bangladesh", href: null },
                  { icon: Phone, text: "+880 XXX XXXXXXX", href: "tel:+880XXXXXXXXX" },
                  { icon: Mail, text: "info@sumsrealestate.com", href: "mailto:info@sumsrealestate.com" }
                ].map(({ icon: Icon, text, href }, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 group"
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-white/5 rounded-lg">
                      <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {href ? (
                      <a 
                        href={href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 font-inter text-sm"
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="text-gray-400 font-inter text-sm">{text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400 flex items-center space-x-2 font-inter">
                <span>© 2025 SUMS REAL ESTATE. All rights reserved.</span>
                <Heart size={12} className="text-red-400" />
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex space-x-4 text-sm">
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 font-inter">
                    Privacy
                  </Link>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 font-inter">
                    Terms
                  </Link>
                </div>
                
                {/* Back to top */}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    onClick={scrollToTop}
                    size="sm"
                    variant="ghost"
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300"
                  >
                    <ArrowUp size={16} />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default MinimalFooter;