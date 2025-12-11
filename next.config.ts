import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeHighlight from 'rehype-highlight';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
