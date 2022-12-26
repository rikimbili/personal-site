const isDev = process.env.NODE_ENV !== 'production'

const contentSecurityPolicy = isDev ? '' : `
  default-src 'self';
  script-src 'self';
  child-src 'google.com';
  style-src 'self';
  font-src 'self';
`;

const headers = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: "referrer-policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp",
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
  }
];

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/docs/resume.pdf",
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
    ]
  }
};
