import personal from "../data/personal";

export default function Resume() {
  return <></>;
}

export async function getStaticProps() {
  return {
    redirect: {
      permanent: true,
      destination: personal.resumeLink,
    },
  };
}
