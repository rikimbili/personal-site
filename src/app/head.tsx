import personal from "../data/personal";

export default function Head() {
  return (
    <>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://i.imgur.com/Q4LXxWb.png"
      />
      <title>{personal.title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta
        name="twitter:image:src"
        content="https://i.imgur.com/2km7IeI.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={personal.title} />
      <meta name="twitter:description" content={personal.description} />
      <meta property="og:title" content={personal.title} />
      <meta property="og:description" content={personal.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://raciel.dev" />
    </>
  );
}
