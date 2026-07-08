import { useEffect, useRef, ReactNode } from 'react';
import '../../styles/components/magnetic-element.css';

interface MagneticElementProps {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}

export default function MagneticElement({ 
  children, 
  strength = 0.3, 
  radius = 100,
  className = '' 
}: MagneticElementProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const wrapper = wrapperRef.current;
    const item = itemRef.current;
    if (!wrapper || !item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < radius) {
        item.style.transform = `translate(${distX * strength}px, ${distY * strength}px)`;
      } else {
        item.style.transform = `translate(0px, 0px)`;
      }
    };

    const handleMouseLeave = () => {
      item.style.transform = `translate(0px, 0px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, radius]);

  return (
    <div ref={wrapperRef} className={`magnetic-wrapper ${className}`}>
      <div ref={itemRef} className="magnetic-element">
        {children}
      </div>
    </div>
  );
}
