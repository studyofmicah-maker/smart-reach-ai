# Plan for SmartReach AI Website

Build a modern, SaaS-style landing page for an AI-powered marketing agency.

## 1. Design & Theme
- **Color Palette**: Dark theme (Background: #020617, Cards: #0F172A), Primary: Indigo/Violet, Accent: Cyan.
- **Typography**: Inter for body, Space Grotesk (or sans-serif) for headings.
- **Interactions**: Framer Motion for scroll-reveals, hover effects on cards, and smooth transitions.
- **Images**: Using 3 generated images (Hero, Dashboard, Testimonial).

## 2. Component Architecture
- `Navbar`: Responsive, glassmorphism background.
- `Hero`: High-impact headline, subheadline, 2 CTA buttons, and abstract AI image.
- `Services`: Grid of 4 cards (AI Chatbots, Lead Gen, Marketing Automation, Conversion Optimization).
- `HowItWorks`: 4-step process (Capture, Qualify, Automate, Convert) with visual connectors.
- `Features`: 5-6 feature items with Lucide icons.
- `LeadCapture`: Form using shadcn components (Name, Email, Business Type, Challenge).
- `Pricing`: 3 pricing tiers (Starter, Growth, Pro).
- `Testimonials`: 2 cards with user images and feedback.
- `CTASection`: Final push with "Get Started" and "Book a Demo".
- `Footer`: Clean links and social placeholders.

## 3. Technical Implementation
- **React 19** functional components.
- **Tailwind CSS 4** for styling.
- **Lucide React** for icons.
- **Framer Motion** for animations.
- **Sonner** for form submission notifications.
- **Shadcn UI** for buttons, inputs, and forms.

## 4. Execution Steps
1. Update `index.css` with any global dark theme tweaks.
2. Create modular components for each section.
3. Integrate everything into `App.tsx`.
4. Validate build and accessibility.
