# Anand Global Foods (AGF) — Project Guide

## Project Overview

**Anand Global Foods (AGF)** is a corporate website for a leading agri-export company with 14+ years of global experience. The company exports food products (Basmati Rice varieties, Sugar, Tea, Coffee, Spices, Chickpeas, Peanuts, Sesame Seeds) to 93+ countries worldwide. The website serves as a marketing and informational platform for international distributors and buyers.

- **App name in package.json**: `agf_website`
- **Primary colour**: Deep green (`#0d4a27`) — brand primary
- **Accent colour**: Orange (`#f97316`) — secondary/CTA
- **Font**: Poppins (Google Fonts, weights 300/400/700/900)

---

## Tech Stack

| Layer              | Technology                                                    |
| ------------------ | ------------------------------------------------------------- |
| Framework          | [Next.js 15](https://nextjs.org/) (App Router) with Turbopack |
| Language           | TypeScript 5                                                  |
| Styling            | Tailwind CSS v4 (via `@tailwindcss/postcss`)                  |
| Icons              | `@heroicons/react` v2, `lucide-react`                         |
| Linting/Formatting | [Biome](https://biomejs.dev/) v2.2.0                          |
| Package manager    | npm / bun (both lockfiles present)                            |
| Runtime            | Node.js                                                       |

---

## Project Structure

```
agf/
├── app/
│   ├── layout.tsx              # Root layout — wraps all pages with NavBar + Footer
│   ├── page.tsx                # Home page (Hero, Highlights, Why Choose AGF, Featured Products)
│   ├── globals.css             # Global CSS variables + Tailwind theme tokens
│   ├── favicon.ico
│   ├── assets/
│   │   └── gallaryImage.json   # Hero gallery image data (src + alt)
│   ├── components/
│   │   ├── NavBar.tsx          # Sticky glassmorphic nav, responsive, "Request Quote" CTA
│   │   ├── footer.tsx          # Full footer with links, products, contact, newsletter
│   │   ├── card.tsx            # Highlight/stats card (icon + text)
│   │   ├── FeatureCard.tsx     # Featured product thumbnail card
│   │   ├── ProductCard.tsx     # Detailed product card (uniform height, flex layout)
│   │   └── gallery.tsx         # Hero image slideshow (full viewport minus nav)
│   ├── pages/
│   │   ├── about/              # About Us page (story, highlights, mission/vision, values)
│   │   ├── certifications/     # Certifications page (ISO, HACCP, BRC, FDA, APEDA, FSSAI, Halal, Kosher, Organic)
│   │   ├── contact/            # Contact Us page
│   │   ├── globalPresence/     # Global Presence / export map page
│   │   └── products/           # Products catalogue page (18 products, 4 categories, filterable)
│   └── utils/
│       └── constants.ts        # Shared constants (theme object — currently empty)
├── public/                     # Static assets
│   ├── logo/                   # logoWithoutBg.png
│   ├── heroGallery/            # 1.jpg – 6.jpg (hero slideshow images)
│   ├── image/
│   │   ├── products/           # 18 product images (rice variants, coffee, spices, etc.)
│   │   └── certifications/     # iso.jpg, haccp.jpg, brc.jpg
│   └── *.svg                   # earth-globe.svg, sun.svg, quality.svg, handshake.svg
├── next.config.ts              # Next.js config (minimal, no custom settings yet)
├── biome.json                  # Biome linter/formatter config
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

---

## Design System

Defined in [`app/globals.css`](app/globals.css) and exposed as Tailwind CSS tokens via `@theme inline`:

| Token                             | CSS Variable     | Value                  |
| --------------------------------- | ---------------- | ---------------------- |
| `bg-background`                   | `--background`   | `#ffffff`              |
| `text-foreground`                 | `--foreground`   | `#171717`              |
| `text-primary` / `bg-primary`     | `--primary`      | `#0d4a27` (dark green) |
| `text-secondary` / `bg-secondary` | `--secondary`    | `#f97316` (orange)     |
| `bg-accent`                       | `--accent`       | `#f3f4f6`              |
| `font-sans`                       | `--font-poppins` | Poppins (Google Fonts) |

**Body defaults**: `color: var(--color-primary)`, horizontal padding `2%`.

NavBar background: `bg-white/30 backdrop-blur-lg` (glassmorphic, rounded-full).
Footer background: `bg-primary` (dark green).

---

## Pages & Routes

| Route                      | File                             | Description                                                              |
| -------------------------- | -------------------------------- | ------------------------------------------------------------------------ |
| `/`                        | `app/page.tsx`                   | Home — Hero gallery, 4 highlight cards, Why Choose AGF, Featured Products |
| `/pages/about`             | `app/pages/about/page.tsx`       | Company history, mission/vision, key highlights, core values             |
| `/pages/products`          | `app/pages/products/page.tsx`    | Full product catalogue (18 products, 4 categories with filter)           |
| `/pages/certifications`    | `app/pages/certifications/page.tsx` | 9 certifications showcase (ISO, HACCP, BRC, FDA, APEDA, FSSAI, Halal, Kosher, Organic) |
| `/pages/globalPresence`    | `app/pages/globalPresence/`      | Export map, countries served                                             |
| `/pages/contact`           | `app/pages/contact/`             | Contact form and company info                                            |

> **Note**: Pages live under `app/pages/` (a custom folder), **not** the Next.js 13 `pages/` router. All routing uses the Next.js App Router.

---

## Key Components

### `NavBar.tsx`

- `"use client"` — uses React state for mobile menu toggle
- Sticky top, z-index 50, glassmorphic (`bg-white/30 backdrop-blur-lg`), `rounded-full`
- Logo: text "Anand Global Foods" (font-black)
- Desktop: horizontal links with `hover:text-primary` effect; Mobile: animated dropdown with hamburger/X icon
- Nav links: Home, About, Products, Global Presence, Certifications, Contact Us
- Desktop CTA: "Request Quote" orange pill button
- Mobile CTA: Full-width "Request Quote" button at bottom of dropdown

### `gallery.tsx`

- Auto-rotating hero slideshow using images from `/heroGallery/1.jpg` – `6.jpg`
- Height: `calc(100svh - 60px)` — fills viewport minus nav height
- Receives `galleryImages` prop array `{ src, alt }[]`
- Data sourced from `app/assets/gallaryImage.json`

### `footer.tsx`

- 4-column grid: Company Info + logo, Quick Links, Our Products, Contact Info
- Quick Links include: Home, About Us, Products, Global Presence, Certifications, Contact
- Newsletter email subscription form (static/UI only)
- Social icons: Twitter/X, LinkedIn
- Bottom bar: copyright, Privacy Policy, Terms of Service, Sitemap links

### `card.tsx`

- Highlight card: icon (SVG) + text, used on home page highlights section

### `FeatureCard.tsx`

- Product thumbnail card: image + label text

### `ProductCard.tsx`

- Detailed product card for the products page
- Uniform height via `h-full` + `flex flex-col` layout
- `line-clamp-1` on title, `line-clamp-2` on description for consistency
- `mt-auto` on button row to align buttons at bottom
- Category badge, detail checklist, "View Details" + heart button

---

## Products Data

The products page (`app/pages/products/page.tsx`) contains 18 products across 4 filterable categories:

| Category            | Products                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| **Rice** (8)        | 1121 Basmati, 1509 Basmati, 1718 Basmati, Traditional Basmati, Sella Basmati, Steam Basmati, White Rice, Sona Masoori |
| **Beverages** (2)   | Black Tea, Coffee                                                                                      |
| **Spices** (3)      | Green Cardamom, Whole Spices, Ground Spices                                                            |
| **Agri Commodities** (4) | Refined Sugar, Kabuli Chickpeas, Peanuts, Sesame Seeds                                           |

Each product includes: `name`, `img`, `description`, `category`, `href`, `details[]` (origin, spec, certifications).

---

## Certifications Data

The certifications page (`app/pages/certifications/page.tsx`) showcases 9 certifications:

| Certification | Full Name                                            | Visual     |
| ------------- | ---------------------------------------------------- | ---------- |
| ISO 22000     | Food Safety Management System                        | Image      |
| HACCP         | Hazard Analysis & Critical Control Points            | Image      |
| BRC           | British Retail Consortium Global Standard            | Image      |
| FDA           | U.S. Food & Drug Administration                      | Icon       |
| APEDA         | Agricultural & Processed Food Products Export Dev Authority | Icon |
| FSSAI         | Food Safety & Standards Authority of India           | Icon       |
| Halal         | Halal Certification                                  | Icon       |
| Kosher        | Kosher Certification                                 | Icon       |
| Organic       | Organic Certifications (NPOP / USDA / EU Organic)    | Icon       |

Each certification has: `name`, `fullName`, `description`, `scope[]`, colour theme, and either an image or Heroicon.

---

## Home Page Sections

The home page (`app/page.tsx`) contains the following sections in order:

1. **Hero Section** — Full-viewport gallery slideshow with tagline "Every Grain, A Promise Kept" and "Explore Our Products" CTA
2. **Highlights** — 4 stat cards (Global Reach, 14+ Years, Quality, Partner of Choice)
3. **Why Choose AGF** — 4 cards (Certified Quality, Global Supply Chain, 14+ Years Expertise, Custom Solutions) with "Learn more about AGF →" link to About page
4. **Featured Products** — 4 product thumbnails (Basmati Rice, Sugar, Tea, Chickpeas)

---

## Development Commands

```bash
# Start dev server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint (Biome)
npm run lint

# Format (Biome)
npm run format
```

Dev server runs at **http://localhost:3000**.

---

## Code Style & Conventions

- **Linter/Formatter**: Biome v2.2.0 — indentation 2 spaces, recommended rules, Next.js + React domains enabled, auto import organisation on save.
- **TypeScript**: Strict mode via `tsconfig.json`.
- **Components**: PascalCase filenames (e.g., `NavBar.tsx`, `FeatureCard.tsx`); exception: `footer.tsx`, `gallery.tsx`, `card.tsx` (lowercase).
- **Tailwind**: Utility-first; custom tokens exposed via `@theme inline` — always prefer `text-primary`, `bg-secondary`, etc. over raw hex values.
- **Images**: Use Next.js `<Image />` component for all images (optimised, lazy-loaded).
- **Links**: Use Next.js `<Link />` component for all internal navigation.
- **Client components**: Add `"use client"` directive only when using React hooks or browser APIs.

---

## Important Notes for AI Assistants

1. **App Router only** — do not use the `pages/` directory pattern. All pages live under `app/pages/` (custom folder).
2. **No dark mode** — dark mode CSS is commented out; do not re-enable without explicit request.
3. **Tailwind v4** — uses the new `@import "tailwindcss"` and `@theme inline` syntax, not the older `tailwind.config.js` approach.
4. **Biome, not ESLint/Prettier** — run `npm run lint` and `npm run format` using Biome.
5. **Contact info in footer is placeholder** — address and phone numbers are dummy values.
6. **Social links in footer are `href="#"`** — not connected to real profiles yet.
7. **Newsletter subscription** — frontend UI only; no backend/API integration exists.
8. **`app/utils/constants.ts`** — `theme` object is currently empty; intended for shared theme constants.
9. **NavBar style** — glassmorphic (`bg-white/30 backdrop-blur-lg rounded-full`), nav hover effect is `hover:text-primary` (no background fill).
10. **Gallery height** — uses `calc(100svh - 60px)` to fill viewport minus nav. `svh` used for better mobile support.
11. **ProductCard dimensions** — cards are uniform height via `h-full flex flex-col` with `line-clamp` on text and `mt-auto` on buttons.
12. **Product images** — 18 images in `public/image/products/`. All generated; replace with real photography when available.
13. **Certification images** — only 3 badge images (ISO, HACCP, BRC) in `public/image/certifications/`. Remaining 6 certifications use Heroicon-based styled badges. Replace with real certification logos when available.
14. **Products page** — uses client-side category filtering with `useState`. Categories: All, Rice, Beverages, Spices, Agri Commodities.
15. **Request Quote CTA** — present in NavBar (desktop pill button + mobile full-width button), links to `/pages/contact`.
