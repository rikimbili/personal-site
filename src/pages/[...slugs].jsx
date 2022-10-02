export default function AnySlug() {
  return <></>;
}

/*
  Catch all possible routes and redirect the user to the root slug.
  Any predefined route takes precedence so this won't override them.
*/
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
export async function getStaticProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
}
