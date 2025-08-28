import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  designation: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote: "This is the Third time we have built with SUMS Real Estate. The planning and building process was breezes mostly due to the excellent efforts from them. We love our new dream home! From the very beginning they were extremely helpful and knowledgeable of the building process.",
    name: "Md. Fazley Ali",
    designation: "Landowner, Swadhinata Tower, SUMS City, Ali Palace",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Our home was handover in December 2020. We could not have picked a better builder and our experience was great. I can say from experience it is at the top of the line, there's no shortage of quality in materials or service.",
    name: "Mr. Dollar",
    designation: "Landowner, Doctors Tower",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "From design to finished product, the SUMS Real Estate team handled every detail and took care of any issue that arose with urgency and professionalism. The communication throughout the process was on point.",
    name: "Dr. Sharmin Sultana",
    designation: "Flat Owner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b667566a?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "The attention to detail and quality of construction exceeded our expectations. SUMS Real Estate delivered exactly what they promised, on time and within budget. Highly recommended!",
    name: "Eng. Mahmudur Rahman",
    designation: "SUMS Vista Resident",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    quote: "Professional service from start to finish. The team was always available to address our concerns and the final result speaks for itself. We're extremely satisfied with our investment.",
    name: "Mrs. Fatema Begum",
    designation: "Rivery Complex Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-primary/5 to-tertiary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Hear from our satisfied clients who chose SUMS for their dream homes
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-effect rounded-3xl p-12 premium-shadow-lg hover:premium-shadow-xl transition-all duration-500 group relative max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 opacity-20">
                      <Quote size={80} className="text-primary" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Quote Text */}
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 italic font-light text-center">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-6">
                        <div className="relative">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500"
                            loading="lazy"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <h4 className="font-serif font-semibold text-foreground text-xl md:text-2xl mb-2">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm md:text-base text-primary font-medium">
                            {testimonial.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-white premium-shadow hover:premium-shadow-lg text-primary hover:text-primary-600 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-white premium-shadow hover:premium-shadow-lg text-primary hover:text-primary-600 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-primary' 
                    : 'w-6 bg-muted-foreground/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;