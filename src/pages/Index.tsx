import FullscreenCardSlider from '@/components/FullscreenCardSlider';
import AboutUsSection from '@/components/AboutUsSection';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import AnimatedProjectsSlider from '@/components/AnimatedProjectsSlider';
import ExplorerSection from '@/components/ExplorerSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PartnersSection from '@/components/PartnersSection';

const Index = () => {
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
    },
    {
      title: "SUMS Heights",
      location: "Shaheb Bazar, Rajshahi",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      slug: "sums-heights"
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
      {/* Fullscreen Card Hero Slider */}
      <FullscreenCardSlider />
      
      {/* About Us Section */}
      <AboutUsSection />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton />

      {/* Animated Projects Slider */}
      <AnimatedProjectsSlider 
        ongoingProjects={ongoingProjects}
        completedProjects={completedProjects}
        upcomingProjects={upcomingProjects}
      />

      {/* Explorer Section */}
      <ExplorerSection />

      {/* Enhanced Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Partners Section */}
      <PartnersSection />
    </main>
  );
};

export default Index;
