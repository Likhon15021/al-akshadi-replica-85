import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Building2, Calendar, ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';

interface Project {
  title: string;
  location: string;
  image: string;
  slug: string;
  status?: 'ongoing' | 'completed' | 'upcoming';
}

interface AnimatedProjectsSliderProps {
  ongoingProjects: Project[];
  completedProjects: Project[];
  upcomingProjects: Project[];
}

const AnimatedProjectsSlider: React.FC<AnimatedProjectsSliderProps> = ({
  ongoingProjects,
  completedProjects,
  upcomingProjects
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ongoing' | 'completed' | 'upcoming'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Combine all projects with status
  const allProjects = [
    ...ongoingProjects.map(p => ({ ...p, status: 'ongoing' as const })),
    ...completedProjects.map(p => ({ ...p, status: 'completed' as const })),
    ...upcomingProjects.map(p => ({ ...p, status: 'upcoming' as const }))
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.status === activeFilter);

  // Group projects into slides of 3
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(filteredProjects.length / projectsPerSlide);
  const projectSlides = [];
  
  for (let i = 0; i < filteredProjects.length; i += projectsPerSlide) {
    projectSlides.push(filteredProjects.slice(i, i + projectsPerSlide));
  }

  const filters = [
    { key: 'all', label: 'All Projects', count: allProjects.length },
    { key: 'ongoing', label: 'Ongoing', count: ongoingProjects.length },
    { key: 'completed', label: 'Completed', count: completedProjects.length },
    { key: 'upcoming', label: 'Upcoming', count: upcomingProjects.length }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-yellow-500';
      case 'completed': return 'bg-green-500';
      case 'upcoming': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Ongoing';
      case 'completed': return 'Completed';
      case 'upcoming': return 'Upcoming';
      default: return 'Project';
    }
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 relative overflow-hidden bg-gray-50">
      {/* Bland Background */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(200, 200, 200, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(180, 180, 180, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(220, 220, 220, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(200, 200, 200, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Subtle Floating Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-gray-400/30 rounded-full blur-sm"
            style={{
              left: `${25 + i * 20}%`,
              top: `${40 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - iOS 26 Beta Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-8 tracking-tight"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            Our{' '}
            <span className="text-gray-600">
              Projects
            </span>
          </motion.h2>

          {/* Filter Pills - iOS 26 Beta Style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as any)}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border ${
                  activeFilter === filter.key
                    ? 'bg-gray-200 text-gray-800 border-gray-300 shadow-lg shadow-gray-200/50'
                    : 'bg-white/80 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300'
                }`}
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                {filter.label}
                <span className="ml-2 text-xs opacity-60">({filter.count})</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Slider Container - Bland Style */}
          <div className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-gray-200/50">
            <AnimatePresence mode="wait">
              {projectSlides.length > 0 && (
                <motion.div
                  key={`${activeFilter}-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="p-8 lg:p-12"
                >
                  {/* Projects Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projectSlides[currentIndex]?.map((project, projectIndex) => (
                      <motion.div
                        key={`${project.slug}-${projectIndex}`}
                        initial={{ 
                          opacity: 0, 
                          y: 50,
                          rotateX: -15,
                          scale: 0.9
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          rotateX: 0,
                          scale: 1
                        }}
                        transition={{ 
                          delay: projectIndex * 0.15,
                          duration: 0.8,
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        whileHover={{
                          y: -10,
                          rotateY: 5,
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                        className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg shadow-gray-200/50"
                      >
                        {/* Project Image with Parallax Video Background */}
                        <div className="relative h-64 overflow-hidden rounded-t-2xl">
                          {/* Parallax Video Background */}
                          <div className="absolute inset-0 w-full h-full">
                            <video
                              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                              autoPlay
                              muted
                              loop
                              playsInline
                            >
                              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20" />
                          </div>
                          
                          {/* Main Project Image Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${project.image})` }}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          </motion.div>
                          
                          {/* Status Badge - Creative Animation */}
                          <motion.div
                            initial={{ 
                              opacity: 0, 
                              scale: 0,
                              rotate: -180,
                              x: -50
                            }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              rotate: 0,
                              x: 0
                            }}
                            transition={{ 
                              delay: 0.4 + projectIndex * 0.1,
                              duration: 0.6,
                              type: "spring",
                              stiffness: 200,
                              damping: 10
                            }}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.2 }
                            }}
                            className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-white text-xs font-medium ${getStatusColor(project.status || '')}`}
                          >
                            {getStatusText(project.status || '')}
                          </motion.div>

                          {/* View Details Button - Creative Animation */}
                          <motion.button
                            initial={{ 
                              opacity: 0, 
                              y: 30,
                              scale: 0.8,
                              rotate: 45
                            }}
                            animate={{ 
                              opacity: 0, 
                              y: 30,
                              scale: 0.8,
                              rotate: 45
                            }}
                            whileHover={{
                              opacity: 1,
                              y: 0,
                              scale: 1.1,
                              rotate: 0,
                              transition: { duration: 0.3 }
                            }}
                            whileTap={{ 
                              scale: 0.9,
                              rotate: -5
                            }}
                            className="absolute bottom-3 right-3 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full text-white font-medium hover:bg-white/30 border border-white/30"
                          >
                            View Details
                          </motion.button>
                        </div>

                        {/* Project Content - Bland Style */}
                        <div className="p-6 bg-white/90 backdrop-blur-sm">
                          <motion.h3
                            initial={{ 
                              opacity: 0, 
                              x: -30,
                              rotateX: -90
                            }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              rotateX: 0
                            }}
                            transition={{ 
                              delay: 0.5 + projectIndex * 0.1,
                              duration: 0.6,
                              type: "spring",
                              stiffness: 150
                            }}
                            className="text-lg font-medium text-gray-800 mb-3"
                            style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
                          >
                            {project.title}
                          </motion.h3>
                          
                          <motion.div
                            initial={{ 
                              opacity: 0, 
                              x: -20,
                              scale: 0.9
                            }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              scale: 1
                            }}
                            transition={{ 
                              delay: 0.6 + projectIndex * 0.1,
                              duration: 0.5,
                              type: "spring",
                              stiffness: 120
                            }}
                            className="flex items-center text-gray-600 mb-4"
                          >
                            <motion.div
                              animate={{ 
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              <MapPin size={14} className="mr-2 text-gray-500" />
                            </motion.div>
                            <span className="text-sm font-medium">{project.location}</span>
                          </motion.div>

                          <motion.div
                            initial={{ 
                              opacity: 0, 
                              y: 20,
                              rotateZ: -5
                            }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              rotateZ: 0
                            }}
                            transition={{ 
                              delay: 0.7 + projectIndex * 0.1,
                              duration: 0.5,
                              type: "spring",
                              stiffness: 100
                            }}
                            className="flex items-center justify-between"
                          >
                            <span className="text-xs text-gray-500 font-medium">
                              Premium Living
                            </span>
                            <motion.button
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ 
                                delay: 0.8 + projectIndex * 0.1,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200
                              }}
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                              whileTap={{ 
                                scale: 0.9,
                                rotate: -5
                              }}
                              className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors duration-200 backdrop-blur-sm border border-gray-300"
                            >
                              Explore
                            </motion.button>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>


                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Arrows - iOS 26 Beta Style */}
            {totalSlides > 1 && (
              <>
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-gray-200/50"
                >
                  <ChevronLeft size={20} />
                </motion.button>
                
                <motion.button
                  onClick={nextSlide}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-gray-200/50"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </>
            )}
          </div>

          {/* Dots Indicator - iOS 26 Beta Style */}
          {totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-12 gap-3"
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
                    index === currentIndex
                      ? 'bg-gray-600 scale-150 shadow-lg shadow-gray-400/50'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </motion.div>
          )}

          {/* Auto-play Indicator - iOS 26 Beta Style */}
          {totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center mt-6"
            >
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full text-gray-600 text-sm font-medium hover:text-gray-800 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedProjectsSlider;
