import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Building2, CheckCircle, Clock, Target } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums" />;
};

const StatCard = ({ icon, number, label, suffix, delay = 0 }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Background gradient that changes on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl opacity-80 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
      
      <div className="relative p-8 lg:p-10 text-center">
        {/* Icon with animation */}
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 mb-6 group-hover:scale-110 transition-all duration-500"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary group-hover:text-secondary transition-colors duration-500">
            {icon}
          </div>
        </motion.div>

        {/* Number with count-up animation */}
        <div className="mb-4">
          <div className="text-5xl lg:text-6xl xl:text-7xl font-bold font-raleway text-foreground mb-2">
            <AnimatedNumber value={number} suffix={suffix} />
          </div>
          
          {/* Animated underline */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
          />
        </div>

        {/* Label */}
        <h3 className="text-xl lg:text-2xl font-semibold font-raleway text-foreground/80 group-hover:text-foreground transition-colors duration-300">
          {label}
        </h3>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl transform group-hover:scale-110" />
    </motion.div>
  );
};

const AnimatedStatsSection = () => {
  const stats = [
    {
      icon: <Building2 size={32} />,
      number: 8,
      label: "Ongoing Projects",
      suffix: "+"
    },
    {
      icon: <CheckCircle size={32} />,
      number: 1,
      label: "Completed Projects",
      suffix: "+"
    },
    {
      icon: <Clock size={32} />,
      number: 1,
      label: "Upcoming Projects",
      suffix: ""
    }
  ];

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl"
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
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
          >
            <Target size={32} className="text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              Excellence in Numbers
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground font-light font-inter max-w-3xl mx-auto">
            Building dreams with precision, passion, and proven expertise across Rajshahi
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Bottom CTA text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-lg text-muted-foreground font-inter italic">
            "Every project reflects our commitment to quality and innovation"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;