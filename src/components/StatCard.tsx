import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  number: number;
  label: string;
  suffix?: string;
}

const StatCard = ({ number, label, suffix = '' }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate counter
          let start = 0;
          const duration = 2000;
          const increment = number / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number, isVisible]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-4 animate-counter">
        {count}{suffix}
      </div>
      <div className="text-lg text-muted-foreground font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default StatCard;