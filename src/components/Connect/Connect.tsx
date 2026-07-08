import '../../styles/components/connect.css';
import { contactLinks, resumeLink } from '../../data/portfolioData';
import ScrollReveal from '../shared/ScrollReveal';
import MagneticElement from '../shared/MagneticElement';

const IconMail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconGitHub = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconCredly = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const IconArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const iconMap: Record<string, React.FC> = {
  mail: IconMail,
  phone: IconPhone,
  linkedin: IconLinkedIn,
  github: IconGitHub,
  credly: IconCredly,
};

export default function Connect() {
  return (
    <section id="connect" className="connect-section">
      <div className="connect-content">
        <ScrollReveal>
          <h2 className="connect-title">Let's build something that scales.</h2>
          <p className="connect-subtitle">
            Whether it's cloud infrastructure, Kubernetes, or automation — I'm always open to interesting conversations.
          </p>
        </ScrollReveal>

        <div className="connect-grid">
          {contactLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            
            return (
              <ScrollReveal key={link.label} delay={index * 0.1}>
                <MagneticElement strength={0.15}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="connect-card"
                    data-cursor="pointer"
                  >
                    <div className="connect-card-icon">
                      {Icon && <Icon />}
                    </div>
                    <div className="connect-card-arrow">
                      <IconArrowUpRight />
                    </div>
                    <span className="connect-card-label">{link.label}</span>
                    <span className="connect-card-value">{link.value}</span>
                  </a>
                </MagneticElement>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <MagneticElement>
            <a 
              href={resumeLink.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="connect-resume-btn"
              data-cursor="pointer"
            >
              <span>{resumeLink.label}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </MagneticElement>
        </ScrollReveal>

        <footer className="connect-footer">
          <p>© {new Date().getFullYear()} K Sai Teja · Designed & built in Hyderabad</p>
        </footer>
      </div>
    </section>
  );
}
