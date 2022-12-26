import personal from "../data/personal";

export default function Head() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      <title>{personal.portfolioTitle}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="twitter:image:src" content="/images/banner.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={personal.portfolioTitle} />
      <meta
        name="twitter:description"
        content={personal.portfolioDescription}
      />
      <meta property="og:title" content={personal.portfolioTitle} />
      <meta property="og:description" content={personal.portfolioDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://raciel.dev" />
    </>
  );
}
