import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, Users, Award, Target, Eye, Heart, Lightbulb, Shield, Star, ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Ahmed Rahman",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 15+ years in real estate development"
    },
    {
      name: "Fatima Khan",
      role: "Chief Architect",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Award-winning architect specializing in sustainable design"
    },
    {
      name: "Mohammad Ali",
      role: "Project Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in large-scale construction project management"
    },
    {
      name: "Sara Ahmed",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Creative mind behind our innovative interior designs"
    }
  ];

  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading real estate developer in Bangladesh, creating innovative communities that bring people together.",
      animation: "vision"
    },
    {
      icon: Heart,
      title: "Our Mission",
      description: "Creating exceptional living spaces that enhance quality of life while maintaining highest construction standards.",
      animation: "mission"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technology and sustainable practices in every project we undertake.",
      animation: "innovation"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Rigorous quality control and premium finishing in every detail of our construction projects.",
      animation: "quality"
    }
  ];

  return (
    <main className="pt-20 bg-white">
      {/* Hero Section - iOS 26 Beta Style */}
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
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SUMS
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Building dreams with modern spaces and premium apartment complexes. 
              We are committed to delivering quality construction and smart living solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={ref} className="py-16 lg:py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Our Story
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 text-gray-600 leading-relaxed"
              >
                <p className="text-lg">
                  SUMS REAL ESTATE (PVT.) LTD has been at the forefront of real estate 
                  development in Rajshahi, creating modern living spaces that combine 
                  comfort, style, and functionality.
                </p>
                <p className="text-lg">
                  With years of experience in the construction industry, we have built a 
                  reputation for delivering high-quality apartment complexes and residential 
                  projects that exceed our clients' expectations.
                </p>
                <p className="text-lg">
                  Our commitment to excellence, attention to detail, and customer satisfaction 
                  has made us one of the most trusted developers in the region.
                </p>
              </motion.div>
            </motion.div>

            {/* Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                <DotLottieReact
                  src="/aboutus.lottie"
                  loop
                  autoplay
                  speed={2.5}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
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
              className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
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
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="text-xl font-semibold text-gray-800 mb-2"
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="text-blue-600 font-medium mb-3"
                  >
                    {member.role}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    {member.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
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
              className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
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
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5 
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                  >
                    <value.icon size={32} className="text-blue-600" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                      {value.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;