module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1QeabHVP-wJERMum3EX4oRIN4x6WCOPXl/preview",
        permanent: true,
      },
    ];
  },
};
