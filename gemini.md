# Anand Global Foods (AGF) — Project Guide

## Project Overview

**Anand Global Foods (AGF)** is a corporate website for a leading agri-export company with 14+ years of global experience. The company exports food products (Basmati Rice, Sugar, Tea, Chickpeas) to 93+ countries worldwide. The website serves as a marketing and informational platform for international distributors and buyers.

- **App name in package.json**: `agf_website`
- **Primary colour**: Deep green (`#0d4a27`) — brand primary
- **Accent colour**: Orange (`#f97316`) — secondary/CTA
- **Font**: Poppins (Google Fonts, weights 300/400/700/900)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) with Turbopack |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Icons | `@heroicons/react` v2, `lucide-react` |
| Linting/Formatting | [Biome](https://biomejs.dev/) v2.2.0 |
| Package manager | npm / bun (both lockfiles present) |
| Runtime | Node.js |

---

## Project Structure

```
agf/
├── app/
│   ├── layout.tsx          # Root layout — wraps all pages with NavBar + Footer
│   ├── page.tsx            # Home page (Hero, Highlights, Featured Products)
│   ├── globals.css         # Global CSS variables + Tailwind theme tokens
│   ├── favicon.ico
│   ├── components/
│   │   ├── NavBar.tsx      # Sticky top nav, responsive (hamburger on mobile)
│   │   ├── footer.tsx      # Full footer with links, products, contact, newsletter
│   │   ├── card.tsx        # Highlight/stats card (icon + text)
│   │   ├── FeatureCard.tsx # Featured product thumbnail card
│   │   ├── ProductCard.tsx # Detailed product card (used on products page)
│   │   └── gallery.tsx     # Hero image gallery/slideshow component
│   ├── pages/
│   │   ├── about/          # About Us page
│   │   ├── contact/        # Contact Us page
│   │   ├── globalPresence/ # Global Presence / export map page
│   │   └── products/       # Products catalogue page
│   └── utils/
│       └── constants.ts    # Shared constants (theme object — currently empty)
├── public/                 # Static assets
│   ├── logo/               # logoWithoutBg.png
│   ├── heroGallery/        # 1.jpg – 6.jpg (hero slideshow images)
│   ├── image/products/     # rice.jpg, sugar.jpg, tea.jpg, chickpea.jpg
│   └── *.svg               # earth-globe.svg, sun.svg, quality.svg, handshake.svg
├── next.config.ts          # Next.js config (minimal, no custom settings yet)
├── biome.json              # Biome linter/formatter config
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

---

## Design System

Defined in [`app/globals.css`](app/globals.css) and exposed as Tailwind CSS tokens via `@theme inline`:

| Token | CSS Variable | Value |
|---|---|---|
| `bg-background` | `--background` | `#ffffff` |
| `text-foreground` | `--foreground` | `#171717` |
| `text-primary` / `bg-primary` | `--primary` | `#0d4a27` (dark green) |
| `text-secondary` / `bg-secondary` | `--secondary` | `#f97316` (orange) |
| `bg-accent` | `--accent` | `#f3f4f6` |
| `font-sans` | `--font-poppins` | Poppins (Google Fonts) |

**Body defaults**: `color: var(--color-primary)`, horizontal padding `2%`.

NavBar background: `bg-amber-100`.  
Footer background: `bg-primary` (dark green).

---

## Pages & Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — Hero gallery, 4 highlight cards, 4 featured products |
| `/pages/about` | `app/pages/about/` | Company history, mission, team |
| `/pages/products` | `app/pages/products/` | Full product catalogue |
| `/pages/globalPresence` | `app/pages/globalPresence/` | Export map, countries served |
| `/pages/contact` | `app/pages/contact/` | Contact form and company info |

> **Note**: Pages live under `app/pages/` (a custom folder), **not** the Next.js 13 `pages/` router. All routing uses the Next.js App Router.

---

## Key Components

### `NavBar.tsx`
- `"use client"` — uses React state for mobile menu toggle
- Sticky top, z-index 50, `bg-amber-100`
- Logo: `/logo/logoWithoutBg.png`
- Desktop: horizontal links; Mobile: animated dropdown with hamburger/X icon (`@heroicons/react`)
- Nav links: Home, About, Products, Global Presence, Contact Us

### `gallery.tsx`
- Auto-rotating hero slideshow using images from `/heroGallery/1.jpg` – `6.jpg`
- Receives `galleryImages` prop array `{ src, alt }[]`

### `footer.tsx`
- 4-column grid: Company Info + logo, Quick Links, Our Products, Contact Info
- Newsletter email subscription form (static/UI only)
- Social icons: Twitter/X, LinkedIn
- Bottom bar: copyright, Privacy Policy, Terms of Service, Sitemap links

### `card.tsx`
- Highlight card: icon (SVG) + text, used on home page highlights section

### `FeatureCard.tsx`
- Product thumbnail card: image + label text

### `ProductCard.tsx`
- More detailed product card for the products page

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
- **Components**: PascalCase filenames (e.g., `NavBar.tsx`, `FeatureCard.tsx`); exception: `footer.tsx`, `gallery.tsx` (lowercase).
- **Tailwind**: Utility-first; custom tokens exposed via `@theme inline` — always prefer `text-primary`, `bg-secondary`, etc. over raw hex values.
- **Images**: Use Next.js `<Image />` component for all images (optimised, lazy-loaded).
- **Links**: Use Next.js `<Link />` component for all internal navigation.
- **Client components**: Add `"use client"` directive only when using React hooks or browser APIs.

---

## Important Notes for AI Assistants

1. **App Router only** — do not use the `pages/` directory pattern. All pages live under `app/`.
2. **No dark mode** — dark mode CSS is commented out; do not re-enable without explicit request.
3. **Tailwind v4** — uses the new `@import "tailwindcss"` and `@theme inline` syntax, not the older `tailwind.config.js` approach.
4. **Biome, not ESLint/Prettier** — run `npm run lint` and `npm run format` using Biome.
5. **Contact info in footer is placeholder** — address and phone numbers are dummy values.
6. **Social links in footer are `href="#"`** — not connected to real profiles yet.
7. **Newsletter subscription** — frontend UI only; no backend/API integration exists.
8. **`app/utils/constants.ts`** — `theme` object is currently empty; intended for shared theme constants.
