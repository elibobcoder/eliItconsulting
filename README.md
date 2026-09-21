# Eli IT Consulting

The marketing website for Eli IT Consulting — a small, focused IT consulting team helping businesses plan, build, and scale their software through staff augmentation, dedicated teams, and software outsourcing.

## ✨ Features

- **Modern Tech Stack** — Next.js 15 (App Router), React 19, and TypeScript
- **Mega-menu navigation** — Services, Technologies, Industries, and About all open rich dropdown panels
- **Dark/Light Mode** — persisted via cookie and read server-side, so there's no flash of the wrong theme on load
- **Scroll animations** — Framer Motion–powered reveal, stagger, and count-up effects throughout, plus decorative hero backgrounds
- **Real content** — a written blog with individually routed posts, an FAQ, and dedicated pages for each engagement model
- **Responsive Design** — mobile-first, with a dedicated mobile nav drawer
- **Type Safe** — full TypeScript implementation

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, trust bar, services grid, stats, testimonials, value pillars, CTA |
| **Services** | `/services` | Full service list with photos, features, and anchors for each service |
| **Staff Augmentation** | `/services/staff-augmentation` | Engagement model detail page |
| **Dedicated Teams** | `/services/dedicated-teams` | Engagement model detail page |
| **Software Outsourcing** | `/services/software-outsourcing` | Engagement model detail page |
| **AI Transformation** | `/services/ai-transformation` | Engagement model detail page |
| **Hire Developers** | `/hire-developers` | How to hire through us, vetting process, benefits |
| **Top Talent** | `/top-talent` | Our vetting standard and the roles we cover |
| **Portfolio** | `/portfolio` | Project showcase with category filtering |
| **About** | `/about` | Company story, values, timeline, and team |
| **Career** | `/career` | Job listings with filtering and benefits |
| **Contact** | `/contact` | Contact form, office info, and FAQs |
| **Blog** | `/blog`, `/blog/[slug]` | Blog index and individually routed posts |
| **FAQ** | `/faq` | Accordion of common questions |
| **Culture** | `/culture` | How the team works day to day |
| **Terms / Privacy** | `/terms`, `/privacy` | Legal pages |

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [Material UI 7](https://mui.com/)
- **Styling:** [Emotion](https://emotion.sh/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Package Manager:** npm (a `bun.lock` is also present if you prefer [Bun](https://bun.sh/))

## 🚀 Getting Started

### Prerequisites

- Node.js 18+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/elibobcoder/eliItconsulting.git
   cd eliItconsulting
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── _components/        # Page-specific components
│   │   ├── about/          # About page components
│   │   ├── career/         # Career page components
│   │   ├── contact/        # Contact page components
│   │   ├── engagement/     # Shared engagement-model / talent page components
│   │   ├── home-hero/      # Home hero components
│   │   ├── legal/          # Shared Terms/Privacy page template
│   │   ├── portfolio/      # Portfolio page components
│   │   └── services/       # Services page components
│   ├── about/               # About page route
│   ├── blog/                # Blog index + /blog/[slug] post route
│   ├── career/               # Career page route
│   ├── contact/               # Contact page route
│   ├── culture/                # Company culture page route
│   ├── faq/                     # FAQ page route
│   ├── hire-developers/          # Hire Developers page route
│   ├── portfolio/                 # Portfolio page route
│   ├── privacy/                    # Privacy Policy route
│   ├── services/                    # Services page + engagement model routes
│   ├── terms/                        # Terms of Service route
│   └── top-talent/                    # Top Talent page route
├── assets/                # SVG icons and logos
├── components/            # Shared/reusable components
│   ├── appbar/            # Navigation, mega menus, mobile drawer
│   ├── core/               # Core UI components (buttons, Reveal, DecorativeOrbs, CountUp)
│   └── footer/              # Footer components
├── configs/                # App configuration
├── constants/               # Static data and constants (services, blog, menus, stock photos)
├── contexts/                 # React contexts (theme mode)
├── hooks/                      # Custom React hooks
├── plugins/                     # MUI theme configuration
└── types/                        # TypeScript type definitions
```

## 🎨 Customization

### Theme Colors

Edit the palette files in `src/plugins/@mui/theme/`:
- `palette-base.ts` — brand colors (primary/secondary)
- `palette-light.ts` — light mode colors
- `palette-dark.ts` — dark mode colors

### Branding

- Logo: `src/assets/logo.svg` and `src/assets/logo-icon.svg`
- Company name: `src/configs/app.config.ts`

### Content

- Services: `src/constants/service.ts`
- Engagement models (Staff Augmentation, Dedicated Teams, etc.): `src/constants/engagement.ts`
- Blog posts: `src/constants/blog.ts`
- Navigation & mega menus: `src/constants/menus.tsx`
- Stock photography: `src/constants/stock-photos.ts`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

This project is ready for deployment on [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any platform that supports Next.js.

```bash
npm run build
```

## 📝 License

This is a private project for Eli IT Consulting. All rights reserved.

---

<p align="center">
  Made with ❤️ by Eli IT Consulting
</p>
