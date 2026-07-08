import '../../styles/components/evolution.css';
import { timeline, roadmap } from '../../data/portfolioData';
import ScrollReveal from '../shared/ScrollReveal';

export default function Evolution() {
  return (
    <section id="evolution" className="evolution-section">
      <div className="section__inner">
        <ScrollReveal>
          <header className="work-header">
            <span className="work-eyebrow">The Path</span>
            <h2 className="work-title">From engineering foundations to cloud scale</h2>
          </header>
        </ScrollReveal>

        <div className="evolution-timeline">
          {timeline.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className={`evolution-item ${item.isCurrent ? 'is-current' : ''}`}>
                <div className="evolution-dot" />
                <span className="evolution-period">{item.period}</span>
                <h3 className="evolution-title">{item.title}</h3>
                <p className="evolution-desc">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="roadmap-container">
          <ScrollReveal>
            <h3 className="work-card-section-title" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
              Where I'm heading
            </h3>
          </ScrollReveal>
          
          <div className="roadmap-strip">
            <div className="roadmap-line" />
            {roadmap.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={20}>
                <div className={`roadmap-item ${item.stage === 'Now' ? 'is-now' : ''}`}>
                  <div className="roadmap-dot" />
                  <span className="roadmap-stage">{item.stage}</span>
                  <span className="roadmap-label">{item.label}</span>
                  <p className="roadmap-desc">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
