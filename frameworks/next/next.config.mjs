/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
