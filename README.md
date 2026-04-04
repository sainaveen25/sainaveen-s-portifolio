# Sai Naveen — Portfolio Website

A high-performance, responsive personal portfolio built to showcase my 7+ years of experience in enterprise software development. This site features a modern dark-themed UI with 3D animations, smooth scrolling, and a real-time contact form.

🔗 **Live**: https://sainaveen25.github.io/sainaveen-s-portifolio/ 

---

## ✨ Features

- **Colorblind-Accessible Theme** — WCAG-compliant high-contrast "Slate & Amber" palette designed specifically for users with Deuteranopia, Protanopia, and Tritanopia.
- **3D Rotating Tech Stack** — Continuously rotating 3D text showcasing tech expertise (Java, Spring Boot, React, AWS, etc.)
- **TypeWriter Effect** — Infinite-loop typewriter animation cycling through professional roles
- **Responsive Layout** — Fully responsive across mobile, tablet, and desktop
- **Dark Mode Design** — Premium dark-themed UI with gradient accents and glassmorphism
- **Smooth Scroll Navigation** — Section-aware navbar with active state tracking
- **Interactive Tilt Cards** — 3D perspective tilt effect on project and stat cards
- **Contact Form** — Real-time form submission via Supabase backend
- **Scroll Progress Bar** — Animated top progress indicator
- **SEO Optimized** — Proper meta tags, Open Graph, and Twitter cards

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) (lightning-fast HMR & builds) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS animations |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Animations** | CSS Keyframes (GPU-accelerated) + [Framer Motion](https://www.framer.com/motion/) (lazy-loaded sections) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Backend** | [Supabase](https://supabase.com/) (contact form storage) |
| **State Management** | [TanStack Query](https://tanstack.com/query) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Fonts** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) |

---

## 🚀 How I Built This

### 1. Design System First
I started by defining a comprehensive design system in `index.css`:
- Custom CSS variables for colors, gradients, shadows, and typography
- Utility classes (`text-gradient`, `glass`, `bento-card`, `shadow-glow`) for consistent styling
- Dark mode color palette using HSL values for easy customization

### 2. Performance-First Architecture
- **CSS animations over JS**: All hero animations, floating particles, and the 3D rotating text use pure CSS `@keyframes` with `will-change` and `transform` for GPU acceleration
- **Throttled scroll handlers**: Navbar and progress bar use `requestAnimationFrame` with passive event listeners
- **CSS gradient background**: Replaced heavy video backgrounds with lightweight CSS radial gradients
- **Lazy animation triggers**: Section animations only fire when scrolled into view using `useInView`

### 3. Component Architecture
```
src/
├── components/
│   ├── HeroSection.tsx        # Hero with 3D tech stack + typewriter
│   ├── RotatingTechStack.tsx   # 3D CSS rotating tech roles
│   ├── TypeWriter.tsx          # Infinite typewriter effect
│   ├── FloatingParticles.tsx   # CSS-only floating particles
│   ├── ScrollProgress.tsx      # Vanilla JS scroll progress bar
│   ├── Navbar.tsx              # Throttled scroll-aware navigation
│   ├── AboutSection.tsx        # Stats with animated counters
│   ├── SkillsSection.tsx       # 10 skill categories grid
│   ├── ExperienceSection.tsx   # Timeline with tilt cards
│   ├── ProjectsSection.tsx     # Featured + grid project cards
│   ├── EducationSection.tsx    # Education cards
│   ├── ContactSection.tsx      # Supabase-powered contact form
│   ├── TiltCard.tsx            # Reusable 3D tilt card
│   ├── AnimatedCounter.tsx     # Number counter animation
│   └── Footer.tsx              # Footer with social links
├── pages/
│   ├── Index.tsx               # Main page assembling all sections
│   └── NotFound.tsx            # 404 page
└── integrations/
    └── supabase/               # Supabase client config
```

### 4. Key Design Decisions
- **Accessibility First**: Shifted from generic neon colors to a carefully curated **Vibrant Amber/Gold (#FFC814)** against a deep **Midnight Slate** background. This specific pairing is highly distinguishable for users with color vision deficiencies while maintaining a premium aesthetic.
- **Space Grotesk + Space Mono**: Modern, technical font pairing that emphasizes the developer identity
- **Bento grid layout**: Card-based sections following the modern "bento box" design trend
- **Glassmorphism**: Frosted glass effect on navbar and overlays using `backdrop-filter: blur()`

---

## 📦 Getting Started

### Prerequisites
- **Node.js** 18+ with npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sainaveen25/sainaveen-s-portifolio.git
cd sainaveen-s-portifolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080/`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Free Deployment (GitHub Pages)

This project is pre-configured to be deployed **completely for free** using GitHub Pages.

### Step-by-Step GitHub Pages Setup
1. Push this code to your GitHub repository.
2. In your repository on GitHub, go to **Settings** > **Secrets and variables** > **Actions**.
3. Add two **New repository secrets**:
   * `VITE_SUPABASE_URL`: (Your Supabase URL)
   * `VITE_SUPABASE_PUBLISHABLE_KEY`: (Your Supabase Anon Key)
4. Go to the **Actions** tab in your repository.
5. You will see a workflow named "Deploy static content to Pages". It will run automatically when you push to main/master.
6. Once the build finishes, your site will be live at `https://yourusername.github.io/sainaveen-s-portifolio/`!

### Environment Variables (Local Dev)
Create a `.env` file in the root for local development:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ☕ and passion by **Sai Naveen**
