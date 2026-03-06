# Chrome21 Home Inspections — AI Coder Build Instructions

## Project Overview

You are building a **production-ready static single-page website** for **Chrome21 Home Inspections LLC**, a Denver-area home inspection company owned by Scott Kimball. A complete HTML design mockup has already been created and is provided as `chrome21.html`. Your job is to take that mockup and build it into a clean, deployable, fully-polished static site.

This is a real business website. Quality matters. Do not cut corners on responsiveness, accessibility, or polish.

---

## Deliverables

Produce the following file structure:

```
chrome21/
├── index.html          ← Main page (built from the mockup)
├── css/
│   └── styles.css      ← All styles extracted from the mockup
├── js/
│   └── main.js         ← All JavaScript (scroll behavior, nav, animations)
├── assets/
│   └── logo.png        ← Logo file (see Asset Notes below)
└── README.md           ← Deployment instructions for a non-technical user
```

---

## Source Mockup: `chrome21.html`

The attached `chrome21.html` is a complete single-file design mockup. It contains all content, copy, CSS variables, layout structure, and section ordering. Use it as your ground truth for:

- All written copy (do not rewrite or summarize any content)
- Color palette and CSS variables
- Section structure and ordering
- Font choices (Barlow Condensed, Lora, Barlow — loaded via Google Fonts)
- All contact information

---

## Brand Identity

| Element | Value |
|---|---|
| **Brand Name** | Chrome21 Home Inspections LLC |
| **Owner** | Scott Kimball |
| **Phone** | (801) 404-9137 — link as `tel:8014049137` |
| **Email** | scott@chrome21homeinspections.com — link as `mailto:` |
| **Location** | Denver Metro Area, Colorado |
| **Service Area** | Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Centennial, Littleton, Englewood, and surrounding Front Range communities |

### Color Palette (from mockup CSS variables)

```css
--chrome-blue:        #1E4E8C
--chrome-blue-light:  #2E6EC4
--chrome-silver:      #B0BEC5
--chrome-silver-light:#ECEFF1
--chrome-dark:        #0D1B2A   ← primary background
--chrome-mid:         #1A2D42   ← secondary background
--chrome-accent:      #4FC3F7   ← highlight/CTA color
--text-light:         #E8EDF2
--text-muted:         #90A4AE
```

### Typography

Load via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet"/>
```

- **Headlines / UI labels:** Barlow Condensed (800 weight, uppercase)
- **Body / subheads:** Lora (serif, often italic)
- **General body text:** Barlow (300–500 weight)

---

## Page Sections (in order)

Build these sections exactly as structured in the mockup. Do not add, remove, or reorder sections.

### 1. Fixed Navigation Bar
- Logo (circular image) + brand name text left-aligned
- "Schedule Inspection →" CTA button right-aligned
- Fixed to top, `backdrop-filter: blur(12px)`, dark background with blue-accent bottom border
- Anchors to `#schedule` section

### 2. Hero Section
- Full viewport height
- Eyebrow label: "Denver Metro Home Inspections"
- H1: "Know Before You Close." (with "You Close." in accent color)
- Body paragraph (serif/italic)
- Two CTAs: primary "Schedule Your Inspection →" and secondary "See How It Works"
- Logo badge displayed right side on desktop (hidden on mobile)
- Radial gradient background + diagonal accent line (CSS pseudo-element)
- Staggered fade-up entry animations on load (CSS keyframes, no JS required)

### 3. Problem Section
- Two-column grid: headline left, three problem cards right
- Each card has icon, bold title, and description
- Left border accent that changes color on hover

### 4. Guide Section
- Centered layout
- H2 + italic subhead
- Three credential cards in a row: Certified Inspector, Same-Day Reports, Denver Metro Specialist
- Cards animate upward slightly on hover

### 5. Plan / How It Works Section
- `id="how-it-works"` for nav anchor
- Three steps in a row (stacked on mobile)
- Large faint step numbers (01, 02, 03) as decorative background text
- Top border reveals on hover (CSS transform scaleX)

### 6. What We Inspect Section
- Section label + H2
- 4-column grid of 8 inspection items, each with icon, title, description
- Collapses to 2-column on tablet, 1-column on mobile
- Subtle background color shift on hover

### 7. Stakes Section
- Two-column layout: warning copy left, bullet list right
- Warning bullets use `⚠` icon in red (`#E57373`)
- Stakes headlines use red accent on key phrase

### 8. Schedule / Form CTA Section
- `id="schedule"` — this is what the nav CTA anchors to
- Centered, radial glow background
- H2 + subhead
- **Form embed placeholder** — a clearly marked dashed box with comment tags above and below:
  ```html
  <!-- FORM EMBED: Replace the .form-placeholder div below with your embed code -->
  <div class="form-placeholder">...</div>
  <!-- END FORM EMBED -->
  ```
  The placeholder should be visually obvious (dashed border, icon, instructional text) so Scott can easily find it when he has an embed code ready.

### 9. Testimonials Section — **COMMENTED OUT**
- This section is fully built in the HTML but wrapped in `<!-- -->` comment tags
- Do NOT render it on the page
- Do NOT delete it — Scott will uncomment it when he has reviews
- The commented block contains 3 testimonial card slots with placeholder text
- Add a clear comment above the block: `<!-- TESTIMONIALS: Uncomment this section when you have client reviews ready -->`

### 10. Footer / Contact Section
- Three-column grid: logo/brand, contact details, service area
- Phone linked with `tel:`, email linked with `mailto:`
- Copyright bar below
- Collapses to single column on mobile

---

## JavaScript Requirements (`js/main.js`)

Implement the following behaviors cleanly in vanilla JS (no jQuery, no frameworks):

### Scroll-aware Navigation
```javascript
// Add class 'scrolled' to <nav> when page scrolls past 80px
// .scrolled should increase background opacity to 0.98 and reduce padding slightly
```

### Smooth Scroll for Anchor Links
```javascript
// All href="#..." links should smooth-scroll to their target
// Account for the fixed nav height (~72px) as offset
```

### Scroll-triggered Fade-in Animations
```javascript
// Use IntersectionObserver to add class 'visible' to elements
// when they enter the viewport.
// Apply to: .problem-card, .credential-card, .step, .inspect-item, .stakes-list li
// Each element starts with opacity:0, translateY(16px)
// Transitions to opacity:1, translateY(0) when .visible is added
// Stagger sibling elements using animationDelay based on their index
```

### Active Section Tracking (optional but preferred)
```javascript
// As user scrolls, highlight which section is active
// (Can be used for future nav enhancement — just track and log for now)
```

---

## CSS Requirements (`css/styles.css`)

- Extract all styles from the `<style>` block in `chrome21.html` into this external file
- Preserve all CSS custom properties (variables) at `:root`
- Keep all existing class names exactly as-is — do not rename
- Add the following improvements not in the mockup:

### Focus States (Accessibility)
```css
/* Visible focus rings for keyboard navigation */
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--chrome-accent);
  outline-offset: 3px;
}
```

### Print Styles
```css
@media print {
  nav, .hero-badge, .section-cta { display: none; }
  body { background: white; color: black; }
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Asset Notes

### Logo
- The logo file is `IMG_1453.PNG` — a circular badge-style logo with chrome/silver and blue colors
- Rename to `assets/logo.png` in the built project
- Reference it in all `<img src="...">` tags using the new path: `assets/logo.png`
- All img tags already have `onerror="this.style.display='none'"` — keep this fallback
- The logo appears in: fixed nav, hero badge (right side, desktop only), footer

### Favicon
- Create a simple favicon from the logo
- Reference in `<head>`: `<link rel="icon" href="assets/logo.png" type="image/png">`

---

## SEO & Meta Tags

Add the following to `<head>` in `index.html`:

```html
<meta name="description" content="Chrome21 Home Inspections LLC — Professional home inspections in the Denver metro area. Certified inspector, same-day reports, plain-English findings. Call Scott Kimball at (801) 404-9137.">
<meta name="keywords" content="home inspection Denver, home inspector Denver CO, Chrome21 home inspections, Scott Kimball inspector, Denver home inspection">
<meta property="og:title" content="Chrome21 Home Inspections | Denver, CO">
<meta property="og:description" content="Know before you close. Professional home inspections serving the Denver metro area.">
<meta property="og:type" content="website">
<meta name="geo.region" content="US-CO">
<meta name="geo.placename" content="Denver, Colorado">
```

---

## Accessibility Requirements

- All `<img>` tags must have descriptive `alt` attributes
- All interactive elements must be keyboard-navigable
- Color contrast must meet WCAG AA (the existing palette already meets this on dark bg)
- Section headings must follow logical hierarchy (one `<h1>`, then `<h2>`, then `<h3>`)
- Use semantic HTML: `<nav>`, `<section>`, `<footer>`, `<main>` — wrap all sections in `<main>`

---

## Responsive Breakpoints

These are already in the mockup CSS — preserve them exactly:

| Breakpoint | Behavior |
|---|---|
| `max-width: 900px` | Single-column layouts, hide hero badge, stack nav items if needed |
| `max-width: 600px` | Full-width buttons, single-column inspect grid, stacked credentials |

---

## What NOT to Do

- **Do not rewrite the copy.** Every word in the mockup was intentionally written using the StoryBrand framework. Use it exactly.
- **Do not change the color palette.** The colors match the brand logo.
- **Do not remove the testimonials section.** It must remain in the HTML, commented out.
- **Do not add a framework.** This is a pure HTML/CSS/JS static site. No React, no Vue, no Bootstrap.
- **Do not add new sections or content** not present in the mockup.
- **Do not use `localStorage` or cookies** — this is a static informational site.
- **Do not add a chatbot, popup, or exit intent overlay** unless explicitly requested.

---

## Form Embed Instructions (for Scott — include in README)

When you have a form embed code (from Formspree, Web3Forms, GoDaddy, or any other provider):

1. Open `index.html` in a text editor
2. Find the comment that says `<!-- FORM EMBED: Replace the .form-placeholder div below -->`
3. Delete the entire `<div class="form-placeholder">...</div>` block
4. Paste your embed code in its place
5. Save the file and re-upload to your host

---

## Testimonials Instructions (for Scott — include in README)

When you have client reviews:

1. Open `index.html` in a text editor
2. Find the comment `<!-- TESTIMONIALS: Uncomment this section when you have client reviews ready -->`
3. Delete the `<!--` at the start of that block and the `-->` at the end
4. Replace the three placeholder `"Testimonial text goes here."` strings with real quotes
5. Replace `Client Name` and city with real client info
6. Save and re-upload

---

## Deployment Notes (for README)


---

## Final Checklist Before Delivery

- [ ] All copy matches the mockup exactly
- [ ] Logo displays correctly in nav, hero, and footer
- [ ] All anchor links smooth-scroll to correct sections
- [ ] Form placeholder is clearly marked and easy to find
- [ ] Testimonials section exists in HTML but is commented out
- [ ] Phone number links work (`tel:8014049137`)
- [ ] Email links work (`mailto:scott@chrome21homeinspections.com`)
- [ ] Site is fully responsive at 375px, 768px, 1024px, 1440px
- [ ] No console errors
- [ ] Meta/SEO tags are present
- [ ] README includes deployment and form/testimonial instructions for a non-technical user
- [ ] Reduced motion media query is implemented
- [ ] Focus styles are visible for keyboard navigation
