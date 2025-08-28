import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
      <div className="h-full bg-gradient-to-r from-primary via-tertiary to-secondary relative">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-tertiary to-secondary transition-all duration-100 ease-out"
          style={{ 
            width: `${Math.min(scrollProgress, 100)}%`,
            boxShadow: '0 0 10px hsl(var(--primary) / 0.5)'
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;