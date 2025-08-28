import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Phone } from 'lucide-react';
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
    title: "MODERN LUXURY",
    subtitle: "Living Redefined",
    description: "Experience the pinnacle of modern architecture and premium living spaces designed for the discerning homeowner",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&crop=center",
    cta1: "Explore Projects",
    cta2: "Get in Touch"
  },
  {
    id: 2,
    title: "SMART LIVING",
    subtitle: "Innovation First",
    description: "Cutting-edge technology integrated into every premium apartment for enhanced comfort and modern lifestyle",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center",
    cta1: "Explore Projects",
    cta2: "Get in Touch"
  },
  {
    id: 3,
    title: "PREMIUM QUALITY",
    subtitle: "Excellence Delivered",
    description: "Sustainable building practices with premium materials for luxurious green development that stands the test of time",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop&crop=center",
    cta1: "Explore Projects",
    cta2: "Get in Touch"
  }
];

const PremiumRealEstateHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: prefersReducedMotion ? 300 : 800,
      dragFree: false,
      slidesToScroll: 1
    },
    [Autoplay(autoplayOptions)]
  );

  // Handle slide changes with staggered animations
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setCurrentSlide(newIndex);
      
      // Trigger transition state for staggered animations
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 100);
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
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Embla Carousel Container */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative w-full h-full flex-[0_0_100%]">
              {/* Background Image with Ken Burns Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-linear will-change-transform ${
                    !prefersReducedMotion && index === currentSlide 
                      ? 'scale-105' 
                      : 'scale-100'
                  }`}
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                  }}
                />
                {/* Dark Gradient Overlay as requested */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-secondary rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content Layer with Staggered Animations */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Company Logo */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="mx-auto mb-8 w-fit p-6 glass-effect rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
              <div className="text-3xl font-bold text-white font-outfit tracking-wide">SUMS</div>
              <div className="text-sm font-medium text-white/80 tracking-widest font-inter">REAL ESTATE</div>
            </div>
          </div>

          {/* Main Content with Staggered Entrance */}
          <div className="space-y-8">
            {/* Main Headline - Big and Bold with Outfit Font */}
            <h1 
              className={`text-6xl md:text-8xl lg:text-9xl font-bold font-outfit mb-6 leading-tight transition-all duration-800 ease-out ${
                !isTransitioning 
                  ? 'opacity-100 translate-y-0 filter-none' 
                  : 'opacity-0 translate-y-12 blur-sm'
              }`}
              style={{ 
                transitionDelay: !isTransitioning ? '200ms' : '0ms',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              {slides[currentSlide]?.title}
            </h1>

            {/* Subheadline with Manrope Font and Lighter Color */}
            <h2 
              className={`text-2xl md:text-4xl lg:text-5xl font-medium font-manrope mb-8 transition-all duration-800 ease-out ${
                !isTransitioning 
                  ? 'opacity-100 translate-y-0 filter-none' 
                  : 'opacity-0 translate-y-12 blur-sm'
              }`}
              style={{ 
                transitionDelay: !isTransitioning ? '400ms' : '0ms',
                color: '#F5F7FA',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              {slides[currentSlide]?.subtitle}
            </h2>

            {/* Description */}
            <p 
              className={`text-xl md:text-2xl lg:text-3xl leading-relaxed font-light font-inter max-w-5xl mx-auto mb-12 transition-all duration-800 ease-out ${
                !isTransitioning 
                  ? 'opacity-100 translate-y-0 filter-none' 
                  : 'opacity-0 translate-y-12 blur-sm'
              }`}
              style={{ 
                transitionDelay: !isTransitioning ? '600ms' : '0ms',
                color: '#F5F7FA',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              {slides[currentSlide]?.description}
            </p>

            {/* CTA Buttons with Gold Accent */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-800 ease-out ${
                !isTransitioning 
                  ? 'opacity-100 translate-y-0 filter-none' 
                  : 'opacity-0 translate-y-12 blur-sm'
              }`}
              style={{ 
                transitionDelay: !isTransitioning ? '800ms' : '0ms'
              }}
            >
              <Button 
                size="lg" 
                className="hero-button px-12 py-6 text-xl font-semibold font-inter bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(245,197,24,0.4)]"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(245,197,24,0.3))'
                }}
              >
                <Sparkles className="mr-3 h-6 w-6" />
                {slides[currentSlide]?.cta1}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="hero-button px-12 py-6 text-xl font-semibold font-inter border-2 border-secondary text-white hover:bg-secondary/20 shadow-lg transform transition-all duration-300 hover:scale-105 backdrop-blur-md"
                style={{
                  borderColor: '#F5C518',
                  filter: 'drop-shadow(0 0 15px rgba(245,197,24,0.2))'
                }}
              >
                <Phone className="mr-3 h-6 w-6" />
                {slides[currentSlide]?.cta2}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows with Gold Accent */}
      <button
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-secondary/30 hover:bg-secondary/20 hover:border-secondary transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        aria-label="Previous slide"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(245,197,24,0.2))'
        }}
      >
        <ChevronLeft size={28} className="group-hover:scale-110 transition-transform text-secondary" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-secondary/30 hover:bg-secondary/20 hover:border-secondary transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        aria-label="Next slide"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(245,197,24,0.2))'
        }}
      >
        <ChevronRight size={28} className="group-hover:scale-110 transition-transform text-secondary" />
      </button>

      {/* Dot Indicators with Gold Accent */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
              index === currentSlide 
                ? 'bg-secondary scale-125 shadow-[0_0_15px_rgba(245,197,24,0.6)]' 
                : 'bg-white/40 hover:bg-secondary/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar with Gold Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-secondary transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(245,197,24,0.5)]"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default PremiumRealEstateHero;