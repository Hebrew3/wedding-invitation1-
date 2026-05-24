# Justin & Cristine Wedding Invitation

React + Vite wedding invitation site.

## Quick start

```bash
cd wedding-invitation
npm install
npm run dev
```

From the repo root you can also run:

```bash
npm install
npm run dev
```

(`postinstall` installs dependencies inside `wedding-invitation/`.)

## Deploy on Vercel

The app lives in `wedding-invitation/`. Root `vercel.json` runs install and build there so `vite` is available during the build.

- **Install:** `npm install --prefix wedding-invitation`
- **Build:** `npm run build --prefix wedding-invitation`
- **Output:** `wedding-invitation/dist`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run check` | Lint + build (system check) |

## Project layout

- `wedding-invitation/` — application source
- `wedding-invitation/src/App.jsx` — main invitation UI and wedding party data
- `wedding-invitation/src/assets/wedding/` — gallery photos
- `wedding-invitation/src/assets/asset/` — hero and location images
- `wedding-invitation/music/` — background song (plays when the envelope opens)
