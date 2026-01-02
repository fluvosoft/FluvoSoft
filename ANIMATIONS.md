# Animation Guide

This document describes all the UI/UX animations implemented to match R3.com's smooth, professional animations.

## Animation Libraries Used

- **Framer Motion** - React animation library for component animations
- **GSAP (GreenSock)** - High-performance animation library for complex animations
- **GSAP ScrollTrigger** - For scroll-based animations

## Animation Features

### 1. Hero Section
- **Fade-in animations** for title, text, and buttons
- **Staggered entrance** - Elements appear sequentially
- **Hover effects** on buttons with scale animations
- **Smooth gradient background** fade-in

### 2. Header/Navigation
- **Slide-down animation** on page load
- **Smooth mobile menu** transitions with AnimatePresence
- **Hover effects** on navigation links

### 3. Features Section
- **Staggered card animations** - Cards appear one by one
- **Hover effects** - Cards lift up on hover
- **Icon animations** - Icons scale and rotate on hover
- **Scroll-triggered animations** - Elements animate when scrolled into view

### 4. Partners Section
- **Fade-in with scale** animations
- **Staggered grid** appearance
- **Hover effects** - Partner logos scale up on hover

### 5. Solutions Section
- **Card slide-up animations** on scroll
- **Staggered appearance** of solution cards
- **Interactive hover effects** - Cards lift and scale
- **Arrow animation** on hover

### 6. Stats Section
- **Number counter animations** (ready for implementation)
- **Scale animations** on scroll into view
- **Hover effects** on stat cards

### 7. Contact Form
- **Form field focus** animations
- **Button hover/tap** animations
- **Success/error message** slide-in animations
- **Smooth form submission** feedback

## Animation Components

### AnimatedSection
Wrapper component for sections that need scroll-triggered animations.

```tsx
<AnimatedSection delay={0.2} direction="up">
  <YourContent />
</AnimatedSection>
```

### AnimatedText
For text elements that need fade-in animations.

```tsx
<AnimatedText delay={0.3}>
  Your text here
</AnimatedText>
```

## Custom Hooks

### useScrollAnimation
Hook for GSAP-based scroll animations.

### useFadeInAnimation
Hook for fade-in animations with delay.

### useSlideInAnimation
Hook for slide-in animations from different directions.

## Animation Principles

1. **Performance First** - All animations use GPU-accelerated properties
2. **Smooth Transitions** - Easing functions match R3.com's style
3. **Scroll-Triggered** - Animations activate when elements enter viewport
4. **Respect User Preferences** - Animations respect `prefers-reduced-motion`
5. **Staggered Effects** - Related elements animate in sequence for visual flow

## Customization

### Adjusting Animation Speed
Edit the `duration` property in animation variants:
```tsx
transition: { duration: 0.8 } // Increase for slower, decrease for faster
```

### Changing Easing
Modify the `ease` property:
```tsx
ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier
```

### Stagger Timing
Adjust stagger delay in container variants:
```tsx
transition: { staggerChildren: 0.15 } // Time between each child animation
```

## Browser Support

All animations work in modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Animations use `transform` and `opacity` for best performance
2. ScrollTrigger instances are cleaned up on unmount
3. Animations only trigger once per element (using `once: true`)
4. Reduced motion preferences are respected

