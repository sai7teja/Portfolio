# Sai Teja — DevOps Engineer Portfolio

A cinematic, immersive portfolio for **K Sai Teja** — DevOps Engineer specializing in Kubernetes orchestration, cloud architecture, and infrastructure automation.

Built with **React + TypeScript + Vite + Vanilla CSS + GSAP**.

## ✨ Features

- **Cinematic hero** — full-bleed video background with gradient overlays and GSAP entrance animations
- **Scroll-driven text reveal** — word-by-word illumination of the headline as you scroll
- **Floating particles** — Canvas 2D ambient particle system with mouse parallax
- **3D tilt cards** — perspective-based hover effect on project and metric cards
- **Sticky-stacking projects** — cards layer on top of each other as you scroll
- **Animated counters** — numbers count up from zero when they enter the viewport
- **Magnetic hover** — interactive elements pull toward the cursor
- **Custom cursor** — morphing ring cursor that adapts to content type (desktop only)
- **Auto-hiding nav** — glassmorphic navigation that hides on scroll down, reappears on scroll up
- **Dark/light mode** — toggle with localStorage persistence
- **Mobile-optimized** — touch-adapted effects, fluid typography, responsive layouts
- **Accessibility** — `prefers-reduced-motion` respected, semantic HTML, focus-visible states

## 🏗️ Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Vanilla CSS (custom properties / design tokens) |
| Animations | GSAP + CSS transitions |
| Particles | Canvas 2D API |
| Deploy | Vercel |

## 📁 Project Structure

```
src/
├── data/
│   └── portfolioData.ts           # ← All content lives here
├── styles/
│   ├── design-tokens.css           # Color, typography, spacing tokens
│   ├── global.css                  # Reset, base styles, utilities
│   └── components/                 # Component-specific CSS
│       ├── hero.css
│       ├── navigation.css
│       ├── journey.css
│       ├── work.css
│       ├── impact.css
│       ├── evolution.css
│       ├── connect.css
│       └── (shared effect styles)
├── components/
│   ├── Hero/Hero.tsx               # Full-bleed video hero
│   ├── Navigation/Navigation.tsx   # Auto-hiding glassmorphic nav
│   ├── Journey/Journey.tsx         # Scroll-driven text reveal + about
│   ├── Work/Work.tsx               # Sticky-stacking project cards
│   ├── Impact/Impact.tsx           # Metric grid + certifications
│   ├── Evolution/Evolution.tsx     # Career timeline + roadmap
│   ├── Connect/Connect.tsx         # Contact cards + CTA
│   └── shared/
│       ├── ParticleCanvas.tsx      # Floating particle system
│       ├── CustomCursor.tsx        # Morphing cursor
│       ├── ScrollReveal.tsx        # Scroll-triggered fade-in
│       ├── TiltCard.tsx            # 3D perspective tilt
│       ├── MagneticElement.tsx     # Magnetic hover effect
│       └── AnimatedCounter.tsx     # Count-up animation
├── App.tsx
└── main.tsx
```

## 🚀 Run Locally

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → /dist
npm run preview    # serve /dist locally
```

## 🌐 Deploy

Push to GitHub → import at [vercel.com/new](https://vercel.com/new) → Deploy. No environment variables needed.

## ✏️ Customisation

All content is centralized in **one file**: `src/data/portfolioData.ts`

| Want to change | What to edit |
|---|---|
| Name, role, tagline | `hero` object |
| Company / location | `hero.meta` array |
| About headline & narrative | `about` object |
| Focus area tags | `about.focusAreas` array |
| Projects | `projects` array |
| Impact metrics | `metrics` array |
| Certifications | `certifications` array |
| Career timeline | `timeline` array |
| Future roadmap | `roadmap` array |
| Contact links | `contactLinks` array |
| Colors & typography | `src/styles/design-tokens.css` |

## 📄 License

MIT

---

Designed & built by **K Sai Teja** · [LinkedIn](https://www.linkedin.com/in/sai-teja-3286941b8/) · [GitHub](https://github.com/sai7teja)
