import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../../styles/components/hero.css';
import { hero } from '../../data/portfolioData';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const name1Ref = useRef<HTMLSpanElement>(null);
  const name2Ref = useRef<HTMLSpanElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLAnchorElement>(null);
  const muteBtnRef = useRef<HTMLButtonElement>(null);
  
  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // Initial GSAP animation
    const tl = gsap.timeline();
    
    tl.fromTo(name1Ref.current, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, 0.2)
      .fromTo(name2Ref.current, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, 0.4)
      .fromTo(roleRef.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' }, 0.7)
      .fromTo(taglineRef.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' }, 0.9)
      .fromTo([metaRef.current, scrollRef.current, muteBtnRef.current], { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.2);

    // Auto-mute on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current && !videoRef.current.muted) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Hide hint after 5 seconds
    const timer = setTimeout(() => setShowHint(false), 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      setShowHint(false);
    }
  };

  const scrollToJourney = (e: React.MouseEvent) => {
    e.preventDefault();
    const journeySection = document.getElementById('journey');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="home" className="hero-section">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src={hero.videoSrc}
      />
      
      <div className="hero-gradient" />
      <div className="hero-vignette" />

      <div className="hero-content">
        <h1 className="hero-name" data-cursor="text">
          <span ref={name1Ref} className="hero-name-line">{hero.firstName}</span>
          <span ref={name2Ref} className="hero-name-line">{hero.lastName}</span>
        </h1>
        
        <div ref={roleRef} className="hero-role">
          {hero.role}
        </div>
        
        <p ref={taglineRef} className="hero-tagline">
          {hero.tagline}
        </p>
      </div>

      <div ref={metaRef} className="hero-meta">
        {hero.meta.map((item, i) => (
          <div key={i} className="hero-meta-item">
            <span>{item.label}</span>
            <span className="hero-meta-value">{item.value}</span>
          </div>
        ))}
      </div>

      <a 
        ref={scrollRef} 
        href="#journey" 
        className="hero-scroll-indicator" 
        onClick={scrollToJourney}
        aria-label="Scroll down"
        data-cursor="pointer"
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </a>

      {showHint && <span className="hero-sound-hint">Tap for sound</span>}
      <button
        ref={muteBtnRef}
        className="hero-mute-btn glass"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        data-cursor="pointer"
      >
        {isMuted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </section>
  );
}
