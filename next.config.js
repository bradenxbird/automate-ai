/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable all experimental CSS features (LightningCSS)
  experimental: {
    optimizeCss: false,
    swcPlugins: [],
    serverActions: {
      bodyParserSizeLimit: "2mb",
    },
  },

  // 🔥 Disable Turbopack completely — force Webpack
  turbo: false,

  // Optional but recommended for macOS ARM stability
  compiler: {
    styledComponents: true,
  },

  // Extra safety — disable CSS minification from SWC
  swcMinify: false,
};

module.exports = nextConfig;
