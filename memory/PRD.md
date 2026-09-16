# ParkSafe Landing Page — PRD

## Original Problem Statement
Build a single-page responsive landing page for ParkSafe, a QR-based emergency identity platform for riders/vehicle owners. Sections: Hero, Trust & Social Proof, How It Works (3 steps), Why Choose ParkSafe (6 features), QR Kit Showcase (4 kits), Real-Life Emergency Scenario, Testimonials, FAQ accordion, Final CTA, Footer. Frontend only — no backend, auth, or admin. Design: mobile-first, premium dark UI, smooth anchored scrolling, high-quality mockups.

## User Choices
- Theme: Dark & bold with emergency red/orange accent (#FF3B30 / #FF5722)
- Buttons: smooth-scroll to QR kits / "coming soon" toast (no real checkout)
- Mandate: Awwwards-level craft — kinetic masked headline reveal, numbered manifesto chapters, editorial marquee, framer-motion reveals, Lenis smooth scroll, 3D tilt hero with parallax

## Architecture
- Frontend only: React 19 + Tailwind + framer-motion + lenis + sonner + lucide-react
- Components in /app/frontend/src/components/parksafe/ (Nav, Hero, Trust, Marquee, HowItWorks, Features, Kits, Scenario, Testimonials, FAQ, FinalCTA, Footer, ActivateModal, QRMark, shared)
- Lenis instance stored on window.__lenis; anchors via /app/frontend/src/lib/scroll.js
- Design system: /app/design_guidelines.json (Outfit / Plus Jakarta Sans / JetBrains Mono; ink #0A0D14 background)
- Backend: untouched template (not used by the page)

## User Personas
- Solo rider wanting emergency safety net
- Family member of a rider
- First responder / Good Samaritan scanning a QR

## Implemented (2026-07-16)
- Kinetic hero: masked line-by-line headline reveal, 3D mouse-tilt rider mockup with animated QR scan-line, live ticking scan counter, parallax
- Trust bar: count-up stats (45,000+ riders, 128,000+ lives protected, 640+ cities, 4.9/5), press/accreditation badges, slow editorial marquee
- How It Works: 3 numbered steps with ghost numerals
- Why Choose: 6-card bento grid with photo-treated wide cards
- QR Kits: 4 product cards ($14.99–$49.99), Best Value highlight, Buy Now → toast (pre-order placeholder)
- Emergency Scenario: 00:00–00:45 timeline + "Simulate a Scan" modal showing a live emergency profile card
- Testimonials: 3 rider/surgeon reviews with monogram avatars
- FAQ: 6-item animated accordion
- Final CTA + Footer with giant PARKSAFE watermark
- Activate QR modal (6-char code input + toast validation)
- All interactive elements carry data-testid attributes

## Verification
- Screenshot-tested: hero reveal, activate modal + toast, nav smooth-scroll to kits, buy toast, simulate-scan modal, FAQ toggle, final CTA. No console errors.

## Backlog
- P0: (none — page complete as scoped)
- P1: Real checkout (Stripe) for kits; real QR activation flow with backend
- P2: User dashboard to edit emergency profile; multilingual support; crash-detection Plus tier page
- Spark ideas: scroll-driven QR assembly animation, rider-story video embeds, live "scans near you" map
