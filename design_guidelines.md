# Design Guidelines for Fab Air Con - AC Rental Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Airbnb's rental platform aesthetics combined with service-oriented business websites. Focus on trust-building, professional presentation, and seamless contact flow.

**Core Principles**:
- Clean, professional aesthetic that conveys reliability and comfort
- Product-focused layout showcasing AC models as hero items
- Frictionless contact through prominent WhatsApp integration
- Trust-building through professional imagery and clear information

## Typography

**Font Families** (Google Fonts):
- Primary: Inter (headers, UI elements) - weights 400, 500, 600, 700
- Secondary: Inter (body text) - weights 400, 500

**Type Scale**:
- Hero headline: text-5xl md:text-6xl font-bold
- Section titles: text-3xl md:text-4xl font-semibold
- Model names: text-2xl font-semibold
- Specifications: text-base font-medium
- Body text: text-base
- CTAs: text-lg font-semibold

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm.

**Container Strategy**:
- Max-width: max-w-7xl for main content
- Section padding: py-16 md:py-24
- Component spacing: gap-6 md:gap-8

**Grid Layouts**:
- AC Models: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features: grid-cols-1 md:grid-cols-3
- Specifications: grid-cols-2

## Component Library

### Navigation
**Header**: Fixed top navigation with logo (left), menu items (center), WhatsApp contact button (right, green accent)

### Hero Section
**Layout**: Full-width hero with large background image showing comfortable indoor space with AC
**Content**: 
- Company name "Fab Air Con" as primary headline
- Tagline: "Premium Air Conditioning Rentals for Every Space"
- Dual CTA: "Browse Models" + "Contact on WhatsApp" (with blurred background)
- Trust indicators: Years in service, customer count

### AC Model Cards
**Structure** (each card):
- Large product image of AC unit (top)
- Model name and brand
- Key specifications in icon+text format (capacity, type, coverage area)
- Brief features list (3-4 bullet points)
- Prominent WhatsApp CTA button: "Get Rental Details on WhatsApp"
- NO price display

**Specifications Grid** (within each card):
- BTU/Tonnage
- Room size coverage
- AC type (Window/Split/Portable)
- Energy efficiency

### WhatsApp Integration
**Primary CTA**: Green button with WhatsApp icon, text "Chat on WhatsApp"
**Floating Action Button**: Fixed bottom-right corner on mobile, always visible
**Contact Section**: Large WhatsApp number display with click-to-chat functionality

### Additional Sections
**Why Choose Us**: 3-column grid with icons (Delivery, Installation Support, Maintenance)
**How It Works**: 4-step process (Browse → Contact → Delivery → Enjoy)
**Service Areas**: Map or list of coverage areas
**Footer**: Contact info, business hours, WhatsApp number, social links

## Icons
**Library**: Heroicons (via CDN)
**Usage**:
- WhatsApp icon for all contact CTAs
- Specification icons: Snowflake (cooling), Grid (coverage), Zap (energy)
- Feature icons: Truck (delivery), Wrench (support), Clock (quick service)

## Images

**Hero Image**: Professional photo of modern, comfortable living room with visible AC unit, bright and inviting atmosphere - full-width background with overlay

**AC Model Images**: High-quality product photos of each AC unit on white/light background, consistent styling across all models (approximately 6-8 different models)

**Service Section**: Supporting images showing installation/delivery process (optional, 2-3 images)

## Animations
**Minimal approach**:
- Smooth scroll behavior
- Subtle hover lift on AC model cards (translate-y)
- WhatsApp button gentle pulse effect
- NO complex scroll animations

## Accessibility
- WhatsApp buttons have clear aria-labels
- Alt text for all AC model images
- Focus states for all interactive elements
- Sufficient contrast ratios throughout

## Mobile Optimization
- Stack AC model cards to single column
- Hamburger menu for navigation
- Floating WhatsApp button always accessible
- Touch-friendly button sizes (minimum 44x44px)