import personal from "../../data/personal";

export default function Head() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      <title>{personal.blogTitle}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* TODO: Add large banner for embeds */}
      <meta name="twitter:title" content={personal.blogTitle} />
      <meta name="twitter:description" content={personal.blogDescription} />
      <meta property="og:title" content={personal.blogTitle} />
      <meta property="og:description" content={personal.blogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://raciel.dev/blog" />
    </>
  );
}
