import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';

interface Project {
  title: string;
  location: string;
  image: string;
  slug: string;
  status?: 'ongoing' | 'completed' | 'upcoming';
}

interface ModernProjectsSectionProps {
  ongoingProjects: Project[];
  completedProjects: Project[];
  upcomingProjects: Project[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.4 }
      }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Image container with parallax effect */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        
        {/* Gradient overlay that appears on hover */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          transition={{ duration: 0.3 }}
        />
        
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            project.status === 'ongoing' ? 'bg-blue-500/20 text-blue-100 border border-blue-400/30' :
            project.status === 'completed' ? 'bg-green-500/20 text-green-100 border border-green-400/30' :
            'bg-orange-500/20 text-orange-100 border border-orange-400/30'
          }`}>
            {project.status === 'ongoing' ? 'Ongoing' : 
             project.status === 'completed' ? 'Completed' : 'Upcoming'}
          </span>
        </div>

        {/* Hover action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 right-4"
          transition={{ duration: 0.3 }}
        >
          <Button 
            size="sm" 
            className="rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-all duration-300"
          >
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold font-raleway text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        <div className="flex items-center text-muted-foreground">
          <MapPin size={16} className="mr-2 text-primary" />
          <span className="font-inter text-sm">{project.location}</span>
        </div>
      </div>

      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 rounded-3xl border-2 border-transparent"
        whileHover={{ borderColor: 'hsl(var(--primary))' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ModernProjectsSection = ({ ongoingProjects, completedProjects, upcomingProjects }: ModernProjectsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ongoing' | 'completed' | 'upcoming'>('all');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allProjects = [
    ...ongoingProjects.map(p => ({ ...p, status: 'ongoing' as const })),
    ...completedProjects.map(p => ({ ...p, status: 'completed' as const })),
    ...upcomingProjects.map(p => ({ ...p, status: 'upcoming' as const }))
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.status === activeFilter);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const filters = [
    { key: 'all' as const, label: 'All Projects', count: allProjects.length },
    { key: 'ongoing' as const, label: 'Ongoing', count: ongoingProjects.length },
    { key: 'completed' as const, label: 'Completed', count: completedProjects.length },
    { key: 'upcoming' as const, label: 'Upcoming', count: upcomingProjects.length }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-gray-100/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
          >
            <Building2 size={32} className="text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-light font-inter max-w-3xl mx-auto mb-12">
            Discover our portfolio of premium living spaces and modern architectural marvels across Rajshahi's most desirable locations
          </p>

          {/* Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.1 * index }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-foreground hover:bg-gray-50 shadow-sm border'
                }`}
              >
                {filter.label} ({filter.count})
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile: Carousel, Desktop: Grid */}
        <div className="block md:hidden">
          {/* Mobile carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {filteredProjects.map((project, index) => (
                  <div key={`${project.slug}-${index}`} className="flex-[0_0_280px]">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={scrollPrev}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={scrollNext}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop: Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.slice(0, 6).map((project, index) => (
            <ProjectCard 
              key={`${project.slug}-${index}`} 
              project={project} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 shadow-xl hover:shadow-2xl rounded-full transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjectsSection;