import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm' // Import remark-gfm

// Configure MDX support
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm], // Add remark-gfm
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Add 'md' and 'mdx'
  // Optional: Configure base path if deploying to a subdirectory
  // basePath: '/design_docs_site',
  // Optional: Disable image optimization for static export if not using a compatible loader
  // images: {
  //   unoptimized: true,
  // },
};

// Apply MDX configuration
export default withMDX(nextConfig);
