import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta1: string;
  cta2: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "MODERN LUXURY LIVING REDEFINED",
    subtitle: "Where Innovation Meets Elegance",
    description: "Experience the pinnacle of modern architecture and premium living spaces designed for the discerning homeowner in Rajshahi's most prestigious locations",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&crop=center",
    cta1: "Explore Projects",
    cta2: "Get in Touch"
  },
  {
    id: 2,
    title: "SMART LIVING TECHNOLOGY FIRST",
    subtitle: "Innovation at Every Corner", 
    description: "Cutting-edge smart home technology seamlessly integrated into every premium apartment for enhanced comfort, security, and modern lifestyle convenience",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center",
    cta1: "Explore Projects",
    cta2: "Get in Touch"
  },
  {
    id: 3,
    title: "SUSTAINABLE PREMIUM QUALITY",
    subtitle: "Excellence in Every Detail",
    description: "Environmentally conscious building practices using premium materials for luxurious green development that creates lasting value and timeless beauty",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop&crop=center",
    cta1: "Explore Projects", 
    cta2: "Get in Touch"
  }
];

const ModernHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const autoplayOptions = {
    delay: 6000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: prefersReducedMotion ? 400 : 1000,
      dragFree: false,
      slidesToScroll: 1
    },
    [Autoplay(autoplayOptions)]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Embla Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative w-full h-full flex-[0_0_100%]">
              {/* Background with Ken Burns + Parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  style={{ 
                    y: parallaxY,
                    backgroundImage: `url(${slide.image})`
                  }}
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-linear will-change-transform ${
                    !prefersReducedMotion && index === currentSlide 
                      ? 'scale-110' 
                      : 'scale-105'
                  }`}
                />
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-32 w-24 h-24 border border-white rounded-lg"
        />
      </div>

      {/* Content with enhanced parallax */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="relative z-10 container mx-auto px-4 text-center text-white"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced animated content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main headline - single line as requested */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-raleway leading-tight tracking-tight"
                style={{ 
                  textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                  letterSpacing: '-0.02em'
                }}
              >
                {slides[currentSlide]?.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-medium font-inter text-white/90"
                style={{ 
                  color: '#F5F7FA',
                  textShadow: '0 2px 15px rgba(0,0,0,0.7)'
                }}
              >
                {slides[currentSlide]?.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light font-inter max-w-4xl mx-auto text-white/85"
                style={{ 
                  textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                }}
              >
                {slides[currentSlide]?.description}
              </motion.p>

              {/* CTA Buttons with enhanced animations */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="px-12 py-6 text-xl font-semibold font-raleway bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl rounded-full transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #F5C518, #E6B007)',
                      boxShadow: '0 0 30px rgba(245,197,24,0.4), 0 10px 30px rgba(0,0,0,0.3)'
                    }}
                  >
                    <Sparkles className="mr-3 h-6 w-6" />
                    {slides[currentSlide]?.cta1}
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-12 py-6 text-xl font-semibold font-raleway border-2 text-white hover:bg-white/10 shadow-lg rounded-full backdrop-blur-md transition-all duration-300"
                    style={{
                      borderColor: '#F5C518',
                      boxShadow: '0 0 20px rgba(245,197,24,0.3), 0 5px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    {slides[currentSlide]?.cta2}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Enhanced navigation */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-secondary/30 hover:bg-secondary/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-secondary" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-secondary/30 hover:bg-secondary/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-secondary" />
      </motion.button>

      {/* Modern dot indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollTo(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 h-4 bg-secondary' 
                : 'w-4 h-4 bg-white/40 hover:bg-secondary/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-secondary rounded-full"
                style={{ boxShadow: '0 0 15px rgba(245,197,24,0.6)' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div 
          className="h-full bg-secondary"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            boxShadow: '0 0 10px rgba(245,197,24,0.6)'
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default ModernHeroSlider;