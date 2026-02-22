/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/eran-bert',
  assetPrefix: '/eran-bert',
  images: {
    unoptimized: true,
  }
}

export default nextConfig
