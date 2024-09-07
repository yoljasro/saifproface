// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['uz', 'en', 'ru', 'kl'],
    defaultLocale: 'uz'
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone"
};

export default nextConfig;
  