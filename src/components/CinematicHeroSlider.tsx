import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
    title: "Modern Luxury",
    subtitle: "Living Redefined", 
    description: "Experience the pinnacle of modern architecture and premium living spaces designed for the discerning homeowner",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=80",
    cta1: "Explore Premium Projects",
    cta2: "Schedule Visit"
  },
  {
    id: 2,
    title: "Smart Living",
    subtitle: "Innovation First",
    description: "Cutting-edge technology seamlessly integrated into every premium apartment for enhanced comfort and modern lifestyle",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80",
    cta1: "Discover Smart Features", 
    cta2: "Virtual Tour"
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Excellence Delivered",
    description: "Sustainable building practices combined with premium materials for luxurious green development and lasting value",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop&q=80",
    cta1: "Quality Standards",
    cta2: "Contact Us"
  }
];

const CinematicHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textAnimationStage, setTextAnimationStage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  
  // Accessibility: respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const transitionDuration = prefersReducedMotion ? 200 : 600;
  const staggerDelay = prefersReducedMotion ? 0 : 120;
  
  const autoplayRef = useRef(
    Autoplay({ 
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: transitionDuration,
      dragFree: false,
      slidesToScroll: 1
    },
    [autoplayRef.current]
  );

  // Handle slide transitions and text animations
  useEffect(() => {
    if (!emblaApi) return;

    let timeouts: NodeJS.Timeout[] = [];

    const onSlideChange = () => {
      // Clear any existing timeouts
      timeouts.forEach(clearTimeout);
      timeouts = [];

      const newIndex = emblaApi.selectedScrollSnap();
      setCurrentSlide(newIndex);
      
      // Reset and trigger enhanced staggered animations
      setIsTransitioning(true);
      setTextAnimationStage(0);
      
      // Enhanced staggered animation sequence with improved timing
      timeouts = [
        setTimeout(() => setTextAnimationStage(1), staggerDelay * 0.5),
        setTimeout(() => setTextAnimationStage(2), staggerDelay * 1.2),
        setTimeout(() => setTextAnimationStage(3), staggerDelay * 2.0),
        setTimeout(() => setTextAnimationStage(4), staggerDelay * 2.8),
        setTimeout(() => setIsTransitioning(false), staggerDelay * 3.5)
      ];
    };

    // Initial slide setup with delay for smooth loading
    setTimeout(() => {
      setIsLoaded(true);
      onSlideChange();
    }, 300);
    
    emblaApi.on('select', onSlideChange);
    
    return () => {
      emblaApi.off('select', onSlideChange);
      timeouts.forEach(clearTimeout);
    };
  }, [emblaApi, staggerDelay]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cinematic-hero"
    >
      {/* Embla Carousel Container */}
      <div className="embla absolute inset-0" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide relative w-full h-full">
              {/* Background Image with Ken Burns Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns-effect ${
                    index === currentSlide && !prefersReducedMotion ? 'active' : ''
                  }`}
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                  }}
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 cinematic-overlay" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-full blur-xl float-enhanced" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-primary/25 to-tertiary/20 rounded-full blur-xl float-enhanced" />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-gradient-to-br from-tertiary/30 to-secondary/20 rounded-full blur-lg float-enhanced" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/15 rounded-full blur-lg float-enhanced" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Premium Logo with Enhanced Animation */}
          <div className={`mb-16 transition-all duration-1200 ${isVisible && isLoaded ? 'cinematic-entrance animate' : 'cinematic-entrance'}`}>
            <div className="mx-auto mb-8 w-fit p-8 glass-effect rounded-3xl backdrop-blur-md bg-white/5 border border-secondary/20 gold-glow">
              <div className="text-4xl font-outfit font-bold text-white tracking-wide">SUMS</div>
              <div className="text-sm font-manrope font-medium text-secondary tracking-[0.2em] mt-1">
                REAL ESTATE
              </div>
            </div>
          </div>

          {/* Slide Content with Staggered Animations */}
          <div className="relative">
            {/* Title with Enhanced Animation */}
            <h1 className={`font-outfit font-bold text-white leading-tight mb-8 text-6xl md:text-8xl lg:text-9xl cinematic-entrance ${
              textAnimationStage >= 1 ? 'animate' : ''
            }`} style={{ 
              transitionDelay: `${staggerDelay * 0.5}ms`,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              <span className="block mb-2 transform hover:scale-105 transition-transform duration-500">
                {slides[currentSlide]?.title}
              </span>
            </h1>

            {/* Subtitle with Elegant Animation */}
            <h2 className={`font-outfit font-semibold text-secondary leading-tight mb-12 text-3xl md:text-5xl lg:text-6xl cinematic-entrance ${
              textAnimationStage >= 2 ? 'animate' : ''
            }`} style={{ 
              transitionDelay: `${staggerDelay * 1.2}ms`,
              textShadow: '0 2px 15px rgba(245, 197, 24, 0.3)'
            }}>
              {slides[currentSlide]?.subtitle}
            </h2>

            {/* Description with Smooth Fade */}
            <p className={`font-inter text-xl md:text-2xl lg:text-3xl mb-16 leading-relaxed font-light max-w-5xl mx-auto cinematic-entrance ${
              textAnimationStage >= 3 ? 'animate' : ''
            }`} style={{ 
              transitionDelay: `${staggerDelay * 2.0}ms`,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}>
              {slides[currentSlide]?.description}
              <br />
              <span className="text-secondary/90 font-medium mt-4 block">
                SUMS REAL ESTATE (PVT.) LTD
              </span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-8 justify-center cinematic-entrance ${
              textAnimationStage >= 4 ? 'animate' : ''
            }`} style={{ 
              transitionDelay: `${staggerDelay * 2.8}ms`
            }}>
              <Button 
                size="lg" 
                className="hero-button font-poppins font-semibold px-12 py-8 text-xl bg-secondary text-midnight-navy hover:bg-secondary/90 shadow-2xl hover:shadow-secondary/25 gold-glow rounded-2xl"
              >
                <Sparkles className="mr-3 h-6 w-6" />
                {slides[currentSlide]?.cta1}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hero-button font-poppins font-semibold px-12 py-8 text-xl glass-effect border-secondary/30 text-secondary hover:bg-secondary/10 shadow-xl hover:shadow-secondary/20 gold-glow rounded-2xl"
              >
                <Zap className="mr-3 h-6 w-6" />
                {slides[currentSlide]?.cta2}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-secondary/20 backdrop-blur-md text-secondary hover:bg-secondary/30 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent gold-glow"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-secondary/20 backdrop-blur-md text-secondary hover:bg-secondary/30 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent gold-glow"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators with Gold Glow */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent gold-glow ${
              index === currentSlide 
                ? 'bg-secondary scale-125 shadow-lg shadow-secondary/50' 
                : 'bg-secondary/40 hover:bg-secondary/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary/20">
        <div 
          className="h-full bg-secondary transition-all duration-300 ease-linear shadow-sm shadow-secondary/30"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default CinematicHeroSlider;