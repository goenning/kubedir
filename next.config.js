/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/p.js',
        destination: 'https://plausible.io/js/plausible.js',
      },
      {
        source: '/e',
        destination: 'https://plausible.io/api/event',
      },
    ]
  },
}

module.exports = nextConfig
