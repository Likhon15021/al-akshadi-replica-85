import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  decimals = 0, 
  prefix = '', 
  suffix = '' 
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

  const countTo = (value: number) => {
    setIsAnimating(true);
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuart(frame / totalFrames);
      setCount(start + (value - start) * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(value);
        setIsAnimating(false);
      }
    }, frameRate);
  };

  const reset = () => {
    setCount(start);
    setIsAnimating(false);
  };

  const formattedCount = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { count: formattedCount, countTo, reset, isAnimating };
};

export default useCountUp;