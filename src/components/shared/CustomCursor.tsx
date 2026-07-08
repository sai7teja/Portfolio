import { useEffect, useRef, useState } from 'react';
import '../../styles/components/custom-cursor.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!cursorRef.current || !textRef.current) return;
      
      const cursorState = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      cursorRef.current.className = 'custom-cursor';
      if (cursorState === 'pointer' || target.closest('a, button')) {
        cursorRef.current.classList.add('is-pointer');
      } else if (cursorState === 'text' || target.closest('p, h1, h2, h3, h4, h5, h6, span')) {
        cursorRef.current.classList.add('is-text');
      } else if (cursorState === 'view') {
        cursorRef.current.classList.add('is-view');
        textRef.current.textContent = 'View';
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span ref={textRef} className="custom-cursor-text"></span>
    </div>
  );
}
