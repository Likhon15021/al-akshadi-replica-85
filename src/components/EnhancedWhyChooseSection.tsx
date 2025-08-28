import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Shield, Zap, Sparkles, Award, Users, Leaf } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
}

const FeatureCard = ({ icon, title, description, delay, gradient }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        rotateX: 2,
        transition: { duration: 0.3 }
      }}
      className="group relative text-center"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Background card */}
      <div className="relative p-8 lg:p-10 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white/80">
        
        {/* Icon container with enhanced animation */}
        <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-8">
          <motion.div 
            className={`w-full h-full rounded-2xl flex items-center justify-center ${gradient} group-hover:scale-110 transition-all duration-500`}
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.6 }
            }}
          >
            <div className="text-white group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </motion.div>
          
          {/* Floating sparkle */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-secondary to-secondary-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100"
          >
            <Sparkles size={12} className="text-white" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3 
          className="text-2xl lg:text-3xl font-bold font-raleway text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed font-inter lg:text-lg group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* Animated border that appears on hover */}
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-transparent"
          whileHover={{ 
            borderImage: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary))) 1',
            borderColor: 'transparent'
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-3xl ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl scale-110`} />
      </div>
    </motion.div>
  );
};

const EnhancedWhyChooseSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Home size={40} />,
      title: "Smart Living",
      description: "Modern technology integrated into every apartment for enhanced comfort, security, and energy efficiency in your daily life.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      delay: 0
    },
    {
      icon: <Shield size={40} />,
      title: "Premium Quality", 
      description: "Environmentally conscious building practices using premium materials for sustainable and luxurious green development.",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      delay: 0.2
    },
    {
      icon: <Zap size={40} />,
      title: "Innovation First",
      description: "Latest construction techniques and cutting-edge architectural innovations for superior quality and timeless design excellence.",
      gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
      delay: 0.4
    },
    {
      icon: <Award size={40} />,
      title: "Award Winning",
      description: "Recognized excellence in real estate development with multiple industry awards for outstanding project delivery and customer satisfaction.",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      delay: 0.6
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -120, 60, 0],
            y: [0, 100, -60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-tertiary/30 to-primary/30 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 80, -40, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-secondary/40 to-tertiary/40 rounded-full blur-lg"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-8"
          >
            <Users size={40} className="text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              SUMS
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-muted-foreground font-light font-inter max-w-4xl mx-auto leading-relaxed"
          >
            We combine innovative design, sustainable practices, and cutting-edge technology 
            to create living spaces that exceed expectations
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              gradient={feature.gradient}
            />
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <Leaf size={24} className="text-emerald-500" />
            <span className="font-semibold text-foreground font-inter">
              Sustainable • Premium • Innovative
            </span>
            <Sparkles size={24} className="text-amber-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedWhyChooseSection;