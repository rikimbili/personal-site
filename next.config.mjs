import nextMDX from "@next/mdx";

const contentSecurityPolicy = `
  default-src 'self' https://vitals.vercel-insights.com/v1/vitals;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://books.google.com https://www.google.com https://va.vercel-scripts.com;
  child-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://books.google.com https://www.google.com http://www.google.com;
  font-src 'self';
`;

const headers = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "unsafe-none",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "cross-origin",
  },
  {
    key: "X-Frame-Options", // Prevents clickjacking through iframes
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options", // Prevents MIME sniffing
    value: "nosniff",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  reactStrictMode: true,
  images: {
    domains: ["books.google.com"],
  },
  async redirects() {
    return [
      {
        source: "/notes",
        destination: "https://notes.keymorph.com",
        permanent: true,
      },
      {
        source: "/daydream",
        destination: "https://daydream.wtf",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*", // Matches all paths
        headers: headers,
      },
    ];
  },
};

const withMDX = nextMDX();
export default withMDX(nextConfig);
