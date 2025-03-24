const contentSecurityPolicy = `
  default-src 'self' https://vitals.vercel-insights.com/v1/vitals;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  child-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
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
    value: "require-corp",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
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

module.exports = {
  reactStrictMode: true,
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
