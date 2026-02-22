---
name: deployNextToGitHubPages
description: Configure a Next.js project for static deployment to GitHub Pages with CI/CD
argument-hint: Repository name for basePath configuration (e.g. my-repo)
---

Help me deploy my Next.js application to GitHub Pages. Include the following:

1. **Next.js Configuration**
   - Configure `next.config.js` with:
     - `output: 'export'` for static generation
     - Proper `basePath` using the provided repository name
     - Proper `assetPrefix`
     - `images: { unoptimized: true }` for GitHub Pages compatibility
   - Ensure configuration works for both project repos and username.github.io repos

2. **Static Export**
   - Ensure the project builds to the `/out` directory
   - Confirm compatibility with Next 13+ App Router and Pages Router
   - Handle trailingSlash configuration if needed

3. **Routing Compatibility**
   - Ensure the project works correctly when refreshed on GitHub Pages
   - Fix 404 issues related to static hosting
   - Verify dynamic routes are compatible with static export

4. **Asset Handling**
   - Ensure all assets work correctly with `basePath`
   - Fix absolute `/` paths that would break on project repos
   - Confirm public folder assets resolve correctly in production

5. **GitHub Actions Workflow**
   - Create `.github/workflows/deploy.yml`
   - Build on push to `main`
   - Upload the `/out` directory
   - Deploy using `actions/deploy-pages`
   - Use Node 20 and npm caching

6. **Package Scripts**
   - Ensure `package.json` contains:
     - `build`
     - any required export scripts (if needed)
   - Confirm no extra `next export` is required when using `output: 'export'`

7. **Repository Settings**
   - Ensure GitHub Pages is set to:
     Settings → Pages → Source → GitHub Actions

8. **README**
   - Add link to live GitHub Pages site
   - Explain how to redeploy manually if needed

9. **TypeScript & Build Validation**
   - Detect and fix TypeScript errors
   - Ensure no server-only features are used (e.g. API routes, SSR-only features)
   - Ensure the project builds successfully in CI

If something in my project would prevent static deployment (API routes, server actions, edge runtime, etc.), explain what must be changed.