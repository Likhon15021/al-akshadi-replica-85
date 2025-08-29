import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ArrowRight, Star, Clock, Users } from 'lucide-react';

interface ExplorerItem {
  id: string;
  title: string;
  location: string;
  image: string;
  rating: number;
  duration: string;
  visitors: string;
  description: string;
}

const ExplorerSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const explorerItems: ExplorerItem[] = [
    {
      id: '1',
      title: 'Rajshahi Heritage Walk',
      location: 'Historic Rajshahi',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      rating: 4.8,
      duration: '2-3 Hours',
      visitors: '500+',
      description: 'Explore the rich cultural heritage and architectural marvels of historic Rajshahi.'
    },
    {
      id: '2',
      title: 'Modern City Tour',
      location: 'New Rajshahi',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      rating: 4.9,
      duration: '3-4 Hours',
      visitors: '800+',
      description: 'Discover the modern developments and contemporary lifestyle in New Rajshahi.'
    },
    {
      id: '3',
      title: 'Riverside Experience',
      location: 'Padma Riverfront',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      rating: 4.7,
      duration: '1-2 Hours',
      visitors: '300+',
      description: 'Enjoy the serene beauty of Padma River and its surrounding landscapes.'
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 tracking-tight"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            Explore{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rajshahi
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the beauty and charm of Rajshahi through our curated experiences
          </motion.p>
        </motion.div>

        {/* Explorer Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {explorerItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ 
                opacity: 0, 
                y: 50,
                rotateX: -15,
                scale: 0.9
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              } : { 
                opacity: 0, 
                y: 50,
                rotateX: -15,
                scale: 0.9
              }}
              transition={{
                delay: index * 0.2,
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
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
                
                {/* Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1"
                >
                  <Star size={14} className="text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-xl font-bold text-gray-800 mb-2"
                >
                  {item.title}
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="flex items-center text-gray-600 mb-3"
                >
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{item.location}</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="text-gray-600 mb-4 text-sm leading-relaxed"
                >
                  {item.description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users size={14} className="mr-1" />
                    <span>{item.visitors} visitors</span>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <span>Explore Now</span>
                  <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorerSection;
