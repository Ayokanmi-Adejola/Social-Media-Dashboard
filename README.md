# Frontend Mentor - Social Media Dashboard with Theme Switcher Solution

This is a complete solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H) Frontend Mentor challenges help you improve your coding skills by building realistic projects.



## Overview

### The challenge

Users should be able to:

- ✅ View the optimal layout for the site depending on their device's screen size
- ✅ See hover states for all interactive elements on the page
- ✅ Toggle color theme to their preference
- ✅ Have their theme preference saved and remembered between sessions

![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

### Features

- **Responsive Design**: Optimized for mobile (375px), tablet (768px-1024px), and desktop (1440px+)
- **Theme Switcher**: Toggle between light and dark themes with smooth transitions
- **Local Storage**: Theme preference is saved and persists between browser sessions
- **Interactive Elements**: Hover effects on all cards with smooth animations
- **Accessibility**: Keyboard navigation support and proper ARIA labels
- **Social Media Cards**: Display follower counts for Facebook, Twitter, Instagram, and YouTube
- **Overview Metrics**: 8 detailed metric cards showing various social media statistics

### Built with

- **Semantic HTML5** markup with proper accessibility attributes
- **CSS Custom Properties** for theme variables and consistent styling
- **CSS Grid** for responsive card layouts
- **Flexbox** for component alignment and spacing
- **Mobile-first** responsive design workflow
- **Vanilla JavaScript** for theme switching functionality
- **Local Storage API** for theme persistence
- **Google Fonts** (Inter font family)

## Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Enjoy** the fully functional social media dashboard!

No build process or dependencies required - it's pure HTML, CSS, and JavaScript.

## Project Structure

```
social-media-dashboard-with-theme-switcher/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling with themes
├── script.js           # Theme switching functionality
├── images/             # SVG icons and favicon
│   ├── favicon-32x32.png
│   ├── icon-facebook.svg
│   ├── icon-twitter.svg
│   ├── icon-instagram.svg
│   ├── icon-youtube.svg
│   ├── icon-up.svg
│   └── icon-down.svg
├── design/             # Reference design images
└── README.md           # This file
```

## Design Specifications

### Layout Breakpoints
- **Mobile**: 375px and below
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px and above

### Color Palette

#### Light Theme
- Background: `hsl(0, 0%, 100%)`
- Top Pattern: `hsl(225, 100%, 98%)`
- Card Background: `hsl(227, 47%, 96%)`
- Primary Text: `hsl(230, 17%, 14%)`
- Secondary Text: `hsl(228, 12%, 44%)`

#### Dark Theme
- Background: `hsl(230, 17%, 14%)`
- Top Pattern: `hsl(232, 19%, 15%)`
- Card Background: `hsl(228, 28%, 20%)`
- Primary Text: `hsl(0, 0%, 100%)`
- Secondary Text: `hsl(228, 34%, 66%)`

#### Social Media Colors
- Facebook: `hsl(208, 92%, 53%)`
- Twitter: `hsl(203, 89%, 53%)`
- Instagram: Linear gradient `hsl(37, 97%, 70%)` to `hsl(329, 70%, 58%)`
- YouTube: `hsl(348, 97%, 39%)`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400 (Regular), 700 (Bold)
- **Overview Card Headings**: 14px
