import { useEffect, useRef, useState } from 'react';
import '../../styles/components/journey.css';
import { about } from '../../data/portfolioData';
import ScrollReveal from '../shared/ScrollReveal';

export default function Journey() {
  const scrollTextRef = useRef<HTMLDivElement>(null);
  const words = about.headline.split(' ');
  const [revealedWords, setRevealedWords] = useState<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setRevealedWords(words.length);
      return;
    }

    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!scrollTextRef.current) return;
          
          const rect = scrollTextRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate how far the element is through the viewport
          // Start revealing when top enters bottom of screen (rect.top < windowHeight)
          // Finish revealing when bottom is at middle of screen (rect.bottom < windowHeight / 2)
          const start = windowHeight;
          const end = windowHeight / 2;
          
          // Current progress from 0 to 1
          let progress = (start - rect.top) / (start - end);
          progress = Math.max(0, Math.min(1, progress));
          
          // Calculate how many words should be revealed
          const count = Math.floor(progress * words.length);
          setRevealedWords(count);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <section id="journey" className="journey-section">
      <div className="section__inner">
        
        <div ref={scrollTextRef} className="journey-scroll-text-container">
          <h2 className="journey-scroll-text">
            {words.map((word, i) => (
              <span 
                key={i} 
                className={`journey-word ${i < revealedWords ? 'is-revealed' : ''}`}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        <div className="journey-narrative">
          {about.narrative.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.1} distance={20}>
              <p className="journey-narrative-paragraph">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="journey-focus-areas">
          {about.focusAreas.map((area, i) => (
            <ScrollReveal key={i} delay={i * 0.05} distance={15}>
              <span className="journey-focus-tag">{area}</span>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} distance={20}>
          <div className="journey-meta-strip">
            {about.meta.map((item, i) => (
              <div key={i} className="journey-meta-item">
                <span className="journey-meta-label">{item.label}:</span>
                <span className="journey-meta-value">{item.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
