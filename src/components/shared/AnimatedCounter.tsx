import { useEffect, useRef, useState } from 'react';
import '../../styles/components/animated-counter.css';

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2000,
  className = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    
    if (isNaN(numericValue) || prefersReducedMotion) {
      setCount(value);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let startTimestamp: number | null = null;
          const easeOutQuad = (t: number) => t * (2 - t);
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = easeOutQuad(progress);
            
            setCount(Math.floor(easedProgress * numericValue).toString());
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
              setHasAnimated(true);
            }
          };
          
          window.requestAnimationFrame(step);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={`animated-counter ${className}`}>
      {count}{suffix}
    </span>
  );
}
