# ZismaAI

Enterprise AI platform engineering portfolio — built with Vite, React, and Tailwind CSS.

## Development

```bash
pnpm install
pnpm dev
```

## Deploy to Vercel

This project is configured for static deployment on Vercel:

- **Build command:** `pnpm run build:vercel`
- **Output directory:** `dist/public`
- **SPA routing:** handled via `vercel.json` rewrites

Connect the repo in Vercel and deploy — no server environment required.

## Local production preview

```bash
pnpm build
pnpm preview
```
