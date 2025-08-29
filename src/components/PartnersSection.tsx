import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    {
      name: 'Bangladesh Bank',
      logo: null,
      category: 'Financial Partner',
      color: 'bg-blue-600',
      text: 'BB'
    },
    {
      name: 'Rajshahi City Corporation',
      logo: null,
      category: 'Government Partner',
      color: 'bg-green-600',
      text: 'RCC'
    },
    {
      name: 'Dhaka Bank',
      logo: null,
      category: 'Banking Partner',
      color: 'bg-red-600',
      text: 'DB'
    },
    {
      name: 'Square Group',
      logo: null,
      category: 'Corporate Partner',
      color: 'bg-purple-600',
      text: 'SG'
    },
    {
      name: 'Beximco',
      logo: null,
      category: 'Business Partner',
      color: 'bg-orange-600',
      text: 'BX'
    },
    {
      name: 'Walton',
      logo: null,
      category: 'Technology Partner',
      color: 'bg-cyan-600',
      text: 'WT'
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 relative overflow-hidden bg-white">
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
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Partners
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Trusted by leading organizations and institutions across Bangladesh
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ 
                opacity: 0, 
                y: 30,
                scale: 0.8
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                scale: 1
              } : { 
                opacity: 0, 
                y: 30,
                scale: 0.8
              }}
              transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Partner Card */}
              <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                {/* Logo Container */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative h-20 mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${partner.color} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <span className="text-white font-bold text-lg">{partner.text}</span>
                  </div>
                </motion.div>

                {/* Partner Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {partner.category}
                  </p>
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4"
            >
              <span className="text-white text-sm font-bold">✓</span>
            </motion.div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Trusted Partnership</p>
              <p className="text-sm text-gray-600">Building relationships that last</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
