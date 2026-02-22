# Fix GitHub Pages 404 Errors

## Problem
Static assets (JS, CSS, fonts) are returning 404 on GitHub Pages deployment.
- Current URLs: `https://kostagon.github.io/eran-bert/_next/static/...`
- The basePath configuration is `/eran-bert` but assets aren't resolving

## Root Causes to Address

1. **Package Manager Mismatch**
   - Workflow uses `npm ci` 
   - Project has `pnpm-lock.yaml`
   - This could cause inconsistent builds

2. **Asset Prefix Configuration**
   - `assetPrefix: '/eran-bert/'` (trailing slash) 
   - `basePath: '/eran-bert'` (no trailing slash)
   - Inconsistency might cause issues

## Questions for User

1. Are you using pnpm or npm for this project?
npm
2. Should we also update the deployment workflow to use GitHub's official Pages action or gh-pages npm package?
gh-pages

## Solution Steps

Once clarified:
1. Update GitHub Actions workflow to use correct package manager
2. Ensure Next.js config is consistent (both basePath and assetPrefix)
3. Verify the build output contains `_next` static files
4. Consider adding output verification step in workflow
