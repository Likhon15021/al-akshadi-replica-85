import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-tertiary/50" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-white rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Premium Logo */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="mx-auto mb-8 w-fit p-6 glass-effect rounded-2xl backdrop-blur-md bg-white/10">
              <div className="text-3xl font-bold text-white">SUMS</div>
              <div className="text-sm font-medium text-white/80 tracking-widest">REAL ESTATE</div>
            </div>
          </div>

          {/* Slide Content */}
          <div 
            key={currentSlide}
            className="animate-fade-in"
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              <span className="block mb-2">{slides[currentSlide].title}</span>
              <span className="block mb-2 text-white/90">{slides[currentSlide].subtitle}</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              {slides[currentSlide].description}
              <br />
              <span className="text-white/90 font-medium">SUMS REAL ESTATE (PVT.) LTD</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-10 py-6 text-lg font-medium bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Sparkles className="mr-2 h-5 w-5" />
                {slides[currentSlide].cta1}
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-medium glass-effect border-white/30 text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Zap className="mr-2 h-5 w-5" />
                {slides[currentSlide].cta2}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

export default HeroSlider;