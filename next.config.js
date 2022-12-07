module.exports = {
    compress: true,
    productionBrowserSourceMaps: true,
    swrMinify: true,
  env: {
      NEXT_PUBLIC_BUCKET_URL: process.env.NEXT_PUBLIC_BUCKET_URL,
      NEXT_PUBLIC_BUCKET_LINKS_URL: process.env.NEXT_PUBLIC_BUCKET_LINKS_URL,
      NEXT_PUBLIC_BUCKET_ALGAE_URL: process.env.NEXT_PUBLIC_BUCKET_ALGAE_URL,
      NEXT_PUBLIC_ACCESS_KEY: process.env.NEXT_PUBLIC_ACCESS_KEY,
      NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY,
      NEXT_PUBLIC_REGION: process.env.NEXT_PUBLIC_REGION,
  },
    images: {
        domains: ['babu-portfolio.s3.ap-south-1.amazonaws.com'],
    },
}