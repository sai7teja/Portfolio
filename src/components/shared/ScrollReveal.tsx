import { useEffect, useRef, useState, ReactNode } from 'react';
import '../../styles/components/scroll-reveal.css';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 800,
  once = true,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  let transform = 'translate(0, 0)';
  if (!isVisible) {
    switch (direction) {
      case 'up': transform = `translateY(${distance}px)`; break;
      case 'down': transform = `translateY(-${distance}px)`; break;
      case 'left': transform = `translateX(${distance}px)`; break;
      case 'right': transform = `translateX(-${distance}px)`; break;
    }
  }

  const style = {
    transform,
    transitionDelay: `${delay}s`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`} 
      style={style}
    >
      {children}
    </div>
  );
}
