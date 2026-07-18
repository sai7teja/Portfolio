/* ═══════════════════════════════════════════════════════════
   PORTFOLIO DATA — K Sai Teja
   All content lives here. Update this file to change what
   appears on the site. Components read from here.
   ═══════════════════════════════════════════════════════════ */

export const siteMetadata = {
  title: "Sai Teja — DevOps Engineer",
  description:
    "Portfolio of K Sai Teja — DevOps Engineer specializing in Kubernetes orchestration, cloud architecture, and infrastructure automation.",
  url: "https://saiteja.dev",
  image: "/og-image.png",
};

/* ── Hero ──────────────────────────────────────────────── */
export const hero = {
  firstName: "Sai",
  lastName: "Teja",
  role: "DevOps Engineer",
  tagline: "Building reliable cloud platforms through automation, Kubernetes, and calm engineering.",
  videoSrc: "/intro.mp4",
  meta: [
    { label: "Based in", value: "Hyderabad, India" },
    { label: "At", value: "Wipro / Ericsson" },
    { label: "Focus", value: "Kubernetes · Cloud · Automation" },
  ],
};

/* ── Navigation ────────────────────────────────────────── */
export const navLinks = [
  { label: "About", href: "#journey" },
  { label: "Experience", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Say Hi", href: "#connect" },
];

/* ── About / The Operator ──────────────────────────────── */
export const about = {
  headline:
    "I architect cloud infrastructure and orchestrate Kubernetes at scale — turning complex operations into automated, observable, and self-healing systems.",
  narrative: [
    "My work sits at the intersection of cloud architecture, Kubernetes operations, and platform automation. Over 4+ years in production environments, I've worked on problems that are rarely small: multi-node Kubernetes clusters, large-scale cloud estates, container orchestration, server fleet migrations, deployment pipelines, and observability for mission-critical workloads.",
    "I enjoy the part of DevOps where a messy operational workflow becomes a repeatable system. That might mean a Python script that turns daily reporting from hours into minutes, an Ansible strategy that migrates hundreds of servers with controlled rollouts, or a Prometheus and Grafana dashboard that gives teams the signal they need before incidents stretch into long investigations.",
    "The thread through my career is simple: reduce manual effort, make infrastructure understandable, and build systems that help engineers move with confidence.",
  ],
  focusAreas: [
    "DevOps Automation",
    "Cloud Infrastructure",
    "Kubernetes Operations",
    "Infrastructure as Code",
    "Platform Engineering",
    "CI/CD Pipelines",
    "Monitoring & Observability",
    "AI-powered Automation",
  ],
  meta: [
    { label: "Location", value: "Hyderabad, India" },
    { label: "Role", value: "DevOps Engineer" },
    { label: "Experience", value: "4+ Years" },
    { label: "Focus", value: "Kubernetes · Cloud · Automation" },
  ],
};

/* ── Projects / The Builder ────────────────────────────── */
export interface Project {
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  technologies: string[];
  impact: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Quarantine Monitoring Automation",
    eyebrow: "DevOps Automation",
    summary:
      "Engineered automated quarantine monitoring to replace daily manual reporting with a fast, repeatable operational workflow. Scheduled checks collect quarantine state, normalize data, generate reports, and route complex failures for follow-up.",
    technologies: ["Python", "Shell", "Linux", "JIRA", "OpenStack", "Kubernetes"],
    impact: [
      "Eliminated 95% of manual reporting overhead",
      "Reduced daily effort from 2 hours to 5 minutes",
      "Improved audit readiness with on-demand reporting",
    ],
    challenges: [
      "Reducing human effort while preserving audit-level detail",
      "Making workflows reliable across live production environments",
    ],
  },
  {
    number: "02",
    title: "Medicine & Falcon Recovery Scripts",
    eyebrow: "Intelligent Recovery",
    summary:
      "Delivered script-driven recovery automation for quarantine scenarios with smart escalation when failures required deeper engineering attention. Recovery scripts evaluate conditions, attempt remediation, and create JIRA escalations for complex cases.",
    technologies: ["Python", "Shell", "JIRA", "Linux", "Kubernetes"],
    impact: [
      "Reduced manual intervention by 90%",
      "Engineers refocused on complex problems instead of repetitive recovery",
      "Automated escalation through JIRA integration",
    ],
    challenges: [
      "Separating recoverable issues from cases requiring escalation",
      "Reducing intervention without hiding operational signals",
    ],
  },
  {
    number: "03",
    title: "Rocky Linux Fleet Migration",
    eyebrow: "Infrastructure Modernization",
    summary:
      "Led enterprise-wide migration of RedHat servers to Rocky Linux using controlled, Ansible-based rolling deployment strategies. Playbooks execute staged migration tasks across server groups with rollout control.",
    technologies: ["Ansible", "Linux", "RedHat", "Rocky Linux", "Shell"],
    impact: [
      "Migrated 300+ servers through repeatable automation",
      "Reduced operational risk vs manual migration",
      "Maintained clear rollback and validation paths",
    ],
    challenges: [
      "Coordinating migration across a large estate without broad service risk",
      "Keeping rollback paths clear for infrastructure teams",
    ],
  },
  {
    number: "04",
    title: "Observability & Dashboard Platform",
    eyebrow: "Monitoring & Visibility",
    summary:
      "Built Prometheus and Grafana observability solutions that shortened incident investigation cycles and gave production teams clearer signal during operations. Created dashboards for capacity planning and operational health.",
    technologies: ["Prometheus", "Grafana", "Linux", "Python", "Shell"],
    impact: [
      "Reduced MTTR by 85% through improved visibility",
      "Compressed reporting from 2 months to 40 minutes",
      "Created 98% faster on-demand audit reporting",
    ],
    challenges: [
      "Designing dashboards that surface signal without noise",
      "Balancing real-time monitoring with historical reporting needs",
    ],
  },
];

/* ── Side Projects ─────────────────────────────────────── */
export interface SideProject {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const sideProjects: SideProject[] = [
  {
    name: "Azure Cloud Architecture",
    description:
      "Designed secure, highly available Azure infrastructure patterns — HA, cost visibility, monitoring, identity management, and governance through the Udacity Cloud Architect Nanodegree.",
    technologies: ["Azure", "Load Balancers", "Azure AD", "RBAC", "Key Vault", "Sentinel"],
    githubUrl: "https://github.com/sai7teja/Cloud-Architect-Using-Microsoft-Azure-Nanodegree",
  },
  {
    name: "Health Connect",
    description:
      "Health monitoring and connectivity platform — automates health data collection, analysis, and alerting through shell-based automation pipelines.",
    technologies: ["Shell", "Linux", "Automation", "Monitoring"],
    githubUrl: "https://github.com/sai7teja/Health-connect",
  },
  {
    name: "ZeppOS Mini Program",
    description:
      "IoT wearable mini-program built for ZeppOS smartwatch platform — handles sensor data processing and real-time display on wearable devices.",
    technologies: ["Python", "IoT", "ZeppOS", "Wearables"],
    githubUrl: "https://github.com/sai7teja/ZeppOs-MinProgram",
  },
];

/* ── Impact Metrics / The Impact ───────────────────────── */
export interface Metric {
  value: string;
  suffix?: string;
  label: string;
  description: string;
}

export const metrics: Metric[] = [
  {
    value: "4",
    suffix: "+",
    label: "Years Experience",
    description: "DevOps, cloud architecture, and Kubernetes operations",
  },
  {
    value: "2000",
    suffix: "+",
    label: "K8s Workloads",
    description: "Kubernetes-based workloads managed across production clusters",
  },
  {
    value: "300",
    suffix: "+",
    label: "Servers Migrated",
    description: "RedHat to Rocky Linux with Ansible rolling strategies",
  },
  {
    value: "95",
    suffix: "%",
    label: "Overhead Eliminated",
    description: "Manual reporting replaced by automated monitoring",
  },
  {
    value: "85",
    suffix: "%",
    label: "MTTR Reduction",
    description: "Through Prometheus and Grafana observability",
  },
  {
    value: "98",
    suffix: "%",
    label: "Faster Reporting",
    description: "Audit reporting compressed from 2 months to 40 minutes",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  status: "earned" | "in-progress";
  href?: string;
}

export const certifications: Certification[] = [
  {
    title: "Professional Cloud Architect",
    issuer: "Google Cloud",
    status: "earned",
    href: "https://www.credly.com/badges/37e44ece-a5cd-4905-a3ca-c62ef1b3b424",
  },
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    status: "earned",
    href: "https://www.credly.com/badges/d0cc4aa0-782a-4868-b24c-e7b7a908b1ca/public_url",
  },
  {
    title: "Cloud Architect — Microsoft Azure",
    issuer: "Udacity Nanodegree",
    status: "earned",
    href: "https://www.udacity.com/certificate/WGRETHSA",
  },
  {
    title: "AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    status: "earned",
    href: "https://www.credly.com/badges/76688178-b95c-45f8-b523-973538e1a7ad/linked_in?t=rb16hq",
  },
];

/* ── Skills ────────────────────────────────────────────── */
export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Cloud", skills: ["OpenStack", "GCP", "Azure", "Cloud networking", "Load Balancing"] },
  { title: "Containers", skills: ["Docker", "Kubernetes", "Helm", "Container orchestration", "Pod lifecycle"] },
  { title: "Infrastructure", skills: ["Terraform", "Ansible", "Linux", "Rocky Linux", "RedHat"] },
  { title: "CI/CD", skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Release workflows"] },
  { title: "Monitoring", skills: ["Prometheus", "Grafana", "Azure Monitor", "Log Analytics"] },
  { title: "Programming", skills: ["Python", "Shell/Bash", "JavaScript", "Automation tooling"] },
];

/* ── Career Timeline / The Evolution ───────────────────── */
export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    period: "2017 – 2021",
    title: "Engineering Foundations",
    description:
      "B.Tech in Electronics and Communication Engineering at Guru Nanak Institute of Technology. Built the technical base for systems thinking.",
  },
  {
    period: "2020",
    title: "Cloud Exploration",
    description:
      "Explored cloud workloads, Terraform, GKE, IAM, and CI/CD during the Google Cloud Ready Facilitator program.",
  },
  {
    period: "2021",
    title: "Production Operations",
    description:
      "Entered enterprise production environments — working hands-on with platform reliability, large-scale deployments, and operational excellence.",
  },
  {
    period: "2021 – Present",
    title: "DevOps Practice",
    description:
      "Focused on CI/CD, Linux automation, scripting, observability, Kubernetes operations, and infrastructure automation at production scale.",
    isCurrent: true,
  },
  {
    period: "Current",
    title: "Kubernetes & Cloud",
    description:
      "Managing 2k+ Kubernetes workloads at scale, working across OpenStack, Azure, GCP, Helm, and platform automation.",
    isCurrent: true,
  },
];

export interface RoadmapItem {
  stage: string;
  label: string;
  description: string;
}

export const roadmap: RoadmapItem[] = [
  {
    stage: "Now",
    label: "DevOps Engineer",
    description: "Deepening automation, Kubernetes operations, and observability.",
  },
  {
    stage: "Next",
    label: "Platform Engineer",
    description: "Building reusable internal platforms and self-service workflows.",
  },
  {
    stage: "Growth",
    label: "Cloud Architect",
    description: "Designing reliable, secure, cost-aware cloud infrastructure at scale.",
  },
  {
    stage: "Future",
    label: "AI Infrastructure Engineer",
    description: "Applying AI-powered automation to operations and infrastructure systems.",
  },
  {
    stage: "Vision",
    label: "Technical Leader",
    description: "Mentoring teams and leading high-impact infrastructure programs.",
  },
];

/* ── Contact / The Connection ──────────────────────────── */
export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "linkedin" | "github" | "credly";
}

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "kanikesaiteja@gmail.com",
    href: "mailto:kanikesaiteja@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+91 8977767167",
    href: "tel:+918977767167",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "sai-teja-3286941b8",
    href: "https://www.linkedin.com/in/sai-teja-3286941b8/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "@sai7teja",
    href: "https://github.com/sai7teja",
    icon: "github",
  },
  {
    label: "Credly",
    value: "Certifications",
    href: "https://www.credly.com/users/sai-teja-kanike",
    icon: "credly",
  },
];

export const resumeLink = {
  label: "Download Resume",
  href: "/K-Sai-Teja-Resume-2026.pdf",
};
