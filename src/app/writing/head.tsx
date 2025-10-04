import personal from "../../data/personal";

export default function Head() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      <title>{personal.writingTitle}</title>
      <meta name="twitter:card" content="summary_large_image" />
      {/* TODO: Add large banner for embeds */}
      <meta name="twitter:title" content={personal.writingTitle} />
      <meta name="twitter:description" content={personal.writingDescription} />
      <meta property="og:title" content={personal.writingTitle} />
      <meta property="og:description" content={personal.writingDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://raciel.dev/writing" />
    </>
  );
}
