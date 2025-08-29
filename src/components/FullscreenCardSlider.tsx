import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  id: number;
  image: string;
  text: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&crop=center",
    text: "Modern Luxury Living",
    title: "MODERN LUXURY LIVING REDEFINED",
    subtitle: "Where Innovation Meets Elegance",
    description: "Experience the pinnacle of modern architecture and premium living spaces designed for the discerning homeowner in Rajshahi's most prestigious locations"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center",
    text: "Smart Technology First",
    title: "SMART LIVING TECHNOLOGY FIRST",
    subtitle: "Innovation at Every Corner",
    description: "Cutting-edge smart home technology seamlessly integrated into every premium apartment for enhanced comfort, security, and modern lifestyle convenience"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop&crop=center",
    text: "Premium Quality",
    title: "PREMIUM QUALITY CONSTRUCTION",
    subtitle: "Built to Last Generations",
    description: "Exceptional craftsmanship and premium materials ensure every project meets the highest standards of quality and durability for lasting value"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center",
    text: "Strategic Locations",
    title: "STRATEGIC PRIME LOCATIONS",
    subtitle: "Connectivity Meets Convenience",
    description: "Carefully selected locations in Rajshahi's most desirable areas, offering excellent connectivity, amenities, and future growth potential"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=1080&fit=crop&crop=center",
    text: "Investment Value",
    title: "INVESTMENT OPPORTUNITY",
    subtitle: "Your Future Starts Here",
    description: "Join hundreds of satisfied homeowners who have chosen our developments for their exceptional value, lifestyle, and investment potential"
  }
];

const FullscreenCardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardTrackRef = useRef<HTMLDivElement>(null);

  const updateActiveCard = (index: number) => {
    setActiveIndex(index);
    scrollToCard(index);
  };

  const scrollToCard = (index: number) => {
    if (cardTrackRef.current) {
      // Get the actual card width based on screen size
      const cardElement = cardTrackRef.current.querySelector('.card-item');
      const cardWidth = cardElement ? cardElement.getBoundingClientRect().width + 16 : 216; // fallback
      const scrollX = cardWidth * index;
      cardTrackRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    updateActiveCard(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    updateActiveCard(prevIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fullscreen Background */}
      <motion.div
        key={activeIndex}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slides[activeIndex].image})`,
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Fullscreen Text */}
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 z-10">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-4 sm:mb-6"
                style={{ 
                  fontFamily: '"Playfair Display", serif',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                  lineHeight: '1.2'
                }}
              >
                {slides[activeIndex].title}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-yellow-400 mb-3 sm:mb-4"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {slides[activeIndex].subtitle}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {slides[activeIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Card Track Container */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-8 z-20 flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Card Track */}
        <div
          ref={cardTrackRef}
          className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-hidden transition-transform duration-500 ease-out max-w-[calc(100vw-120px)] sm:max-w-[calc(100vw-140px)] md:max-w-[calc(100vw-160px)] lg:max-w-[calc(100vw-200px)]"
        >
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`card-item relative w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] md:w-[180px] md:h-[120px] lg:w-[200px] lg:h-[130px] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-400 ${
                index === activeIndex 
                  ? 'scale-110 shadow-2xl shadow-white/20 z-10' 
                  : 'scale-100 hover:scale-105'
              }`}
              onClick={() => updateActiveCard(index)}
            >
              <img
                src={slide.image}
                alt={slide.text}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  index === activeIndex ? 'scale-150' : 'scale-100'
                }`}
              />
              
              {/* Card Text Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-1 sm:p-2 bg-black/60 text-white text-xs sm:text-sm font-medium transition-all duration-300 ${
                index === activeIndex ? 'opacity-0' : 'opacity-100'
              }`}>
                {slide.text}
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default FullscreenCardSlider;
