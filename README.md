# eran-bert

## Deploy to GitHub Pages

This project is configured to export a static site and deploy to GitHub Pages.

Local test & deploy (using npm):

```bash
npm install
npm run build
npm run export
npx gh-pages -d out
```

CI: GitHub Actions will run on pushes to `main` and deploy the `out` directory to the `gh-pages` branch.

Visit: https://kostagon.github.io/eran-bert/
