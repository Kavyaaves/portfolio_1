module.exports = {
    compress: true,
    productionBrowserSourceMaps: true,
    swrMinify: true,
  env: {
      BUCKET_URL: process.env.BUCKET_URL,
      BUCKET_LINKS_URL: process.env.BUCKET_LINKS_URL,
      BUCKET_ALGAE_URL: process.env.BUCKET_ALGAE_URL,
      ACCESS_KEY: process.env.ACCESS_KEY,
      SECRET_KEY: process.env.SECRET_KEY,
      REGION: process.env.REGION,
  },
    images: {
        domains: ['babu-portfolio.s3.ap-south-1.amazonaws.com'],
    },
}