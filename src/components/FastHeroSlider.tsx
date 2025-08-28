import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Modern Spaces",
    subtitle: "Premium Apartment Complexes",
    description: "welcome to AL-AKSHA DEVELOPERS (PVT.) LTD",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Luxury Living", 
    subtitle: "Contemporary Design Solutions",
    description: "Creating exceptional living spaces for modern families with premium quality",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Quality Construction",
    subtitle: "Trusted Excellence in Real Estate", 
    description: "Building dreams with precision and passion since inception",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop&q=80"
  }
];

const FastHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageFaded, setIsImageFaded] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay configuration with hover pause
  const autoplayOptions = {
    delay: 5000, // 5 seconds as requested
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true
  };

  // Embla carousel with touch/swipe support
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 500,
      dragFree: false,
      slidesToScroll: 1
    },
    [Autoplay(autoplayOptions)]
  );

  // Handle slide changes with cinematic timing
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setCurrentSlide(newIndex);
      setIsImageFaded(false);
      setIsZooming(false);
      
      // Stage 1: Start image fade-in (0-500ms)
      setTimeout(() => {
        setIsImageFaded(true);
      }, 50);

      // Stage 2: Start Ken Burns zoom after fade completes (500ms+)
      setTimeout(() => {
        setIsZooming(true);
      }, 550);
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Initial call

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Initial animation trigger
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
      setIsImageFaded(true);
      // Start zoom after initial fade
      setTimeout(() => {
        setIsZooming(true);
      }, 500);
    }, 200);
  }, []);

  // Hover handlers for autoplay control
  const handleMouseEnter = () => {
    setIsHovered(true);
    emblaApi?.plugins()?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    emblaApi?.plugins()?.autoplay?.play();
  };

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Embla Carousel Container */}
      <div className="embla absolute inset-0" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide relative w-full h-full">
              {/* Background Image with Cinematic Fade + Ken Burns Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform ${
                    index === currentSlide && isImageFaded
                      ? 'opacity-100' 
                      : 'opacity-0'
                  }`}
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    transform: index === currentSlide && isZooming 
                      ? 'translateZ(0) scale(1.05)' 
                      : 'translateZ(0) scale(1.00)',
                    transition: index === currentSlide 
                      ? `opacity 500ms ease-in-out, transform ${isZooming ? '5000ms' : '0ms'} linear`
                      : 'opacity 500ms ease-in-out'
                  }}
                />
                {/* AL-AKSHA Style Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/60" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Side Navigation Dots (SUMS Style) */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content with Staggered Animations */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* AL-AKSHA Brand Logo */}
          <div className={`mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mx-auto mb-8 w-fit">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold text-white tracking-wider mb-2">
                AL-AKSHA
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-manrope font-medium text-white/90 tracking-[0.2em] uppercase">
                DEVELOPERS
              </p>
            </div>
          </div>

          {/* Slide Content with Staggered Fade-up Animations */}
          <div className="relative">
            {/* Title with staggered animation - 100ms delay */}
            <h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6 leading-tight will-change-transform transition-all duration-600 ease-in-out ${
                isImageFaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isImageFaded ? '100ms' : '0ms'
              }}
            >
              {slides[currentSlide]?.title}
            </h2>
            
            {/* Subtitle with staggered animation - 200ms delay */}
            <h3 
              className={`text-xl md:text-2xl lg:text-3xl font-inter font-medium mb-8 text-white/95 will-change-transform transition-all duration-600 ease-in-out ${
                isImageFaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isImageFaded ? '200ms' : '0ms'
              }}
            >
              {slides[currentSlide]?.subtitle}
            </h3>

            {/* Description with staggered animation - 250ms delay */}
            <p 
              className={`text-base md:text-lg lg:text-xl mb-10 leading-relaxed font-inter font-light max-w-4xl mx-auto text-white/85 will-change-transform transition-all duration-600 ease-in-out ${
                isImageFaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isImageFaded ? '250ms' : '0ms'
              }}
            >
              {slides[currentSlide]?.description}
            </p>

            {/* CTA Buttons with staggered animation - 300ms delay */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center will-change-transform transition-all duration-600 ease-in-out ${
                isImageFaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isImageFaded ? '300ms' : '0ms'
              }}
            >
              <Button 
                size="lg" 
                className="px-10 py-4 text-base font-inter font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 gold-glow hero-button transition-all duration-400 shadow-xl hover:shadow-2xl"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-4 text-base font-inter font-medium border-2 border-white/70 text-white hover:bg-white/10 hover:border-white/90 transition-all duration-400 backdrop-blur-sm shadow-lg hover:shadow-xl hero-button"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 bottom-8 z-20 p-3 rounded-full bg-white/25 backdrop-blur-md text-white hover:bg-white/35 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-6 bottom-8 z-20 p-3 rounded-full bg-white/25 backdrop-blur-md text-white hover:bg-white/35 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Premium Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-white/10 via-white/20 to-white/10">
        <div 
          className="h-full bg-gradient-to-r from-white via-white/90 to-white transition-all duration-500 ease-in-out shadow-lg"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        />
      </div>
    </section>
  );
};

export default FastHeroSlider;