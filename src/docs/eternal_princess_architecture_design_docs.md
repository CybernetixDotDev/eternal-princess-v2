# Eternal Princess — System Documentation

---

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

# 2. design.md

## Design Philosophy

Eternal Princess is not minimal — it is **intentional beauty**.

Design principles:
- Softness over sharpness
- Glow over flatness
- Flow over rigidity
- Emotion over utility

---

## Color System

Primary palette:

- Soft Pink
- Lavender
- Plum
- Gold accents
- Pearl white
- Sky blue

Use gradients instead of flat colors.

---

## Typography

### Headings
- Elegant serif or stylized display font
- Slight letter spacing
- Large scale

### Body
- Clean sans-serif
- High readability

---

## Visual Layers

Each section should have layered depth:

1. Background gradient
2. Subtle particles
3. Content
4. Floating elements
5. Avatar overlay

---

## Motion Language

Motion should feel:
- Gentle
- Floating
- Responsive
- Magical

### Key Motions

- Float (slow sine wave movement)
- Fade + rise
- Glow on hover
- Sparkle bursts
- Scroll-linked transitions

---

## Avatar Design

The avatar is symbolic, not literal.

Early version:
- Stylized silhouette
- Soft glow
- Minimal geometry

Later version:
- Full 3D princess model
- Cloth simulation (optional future)

---

## Section Design

### Hero
- Large title
- Floating avatar
- Particle field

### Inner Image
- Poetic text
- Soft fade-in

### Atelier
- Cards or visual tiles
- Fabric / fashion inspiration

### Garden
- Organic shapes
- Butterfly motion

### Cosmos
- Stars, depth, glow

### Playground
- Interactive experiments

### Invitation
- Soft closing

---

## UI Components

### Glow Card
- Glassmorphism
- Soft border glow

### Buttons
- Rounded
- Hover shimmer

### Text Blocks
- Centered
- Generous spacing

---

# 3. implementationSteps.md

## Phase 1 — Foundation

1. Initialize Next.js app
2. Setup Tailwind v4 via globals.css
3. Create layout.tsx
4. Build basic page.tsx structure
5. Add sections (static)

Goal: clean structure, no animations yet

---

## Phase 2 — Styling & Visual Identity

1. Implement color palette
2. Add gradients and backgrounds
3. Style typography
4. Create GlowCard component

Goal: visually beautiful static page

---

## Phase 3 — Motion Layer

1. Install Framer Motion
2. Add fade-in animations
3. Create scroll progress hook
4. Add parallax effects

Goal: page feels alive

---

## Phase 4 — 3D Integration

1. Install fiber + drei
2. Create CanvasWrapper
3. Add simple floating object (placeholder avatar)
4. Position canvas in hero

Goal: introduce 3D layer safely

---

## Phase 5 — Princess Avatar

1. Replace placeholder with stylized avatar
2. Add float animation
3. Add hover glow effect
4. Add click interaction (curtsy animation)

Goal: emotional centerpiece

---

## Phase 6 — Scroll Synchronization

1. Link avatar position to scroll
2. Adjust section transitions
3. Add background transitions

Goal: cohesive storytelling flow

---

## Phase 7 — Effects Layer

1. Add sparkles
2. Add particle fields
3. Add glow shaders (optional)

Goal: magical atmosphere

---

## Phase 8 — Playground

1. Build /playground route
2. Add experimental components
3. Test animations, shaders, UI ideas

Goal: continuous evolution

---

## Phase 9 — Polish

1. Optimize performance
2. Reduce jank
3. Improve responsiveness
4. Refine motion timing

---

## Phase 10 — Expansion

- Custom 3D avatar (Blender)
- Advanced shaders
- Sound design
- Multi-page experience

---

## Final Note

Build this like a **living system**, not a fixed website.

Start simple.
Make it beautiful early.
Then layer complexity.

The magic is not in complexity.
It is in **feeling + flow + intention**.

