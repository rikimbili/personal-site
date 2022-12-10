export default function AnySlug() {
  return <></>;
}

/*
  Catch all possible routes and redirect the user to the root slug.
  Any predefined route takes precedence so this won't override them.
*/
export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
export function getStaticProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
}
