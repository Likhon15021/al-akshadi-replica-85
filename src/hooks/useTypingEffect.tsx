import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export const useTypingEffect = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  loop = false 
}: UseTypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      setIsTyping(true);
      setIsDone(false);
      setDisplayText('');
      index = 0;

      const typeNextChar = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          setIsDone(true);
          
          if (loop) {
            timeoutId = setTimeout(() => {
              startTyping();
            }, delay + 2000);
          }
        }
      };

      timeoutId = setTimeout(typeNextChar, delay);
    };

    startTyping();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay, loop]);

  return { displayText, isTyping, isDone };
};

export default useTypingEffect;