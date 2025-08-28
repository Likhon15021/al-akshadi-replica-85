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
    description: "Experience the pinnacle of modern architecture and premium living spaces",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop",
    cta1: "Explore Premium Projects",
    cta2: "Schedule Visit"
  },
  {
    id: 2,
    title: "Smart Living",
    subtitle: "Innovation First",
    description: "Cutting-edge technology integrated into every premium apartment for enhanced comfort",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
    cta1: "Discover Smart Features",
    cta2: "Virtual Tour"
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Excellence Delivered",
    description: "Sustainable building practices with premium materials for luxurious green development",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop",
    cta1: "Quality Standards",
    cta2: "Contact Us"
  }
];

const PremiumHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const transitionDuration = prefersReducedMotion ? 180 : 450;
  const textDelay = prefersReducedMotion ? 30 : 80;
  
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: transitionDuration,
      dragFree: false,
      slidesToScroll: 1
    },
    [Autoplay(autoplayOptions)]
  );

  // Handle slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('slidesInView', () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), transitionDuration + 200);
    });

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, transitionDuration]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Embla Carousel Container */}
      <div className="embla absolute inset-0" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide relative w-full h-full">
              {/* Background Image with Ken Burns Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5000ms] ease-linear ${
                    !prefersReducedMotion && index === currentSlide ? 'scale-[1.02]' : 'scale-100'
                  }`}
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    transform: index === currentSlide && !prefersReducedMotion 
                      ? 'scale(1.02)' 
                      : 'scale(1.00)'
                  }}
                />
                {/* Parallax Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.65) 0%, hsl(var(--tertiary) / 0.45) 50%, hsl(var(--secondary) / 0.35) 100%)',
                    transform: index === currentSlide && !prefersReducedMotion
                      ? 'translateY(-2px)'
                      : 'translateY(0px)',
                    transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-white rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Premium Logo */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="mx-auto mb-8 w-fit p-6 glass-effect rounded-2xl backdrop-blur-md bg-white/10">
              <div className="text-3xl font-bold text-white">SUMS</div>
              <div className="text-sm font-medium text-white/80 tracking-widest">REAL ESTATE</div>
            </div>
          </div>

          {/* Slide Content with Staggered Animations */}
          <div className="relative">
            {/* Title */}
            <h1 
              className={`text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight transition-all duration-600 ease-out ${
                !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: !isTransitioning ? `${textDelay}ms` : '0ms'
              }}
            >
              <span className="block mb-2">{slides[currentSlide]?.title}</span>
              <span className="block mb-2 text-white/90">{slides[currentSlide]?.subtitle}</span>
            </h1>

            {/* Description */}
            <p 
              className={`text-xl md:text-2xl mb-12 leading-relaxed font-light max-w-4xl mx-auto transition-all duration-600 ease-out ${
                !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: !isTransitioning ? `${textDelay * 1.5}ms` : '0ms'
              }}
            >
              {slides[currentSlide]?.description}
              <br />
              <span className="text-white/90 font-medium">SUMS REAL ESTATE (PVT.) LTD</span>
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-600 ease-out ${
                !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: !isTransitioning ? `${textDelay * 2}ms` : '0ms'
              }}
            >
              <Button 
                size="lg" 
                className="px-10 py-6 text-lg font-medium bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {slides[currentSlide]?.cta1}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-6 text-lg font-medium glass-effect border-white/30 text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                {slides[currentSlide]?.cta2}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

    </section>
  );
};

export default PremiumHeroSlider;