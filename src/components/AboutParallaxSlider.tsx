import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Building2, Users, Award, Target, Eye, Heart, Lightbulb, Shield, Star, ArrowRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ParallaxSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  overlay: string;
  icon: React.ComponentType<any>;
  stats?: {
    number: string;
    label: string;
  }[];
  features?: string[];
  theme: 'dark' | 'light';
}

const parallaxSlides: ParallaxSlide[] = [
  {
    id: 1,
    title: "Our Foundation",
    subtitle: "Building Excellence Since Day One",
    description: "SUMS Real Estate was founded with a vision to transform the real estate landscape in Rajshahi through innovative design, premium construction, and unwavering commitment to quality.",
    image: "/src/assets/hero-building.jpg",
    overlay: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
    icon: Building2,
    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "1000+", label: "Happy Families" }
    ],
    features: ["Premium Construction", "Innovative Design", "Quality Assurance"],
    theme: 'dark'
  },
  {
    id: 2,
    title: "Our Team",
    subtitle: "Experts Behind Every Project",
    description: "Our dedicated team of architects, engineers, and construction professionals brings decades of combined experience to every project, ensuring excellence in every detail.",
    image: "/src/assets/team-photo.jpg",
    overlay: "linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.6) 50%, rgba(0,0,0,0.7) 100%)",
    icon: Users,
    stats: [
      { number: "25+", label: "Expert Team Members" },
      { number: "10+", label: "Years Average Experience" },
      { number: "100%", label: "Certified Professionals" }
    ],
    features: ["Expert Architects", "Skilled Engineers", "Quality Inspectors"],
    theme: 'light'
  },
  {
    id: 3,
    title: "Our Vision",
    subtitle: "Creating Tomorrow's Communities",
    description: "We envision a future where every family has access to premium, sustainable, and smart living spaces that enhance their quality of life while respecting our environment.",
    image: "/src/assets/modern-interior.jpg",
    overlay: "linear-gradient(135deg, rgba(34,197,94,0.7) 0%, rgba(59,130,246,0.5) 50%, rgba(0,0,0,0.6) 100%)",
    icon: Eye,
    stats: [
      { number: "5", label: "Smart Cities Planned" },
      { number: "100%", label: "Sustainable Practices" },
      { number: "2025", label: "Vision Target" }
    ],
    features: ["Smart Technology", "Green Building", "Community Focus"],
    theme: 'dark'
  },
  {
    id: 4,
    title: "Our Mission",
    subtitle: "Excellence in Every Brick",
    description: "Our mission is to deliver exceptional real estate projects that exceed expectations, using cutting-edge technology, sustainable practices, and uncompromising quality standards.",
    image: "/src/assets/project-complex.jpg",
    overlay: "linear-gradient(135deg, rgba(245,197,24,0.8) 0%, rgba(251,146,60,0.6) 50%, rgba(0,0,0,0.7) 100%)",
    icon: Target,
    stats: [
      { number: "99%", label: "Client Satisfaction" },
      { number: "24/7", label: "Support Available" },
      { number: "0", label: "Compromises on Quality" }
    ],
    features: ["Premium Materials", "Timely Delivery", "Customer Support"],
    theme: 'light'
  }
];

const AboutParallaxSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -100]);
  const overlayY = useTransform(scrollY, [0, 1000], [0, -150]);
  
  // Smooth spring animations
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });
  const smoothContentY = useSpring(contentY, { stiffness: 100, damping: 30 });
  const smoothOverlayY = useSpring(overlayY, { stiffness: 100, damping: 30 });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const autoplayOptions = {
    delay: 8000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: prefersReducedMotion ? 400 : 1200,
      dragFree: false,
      slidesToScroll: 1
    },
    [Autoplay(autoplayOptions)]
  );

  // Handle slide changes with enhanced animations
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide(newIndex);
        setIsTransitioning(false);
      }, 200);
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Auto-play control
  const toggleAutoplay = useCallback(() => {
    if (emblaApi) {
      if (isPlaying) {
        emblaApi.autoplay?.stop();
      } else {
        emblaApi.autoplay?.start();
      }
      setIsPlaying(!isPlaying);
    }
  }, [emblaApi, isPlaying]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  const currentSlideData = parallaxSlides[currentSlide];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Embla Carousel Container */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {parallaxSlides.map((slide, index) => (
            <div key={slide.id} className="relative w-full h-full flex-[0_0_100%]">
              {/* Background Image with Enhanced Parallax */}
              <motion.div
                style={{ 
                  y: prefersReducedMotion ? 0 : smoothBackgroundY,
                  backgroundImage: `url(${slide.image})`
                }}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat parallax-background parallax-slide-transition ${
                  !prefersReducedMotion && index === currentSlide 
                    ? 'scale-110' 
                    : 'scale-105'
                }`}
              />
              
              {/* Dynamic Overlay with Parallax */}
              <motion.div
                style={{ 
                  y: prefersReducedMotion ? 0 : smoothOverlayY,
                  background: slide.overlay
                }}
                className="absolute inset-0 parallax-overlay transition-opacity duration-1000 ease-out"
              />
              
              {/* Floating Geometric Elements */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full parallax-float" />
                <div className="absolute bottom-32 right-32 w-24 h-24 border border-white rounded-lg parallax-float" />
                <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/20 rounded-full parallax-float" />
                <div className="absolute top-1/3 left-1/3 w-20 h-20 border border-white/30 rounded-full parallax-float" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Layer with Parallax */}
      <motion.div 
        style={{ y: prefersReducedMotion ? 0 : smoothContentY }}
        className="relative z-10 container mx-auto px-4 text-center parallax-content"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Icon with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-8"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                  currentSlideData.theme === 'dark' 
                    ? 'bg-white/20 backdrop-blur-md border border-white/30' 
                    : 'bg-black/20 backdrop-blur-md border border-black/30'
                }`}>
                  <currentSlideData.icon 
                    size={40} 
                    className={currentSlideData.theme === 'dark' ? 'text-white' : 'text-white'} 
                  />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight ${
                  currentSlideData.theme === 'dark' ? 'text-white' : 'text-white'
                }`}
                style={{ 
                  textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                  letterSpacing: '-0.02em'
                }}
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className={`text-2xl md:text-3xl lg:text-4xl font-medium ${
                  currentSlideData.theme === 'dark' ? 'text-white/90' : 'text-white/90'
                }`}
                style={{ 
                  textShadow: '0 2px 15px rgba(0,0,0,0.7)'
                }}
              >
                {currentSlideData.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className={`text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-4xl mx-auto ${
                  currentSlideData.theme === 'dark' ? 'text-white/85' : 'text-white/85'
                }`}
                style={{ 
                  textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* Stats Grid */}
              {currentSlideData.stats && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8"
                >
                  {currentSlideData.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                      className={`p-6 rounded-2xl backdrop-blur-md border ${
                        currentSlideData.theme === 'dark' 
                          ? 'bg-white/10 border-white/20' 
                          : 'bg-black/10 border-black/20'
                      }`}
                    >
                      <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                        currentSlideData.theme === 'dark' ? 'text-white' : 'text-white'
                      }`}>
                        {stat.number}
                      </div>
                      <div className={`text-sm font-medium ${
                        currentSlideData.theme === 'dark' ? 'text-white/80' : 'text-white/80'
                      }`}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Features */}
              {currentSlideData.features && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="flex flex-wrap justify-center gap-4 pt-8"
                >
                  {currentSlideData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                      className={`px-6 py-3 rounded-full backdrop-blur-md border ${
                        currentSlideData.theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white' 
                          : 'bg-black/10 border-black/20 text-white'
                      }`}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="pt-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="px-12 py-6 text-xl font-semibold bg-white text-black hover:bg-white/90 shadow-2xl rounded-full transition-all duration-300"
                  >
                    <ArrowRight className="mr-3 h-6 w-6" />
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Enhanced Navigation */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </motion.button>

      {/* Play/Pause Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleAutoplay}
        className="absolute top-8 right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 transition-all duration-300"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </motion.button>

      {/* Modern Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {parallaxSlides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollTo(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 h-4 bg-white' 
                : 'w-4 h-4 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-white rounded-full"
                style={{ boxShadow: '0 0 15px rgba(255,255,255,0.6)' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div 
          className="h-full bg-white"
          style={{ 
            width: `${((currentSlide + 1) / parallaxSlides.length) * 100}%`,
            boxShadow: '0 0 10px rgba(255,255,255,0.6)'
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-8 z-20 flex flex-col items-center space-y-2"
      >
        <div className="text-white/60 text-sm font-medium">Scroll</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutParallaxSlider;
