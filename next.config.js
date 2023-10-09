/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
  experimental: {
    mdxRs: true,
  },
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)