import '../../styles/components/projects.css';
import { sideProjects } from '../../data/portfolioData';
import ScrollReveal from '../shared/ScrollReveal';

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section__inner">
        <ScrollReveal>
          <header className="projects-header">
            <h2>Side projects</h2>
            <p>Things I build outside of work — exploring ideas, learning new stacks, and scratching my own itches.</p>
          </header>
        </ScrollReveal>

        <div className="projects-grid">
          {sideProjects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.15}>
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
                      <IconExternal /> Live
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
