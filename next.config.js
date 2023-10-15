/** @type {import('next').NextConfig} */
const path = require('path')

const withPWA = require("@ducanh2912/next-pwa").default({
  // Your other options,
  dest: "public",
});


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withPWA(nextConfig)
