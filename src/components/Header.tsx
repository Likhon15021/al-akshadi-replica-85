import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const { displayText: typedText } = useTypingEffect({ 
    text: 'SUMS', 
    speed: 150, 
    delay: 500, 
    loop: false 
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Interior', path: '/interior' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[rgba(18,18,18,0.72)] backdrop-blur-md shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Social Bar */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={`bg-primary text-primary-foreground py-2 transition-all duration-300 ${
          isScrolled ? 'max-h-0 overflow-hidden py-0' : 'max-h-20'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="hover:text-secondary transition-colors"
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="hover:text-secondary transition-colors"
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="hover:text-secondary transition-colors"
            >
              <Youtube size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="hover:text-secondary transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Typing Animation */}
          <Link to="/" className="flex items-center space-x-3">
            <div className={`text-3xl font-bold font-raleway transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-primary'
            }`}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block"
              >
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  className="inline-block ml-1 w-0.5 h-8 bg-current"
                />
              </motion.span>
            </div>
            <div className={`hidden sm:block text-sm font-medium transition-colors duration-300 ${
              isScrolled ? 'text-white/80' : 'text-muted-foreground'
            }`}>
              REAL ESTATE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium font-raleway transition-all duration-300 hover:text-primary relative group ${
                  isActivePath(item.path) 
                    ? 'text-primary' 
                    : isScrolled ? 'text-white hover:text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  isActivePath(item.path) ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-white hover:text-white/80' : 'text-foreground'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden mt-4 pb-4 transition-colors duration-300 ${
              isScrolled ? 'border-t border-white/20' : 'border-t'
            }`}
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium font-raleway transition-colors hover:text-primary ${
                    isActivePath(item.path) 
                      ? 'text-primary' 
                      : isScrolled ? 'text-white' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;