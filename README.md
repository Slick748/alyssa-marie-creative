# Alyssa Marie Creative Design

A premium, SEO-optimized website for Alyssa Marie Creative Design, a boutique event design studio based in San Diego.

Built with Next.js 15, Tailwind CSS v4, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or copy the project files to your local machine**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
alyssa-marie-creative/
├── public/
│   └── images/                 # All images go here
│       ├── hero.jpg
│       ├── about.jpg
│       ├── about-hero.jpg
│       ├── og-image.jpg        # Social sharing image (1200x630)
│       └── portfolio/
│           └── [slug]/         # Portfolio project images
│               ├── thumbnail.jpg
│               ├── hero.jpg
│               └── gallery-*.jpg
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Tailwind + custom styles
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── robots.ts           # Robots configuration
│   │   ├── not-found.tsx       # 404 page
│   │   ├── services/
│   │   ├── portfolio/
│   │   │   └── [slug]/         # Dynamic portfolio pages
│   │   ├── about/
│   │   └── inquire/
│   ├── components/             # Reusable components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── Navbar.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── Section.tsx
│   │   ├── TestimonialList.tsx
│   │   └── index.ts
│   └── content/                # Content files (easy to edit)
│       ├── site.ts             # All site copy
│       └── portfolio.ts        # Portfolio data
├── package.json
├── postcss.config.mjs          # PostCSS config for Tailwind v4
├── tailwind.config.ts          # (not needed for v4)
├── tsconfig.json
└── next.config.ts
```

## ✏️ Editing Content

All text content is stored in TypeScript files for easy editing:

### Site Copy (`src/content/site.ts`)
- Navigation links
- Homepage sections
- Services page content
- About page content
- Inquiry form labels
- Footer content

### Portfolio (`src/content/portfolio.ts`)
- Portfolio items with all details
- Add new projects by adding to the `portfolioItems` array

## 🖼️ Adding Images

### Required Images

1. **Hero image:** `/public/images/hero.jpg`
2. **About images:** `/public/images/about.jpg`, `/public/images/about-hero.jpg`
3. **Social sharing:** `/public/images/og-image.jpg` (1200x630px)
4. **Favicon:** `/public/favicon.ico`

### Portfolio Images

For each portfolio project, create a folder in `/public/images/portfolio/[slug]/`:
- `thumbnail.jpg` - Card thumbnail (4:3 ratio recommended)
- `hero.jpg` - Project hero image
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery images

## 📧 Form Setup (Formspree)

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (looks like `xyzabcde`)
4. Replace `YOUR_FORMSPREE_ID` in `/src/app/inquire/page.tsx`:
   ```tsx
   const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
   ```

## 🎨 Tailwind CSS v4 Setup

This project uses **Tailwind CSS v4** which works differently from v3:

### How It Works (No `tailwind.config.js` needed!)

1. **PostCSS Config** (`postcss.config.mjs`):
   ```js
   export default {
     plugins: {
       "@tailwindcss/postcss": {},
     },
   };
   ```

2. **CSS Entry** (`src/app/globals.css`):
   ```css
   @import "tailwindcss";
   
   @theme {
     --color-sage: #A3B18A;
     /* ... custom theme variables */
   }
   ```

### Custom Colors Available

Use these color classes anywhere:
- `bg-sage`, `text-sage`, `border-sage`
- `bg-sage-soft`, `text-sage-soft`
- `bg-eucalyptus`, `text-eucalyptus`
- `bg-olive-charcoal`, `text-olive-charcoal`
- `bg-warm-stone`, `text-warm-stone`
- `bg-soft-sand`, `text-soft-sand`
- `bg-taupe-gray`, `text-taupe-gray`
- `bg-champagne`, `text-champagne`

### Verifying Tailwind Works

After running `npm run dev`, check that:
1. The page has the beige/sand background color
2. Text appears in the olive-charcoal color
3. Buttons have proper styling

If styles don't appear:
1. Delete `.next` folder: `rm -rf .next`
2. Delete `node_modules`: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Restart dev server: `npm run dev`

## 🌐 Deployment to Vercel

### Option 1: Deploy via GitHub

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/alyssa-marie-creative.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

### Post-Deployment

1. **Add custom domain in Vercel:**
   - Go to Project Settings → Domains
   - Add `alyssamariecreative.com`
   - Update DNS records as instructed

2. **Update URLs:**
   - Replace `https://alyssamariecreative.com` in:
     - `src/app/layout.tsx` (metadataBase)
     - `src/app/sitemap.ts`
     - `src/app/robots.ts`

## 🔍 SEO Features Included

- ✅ Metadata per page (title, description)
- ✅ OpenGraph tags for social sharing
- ✅ Twitter card meta tags
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Schema.org JSON-LD (LocalBusiness + Service)
- ✅ Image optimization with next/image
- ✅ Semantic HTML structure
- ✅ Alt text on all images

## 🛠️ Troubleshooting

### Tailwind styles not working on Windows

If you see unstyled HTML:

1. Make sure `postcss.config.mjs` exists (not `.js`)
2. Verify `@import "tailwindcss";` is at the top of `globals.css`
3. Check that `@tailwindcss/postcss` is installed:
   ```bash
   npm list @tailwindcss/postcss
   ```
4. Clear cache and restart:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run dev
   ```

### Images not loading

- Check file paths match exactly (case-sensitive)
- Images should be in `/public/images/`
- Use paths like `/images/hero.jpg` (not `public/images/hero.jpg`)

### Form not submitting

- Verify Formspree ID is correct
- Check browser console for errors
- Ensure all required fields have values

## 📝 License

Private - All rights reserved by Alyssa Marie Creative Design.

---

Built with ❤️ for elevated event design
