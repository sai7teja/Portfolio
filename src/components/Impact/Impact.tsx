import { useEffect, useRef } from 'react';
import '../../styles/components/impact.css';
import { metrics, certifications } from '../../data/portfolioData';
import ScrollReveal from '../shared/ScrollReveal';
import TiltCard from '../shared/TiltCard';
import AnimatedCounter from '../shared/AnimatedCounter';

export default function Impact() {
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.impact-metric-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="impact-section">
      <div className="section__inner">
        <ScrollReveal>
          <header className="impact-header">
            <span className="work-eyebrow">Proof Points</span>
            <h2 className="work-title">The numbers behind the systems</h2>
          </header>
        </ScrollReveal>

        <div className="impact-metrics-grid" ref={metricsRef}>
          {metrics.map((metric, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <TiltCard className="impact-metric-card" maxTilt={10}>
                <div className="impact-metric-card-inner">
                  <div className="impact-metric-value-wrapper">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <h3 className="impact-metric-label">{metric.label}</h3>
                  <p className="impact-metric-desc">{metric.description}</p>
                </div>
                <div className="impact-metric-accent-line" />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="impact-certifications">
          <ScrollReveal>
            <div className="impact-certs-header">
              <span className="work-eyebrow">Certifications</span>
              <h3 className="work-card-title">Cloud & Architecture Credentials</h3>
            </div>
          </ScrollReveal>
          
          <div className="impact-certs-row">
            {certifications.map((cert, index) => {
              const CardContent = () => (
                <>
                  <h4 className="impact-cert-title">{cert.title}</h4>
                  <span className="impact-cert-issuer">{cert.issuer}</span>
                </>
              );

              return (
                <ScrollReveal key={index} delay={index * 0.1} direction="left" distance={20}>
                  {cert.href ? (
                    <a 
                      href={cert.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="impact-cert-card"
                      data-cursor="pointer"
                    >
                      <CardContent />
                    </a>
                  ) : (
                    <div className="impact-cert-card">
                      <CardContent />
                    </div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
