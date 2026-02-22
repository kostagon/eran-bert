# eran-bert

## Deploy to GitHub Pages

This project is configured to export a static site and deploy to GitHub Pages.

Local test & deploy (using npm):

```bash
npm install
npm run build
# `next export` is handled by `next build` when `output: 'export'` is set
npx gh-pages -d out
```

CI: GitHub Actions runs on pushes to `main`, builds the site (`npm run build`), and uploads the generated `out` directory to Pages. The workflow sets `NPM_CONFIG_LEGACY_PEER_DEPS=true` to avoid peer-resolution failures where necessary.

Visit: https://kostagon.github.io/eran-bert/
