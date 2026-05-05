# 1. architecture.md

## Overview

Eternal Princess is a **Next.js + Three.js interactive landing experience** designed as a visual and emotional self-portrait.

The architecture prioritizes:
- Visual storytelling
- Smooth animation performance
- Modular experimentation (playground-first thinking)
- Separation of concerns (UI vs motion vs 3D vs content)

---

## Tech Stack

### Core
- Next.js (App Router)
- React 19
- Tailwind CSS v4 (via globals.css)

### Motion & Interaction
- Framer Motion (UI animations)
- Custom scroll hooks

### 3D Layer
- Three.js
- @react-three/fiber
- @react-three/drei

### Optional Enhancements
- GSAP (advanced scroll choreography)
- Lenis (smooth scrolling)
- Shader libraries (later phase)

---

## High-Level Architecture

```
App Layer (Next.js)
│
├── Layout (global styles, background, nav)
├── Page (scroll experience)
│
├── Sections (Hero, Garden, Cosmos, etc.)
│
├── Motion Layer
│   ├── Scroll tracking
│   ├── Animation state
│
├── 3D Layer
│   ├── Canvas wrapper
│   ├── Avatar component
│   ├── Effects (sparkles, particles)
│
└── Playground
    ├── Experimental components
    └── Visual prototypes
```

---

## Folder Structure

```
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── playground/
│   │   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Background.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── InnerImage.tsx
│   │   ├── Atelier.tsx
│   │   ├── Garden.tsx
│   │   ├── Cosmos.tsx
│   │   ├── PlaygroundSection.tsx
│   │   └── Invitation.tsx
│   │
│   ├── three/
│   │   ├── CanvasWrapper.tsx
│   │   ├── PrincessAvatar.tsx
│   │   ├── Sparkles.tsx
│   │   └── Effects.tsx
│   │
│   ├── motion/
│   │   ├── useScrollProgress.ts
│   │   ├── useParallax.ts
│   │   └── useHoverGlow.ts
│   │
│   └── ui/
│       ├── GlowCard.tsx
│       ├── Button.tsx
│       └── Typography.tsx
│
├── lib/
│   ├── constants.ts
│   └── utils.ts
│
└── styles/
    └── globals.css
```

---

## Data Flow

### Scroll-Based State

Scroll is the main driver of the experience.

```
window scroll → useScrollProgress → animation values → components
```

Used for:
- Avatar vertical movement
- Background transitions
- Section reveals

---

## Rendering Strategy

### Hybrid Rendering

- Static sections (fast initial load)
- Client components for animation
- Lazy-loaded 3D canvas

---

## Performance Strategy

- Use `dynamic(() => import(), { ssr: false })` for Three.js
- Keep 3D scene lightweight initially
- Limit particle counts
- Use GPU-friendly animations (transform, opacity)

---

## Playground Philosophy

The playground is critical.

It allows:
- Rapid experimentation
- Visual prototyping
- Reusable effects

Everything advanced should be built there first.

---