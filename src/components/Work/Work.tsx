import '../../styles/components/work.css';
import { projects } from '../../data/portfolioData';
import ScrollReveal from '../shared/ScrollReveal';
import TiltCard from '../shared/TiltCard';

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section__inner">
        <ScrollReveal>
          <header className="work-header">
            <span className="work-eyebrow">Selected Work</span>
            <h2 className="work-title">Systems I've engineered</h2>
          </header>
        </ScrollReveal>

        <div className="work-cards-container">
          {projects.map((project, index) => {
            // Calculate sticky top offset based on index (plus nav height)
            const topOffset = 100 + index * 24; 
            // Optional: calculate scale down effect for cards behind
            const scale = 1 - (projects.length - 1 - index) * 0.02;

            return (
              <div 
                key={project.number} 
                className="work-sticky-wrapper"
                style={{ 
                  top: `${topOffset}px`,
                  zIndex: index,
                }}
              >
                <ScrollReveal delay={0.1} distance={40}>
                  <TiltCard maxTilt={5}>
                    <div className="work-card-inner">
                      <div className="work-card-top">
                        <span className="work-card-number">{project.number}</span>
                        <span className="work-card-eyebrow">{project.eyebrow}</span>
                        <h3 className="work-card-title">{project.title}</h3>
                      </div>
                      
                      <div className="work-card-middle">
                        <p className="work-card-summary">{project.summary}</p>
                      </div>

                      <div className="work-card-bottom">
                        <div className="work-card-tech">
                          <h4 className="work-card-section-title">Core Technologies</h4>
                          <div className="work-tech-tags">
                            {project.technologies.map(tech => (
                              <span key={tech} className="work-tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div className="work-card-impact">
                          <h4 className="work-card-section-title">Business Impact</h4>
                          <ul className="work-impact-list">
                            {project.impact.map((item, i) => (
                              <li key={i} className="work-impact-item">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
