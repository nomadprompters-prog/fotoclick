# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fotosclick is a photography portfolio website built with Next.js configured for static site generation.

## Tech Stack

- **Next.js 15** - Static site generation (App Router)
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Development Commands

```bash
# Development server
npm run dev

# Production build (generates static site)
npm run build

# Export static site
npm run export

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Preview static build locally
npm run preview

# Deploy (copy static files to site/)
npm run deploy
```

## Architecture

### Static Site Configuration

This project uses Next.js with `output: "export"` to generate a static website. Images are unoptimized for static export compatibility.

### Project Structure

- **`src/app/`** - Next.js App Router pages
  - `galeria/` - Gallery pages organized by category (desnudo, urbex, arquitectura-escultura, miradas, grabados, flora, modelos, animales, deporte, cantabria, autor, paisajes, h2o, montajes, otras)
  - `opiniones/` - Testimonials page
  - `nosotros/` - About page
  - `layout.jsx` - Root layout

- **`src/components/`** - React components
  - `Footer.jsx` - Site footer

- **`public/`** - Static assets served directly

- **`scripts/`** - Build utilities
  - `patch-menu.mjs` - Menu patching script
  - `clear` - Clear script

- **`site/`** - Deployment target directory (contains production static files)

- **`out/`** - Next.js export output directory

### Deployment

The project uses a custom deployment flow:

1. Build generates static files to `out/` directory
2. `npm run deploy` copies files from `out/` to `site/` using rsync
3. Static files are served from VPS with Docker/Traefik
4. `deploy.sh` script handles deployment automation

## Important Notes

- This is a **static export** project - no server-side features
- Images must use `unoptimized: true` configuration
- Production files are served from the `site/` directory
- Build artifacts (`out/`, `site_backup_*`) are git-ignored
