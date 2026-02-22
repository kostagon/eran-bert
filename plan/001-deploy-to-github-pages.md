# 001 - Deploy to GitHub Pages

Goal
----
Deploy the Next.js site as a static export to GitHub Pages at: https://kostagon.github.io/eran-bert/

Assumptions
-----------
- Repository name: `eran-bert` (owner: `kostagon`).
- Primary branch is `main`.
- CI runner will use `pnpm` (pnpm lockfile present).
- Static export (`next export`) is sufficient for the site's features.

Steps
-----
1. Add `gh-pages` and update `package.json` scripts
   - Scripts added: `export` (`next export`) and `deploy` (`gh-pages -d out`).

2. Configure `next.config.mjs` for static export and repository base path
   - Set `output: 'export'`, `trailingSlash: true`, `basePath: '/eran-bert'`, and `assetPrefix: '/eran-bert/'`.

3. Add GitHub Actions workflow
   - Workflow builds, runs `next export` and deploys `./out` using `peaceiris/actions-gh-pages`.

4. Test locally
   - Install deps and run:

```bash
pnpm install
pnpm run build
pnpm run export
pnpm run deploy
```

5. Verify and finalize
   - Visit: https://kostagon.github.io/eran-bert/
   - In repo Settings → Pages, ensure source is `gh-pages` branch (action should set this).

Notes & Caveats
----------------
- If the app uses server-only features or the `/app` directory with SSR-only patterns, `next export` may not work. Review pages that rely on server runtime.
- If you prefer GitHub Actions to push directly (without `gh-pages` package), we can swap to `peaceiris` or a custom action flow.

Questions
---------
- Should I run the local deploy step now (it will require `pnpm` installed locally)?
yes