# Afifa Portfolio

A modern, Google-inspired portfolio website built with React, TypeScript, and Vite.

## Features

- 🎨 Google-inspired design with clean, modern UI
- ⚡ Fast and responsive with Vite
- 🎯 Single Page Application with client-side routing
- 📱 Fully responsive design
- 🌙 Theme support (light/dark)
- 🚀 Deployed on GitHub Pages

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Wouter** - Lightweight routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/afifa-portfolio-1.git
   cd afifa-portfolio-1
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Start development server
   ```bash
   pnpm dev
   ```

   The site will be available at `http://localhost:3000`

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

3. **Your site will be available at:**
   - `https://YOUR_USERNAME.github.io/REPO_NAME/` (for project pages)
   - `https://YOUR_USERNAME.github.io/` (for user/organization pages)

See [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/      # Page components
│   │   ├── contexts/   # React contexts
│   │   └── hooks/      # Custom hooks
│   └── index.html
├── server/           # Express server (for production)
├── docs/             # GitHub Pages build output
├── .github/          # GitHub Actions workflows
└── vite.config.ts    # Vite configuration
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm build:gh-pages` - Build for GitHub Pages
- `pnpm preview` - Preview production build
- `pnpm check` - Type check with TypeScript
- `pnpm format` - Format code with Prettier

## License

MIT

