# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**MonPortfolio** is a static portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools are used.

**Design**: Minimalist, professional, dark theme
**Approach**: Mobile-first responsive design
**Languages**: Code in English (variables, functions, comments), visible content in French

## Development

### Running Locally

Open `index.html` directly in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server is installed)
npx http-server

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
/
├── index.html           # Main page
├── css/
│   ├── style.css       # Main stylesheet
│   └── variables.css   # CSS custom properties (colors, spacing, etc.)
├── js/
│   └── main.js         # JavaScript interactions
├── assets/
│   ├── images/         # Images and graphics
│   └── fonts/          # Custom fonts (if any)
└── CLAUDE.md           # This file
```

## Design Guidelines

### Color Scheme (Dark Theme)

Use CSS custom properties defined in `css/variables.css`:
- Background colors: Dark tones (#0a0a0a, #1a1a1a, #2a2a2a)
- Text colors: Light grays and whites for readability
- Accent colors: One or two accent colors for links, buttons, highlights
- Maintain WCAG AA contrast ratios (4.5:1 for text)

### Typography

- Use system fonts or a single professional web font (e.g., Inter, Roboto)
- Establish clear hierarchy with font sizes and weights
- Line height: 1.5-1.8 for body text
- Limit line length: 60-80 characters for readability

### Spacing & Layout

- Mobile-first: Design for 320px+ width first
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Use consistent spacing scale (8px base: 8, 16, 24, 32, 48, 64px)
- Keep design clean with ample whitespace

### Responsive Approach

```css
/* Mobile first - base styles for mobile */
.element { ... }

/* Tablet and up */
@media (min-width: 768px) { ... }

/* Desktop and up */
@media (min-width: 1024px) { ... }
```

## Code Conventions

### Language Requirements

**Code (English):**
- Variable names: `userName`, `projectList`, `scrollPosition`
- Function names: `initializeNav()`, `handleScroll()`, `toggleMenu()`
- CSS classes: `.nav-menu`, `.project-card`, `.contact-form`
- Comments: `// Initialize navigation menu`

**Content (French):**
- Page text, headings, buttons in French
- Alt text for images in French
- Meta descriptions in French

### HTML

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Include proper meta tags (viewport, description, charset)
- Accessible markup: proper heading hierarchy, alt text, ARIA labels where needed

### CSS

- No preprocessors, no frameworks
- Use CSS custom properties for theming
- BEM-like naming convention: `.block__element--modifier`
- Organize by section/component
- Mobile-first media queries

### JavaScript

- Vanilla JavaScript only (ES6+ is fine)
- No external libraries or frameworks
- Keep code modular with functions
- Handle events efficiently (use event delegation where appropriate)
- Graceful degradation: site should work without JS for core content

## Common Tasks

### Adding a Project

1. Add project HTML in the projects section of `index.html`
2. Add project image to `assets/images/`
3. Update project styles in `css/style.css` if needed

### Modifying Colors

1. Edit CSS custom properties in `css/variables.css`
2. All colors should reference these variables

### Adding Animations

- Use CSS transitions and animations where possible
- Keep animations subtle and professional
- Respect `prefers-reduced-motion` media query

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Performance

- Optimize images (use WebP with fallbacks, compress files)
- Minimize HTTP requests
- Inline critical CSS if needed
- Lazy load images below the fold
- Keep total page size under 1MB

## Deployment

Static site can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files maintaining the directory structure.
