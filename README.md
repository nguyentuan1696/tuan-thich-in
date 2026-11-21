# Tuan Nguyen

A personal website for Tuan Nguyen — a little corner of the internet for sharing the things I make, the ideas I explore, and what I learn along the way.

## About the project

- **Bio**: a short introduction to Tuan — product builder and developer — with links to GitHub and LinkedIn.
- **Notes**: the things I care about, including building useful software, sweating the details of interfaces, and learning in public.
- **Writing**: a space for notes on product, design, and engineering.
- **Design**: a minimal, content-focused layout with an illustration of the Ninh Binh countryside (Tam Cốc Bích Động, Vietnam) on the homepage.
- **SEO & analytics**: metadata, Open Graph and Twitter Card setup, plus Google Tag Manager integration.

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4 with custom stylesheets (reset, typography, variables, components)
- lucide-react (icons)
- @next/third-parties (Google Tag Manager)
- Bun (package manager)

## Getting started

```bash
bun install     # Install dependencies
bun dev         # Start the development server
bun build       # Create a production build
bun start       # Serve the production build
bun lint        # Run ESLint
bun format      # Format code with Prettier
```

## Project structure

- `src/app/` — Next.js routes and layout (homepage, metadata, icon).
- `src/styles/` — CSS reset, typography, variables, and component styles.
- `public/` — static assets (OG image, Ninh Binh illustration).

## Additional notes

- https://piccalil.li/blog/a-more-modern-css-reset/

# Implement SSH agent on host

**MacOS**
```
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```