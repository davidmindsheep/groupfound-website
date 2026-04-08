# GroupFound Website Blueprint

## Overview
Marketing/branding website for **groupfound.com** — a mobile-first social platform for founders, creators, and self-improvement-focused professionals. The website should reflect the app's iOS liquid glass aesthetic and communicate the product's value clearly.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion

---

## Site Structure

### 1. Hero Section
**Purpose:** Immediate value proposition + app preview

**Headline:** "Your Circle. Your Growth. Your Way."
**Subheadline:** "GroupFound is the social platform built for founders, creators, and people who take growth seriously. Connect through shared purpose, not vanity metrics."

**CTA:** "Join the Waitlist" (primary) | "Learn More" (secondary, scrolls down)

**Visual:** App mockup showing the feed/circles UI (phone frame with glassmorphism overlay). Subtle floating gradient orbs in background.

---

### 2. Problem Statement Section
**Purpose:** Empathy — show we understand the frustration

**Headline:** "Social Media Wasn't Built for You"

**Copy (3 pain points as cards):**

1. **Noise Over Signal**
   "Traditional platforms bury meaningful content under algorithmic noise. You scroll for 30 minutes and walk away with nothing."

2. **Vanity Metrics**
   "Follower counts and like numbers tell you who's popular — not who's valuable. Real engagement is invisible."

3. **No Real Connection**
   "You follow thousands of people but connect with none. The 'social' in social media is broken."

---

### 3. Solution / Features Section
**Purpose:** Show how GroupFound solves these problems

**Headline:** "Built Different. On Purpose."

**Features (alternating layout — text left/image right, then swap):**

#### Feature 1: Circles
**Title:** "Circles, Not Followers"
**Copy:** "Every post lives inside a Circle — a focused community built around shared interests. Join a Circle and you're in. No follower counts, no clout chasing. Just people who care about the same things you do."
**Visual:** App screen showing circles feed

#### Feature 2: Transparent Metrics
**Title:** "Metrics That Actually Matter"
**Copy:** "See the real engagement rate on every post — the percentage of viewers who actually interacted. No more guessing if content is valuable or just popular."
**Visual:** App screen showing engagement rate on a post

#### Feature 3: Mirror AI
**Title:** "Your AI-Powered Profile"
**Copy:** "Tell Mirror what you're looking for in your own words. It updates your profile and preferences to connect you with the right people — without endless form-filling."
**Visual:** App screen showing Mirror AI chat interface

#### Feature 4: Kaizen & Habits
**Title:** "Built-In Accountability"
**Copy:** "Track habits, build streaks, and stay accountable. Your commitments surface right in your feed — a reminder to stay on track while you scroll."
**Visual:** App screen showing habit tracker / streak

---

### 4. How It Works Section
**Purpose:** Simple 3-step flow

**Headline:** "Get Started in 3 Steps"

1. **Create Your Profile** — "Sign up and tell Mirror AI about your goals, interests, and what kind of people you want to connect with."
2. **Join Circles** — "Browse public Circles or get AI-recommended ones. Join communities that match your ambitions."
3. **Grow Together** — "Post, discuss, track habits, and build real relationships with people who push you forward."

---

### 5. Social Proof / Credibility Section
**Purpose:** Build trust (use once beta users exist)

**Headline:** "Built by Founders, for Founders"

**Copy:** "GroupFound was born from the frustration of trying to build meaningful connections on platforms designed for entertainment. We're building the social platform we wish existed."

**Placeholder for:** Testimonials, beta user quotes, investor logos, press mentions

---

### 6. Waitlist / CTA Section
**Purpose:** Conversion

**Headline:** "Be Part of Something Different"
**Subheadline:** "We're launching soon. Join the waitlist to get early access and help shape the future of purposeful social networking."

**Form:** Email input + "Join the Waitlist" button
**Subtext:** "No spam. Just updates on launch and early access."

---

### 7. Footer
- Logo
- Navigation links: Home, About, Features, Waitlist
- Social links: Instagram, X (Twitter), LinkedIn
- Legal: Privacy Policy, Terms of Service
- Copyright: © 2026 GroupFound. All rights reserved.

---

## Design Guidelines

### Aesthetic
- **iOS Liquid Glass** inspired — frosted glass cards, subtle blur effects, translucent overlays
- Clean, modern, generous whitespace
- Dark mode primary (dark navy/black background with glass elements)
- Smooth animations on scroll (Framer Motion)
- Gradient accent orbs/blobs in background (subtle, not distracting)

### Typography
- Sans-serif (Inter or SF Pro Display style)
- Hero headline: Bold, large (48-64px desktop)
- Body: Regular weight, 16-18px, comfortable line height

### Colors (PLACEHOLDER — waiting for brand colors from user)
- Primary: TBD
- Secondary: TBD
- Background: Dark (#0A0A0F or similar)
- Glass card: rgba(255,255,255,0.05) with backdrop-blur
- Text: White primary, gray-400 secondary
- Accent gradient: TBD

### Spacing
- Sections: 120px+ vertical padding on desktop
- Content max-width: 1200px
- Mobile responsive: all sections stack vertically

---

## Pages

### Page 1: Home (Landing Page)
All sections above in a single-page scroll layout.

### Page 2: Privacy Policy (static)
### Page 3: Terms of Service (static)

---

## Technical Notes for Junior Developer

### Project Setup
```bash
npx create-next-app@latest groupfound-website --typescript --tailwind --app --src-dir
```

### File Structure
```
src/
  app/
    layout.tsx          # Root layout with fonts, metadata
    page.tsx            # Home page (assembles all sections)
    privacy/page.tsx    # Privacy policy
    terms/page.tsx      # Terms of service
    globals.css         # Tailwind + custom glass styles
  components/
    Header.tsx          # Sticky nav with logo + CTA
    Hero.tsx            # Hero section
    Problem.tsx         # Pain points cards
    Features.tsx        # Alternating feature blocks
    HowItWorks.tsx      # 3-step flow
    SocialProof.tsx     # Testimonials/credibility
    Waitlist.tsx        # Email capture CTA
    Footer.tsx          # Site footer
    ui/
      GlassCard.tsx     # Reusable frosted glass card component
      Button.tsx        # Primary/secondary button variants
      PhoneMockup.tsx   # Phone frame for app screenshots
```

### Key Dependencies
- `framer-motion` — scroll animations, entrance effects
- `tailwindcss` — utility styling
- `@tailwindcss/forms` — styled form inputs (waitlist)

### CSS Utilities Needed
```css
/* Glassmorphism base */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

/* Gradient orb background */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
}
```

### Waitlist Backend
For MVP, use one of:
- Formspree (no backend needed)
- Google Sheets API
- Simple API route in Next.js saving to a JSON file or database

### Deployment
- Vercel (natural fit for Next.js)
- Domain: groupfound.com

---

## Content Checklist

- [ ] Brand colors confirmed
- [ ] App screenshots / mockups provided
- [ ] Logo assets (SVG)
- [ ] Social media links
- [ ] Privacy policy copy
- [ ] Terms of service copy
- [ ] Waitlist backend decision
- [ ] Any additional pages needed (About Us, etc.)
