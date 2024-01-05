/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

import withMDX from "@next/mdx";

const a = withMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
  // experimental: {
  //   mdxRs: true,
  // },
});

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/aidiss/aidiss.github.io" : "",
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en", "lt"],
  //   defaultLocale: "en",
  // },
};

// Merge MDX config with Next.js config
export default a(config);
