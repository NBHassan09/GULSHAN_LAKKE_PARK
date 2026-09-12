# Gulshan Lake Park — Vercel-ready website

A responsive Next.js project built from the supplied Gulshan Lake Park studio material.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Put this folder in a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel will detect **Next.js** automatically.
4. Keep the default build command (`next build`) and deploy.

No environment variables are required.

## Main files

- `app/page.tsx` — page content and interactions
- `app/globals.css` — visual system and responsive design
- `public/assets/` — project photos, plans, diagrams and intervention visuals extracted from the supplied presentation

## Easy edits

- Project wording and intervention descriptions live near the top of `app/page.tsx`.
- The color palette is defined in `:root` at the top of `app/globals.css`.
- Replace any file in `public/assets/` while keeping the same filename to swap visuals without touching code.
