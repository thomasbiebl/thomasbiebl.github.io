# Thomas Biebl - Personal Website

## Overview

This is a personal portfolio website for Thomas Biebl, built as a static single-page application. The website showcases personal information, professional background, hobbies, and contact details in German. It features a modern, responsive design with smooth scrolling navigation and mobile-friendly interactions.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Dark tech theme (navy #0B0F17) with sky blue (#38BDF8) accent, monospace details, own portrait photo.
Content preferences: Bitcoin and Trailrunning are the primary hobbies; photography is not listed.

## System Architecture

### Frontend Architecture
- **Static HTML/CSS/JavaScript**: Pure client-side implementation without any backend framework
- **Single Page Application (SPA)**: All content is contained within a single HTML file with JavaScript-powered navigation
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox for layout management
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features

### Technology Stack
- **HTML5**: Semantic markup with proper meta tags for SEO
- **CSS3**: Modern CSS with custom properties (CSS variables) for theming
- **Vanilla JavaScript**: No framework dependencies, pure DOM manipulation
- **Google Fonts**: Space Grotesk (text) and JetBrains Mono (accents)

## Key Components

### Navigation System
- Fixed navigation bar with smooth scrolling to sections
- Active link highlighting based on scroll position
- Mobile hamburger menu for responsive navigation
- Logo and brand integration

### Visual Design System
- CSS custom properties for consistent theming
- Dark navy palette with sky blue (#38BDF8) accents, defined as CSS variables in style.css
- Terminal/PowerShell-style hero card next to the portrait photo (assets/thomas-biebl-photo-web.jpg)
- Bordered cards on a dark surface
- Responsive breakpoints for mobile, tablet, and desktop
- Accent used for links, highlights, and interactive elements

### Content Sections
- Hero section (home) - IT Consultant focus
- About section (Über mich) - Updated with accurate professional background
- Professional section (Beruflich) - Teccle Group GmbH (ehemals EDV-BV GmbH) career timeline
- Offline section (Hobbys) - Bitcoin and Trailrunning as primary hobbies, plus Wandern, Imkern, Rockmusik, Lesen
- Contact section (Kontakt) - Email, GitHub, Xing links

### Interactive Features
- Smooth scroll navigation
- Mobile menu toggle functionality
- Scroll-based animations (planned/partially implemented)
- Responsive mobile interactions

## Data Flow

### Client-Side Only
- No server-side data processing
- All content is static and embedded in HTML
- JavaScript handles:
  - Navigation state management
  - Scroll position tracking
  - Mobile menu state
  - Animation triggers

### User Interactions
1. User clicks navigation link → JavaScript prevents default → Smooth scroll to section
2. User scrolls page → JavaScript updates active navigation link
3. User opens mobile menu → JavaScript toggles menu visibility
4. Page load → JavaScript initializes all interactive components

## External Dependencies

### CDN Resources
- **Google Fonts**: Space Grotesk and JetBrains Mono
- **http-server**: Development server for local testing

### Development Tools
- **npm/Node.js**: Package management and development server
- **http-server**: Static file serving for development

## Deployment Strategy

### Static Hosting
- **Target**: Any static hosting provider (Netlify, Vercel, GitHub Pages, etc.)
- **Build Process**: No build step required - direct file serving
- **Assets**: All assets should be self-contained or use reliable CDNs

### Development Environment
- **Local Development**: Uses http-server for local file serving
- **No Backend Required**: Pure frontend application
- **Mobile Testing**: Responsive design testable across devices

### Optimization Considerations
- **Performance**: Minimal dependencies, optimized for fast loading
- **SEO**: Proper meta tags and semantic HTML structure
- **Accessibility**: Should follow WCAG guidelines for navigation and content
- **Browser Support**: Modern browsers with CSS Grid/Flexbox support

### File Structure
```
/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with theming
├── script.js           # JavaScript functionality
├── package.json        # Node.js dependencies
├── package-lock.json   # Dependency lock file
└── assets/             # Static assets (logo, images)
    └── logo.svg        # Logo file
```

The architecture prioritizes simplicity, performance, and maintainability while providing a professional presentation of personal information in a responsive, accessible format.