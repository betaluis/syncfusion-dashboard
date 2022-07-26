/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/ecommerce',
        destination: '/',
        permanent: true,
      }
    ]
  }
}
