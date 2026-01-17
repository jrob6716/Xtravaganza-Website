# XTRAVAGANZA Recordings — React + Vite (GitHub Pages)

Single-page, futuristic label site (black/white + subtle icy accent), styled to match the approved mock.

## 1) Install

From the project folder:

```bash
npm install
```

## 2) Run locally

```bash
npm run dev
```

## 3) Edit content

Update artists and releases here:

- `src/data/content.js`

Replace placeholder links here:

- `src/App.jsx` (search for `mailto:` and the `Instagram` / `SoundCloud` anchors)

## 4) Deploy to GitHub Pages (manual)

This project is preconfigured for your repo name:

- `base: '/xtravaganza_recordings/'` in `vite.config.js`

Deploy:

```bash
npm run deploy
```

Then in GitHub:

- Repo **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `gh-pages` / `(root)`

Your site URL:

- `https://jrob6716.github.io/xtravaganza_recordings/`

## Optional: Auto-deploy with GitHub Actions

Use `.github/workflows/deploy.yml` (included). Then set Pages source to **GitHub Actions**.
