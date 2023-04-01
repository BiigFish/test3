// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/test3',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
