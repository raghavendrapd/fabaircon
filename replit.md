# Fab Air Con - AC Rental Platform

## Overview

Fab Air Con is an air conditioning rental website designed to showcase and facilitate rentals of various AC models. The platform emphasizes simplicity and direct customer engagement through WhatsApp integration. Built as a modern web application, it features a clean, professional design inspired by rental platforms like Airbnb, with a focus on product presentation and frictionless customer contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (November 6, 2025)

- Created professional AC rental website with hero section, AC model showcase, and WhatsApp integration
- Implemented backend API with in-memory storage for AC models
- Connected frontend to backend API with proper loading states
- Fixed React nesting warnings in Header component
- Completed end-to-end testing verifying all features work correctly
- Generated custom AC unit images and hero background image

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **React Query (TanStack Query)** for server state management and API data fetching

**UI Component Library**
- **shadcn/ui** components built on Radix UI primitives for accessible, unstyled base components
- **Tailwind CSS** for utility-first styling with custom design system
- Component configuration uses "new-york" style variant
- Custom theme variables defined in CSS for light/dark mode support
- Typography: Inter font family (weights 400-700) for all text elements

**Design System**
- Grid-based responsive layouts (mobile-first approach)
- Consistent spacing using Tailwind's spacing scale (2, 4, 6, 8, 12, 16, 20, 24)
- Custom elevation system with hover and active states (hover-elevate, active-elevate-2)
- Professional color scheme with neutral base colors and green primary accent (145 70% 35%)
- Border radius customization (lg: 9px, md: 6px, sm: 3px)

**Key Components**
- `Header` - Sticky navigation with logo and WhatsApp CTA
- `Hero` - Full-width hero section with background image and dual CTAs
- `AcModelCard` - Product card displaying AC specifications and WhatsApp contact button
- `WhyChooseUs` - Feature grid highlighting service benefits
- `HowItWorks` - Step-by-step process visualization
- `Footer` - Contact information and business hours
- `FloatingWhatsApp` - Fixed floating action button for quick contact

**State Management Pattern**
- Server state managed through React Query with infinite stale time
- No global client state management needed (simple application)
- Loading states with skeleton loaders for AC models

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- ESM module system (type: "module" in package.json)
- Development server uses `tsx` for TypeScript execution
- Production build uses `esbuild` for server-side bundling

**API Design**
- RESTful endpoints under `/api` prefix
- Routes:
  - `GET /api/ac-models` - Fetch all AC models
  - `GET /api/ac-models/:id` - Fetch single AC model by ID
- In-memory storage implementation (`MemStorage` class) with seeded demo data
- Storage interface (`IStorage`) allows for future database integration

**Server Middleware**
- JSON body parsing with raw body preservation for webhooks
- URL-encoded form data support
- Request logging middleware for API routes with timing information
- Vite middleware integration for development HMR

**Development Tools**
- Replit-specific plugins for error overlay, cartographer, and dev banner
- Runtime error modal for better development experience
- Hot Module Replacement (HMR) for instant updates during development

### Data Schema

**AC Models Schema**
```typescript
{
  id: uuid (primary key, auto-generated)
  name: text (required)
  brand: text (required)
  type: text (required)
  capacity: text (required)
  coverage: text (required)
  energyRating: text (required)
  features: text[] (array, required)
  imageUrl: text (required)
}
```

**Type Safety**
- Shared types between client and server via `shared/schema.ts`
- Insert types exclude auto-generated fields (id)
- Full TypeScript inference from database schema

**Seeded AC Models** (6 total)
1. Premium Split AC (LG) - 1.5 Ton, 5 Star
2. Portable AC Unit (Honeywell) - 1 Ton, 4 Star
3. Window AC Classic (Carrier) - 1.2 Ton, 3 Star
4. Cassette Ceiling AC (Daikin) - 2 Ton, 5 Star
5. Floor Standing Tower (Samsung) - 1.8 Ton, 4 Star
6. Dual Split System (Mitsubishi) - 2.5 Ton, 5 Star

### Routing & Navigation

**Client-Side Routing**
- Wouter for minimal bundle size routing
- Single page application (SPA) architecture
- Routes:
  - `/` - Home page with all components
  - `*` - 404 Not Found page

**Navigation Pattern**
- Header navigation uses hash-based scrolling (#models, #why-us, #how-it-works)
- Smooth scroll behavior for internal links
- No page reloads for section navigation

**Path Aliases**
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Build & Deployment

**Build Configuration**
- Client build outputs to `dist/public`
- Server build outputs to `dist`
- Separate build steps for client (Vite) and server (esbuild)
- Production server serves static files from build output

**Development Workflow**
- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run start` - Run production server

## External Dependencies

### UI Component Libraries
- **Radix UI** - Comprehensive set of accessible, unstyled React components:
  - Dialog, Dropdown, Popover, Toast, Tooltip
  - Form controls: Select, Checkbox, Radio, Switch, Slider
  - Navigation: Tabs, Accordion, Menu components
  - Layout: Separator, Scroll Area, Collapsible
- **Lucide React** - Icon library for UI icons (Snowflake, Grid3x3, Zap, Truck, Wrench, etc.)
- **React Icons** - Additional icons, specifically Font Awesome for WhatsApp icon (FaWhatsapp)

### Styling & Utilities
- **Tailwind CSS** with PostCSS for processing
- **class-variance-authority** (CVA) - Type-safe component variants
- **clsx** & **tailwind-merge** - Conditional className utilities

### Form Management
- **React Hook Form** - Form state and validation (installed but not currently used)
- **@hookform/resolvers** - Validation schema resolvers
- **Zod** - Runtime type validation and schema definition
- **drizzle-zod** - Generate Zod schemas from Drizzle models

### Development Dependencies
- **TypeScript** with strict mode enabled
- **Vite plugins** for Replit integration (dev banner, error overlay, cartographer)
- **esbuild** for server bundling in production

### Third-Party Integrations
- **WhatsApp Business** - Direct messaging integration via `wa.me` links (no API key required)
  - Phone number stored as mock value: "+1234567890" (needs to be updated for production)
  - Pre-populated messages for different contexts (general inquiry, model-specific)
  - Multiple WhatsApp CTAs: header button, hero section, floating action button, product cards, footer

### Asset Management
- Generated images stored in `attached_assets/generated_images/`
- Image imports handled through Vite aliases with `@assets` prefix
- Image mapping object in Home.tsx for dynamic asset loading
- Generated images include:
  - Hero background (modern living room with AC)
  - 6 AC product images (split, portable, window, cassette, floor standing, dual split)

## Production Readiness Checklist

Before deploying to production, update the following:

1. **WhatsApp Contact Information**
   - Replace mock phone number "+1234567890" in all components:
     - `Header.tsx`
     - `Hero.tsx`
     - `Footer.tsx`
     - `FloatingWhatsApp.tsx`
   - Consider creating a shared config file for contact information

2. **Social Media Links**
   - Update `href="#"` placeholders in Footer.tsx with actual social media URLs
   - Facebook, Instagram, Twitter links

3. **Contact Details**
   - Update email address in Footer.tsx
   - Update physical address in Footer.tsx
   - Verify business hours are accurate

4. **SEO Optimization**
   - Verify meta descriptions in index.html
   - Add Open Graph image
   - Update title tags as needed

5. **Testing**
   - Test floating WhatsApp button on mobile devices
   - Verify all WhatsApp links work with production phone number
   - Test across different browsers and screen sizes
