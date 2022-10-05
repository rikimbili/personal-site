export default function Resume() {
  return <></>;
}

export async function getStaticProps() {
  return {
    redirect: {
      permanent: true,
      destination:
        "https://drive.google.com/file/d/1QeabHVP-wJERMum3EX4oRIN4x6WCOPXl/preview",
    },
  };
}
