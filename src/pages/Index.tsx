import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PremiumRealEstateHero from '@/components/PremiumRealEstateHero';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import StatCard from '@/components/StatCard';
import ProjectFilter from '@/components/ProjectFilter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Building, Home, Award, Users, Sparkles, Zap, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const ongoingProjects = [
    {
      title: "SUMS M.A Tower",
      location: "Ranibazar, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      slug: "sums-ma-tower"
    },
    {
      title: "SUMS BMA Tower", 
      location: "Medical College Road, Sipaipara, Rajshahi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      slug: "sums-bma-tower"
    },
    {
      title: "SUMS City",
      location: "Hoseniganj, Boalia, Rajshahi", 
      image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?w=400&h=300&fit=crop",
      slug: "sums-city"
    },
    {
      title: "SUMS Vista",
      location: "Terokhadia, Rajpara, Rajshahi",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      slug: "sums-vista"
    },
    {
      title: "Rivery",
      location: "Sipaipara, Rajpara, Rajshahi",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      slug: "rivery"
    },
    {
      title: "ALI PALACE",
      location: "Seroil, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop",
      slug: "ali-palace"
    }
  ];

  const completedProjects = [
    {
      title: "Adori",
      location: "Ambagan, Uposhohor, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      slug: "adori"
    },
    {
      title: "Dokhina Niloy",
      location: "Padma Residential Area, Rajshahi",
      image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=400&h=300&fit=crop",
      slug: "dokhina-niloy"
    },
    {
      title: "Sagor Bilash",
      location: "Sagor Para, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&h=300&fit=crop",
      slug: "sagor-bilash"
    },
    {
      title: "Orchid Tower",
      location: "Hoseniganj, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      slug: "orchid-tower"
    }
  ];

  const upcomingProjects = [
    {
      title: "Golden Heights",
      location: "Shaheb Bazar, Rajshahi",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      slug: "golden-heights"
    }
  ];

  return (
    <main>
      {/* Premium Real Estate Hero */}
      <PremiumRealEstateHero />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton />

      {/* Premium Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-muted/20 via-primary/5 to-tertiary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={statsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Building dreams with precision and passion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:scale-105">
              <StatCard number={10} label="Ongoing Projects" />
            </div>
            <div className="glass-effect rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:scale-105">
              <StatCard number={8} label="Completed Projects" />
            </div>
            <div className="glass-effect rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:scale-105">
              <StatCard number={1} label="Upcoming Projects" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Project Filter Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div 
            ref={projectsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              projectsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
              Our <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Discover our portfolio of premium living spaces and modern architectural marvels 
              across Rajshahi's most desirable locations.
            </p>
          </div>
          
          <ProjectFilter 
            ongoingProjects={ongoingProjects}
            completedProjects={completedProjects}
            upcomingProjects={upcomingProjects}
          />

          <div className="text-center mt-16">
            <Link to="/projects">
              <Button size="lg" className="px-12 py-6 text-lg font-medium bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Sparkles className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-tertiary/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div 
            ref={featuresRef}
            className={`text-center mb-20 transition-all duration-1000 ${
              featuresVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Why Choose <span className="gradient-text">SUMS</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              We combine innovative design, sustainable practices, and cutting-edge technology 
              to create living spaces that exceed expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="w-32 h-32 glass-effect rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 premium-shadow hover:premium-shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Home size={32} className="text-primary" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-secondary-600 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles size={16} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Smart Living</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern technology integrated into every apartment for enhanced comfort, 
                security, and energy efficiency in your daily life.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="w-32 h-32 glass-effect rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 premium-shadow hover:premium-shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-tertiary/20 to-tertiary/10 rounded-2xl flex items-center justify-center">
                    <Shield size={32} className="text-tertiary" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-secondary-600 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles size={16} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Environmentally conscious building practices using premium materials 
                for sustainable and luxurious green development.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="w-32 h-32 glass-effect rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 premium-shadow hover:premium-shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center">
                    <Zap size={32} className="text-secondary" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-secondary-600 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles size={16} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Latest construction techniques and cutting-edge architectural innovations 
                for superior quality and timeless design excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Schedule Visit CTA */}
      <section className="py-24 bg-gradient-to-r from-tertiary via-tertiary-600 to-primary text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Building size={32} className="text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Experience Luxury
              <span className="block text-3xl md:text-4xl font-light opacity-90">
                Schedule Your Private Tour
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our premium living spaces with a personalized tour. 
              See firsthand the quality, craftsmanship, and attention to detail 
              that defines SUMS Real Estate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-12 py-6 text-lg font-medium bg-white text-tertiary hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Users className="mr-3 h-5 w-5" />
                  Schedule Premium Tour
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-12 py-6 text-lg font-medium border-white/30 text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Call Now: +880 XXX XXXXXXX
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Carousel */}
      <TestimonialCarousel />
    </main>
  );
};

export default Index;
