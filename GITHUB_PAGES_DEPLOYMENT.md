# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Your repository pushed to GitHub

## Deployment Options

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

This is already set up! The workflow will automatically deploy your site whenever you push to the `main` or `master` branch.

#### Steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the changes

3. **The workflow will automatically:**
   - Build your site when you push to main/master
   - Deploy it to GitHub Pages
   - Your site will be available at:
     - `https://YOUR_USERNAME.github.io/REPO_NAME/` (if repo is not username.github.io)
     - `https://YOUR_USERNAME.github.io/` (if repo is username.github.io)

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build for GitHub Pages:**
   ```bash
   pnpm run build:gh-pages
   ```
   
   Or if deploying to a subdirectory:
   ```bash
   VITE_BASE_PATH=/your-repo-name/ pnpm run build:gh-pages
   ```

2. **Commit the `docs` folder:**
   ```bash
   git add docs
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select **main** branch and **/docs** folder
   - Click **Save**

## Base Path Configuration

The deployment automatically detects your repository name and sets the base path:

- **For `username.github.io` repository:** Base path is `/` (root)
- **For other repositories:** Base path is `/repo-name/`

If you need to customize the base path, edit `.github/workflows/deploy.yml` and modify the `VITE_BASE_PATH` environment variable.

## Troubleshooting

### Routes not working (404 errors)

The `docs/404.html` file handles SPA routing. If routes still don't work:

1. Make sure `docs/404.html` exists and is committed
2. Check that your base path is correct
3. Verify that all routes are defined in your router

### Build fails

1. Check that all dependencies are in `package.json`
2. Ensure Node.js version is 20 or higher
3. Check the Actions tab for detailed error messages

### Site not updating

1. Wait a few minutes for GitHub Pages to rebuild
2. Check the Actions tab to see if deployment succeeded
3. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `docs` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update your DNS settings to point to GitHub Pages
3. In GitHub repository settings → Pages, add your custom domain

## Notes

- The build output goes to the `docs` folder (required by GitHub Pages)
- The `docs` folder should be committed to your repository
- The workflow uses pnpm, but you can modify it to use npm if preferred

