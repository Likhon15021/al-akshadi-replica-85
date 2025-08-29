import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Building2, Calendar, Users, Star, Eye, Heart, Share2, Filter, Grid, List } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const allProjects = [
    {
      title: "SUMS M.A Tower",
      location: "Ranibazar, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      slug: "sums-ma-tower",
      status: "ongoing",
      progress: 75,
      units: 120,
      price: "৳45L - ৳85L",
      completion: "Dec 2024",
      rating: 4.8,
      views: 1250,
      likes: 89
    },
    {
      title: "SUMS BMA Tower", 
      location: "Medical College Road, Sipaipara, Rajshahi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      slug: "sums-bma-tower",
      status: "ongoing",
      progress: 60,
      units: 80,
      price: "৳35L - ৳75L",
      completion: "Mar 2025",
      rating: 4.9,
      views: 980,
      likes: 67
    },
    {
      title: "SUMS City",
      location: "Hoseniganj, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?w=600&h=400&fit=crop",
      slug: "sums-city",
      status: "ongoing",
      progress: 45,
      units: 200,
      price: "৳55L - ৳95L",
      completion: "Jun 2025",
      rating: 4.7,
      views: 2100,
      likes: 156
    },
    {
      title: "SUMS Vista",
      location: "Terokhadia, Rajpara, Rajshahi",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      slug: "sums-vista",
      status: "ongoing",
      progress: 30,
      units: 150,
      price: "৳40L - ৳80L",
      completion: "Sep 2025",
      rating: 4.6,
      views: 890,
      likes: 45
    },
    {
      title: "Rivery",
      location: "Sipaipara, Rajpara, Rajshahi",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      slug: "rivery",
      status: "ongoing",
      progress: 85,
      units: 100,
      price: "৳50L - ৳90L",
      completion: "Nov 2024",
      rating: 4.9,
      views: 1750,
      likes: 123
    },
    {
      title: "ALI PALACE",
      location: "Seroil, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
      slug: "ali-palace",
      status: "ongoing",
      progress: 20,
      units: 90,
      price: "৳30L - ৳70L",
      completion: "Dec 2025",
      rating: 4.5,
      views: 650,
      likes: 34
    },
    {
      title: "Adori",
      location: "Ambagan, Uposhohor, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      slug: "adori",
      status: "completed",
      progress: 100,
      units: 60,
      price: "৳25L - ৳65L",
      completion: "Completed",
      rating: 4.8,
      views: 3200,
      likes: 245
    },
    {
      title: "Dokhina Niloy",
      location: "Padma Residential Area, Rajshahi",
      image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=600&h=400&fit=crop",
      slug: "dokhina-niloy",
      status: "completed",
      progress: 100,
      units: 40,
      price: "৳20L - ৳55L",
      completion: "Completed",
      rating: 4.7,
      views: 2800,
      likes: 189
    },
    {
      title: "Sagor Bilash",
      location: "Sagor Para, Boalia, Rajshahi",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop",
      slug: "sagor-bilash",
      status: "completed",
      progress: 100,
      units: 75,
      price: "৳35L - ৳75L",
      completion: "Completed",
      rating: 4.9,
      views: 4100,
      likes: 312
    },
    {
      title: "Golden Heights",
      location: "Shaheb Bazar, Rajshahi",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      slug: "golden-heights",
      status: "upcoming",
      progress: 0,
      units: 180,
      price: "৳60L - ৳1.2Cr",
      completion: "2026",
      rating: 0,
      views: 450,
      likes: 23
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: allProjects.length },
    { key: 'ongoing', label: 'Ongoing', count: allProjects.filter(p => p.status === 'ongoing').length },
    { key: 'completed', label: 'Completed', count: allProjects.filter(p => p.status === 'completed').length },
    { key: 'upcoming', label: 'Upcoming', count: allProjects.filter(p => p.status === 'upcoming').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.status === activeFilter);

  return (
    <main className="pt-20 bg-white">
      {/* Hero Section - Professional Typography */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-8 tracking-tight"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Discover our portfolio of premium apartment complexes and modern living spaces 
              across Rajshahi's most prestigious locations.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {[
                { label: 'Total Projects', value: allProjects.length },
                { label: 'Units Delivered', value: '1,200+' },
                { label: 'Happy Families', value: '950+' },
                { label: 'Years Experience', value: '15+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter & View Controls */}
      <section ref={ref} className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Filter Pills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  whileHover={{ scale: 1.05, y: -2 }}
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

            {/* View Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 bg-gray-100 rounded-2xl p-1"
            >
              <motion.button
                onClick={() => setViewMode('grid')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Grid size={20} />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <List size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${viewMode}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className={viewMode === 'grid' 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
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
                    delay: index * 0.1,
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
                  className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-80 h-64' : 'h-64'
                  }`}>
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </motion.div>
                    
                    {/* Status Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xl border border-white/20 ${
                        project.status === 'ongoing' 
                          ? 'bg-orange-500/90 text-white' 
                          : project.status === 'completed'
                          ? 'bg-green-500/90 text-white'
                          : 'bg-blue-500/90 text-white'
                      }`}
                    >
                      {project.status === 'ongoing' ? 'Ongoing' : 
                       project.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </motion.div>

                    {/* Progress Bar */}
                    {project.status === 'ongoing' && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                            className="bg-white h-2 rounded-full"
                          />
                        </div>
                        <div className="text-white text-xs mt-1">{project.progress}% Complete</div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Heart size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Share2 size={16} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="flex items-center text-gray-600 mb-4"
                    >
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </motion.div>

                    {/* Project Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="grid grid-cols-2 gap-4 mb-6"
                    >
                      <div className="flex items-center text-gray-600">
                        <Building2 size={16} className="mr-2" />
                        <span className="text-sm">{project.units} Units</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{project.completion}</span>
                      </div>
                    </motion.div>

                    {/* Price & Rating */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between mb-6"
                    >
                      <div className="text-lg font-bold text-gray-800">{project.price}</div>
                      {project.rating > 0 && (
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-500 fill-current mr-1" />
                          <span className="text-sm text-gray-600">{project.rating}</span>
                        </div>
                      )}
                    </motion.div>

                    {/* Engagement Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between mb-6"
                    >
                      <div className="flex items-center text-gray-500 text-sm">
                        <Eye size={14} className="mr-1" />
                        <span>{project.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Heart size={14} className="mr-1" />
                        <span>{project.likes}</span>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} className="ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Projects;