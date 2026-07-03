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

### Contact form

1. Create a free access key at [web3forms.com](https://web3forms.com)
2. In Vercel → Project → Settings → Environment Variables, add:
   - `WEB3FORMS_ACCESS_KEY` = your access key
3. Redeploy. Form submissions are delivered to `prasad.md1196@gmail.com`.

### Shareable section URLs

- `/about` — founder bio and career history
- `/contact` — contact form
- `/insights` — blog index
- `/insights/:slug` — individual articles

## Local production preview

```bash
pnpm build
pnpm preview
```
