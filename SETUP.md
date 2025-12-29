# Portfolio Setup Guide

## Prerequisites

1. **Install Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Or use a version manager like nvm

2. **Install pnpm** (recommended package manager)
   ```bash
   npm install -g pnpm
   ```

## Installation Steps

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```

   The site will be available at `http://localhost:3000`

## Alternative: Using npm

If you prefer npm instead of pnpm:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

## Build for Production

```bash
pnpm build
pnpm start
```

## Fixed Issues

- ✅ TypeScript configuration errors resolved
- ✅ Type definitions properly configured
- ✅ All code syntax verified

## Notes

- The development server runs on port 3000 by default
- If port 3000 is busy, Vite will automatically use the next available port
- Analytics script in index.html uses environment variables (optional)



