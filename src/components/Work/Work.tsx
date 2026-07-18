import '../../styles/components/work.css';
import '../../styles/components/projects.css';
import { projects, sideProjects } from '../../data/portfolioData';
import ScrollReveal from '../shared/ScrollReveal';
import TiltCard from '../shared/TiltCard';

const IconGitHub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section__inner">
        <ScrollReveal>
          <header className="work-header">
            <span className="work-eyebrow">Experience</span>
            <h2 className="work-title">Stuff I've shipped</h2>
          </header>
        </ScrollReveal>

        {/* ── Work Projects (sticky cards) ── */}
        <div className="work-cards-container">
          {projects.map((project, index) => {
            const topOffset = 100 + index * 24; 

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
                          <h4 className="work-card-section-title">Tech Used</h4>
                          <div className="work-tech-tags">
                            {project.technologies.map(tech => (
                              <span key={tech} className="work-tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div className="work-card-impact">
                          <h4 className="work-card-section-title">What Changed</h4>
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

        {/* ── Side Projects (grid with links) ── */}
        <div className="side-projects-divider">
          <ScrollReveal>
            <h3 className="side-projects-heading">Side projects & learning</h3>
          </ScrollReveal>
        </div>

        <div className="projects-grid">
          {sideProjects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.12}>
              <div className="project-card" data-cursor="pointer">
                <h3 className="project-card-name">{project.name}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-card-tech">
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    data-cursor="pointer"
                  >
                    <IconGitHub /> Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      data-cursor="pointer"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
