import { useState } from 'react';
import ProjectFilter from '@/components/ProjectFilter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

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
    },
    {
      title: "Swadhinata Tower",
      location: "C&B Mor, Kazihata, Rajpara, Rajshahi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      slug: "swadhinata-tower"
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
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-tertiary/5">
        <div className="container mx-auto px-4 text-center">
          <div 
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Discover our portfolio of premium apartment complexes and modern living spaces 
              across Rajshahi's most prestigious locations.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Project Filter */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ProjectFilter 
            ongoingProjects={ongoingProjects}
            completedProjects={completedProjects}
            upcomingProjects={upcomingProjects}
            showAll={true}
          />
        </div>
      </section>
    </main>
  );
};

export default Projects;